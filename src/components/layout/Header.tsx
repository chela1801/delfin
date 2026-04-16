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
    <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Jedan red — logo | nav notch | CTA */}
        <div className="flex items-center justify-between pt-5 pb-4">

          {/* Logo — nestaje na scrollu */}
          <div
            className={`pointer-events-auto transition-all duration-300 ${
              scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Link href="/" aria-label="Delfin — početna stranica">
              <DelfinLogo fill="#ffffff" iconSize={88} textSize="text-2xl" />
            </Link>
          </div>

          {/* Nav notch — uvijek vidljiv */}
          <div className="pointer-events-auto inline-flex items-center h-12 px-2
            bg-[var(--color-primary)]/90 backdrop-blur-2xl rounded-[var(--radius-xl)]
            border border-white/10 shadow-lg shadow-[var(--color-primary)]/30">
            <nav className="hidden md:flex items-center gap-0.5" aria-label="Glavna navigacija">
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
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>

          {/* CTA dugmad — nestaju na scrollu */}
          <div
            className={`hidden md:flex items-center gap-3 pointer-events-auto transition-all duration-300 ${
              scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Link
              href="/firme"
              className="text-sm font-medium text-white/50 hover:text-white/90 transition-colors"
            >
              Za firme
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#4A5568] text-white text-sm font-semibold rounded-full transition-all duration-150
                shadow-[0_2px_10px_rgba(74,85,104,0.40)]
                hover:-translate-y-0.5 hover:bg-[#3a4255] hover:shadow-[0_4px_16px_rgba(74,85,104,0.55)]
                active:translate-y-0 active:scale-[0.98]"
            >
              Kontaktiraj nas
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
