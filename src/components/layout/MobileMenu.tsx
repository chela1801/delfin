"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X } from "lucide-react";
import DelfinLogo from "@/components/ui/DelfinLogo";
import { useContactModal } from "@/components/ui/ContactModal";

const navLinks = [
  { label: "Usluge",   href: "/usluge"  },
  { label: "O nama",   href: "/o-nama"  },
  { label: "Za firme", href: "/firme"   },
  { label: "Kontakt",  href: "/kontakt" },
];

const WHATSAPP_URL = "https://wa.me/38766246346";

export default function MobileMenu() {
  const [open, setOpen]       = useState(false);
  const [closing, setClosing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => { setMounted(true); }, []);

  // iOS-safe scroll lock
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top      = `-${scrollY}px`;
      document.body.style.width    = "100%";
    } else {
      const scrollY = parseInt(document.body.style.top || "0") * -1;
      document.body.style.position = "";
      document.body.style.top      = "";
      document.body.style.width    = "";
      if (scrollY) window.scrollTo(0, scrollY);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top      = "";
      document.body.style.width    = "";
    };
  }, [open]);

  // Sadržaj se fade-uje 200ms, onda panel + slojevi izađu zajedno
  const close = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 200);
  };

  const overlay = (
    <div
        className="delfin-nav-overlay"
        data-open={open || undefined}
        data-closing={closing || undefined}
        aria-hidden={!open}
      >

      <div className="delfin-nav-layer delfin-nav-layer-1" />
      <div className="delfin-nav-layer delfin-nav-layer-2" />

      <nav className="delfin-nav-panel" aria-label="Mobilna navigacija">
        <div className="flex flex-col min-h-[100svh]">

          {/* Header bar */}
          <div className="flex items-center justify-between flex-shrink-0 h-[76px] px-5">
            <Link href="/" onClick={close} aria-label="Delfin — početna stranica">
              <DelfinLogo fill="#ffffff" height={38} />
            </Link>
            <button
              onClick={close}
              aria-label="Zatvori meni"
              className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav stavke + CTA — fade wrapper za smooth close */}
          <div className="delfin-nav-inner flex flex-col flex-1">
          <ul className="flex flex-col gap-1 flex-1 px-6 pt-6" role="list">
            {navLinks.map((link, idx) => {
              const delay = `${320 + idx * 80}ms`;
              return (
                <li key={link.href} className="delfin-nav-item-wrap">
                  <Link
                    href={link.href}
                    onClick={close}
                    tabIndex={open ? 0 : -1}
                    className="group flex items-baseline gap-3 py-2"
                  >
                    <span
                      className="delfin-nav-num text-xs font-semibold text-white/30 w-6 text-right flex-shrink-0 leading-none"
                      style={{ "--d": delay } as React.CSSProperties}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="delfin-nav-item-label text-4xl font-bold text-white uppercase tracking-tight leading-none group-hover:text-[var(--color-secondary)] transition-colors duration-200"
                      style={{ "--d": delay } as React.CSSProperties}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="delfin-nav-footer px-6 pb-10 pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              type="button"
              tabIndex={open ? 0 : -1}
              onClick={() => { close(); openModal("full"); }}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                shadow-[0_4px_18px_rgba(74,85,104,0.45)]
                hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(74,85,104,0.60)] hover:bg-[#3a4255]
                active:translate-y-0 active:scale-[0.98]"
            >
              Kontaktiraj nas
            </button>
            <p className="text-xs text-white/25 text-center">Prijedor i regija</p>
          </div>
          </div>{/* /delfin-nav-inner */}

        </div>
      </nav>
    </div>
  );

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Otvori meni"
        className="flex flex-col justify-center items-center w-10 h-10 gap-1.5"
      >
        <span className="block w-6 h-0.5 bg-white rounded" />
        <span className="block w-6 h-0.5 bg-white rounded" />
        <span className="block w-6 h-0.5 bg-white rounded" />
      </button>

      {/* Overlay — portalovan direktno na body, izvan backdrop-blur containinga */}
      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
