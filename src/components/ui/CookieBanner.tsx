"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import Link from "next/link";

export default function CookieBanner() {
  const [bannerOpen, setBannerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem("cookie-consent")) {
      setBannerOpen(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setBannerOpen(false);
  }

  if (!mounted) return null;

  return (
    <>
      {/* Floating cookie dugme — uvijek vidljivo */}
      {!bannerOpen && (
        <button
          onClick={() => setBannerOpen(true)}
          aria-label="Postavke kolačića"
          className="fixed bottom-5 right-5 z-40 w-10 h-10 flex items-center justify-center
            bg-[var(--color-primary)] text-white/60 rounded-full
            border border-white/10
            shadow-[0_4px_16px_rgba(10,45,110,0.35)]
            hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(10,45,110,0.50)]
            active:translate-y-0 active:scale-[0.97]
            transition-all duration-200"
        >
          <Cookie size={18} />
        </button>
      )}

      {/* Banner */}
      {bannerOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 flex justify-center">
          <div className="w-full max-w-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4
            bg-[var(--color-primary)] border border-white/10 rounded-[var(--radius-xl)]
            shadow-[0_8px_40px_rgba(0,0,0,0.30)] px-5 py-4">
            <Cookie size={18} className="text-white/40 flex-shrink-0 hidden sm:block" />
            <p className="flex-1 text-sm text-white/70 leading-relaxed">
              Koristimo tehničke kolačiće neophodne za funkcionisanje sajta. Više u{" "}
              <Link
                href="/politika-privatnosti"
                className="text-white underline underline-offset-2 hover:text-white/80 transition-colors"
              >
                politici privatnosti
              </Link>
              .
            </p>
            <button
              onClick={accept}
              className="flex-shrink-0 inline-flex items-center justify-center px-5 py-2.5
                bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)]
                shadow-[0_4px_14px_rgba(74,85,104,0.40)]
                hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(74,85,104,0.55)] hover:bg-[#3a4255]
                active:translate-y-0 active:scale-[0.98] transition-all duration-150"
            >
              Razumijem
            </button>
          </div>
        </div>
      )}
    </>
  );
}
