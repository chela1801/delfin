// Wireframe — /kontakt
// Cilj: B2C brzo do WhatsApp, B2B do forme
// UX: dva jasno odvojena bloka — ne miješati kanale

import { WLabel, WSection, WBtn, WBreadcrumb } from "@/components/wireframe/W";

export default function WireframeKontakt() {
  return (
    <div className="text-gray-900">

      {/* ═══ PAGE HERO ══════════════════════════════════════
          Kratak, direktan — korisnik već zna šta hoće
      ══════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-px)]">
          <WBreadcrumb items={[{ label: "Početna" }, { label: "Kontakt" }]} />
          <WLabel>H1 — direktan, bez marketinga</WLabel>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Kontaktiraj nas
          </h1>
          <p className="text-lg text-gray-500">
            Privatni korisnici — WhatsApp. Firme i poslovni prostori — forma ispod.
          </p>
        </div>
      </section>

      {/* ═══ SPLIT — B2C i B2B ══════════════════════════════
          Cilj: korisnik odmah vidi pravi kanal za sebe
          UX: dvije kolone, vizualno jednako ali kanal različit
          Važno: nema miješanja CTA-ova — svaka kolona ima samo jedan
      ══════════════════════════════════════════════════ */}
      <WSection bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── B2C blok — WhatsApp ─────────────────────── */}
          <div className="flex flex-col gap-5 p-[var(--card-padding)] border-2 border-gray-900 rounded-[var(--card-radius)]">
            <div>
              <WLabel>B2C blok — privatni korisnici</WLabel>
              <div className="inline-block px-2.5 py-1 bg-gray-900 text-white text-xs font-semibold rounded-full mb-3">
                Privatni korisnici
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Javi se na WhatsApp
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Najbrži način. Opiši prostor i termin koji ti odgovara —
                odgovaramo u roku od par sati.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <WLabel>Kontakt info</WLabel>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-[var(--radius-md)]">
                <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500 font-bold flex-shrink-0">
                  WA
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">+387 66 246 346</p>
                  <p className="text-xs text-gray-500">WhatsApp dostupan svaki dan</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-[var(--radius-md)]">
                <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500 font-bold flex-shrink-0">
                  LOC
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Prijedor, BiH</p>
                  <p className="text-xs text-gray-500">Prijedor i okolina</p>
                </div>
              </div>
            </div>

            <WBtn label="Otvori WhatsApp" variant="primary" fullWidth />
          </div>

          {/* ── B2B blok — Forma ────────────────────────── */}
          <div className="flex flex-col gap-5 p-[var(--card-padding)] border border-gray-200 rounded-[var(--card-radius)]">
            <div>
              <WLabel>B2B blok — firme i poslovni prostori</WLabel>
              <div className="inline-block px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full mb-3">
                Firme i poslovni prostori
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Pošalji formalni upit
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Popuni formu s podacima o prostoru.
                Javimo se s ponudom u toku radnog dana.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { label: "Naziv firme", placeholder: "npr. DOO Primjer" },
                { label: "Kontakt osoba", placeholder: "Ime i prezime" },
                { label: "Telefon ili email", placeholder: "+387 6x / email@firma.ba" },
              ].map((f) => (
                <div key={f.label}>
                  <WLabel>{f.label}</WLabel>
                  <div className="h-10 border border-gray-200 rounded bg-gray-50 px-3 flex items-center">
                    <span className="text-sm text-gray-400">{f.placeholder}</span>
                  </div>
                </div>
              ))}

              <div>
                <WLabel>Poruka — vrsta prostora i potrebe</WLabel>
                <div className="h-24 border border-gray-200 rounded bg-gray-50 p-3">
                  <span className="text-sm text-gray-400">
                    Opišite prostor, površinu i željenu učestalost čišćenja...
                  </span>
                </div>
              </div>
            </div>

            <WBtn label="Pošalji upit" variant="secondary" fullWidth />
          </div>

        </div>
      </WSection>

      {/* ═══ RADNO VRIJEME + MAPA ═══════════════════════════
          Cilj: dodatne informacije za korisnika koji traži lokaciju
          UX: kompaktno, mapa placeholder
      ══════════════════════════════════════════════════ */}
      <WSection bg="gray" border="top">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-4">
            <WLabel>Radno vrijeme i dostupnost</WLabel>
            <h2 className="text-lg font-bold text-gray-900">Dostupnost</h2>
            <div className="flex flex-col gap-2">
              {[
                { dan: "Ponedjeljak — Petak", sati: "08:00 — 18:00" },
                { dan: "Subota", sati: "09:00 — 15:00" },
                { dan: "Nedjelja", sati: "Po dogovoru" },
              ].map((r) => (
                <div key={r.dan} className="flex justify-between text-sm py-2 border-b border-gray-200">
                  <span className="text-gray-600">{r.dan}</span>
                  <span className="font-semibold text-gray-900">{r.sati}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400">
              WhatsApp dostupan i van radnog vremena — odgovaramo u roku od par sati.
            </p>
          </div>

          <div>
            <WLabel>Mapa — Google Maps embed (Prijedor)</WLabel>
            <div className="h-56 bg-gray-200 rounded-[var(--card-radius)] flex items-center justify-center">
              <span className="text-sm text-gray-500 font-medium">GOOGLE MAPS — Prijedor</span>
            </div>
          </div>
        </div>
      </WSection>

    </div>
  );
}
