import Link from "next/link";
import { CurveRight } from "@/components/ui/Curves";

const WHATSAPP_URL = "https://wa.me/38766246346";
const PHONE = "+387 66 246 346";

const radnoVrijeme = [
  { dan: "Ponedjeljak — Petak", sati: "08:00 — 18:00" },
  { dan: "Subota", sati: "09:00 — 15:00" },
  { dan: "Nedjelja", sati: "Po dogovoru" },
];

export const metadata = {
  title: "Kontakt — Delfin Prijedor",
  description: "Kontaktirajte Delfin — WhatsApp za privatne korisnike, forma za firme.",
};

export default function KontaktPage() {
  return (
    <>

      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section className="relative bg-[var(--color-primary)] pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-white/40 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white/70 transition-colors">Početna</Link>
            <span>/</span>
            <span className="text-white/70">Kontakt</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Kontaktiraj nas
          </h1>
          <p className="text-lg text-white/60 max-w-md">
            Privatni korisnici — WhatsApp. Firme i poslovni prostori — forma ispod.
          </p>
        </div>
        <CurveRight fill="#FFFFFF" />
      </section>


      {/* ═══ SPLIT — B2C i B2B ══════════════════════════════ */}
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* B2C — WhatsApp */}
            <div className="flex flex-col gap-6 p-7 border-2 border-[var(--color-primary)] rounded-[var(--radius-xl)]
              shadow-[0_4px_24px_rgba(10,45,110,0.10)]">
              <div>
                <span className="inline-block px-3 py-1 bg-[var(--color-primary)] text-white text-xs font-semibold rounded-full mb-4">
                  Privatni korisnici
                </span>
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">
                  Javi se na WhatsApp
                </h2>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Najbrži način. Opiši prostor i termin koji ti odgovara —
                  odgovaramo u roku od par sati.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 p-3.5 bg-[var(--color-bg-alt)] rounded-[var(--radius-lg)]">
                  <span className="w-9 h-9 bg-[var(--color-primary)] rounded-[var(--radius-md)] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    WA
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text)]">{PHONE}</p>
                    <p className="text-xs text-[var(--color-muted)]">WhatsApp dostupan svaki dan</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-[var(--color-bg-alt)] rounded-[var(--radius-lg)]">
                  <span className="w-9 h-9 bg-[var(--color-primary)] rounded-[var(--radius-md)] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    📍
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text)]">Prijedor, BiH</p>
                    <p className="text-xs text-[var(--color-muted)]">Prijedor i okolina</p>
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                  shadow-[0_4px_18px_rgba(74,85,104,0.45)]
                  hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(74,85,104,0.60)] hover:bg-[#3a4255]
                  active:translate-y-0 active:scale-[0.98]"
              >
                Otvori WhatsApp
              </a>
            </div>

            {/* B2B — Forma */}
            <div className="flex flex-col gap-6 p-7 border border-[var(--color-border)] rounded-[var(--radius-xl)]
              shadow-[0_2px_12px_rgba(10,45,110,0.06)]">
              <div>
                <span className="inline-block px-3 py-1 bg-[var(--color-bg-alt)] text-[var(--color-muted)] text-xs font-semibold rounded-full mb-4">
                  Firme i poslovni prostori
                </span>
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">
                  Pošalji formalni upit
                </h2>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Popuni formu s podacima o prostoru.
                  Javimo se s ponudom u toku radnog dana.
                </p>
              </div>

              <form className="flex flex-col gap-3">
                {[
                  { label: "Naziv firme", type: "text", placeholder: "npr. DOO Primjer", name: "firma" },
                  { label: "Kontakt osoba", type: "text", placeholder: "Ime i prezime", name: "kontakt" },
                  { label: "Telefon ili email", type: "text", placeholder: "+387 6x / email@firma.ba", name: "telefon" },
                ].map((f) => (
                  <div key={f.name} className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[var(--color-text)]">{f.label}</label>
                    <input
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      className="h-11 border border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-bg-alt)] px-3.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)]/40 transition-colors"
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--color-text)]">Poruka</label>
                  <textarea
                    name="poruka"
                    rows={3}
                    placeholder="Opišite prostor, površinu i željenu učestalost čišćenja..."
                    className="border border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-bg-alt)] px-3.5 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)]/40 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#6B7A8D] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                    shadow-[0_4px_18px_rgba(107,122,141,0.40)]
                    hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(107,122,141,0.55)] hover:bg-[#5a6a7d]
                    active:translate-y-0 active:scale-[0.98]"
                >
                  Pošalji upit
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>


      {/* ═══ RADNO VRIJEME + MAPA ═══════════════════════════ */}
      <section className="bg-[var(--color-bg-alt)] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-2">Dostupnost</p>
                <h2 className="text-2xl font-bold text-[var(--color-text)] tracking-tight">Radno vrijeme</h2>
              </div>
              <div className="flex flex-col">
                {radnoVrijeme.map((r, i) => (
                  <div
                    key={r.dan}
                    className={`flex justify-between py-3.5 text-sm ${i < radnoVrijeme.length - 1 ? "border-b border-[var(--color-border)]" : ""}`}
                  >
                    <span className="text-[var(--color-muted)]">{r.dan}</span>
                    <span className="font-semibold text-[var(--color-text)]">{r.sati}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--color-muted)]">
                WhatsApp dostupan i van radnog vremena — odgovaramo u roku od par sati.
              </p>
            </div>

            {/* Mapa placeholder */}
            <div className="w-full aspect-[16/10] bg-[var(--color-border)] rounded-[var(--radius-xl)] flex items-center justify-center border border-[var(--color-border)]">
              <div className="text-center">
                <span className="text-2xl opacity-30">🗺️</span>
                <p className="text-sm text-[var(--color-muted)] font-medium mt-2">Google Maps — Prijedor</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
