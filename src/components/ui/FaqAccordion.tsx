"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div
          key={item.q}
          className="border border-[var(--color-border)] rounded-[var(--radius-xl)]
            shadow-[0_2px_12px_rgba(10,45,110,0.05)]
            hover:border-[var(--color-primary)]/30 hover:shadow-[0_4px_18px_rgba(10,45,110,0.09)]
            transition-all duration-200 overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
          >
            <span className="font-semibold text-[var(--color-text)] text-sm leading-snug">
              {item.q}
            </span>
            <span
              className={`flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-bg-alt)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] transition-all duration-200 ${
                open === i ? "rotate-180 bg-[var(--color-primary)] border-[var(--color-primary)] text-white" : ""
              }`}
            >
              <ChevronDown size={14} />
            </span>
          </button>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-5 pb-5">
                <div className="border-t border-[var(--color-border)] pt-4">
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
