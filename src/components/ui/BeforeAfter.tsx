"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  before?: string;
  after?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfter({
  before = "/hero-bg.jpg",
  after  = "/hero-bg.jpg",
  beforeLabel = "Prije",
  afterLabel  = "Poslije",
}: BeforeAfterProps) {
  const [pos, setPos]   = useState(42);
  const containerRef    = useRef<HTMLDivElement>(null);
  const dragging        = useRef(false);

  const move = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    setPos(Math.max(5, Math.min(95, ((clientX - left) / width) * 100)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden rounded-[var(--radius-xl)]"
      style={{ aspectRatio: "16/9", touchAction: "none" }}
      onMouseMove={(e)  => dragging.current && move(e.clientX)}
      onMouseUp={()     => { dragging.current = false; }}
      onMouseLeave={()  => { dragging.current = false; }}
      onTouchMove={(e)  => dragging.current && move(e.touches[0].clientX)}
      onTouchEnd={()    => { dragging.current = false; }}
    >
      {/* ── POSLIJE — puna širina u pozadini ── */}
      <div className="absolute inset-0">
        <Image src={after} alt={afterLabel} fill className="object-cover" />
      </div>

      {/* ── PRIJE — isječeno na lijevu stranu ── */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeLabel}
          fill
          className="object-cover"
          /* placeholder efekt dok nema pravih "prije" fotografija */
          style={{ filter: "grayscale(0.9) brightness(0.65) contrast(1.1)" }}
        />
      </div>

      {/* ── RAZDJELJNIK ── */}
      <div
        className="absolute inset-y-0 flex items-center justify-center"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        {/* vertikalna linija */}
        <div className="absolute inset-y-0 w-px bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" />

        {/* handle */}
        <div
          role="slider"
          aria-label="Povuci za poređenje"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={5}
          aria-valuemax={95}
          tabIndex={0}
          className="relative z-10 w-10 h-10 bg-white rounded-full cursor-grab active:cursor-grabbing
            shadow-[0_2px_18px_rgba(0,0,0,0.30)]
            flex items-center justify-center
            hover:scale-110 transition-transform duration-150"
          onMouseDown={(e) => { e.preventDefault(); dragging.current = true; }}
          onTouchStart={() => { dragging.current = true; }}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft")  setPos((p) => Math.max(5,  p - 2));
            if (e.key === "ArrowRight") setPos((p) => Math.min(95, p + 2));
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M7 13L3 9L7 5" stroke="#4A5568" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 5L15 9L11 13" stroke="#4A5568" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* ── LABELE ── */}
      <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/50 text-white text-xs font-semibold rounded-full backdrop-blur-sm pointer-events-none">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 px-2.5 py-1 bg-[var(--color-primary)]/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm pointer-events-none">
        {afterLabel}
      </span>
    </div>
  );
}
