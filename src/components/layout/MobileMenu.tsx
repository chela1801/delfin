"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Početna", href: "/" },
  { label: "Usluge", href: "/usluge" },
  { label: "O nama", href: "/o-nama" },
  { label: "Kontakt", href: "/kontakt" },
];

const WHATSAPP_URL = "https://wa.me/38766246346";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger dugme */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Zatvori meni" : "Otvori meni"}
        aria-expanded={open}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobilni meni */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--color-bg)] border-t border-[var(--color-border)] shadow-lg z-50">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-[var(--color-text)] font-medium hover:text-[var(--color-primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 pt-3 border-t border-[var(--color-border)] flex flex-col gap-2">
              <Link
                href="/firme"
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-[var(--color-secondary)] font-semibold hover:text-[var(--color-primary)] transition-colors"
              >
                Za firme →
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mx-3 py-3 text-center bg-[var(--color-primary)] text-white font-semibold rounded-[var(--radius-md)] hover:bg-[var(--color-primary-hover)] transition-colors"
              >
                Kontaktiraj nas
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
