"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Phone } from "lucide-react";
import { FaWhatsapp, FaViber } from "react-icons/fa";

export type ContactVariant = "full" | "message";

interface ContactModalCtx {
  openModal: (variant: ContactVariant) => void;
}

const Ctx = createContext<ContactModalCtx | null>(null);

export function useContactModal() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}

const WHATSAPP_URL = "https://wa.me/38766246346";
const VIBER_URL    = "viber://chat?number=%2B38766246346";
const PHONE        = "+387 66 246 346";


export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [open,    setOpen]    = useState(false);
  const [variant, setVariant] = useState<ContactVariant>("message");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const openModal = useCallback((v: ContactVariant) => {
    setVariant(v);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  const modal = open ? (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ background: "rgba(10,20,50,0.55)", backdropFilter: "blur(6px)" }}
      onClick={close}
    >
      <div
        className="relative w-full max-w-sm bg-white border border-[var(--color-border)] rounded-[var(--radius-xl)]
          shadow-[0_8px_48px_rgba(10,45,110,0.22)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Zaglavlje */}
        <div className="flex items-start justify-between gap-3 px-6 pt-6 pb-4">
          <div>
            <h2 className="text-lg font-bold text-[var(--color-text)]">Pošalji upit</h2>
            <p className="text-sm text-[var(--color-muted)] mt-0.5">Izaberi kanal kontakta</p>
          </div>
          <button
            onClick={close}
            aria-label="Zatvori"
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-[var(--color-muted)]
              hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-text)] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="border-t border-[var(--color-border)] mx-6" />

        {/* Dugmad */}
        <div className="flex flex-col gap-2.5 px-6 py-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="inline-flex items-center gap-3 px-5 py-3.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
              shadow-[0_4px_14px_rgba(74,85,104,0.40)]
              hover:-translate-y-0.5 hover:bg-[#3a4255] hover:shadow-[0_8px_24px_rgba(74,85,104,0.55)]
              active:translate-y-0 active:scale-[0.98]"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>

          <a
            href={VIBER_URL}
            onClick={close}
            className="inline-flex items-center gap-3 px-5 py-3.5 bg-[#7360F2] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
              shadow-[0_4px_14px_rgba(115,96,242,0.40)]
              hover:-translate-y-0.5 hover:bg-[#5f4fd4] hover:shadow-[0_8px_24px_rgba(115,96,242,0.55)]
              active:translate-y-0 active:scale-[0.98]"
          >
            <FaViber size={20} />
            Viber
          </a>

          {variant === "full" && (
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              onClick={close}
              className="inline-flex items-center gap-3 px-5 py-3.5 bg-[#6B7A8D] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                shadow-[0_4px_14px_rgba(107,122,141,0.35)]
                hover:-translate-y-0.5 hover:bg-[#5a6a7d] hover:shadow-[0_8px_24px_rgba(107,122,141,0.50)]
                active:translate-y-0 active:scale-[0.98]"
            >
              <Phone size={18} />
              Pozovi — {PHONE}
            </a>
          )}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <Ctx.Provider value={{ openModal }}>
      {children}
      {mounted && createPortal(modal, document.body)}
    </Ctx.Provider>
  );
}
