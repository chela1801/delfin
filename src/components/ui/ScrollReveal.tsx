"use client";

import { useEffect } from "react";

const EASE   = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
const DUR_H1 = 0.85;  // load animacija H1
const DUR_H  = 0.62;  // H2/H3 scroll
const DUR_P  = 0.50;  // body text scroll — najsuptilniji

export default function ScrollReveal() {
  useEffect(() => {
    const h1s = [...document.querySelectorAll<HTMLElement>("main h1")];
    const hs  = [...document.querySelectorAll<HTMLElement>("main h2, main h3")];
    const ps  = [...document.querySelectorAll<HTMLElement>("main p")];

    /* ─────────────────────────────────────────────────────
       H1 — animacija na učitavanje stranice
    ───────────────────────────────────────────────────── */
    h1s.forEach((el) => {
      el.style.opacity    = "0";
      el.style.transform  = "translateY(26px)";
      el.style.willChange = "opacity, transform";
    });

    // Double RAF — garantuje da je početno stanje naslikano prije nego animiramo
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        h1s.forEach((el) => {
          el.style.transition = `opacity ${DUR_H1}s ${EASE}, transform ${DUR_H1}s ${EASE}`;
          el.style.opacity    = "1";
          el.style.transform  = "none";
        });
      })
    );

    /* ─────────────────────────────────────────────────────
       H2/H3 i p — početno stanje skriveno
    ───────────────────────────────────────────────────── */
    hs.forEach((el) => {
      el.style.opacity    = "0";
      el.style.transform  = "translateY(16px)";
      el.style.willChange = "opacity, transform";
    });
    ps.forEach((el) => {
      el.style.opacity    = "0";
      el.style.transform  = "translateY(10px)";
      el.style.willChange = "opacity, transform";
    });

    // Tranzicija tek nakon što je početno stanje naslikano
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        hs.forEach((el) => {
          el.style.transition = `opacity ${DUR_H}s ${EASE}, transform ${DUR_H}s ${EASE}`;
        });
        ps.forEach((el) => {
          el.style.transition = `opacity ${DUR_P}s ${EASE}, transform ${DUR_P}s ${EASE}`;
        });
      })
    );

    /* ─────────────────────────────────────────────────────
       Intersection Observer — H2/H3 i p
       ulaz odozdo · izlaz gore · vraćanje odozdo
    ───────────────────────────────────────────────────── */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target, boundingClientRect }) => {
          const el  = target as HTMLElement;
          const isH = ["H2", "H3"].includes(el.tagName);

          if (isIntersecting) {
            el.style.opacity   = "1";
            el.style.transform = "none";
          } else if (boundingClientRect.top < 0) {
            // Izlaz gore (skrolano dalje) — pliva u smjeru scrolla
            el.style.opacity   = "0";
            el.style.transform = `translateY(${isH ? -10 : -6}px)`;
          } else {
            // Izlaz dole (vraćanje) — ide natrag na početnu poziciju
            el.style.opacity   = "0";
            el.style.transform = `translateY(${isH ? 16 : 10}px)`;
          }
        });
      },
      { threshold: 0.12 }
    );

    [...hs, ...ps].forEach((el) => io.observe(el));

    /* ─────────────────────────────────────────────────────
       Intersection Observer — H1 exit + povratak
       Startamo tek kad load animacija završi
    ───────────────────────────────────────────────────── */
    const h1io = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target, boundingClientRect }) => {
          const el = target as HTMLElement;
          el.style.transition = `opacity 0.70s ${EASE}, transform 0.70s ${EASE}`;

          if (isIntersecting) {
            // Povratak u hero — ulazi na mjesto
            el.style.opacity   = "1";
            el.style.transform = "none";
          } else if (boundingClientRect.top < 0) {
            // Izlaz gore — nastavlja ploviti prema gore
            el.style.opacity   = "0";
            el.style.transform = "translateY(-16px)";
          } else {
            // Ispod viewporta — vraća se na ulazni offset
            el.style.opacity   = "0";
            el.style.transform = "translateY(26px)";
          }
        });
      },
      { threshold: 0.1 }
    );

    // Čekamo da load animacija završi pa tek onda posmatramo H1
    const t = setTimeout(
      () => h1s.forEach((el) => h1io.observe(el)),
      DUR_H1 * 1000 + 80
    );

    return () => {
      io.disconnect();
      h1io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return null;
}
