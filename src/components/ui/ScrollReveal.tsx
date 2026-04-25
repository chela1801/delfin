"use client";

import { useEffect } from "react";

const EASE = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

export default function ScrollReveal() {
  useEffect(() => {
    const h1s = [...document.querySelectorAll<HTMLElement>("main h1")];
    const hs  = [...document.querySelectorAll<HTMLElement>("main h2, main h3")];
    const ps  = [...document.querySelectorAll<HTMLElement>("main p")];

    /* ─── H1: sakrij bez tranzicije ─────────────────────── */
    h1s.forEach((el) => {
      el.style.opacity   = "0";
      el.style.transform = "translateY(28px)";
    });

    // Double RAF: počekaj da je početno stanje naslikano, pa animiraj ulaz
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        h1s.forEach((el) => {
          el.style.transition = `opacity 0.85s ${EASE}, transform 0.85s ${EASE}`;
          el.style.opacity    = "1";
          el.style.transform  = "none";
        });
      })
    );

    /* ─── H2/H3 i p: sakrij, dodaj tranziciju u RAF ─────── */
    hs.forEach((el) => {
      el.style.opacity   = "0";
      el.style.transform = "translateY(20px)";
    });
    ps.forEach((el) => {
      el.style.opacity   = "0";
      el.style.transform = "translateY(12px)";
    });

    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        hs.forEach((el) => {
          el.style.transition = `opacity 0.62s ${EASE}, transform 0.62s ${EASE}`;
        });
        ps.forEach((el) => {
          el.style.transition = `opacity 0.50s ${EASE}, transform 0.50s ${EASE}`;
        });
      })
    );

    /* ─── IO za H2/H3 i p ───────────────────────────────────
       rootMargin "-15% 0px -5% 0px":
       • exit gore okida se dok je element još 15% vidljiv → animacija ima prostora
       • enter odozdo okida se 5% prije nego element uđe u viewport
    ─────────────────────────────────────────────────────── */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target, boundingClientRect }) => {
          const el  = target as HTMLElement;
          const isH = ["H2", "H3"].includes(el.tagName);

          if (isIntersecting) {
            el.style.opacity   = "1";
            el.style.transform = "none";
          } else if (boundingClientRect.top < 0) {
            // Izlaz gore — element pliva dalje gore
            el.style.opacity   = "0";
            el.style.transform = `translateY(${isH ? -24 : -14}px)`;
          } else {
            // Vraćanje scrola gore — ide na početni offset
            el.style.opacity   = "0";
            el.style.transform = `translateY(${isH ? 20 : 12}px)`;
          }
        });
      },
      { threshold: 0, rootMargin: "-15% 0px -5% 0px" }
    );

    [...hs, ...ps].forEach((el) => io.observe(el));

    /* ─── IO za H1: exit + povratak ─────────────────────────
       rootMargin "-20% 0px 0px 0px":
       exit okida dok je H1 još 20% vidljiv
    ─────────────────────────────────────────────────────── */
    const h1io = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target, boundingClientRect }) => {
          const el = target as HTMLElement;
          el.style.transition = `opacity 0.70s ${EASE}, transform 0.70s ${EASE}`;

          if (isIntersecting) {
            el.style.opacity   = "1";
            el.style.transform = "none";
          } else if (boundingClientRect.top < 0) {
            el.style.opacity   = "0";
            el.style.transform = "translateY(-22px)";
          } else {
            el.style.opacity   = "0";
            el.style.transform = "translateY(28px)";
          }
        });
      },
      { threshold: 0, rootMargin: "-20% 0px 0px 0px" }
    );

    // Startamo H1 IO tek kad load animacija završi (850ms + buffer)
    const t = setTimeout(
      () => h1s.forEach((el) => h1io.observe(el)),
      950
    );

    return () => {
      io.disconnect();
      h1io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return null;
}
