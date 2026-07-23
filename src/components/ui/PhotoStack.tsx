"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type PhotoItem = {
  src: string;
  alt: string;
  objectPosition?: string;
};

interface PhotoStackProps {
  photos: PhotoItem[];
}

type Card = { id: number; photo: PhotoItem };

const SPRING     = { type: "spring", stiffness: 180, damping: 22 } as const;
const THROW_EASE = { duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94] } as const;
const THROWN     = { x: 180, rotateZ: 22, opacity: 0, scale: 1 as number };

export default function PhotoStack({ photos }: PhotoStackProps) {
  const [cards, setCards]         = useState<Card[]>(
    photos.map((photo, id) => ({ id, photo }))
  );
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
      <div className="relative w-full" style={{ maxWidth: 340, aspectRatio: "340 / 256" }}>
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
              <div className="relative w-full h-full rounded-[var(--radius-xl)] overflow-hidden
                border-2 border-[var(--color-border)]
                shadow-[0_6px_24px_rgba(10,45,110,0.10)]">
                <Image
                  src={card.photo.src}
                  alt={card.photo.alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: card.photo.objectPosition ?? "center" }}
                  sizes="340px"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Strelice ──────────────────────────────────────── */}
      {cards.length > 1 && (
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
      )}

    </div>
  );
}
