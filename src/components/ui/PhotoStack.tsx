"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

type Card = { id: number };
const CARDS: Card[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const SPRING     = { type: "spring", stiffness: 180, damping: 22 } as const;
const THROW_EASE = { duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94] } as const;
const THROWN     = { x: 180, rotateZ: 22, opacity: 0, scale: 1 as number };

export default function PhotoStack() {
  const [cards, setCards]         = useState<Card[]>(CARDS);
  const [animating, setAnimating] = useState(false);

  // Za prev() — karta koja dolazi s desna (remount s initial=THROWN)
  const incomingIdRef             = useRef<number | null>(null);
  const [incomingKey, setIncomingKey] = useState(0);

  /* ── Next: top karta leti desno → dno stacka ────────── */
  function next() {
    if (animating) return;
    incomingIdRef.current = null;   // nije prev, nema incoming
    setAnimating(true);
  }

  function onThrowDone() {
    setCards((prev) => {
      const arr = [...prev];
      arr.unshift(arr.pop()!);      // top → dno
      return arr;
    });
    setAnimating(false);
  }

  /* ── Prev: dno karta dolazi s desna → vrh stacka ─────── */
  function prev() {
    if (animating) return;
    setAnimating(true);
    setCards((prev) => {
      const arr  = [...prev];
      const card = arr.shift()!;    // uzmi s dna
      incomingIdRef.current = card.id;
      arr.push(card);               // stavi na vrh
      return arr;
    });
    setIncomingKey((k) => k + 1);  // promjena key-a → remount s initial
  }

  return (
    <div className="flex flex-col items-center gap-5">

      {/* ── Stack ─────────────────────────────────────────── */}
      <div className="relative" style={{ width: 340, height: 256 }}>
        {cards.map((card, i) => {
          const depth      = cards.length - 1 - i;   // 0 = vrh
          const rotateZ    = depth * 6;
          const scale      = 1 - depth * 0.06;

          // next: bacanje desno
          const isTop      = depth === 0;
          const isThrowing = isTop && animating && incomingIdRef.current === null;

          // prev: dolazak s desna
          const isIncoming = card.id === incomingIdRef.current;
          const cardKey    = isIncoming ? `${card.id}-in-${incomingKey}` : String(card.id);

          return (
            <motion.div
              key={cardKey}
              className="absolute inset-0 rounded-[var(--radius-xl)]"
              style={{ zIndex: i, transformOrigin: "90% 90%" }}
              // initial samo za incoming karticu (forsira poziciju prije spring-a)
              initial={isIncoming ? THROWN : false}
              animate={
                isThrowing
                  ? THROWN
                  : { x: 0, rotateZ, scale, opacity: 1 }
              }
              transition={isThrowing ? THROW_EASE : SPRING}
              onAnimationComplete={
                isThrowing  ? onThrowDone :
                isIncoming  ? () => setAnimating(false) :
                undefined
              }
            >
              <div className="w-full h-full rounded-[var(--radius-xl)]
                bg-[var(--color-bg-alt)] border-2 border-[var(--color-border)]
                flex flex-col items-center justify-center gap-2
                shadow-[0_6px_24px_rgba(10,45,110,0.10)]">
                <Camera size={24} className="opacity-20 text-[var(--color-muted)]" />
                <span className="text-xs text-[var(--color-muted)] font-medium">
                  Fotografija s terena
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Strelice ──────────────────────────────────────── */}
      <div className="flex items-center gap-2">
        <button
          onClick={prev}
          aria-label="Prethodna fotografija"
          className="w-9 h-9 flex items-center justify-center rounded-full
            border border-[var(--color-border)] bg-white text-[var(--color-muted)]
            hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)]
            active:scale-95 transition-all duration-150"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={next}
          aria-label="Sljedeća fotografija"
          className="w-9 h-9 flex items-center justify-center rounded-full
            border border-[var(--color-border)] bg-white text-[var(--color-muted)]
            hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)]
            active:scale-95 transition-all duration-150"
        >
          <ChevronRight size={16} />
        </button>
      </div>

    </div>
  );
}
