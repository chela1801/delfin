"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const headings = [
      ...document.querySelectorAll<HTMLElement>("main h1"),
      ...document.querySelectorAll<HTMLElement>("main h2"),
      ...document.querySelectorAll<HTMLElement>("main h3"),
    ];
    const texts = [...document.querySelectorAll<HTMLElement>("main p")];

    // Početno stanje — skriveno + pomjereno
    headings.forEach((el) => {
      el.style.opacity    = "0";
      el.style.transform  = el.tagName === "H1" ? "translateY(22px)" : "translateY(14px)";
      el.style.willChange = "opacity, transform";
    });
    texts.forEach((el) => {
      el.style.opacity    = "0";
      el.style.transform  = "translateY(10px)";
      el.style.willChange = "opacity, transform";
    });

    const reveal = (el: HTMLElement) => {
      const isH1 = el.tagName === "H1";
      const isH  = el.tagName === "H2" || el.tagName === "H3";
      const dur  = isH1 ? 0.72 : isH ? 0.62 : 0.55;
      el.style.transition = `opacity ${dur}s ease-out, transform ${dur}s ease-out`;
      el.style.opacity    = "1";
      el.style.transform  = "none";
      el.style.willChange = "auto";
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (!isIntersecting) return;
          reveal(target as HTMLElement);
          io.unobserve(target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -18px 0px" }
    );

    [...headings, ...texts].forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
