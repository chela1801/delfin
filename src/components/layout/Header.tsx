"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import DelfinLogo from "@/components/ui/DelfinLogo";

const navLinks = [
  { label: "Početna", href: "/" },
  { label: "Usluge", href: "/usluge" },
  { label: "O nama", href: "/o-nama" },
  { label: "Kontakt", href: "/kontakt" },
];

const WHATSAPP_URL = "https://wa.me/38766246346";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-3 left-0 right-0 z-[60] pointer-events-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Jedan notch — logo | nav | CTA */}
        <div className="pointer-events-auto flex items-center justify-between h-16 px-5
          bg-[var(--color-primary)]/90 backdrop-blur-2xl rounded-[var(--radius-xl)]
          border border-white/10 shadow-lg shadow-[var(--color-primary)]/30">

          {/* Logo — uvijek vidljiv */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Delfin — početna stranica">
              <DelfinLogo fill="#ffffff" height={38} />
            </Link>
          </div>

          {/* Nav linkovi — uvijek vidljivi, desktop */}
          <nav className="hidden md:flex items-center gap-0.5 mx-auto" aria-label="Glavna navigacija">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-white/55 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA — uvijek vidljiv, desktop */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/firme"
              className="text-sm font-medium text-white/50 hover:text-white/90 transition-colors whitespace-nowrap"
            >
              Za firme
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 bg-[#4A5568] text-white text-sm font-semibold rounded-full transition-all duration-150
                shadow-[0_2px_10px_rgba(74,85,104,0.40)]
                hover:-translate-y-0.5 hover:bg-[#3a4255] hover:shadow-[0_4px_16px_rgba(74,85,104,0.55)]
                active:translate-y-0 active:scale-[0.98] whitespace-nowrap"
            >
              Kontaktiraj nas
            </a>
          </div>

          {/* Mobilni meni */}
          <div className="md:hidden">
            <MobileMenu />
          </div>

        </div>
      </div>
    </header>
  );
}
