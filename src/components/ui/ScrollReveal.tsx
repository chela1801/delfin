"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const all = [
      ...document.querySelectorAll<HTMLElement>("main h1, main h2, main h3"),
      ...document.querySelectorAll<HTMLElement>("main p"),
    ];

    const enterY = (el: HTMLElement) =>
      el.tagName === "H1" ? 22 : ["H2", "H3"].includes(el.tagName) ? 14 : 10;

    const exitY = (el: HTMLElement) =>
      -Math.round(enterY(el) * 0.55);

    const dur = (el: HTMLElement) =>
      el.tagName === "H1" ? 0.72 : ["H2", "H3"].includes(el.tagName) ? 0.62 : 0.55;

    // Postavljamo početno stanje bez tranzicije
    all.forEach((el) => {
      el.style.opacity    = "0";
      el.style.transform  = `translateY(${enterY(el)}px)`;
      el.style.willChange = "opacity, transform";
    });

    // Tranziciju dodajemo tek nakon što je početno stanje naslikano
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        all.forEach((el) => {
          el.style.transition = `opacity ${dur(el)}s ease-out, transform ${dur(el)}s ease-out`;
        });
      })
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target, boundingClientRect }) => {
          const el = target as HTMLElement;
          if (isIntersecting) {
            // Ulaz — pliva gore na mjesto
            el.style.opacity   = "1";
            el.style.transform = "none";
          } else if (boundingClientRect.top < 0) {
            // Izlaz gore (skrolano dalje) — nastavlja ploviti prema gore
            el.style.opacity   = "0";
            el.style.transform = `translateY(${exitY(el)}px)`;
          } else {
            // Izlaz dole (skrolano natrag) — vraća se na početno stanje
            el.style.opacity   = "0";
            el.style.transform = `translateY(${enterY(el)}px)`;
          }
        });
      },
      { threshold: 0.1 }
    );

    all.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
