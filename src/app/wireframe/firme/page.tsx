// Wireframe — /firme (B2B landing)
// Cilj: firma pronađe Delfin, shvati vrijednost, pošalje formalni upit
// UX: profesionalan ton, forma kao primarni CTA, bez WhatsApp dugmeta u hero-u
// SEO: H1 target "čišćenje poslovnih prostora Prijedor"

import {
  WLabel, WBox, WSection, WSectionHeading,
  WBtn, WTag, WCheckItem,
} from "@/components/wireframe/W";

const prednosti = [
  {
    br: "01",
    naslov: "Fleksibilni termini",
    opis: "Čišćenje van radnog vremena — jutro, veče ili vikend. Vaš posao ne staje.",
  },
  {
    br: "02",
    naslov: "Redovni servis",
    opis: "Dnevno, sedmično ili po dogovoru. Jedan ugovor, stalni tim, predvidiv rezultat.",
  },
  {
    br: "03",
    naslov: "Fakturisanje i dokumentacija",
    opis: "Radimo s firmama — faktura, ugovor i sva potrebna dokumentacija su standard.",
  },
  {
    br: "04",
    naslov: "Odgovornost i povjerljivost",
    opis: "Vaš prostor, vaša oprema i dokumenti su sigurni. Potpisujemo NDA na zahtjev.",
  },
];

const usluge = [
  {
    naziv: "Redovno čišćenje poslovnih prostora",
    opis: "Kancelarije, sale za sastanke, hodnici, sanitarni čvorovi — po dogovorenom rasporedu.",
    frekvencije: ["Dnevno", "Sedmično", "Po dogovoru"],
  },
  {
    naziv: "Generalno i dubinsko čišćenje",
    opis: "Kompletna obnova prostora — idealno za sezonsko čišćenje ili pripremu novog ureda.",
    frekvencije: ["Jednokratno", "Sezonski"],
  },
  {
    naziv: "Čišćenje nakon renoviranja",
    opis: "Brzo vraćamo uredski prostor u funkciju nakon radova — prašina, boja, malter.",
    frekvencije: ["Jednokratno"],
  },
];

const proces = [
  { br: "01", naslov: "Upit putem forme", opis: "Popuni formu s osnovnim podacima o prostoru i potrebama. Javimo se u toku radnog dana." },
  { br: "02", naslov: "Obilazak i procjena", opis: "Dogovaramo kratki obilazak prostora radi tačne procjene — besplatno i bez obaveze." },
  { br: "03", naslov: "Ponuda i ugovor", opis: "Šaljemo pisanu ponudu s jasnim scope-om, cijenom i terminima. Bez skrivenih troškova." },
  { br: "04", naslov: "Redovni servis", opis: "Dogovoreni tim, dogovoreni termini. Izvještaj o urađenom na zahtjev." },
];

export default function WireframeFirme() {
  return (
    <div className="text-gray-900">

      {/* ═══ HERO ═══════════════════════════════════════════
          Cilj: B2B korisnik odmah prepozna da je na pravom mjestu
          UX: H1 s B2B keywordom, forma DESNO odmah u hero-u
          Razlika od homepage: nema WhatsApp, forma je primarni CTA
      ══════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-b border-gray-200 py-[var(--hero-py)] md:py-[var(--hero-py-lg)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-px)]">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Lijevo — tekst */}
            <div className="flex-1 flex flex-col gap-5">
              <div>
                <WLabel>Badge — B2B segment</WLabel>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-full w-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  Za firme i poslovne prostore
                </div>
              </div>

              <div>
                <WLabel>H1 — B2B SEO keyword</WLabel>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Čišćenje poslovnih prostora u Prijedoru
                </h1>
              </div>

              <div>
                <WLabel>Subtitle — B2B ton, direktan i profesionalan</WLabel>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Redovan servis ili jednokratno čišćenje — dolazimo kad vama odgovara,
                  radimo po protokolu, fakturišemo uredno.
                </p>
              </div>

              <div>
                <WLabel>Trust signali — 3 inline stavke</WLabel>
                <div className="flex flex-wrap gap-3">
                  {["Ugovor i faktura", "Fleksibilni termini", "Prijedor i regija"].map((s) => (
                    <div key={s} className="flex items-center gap-1.5 text-sm text-gray-600 font-medium">
                      <div className="w-4 h-4 bg-gray-800 rounded-full flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <WLabel>Escape ruta — privatni korisnici</WLabel>
                <p className="text-sm text-gray-500">
                  Trebaš čišćenje stana ili kuće?{" "}
                  <span className="font-semibold text-gray-700 underline">
                    Pogledaj usluge za privatne korisnike →
                  </span>
                </p>
              </div>
            </div>

            {/* Desno — forma odmah u hero-u */}
            <div className="w-full lg:w-96 flex-shrink-0">
              <div className="p-[var(--card-padding)] border border-gray-200 rounded-[var(--card-radius)] bg-white">
                <WLabel>Kontakt forma — primarni B2B CTA</WLabel>
                <h3 className="font-bold text-gray-900 text-lg mb-4">
                  Zatražite ponudu
                </h3>

                <div className="flex flex-col gap-3">
                  {/* Polja forme */}
                  {[
                    { label: "Naziv firme", type: "text", placeholder: "npr. DOO Primjer" },
                    { label: "Kontakt osoba", type: "text", placeholder: "Ime i prezime" },
                    { label: "Telefon", type: "tel", placeholder: "+387 6x xxx xxx" },
                    { label: "Email", type: "email", placeholder: "email@firma.ba" },
                  ].map((f) => (
                    <div key={f.label}>
                      <WLabel>{f.label}</WLabel>
                      <div className="h-10 border border-gray-200 rounded bg-gray-50 px-3 flex items-center">
                        <span className="text-sm text-gray-400">{f.placeholder}</span>
                      </div>
                    </div>
                  ))}

                  {/* Vrsta prostora */}
                  <div>
                    <WLabel>Vrsta prostora — select</WLabel>
                    <div className="h-10 border border-gray-200 rounded bg-gray-50 px-3 flex items-center justify-between">
                      <span className="text-sm text-gray-400">Odaberi vrstu prostora</span>
                      <span className="text-gray-400">▾</span>
                    </div>
                  </div>

                  {/* Poruka */}
                  <div>
                    <WLabel>Poruka / napomena — textarea</WLabel>
                    <div className="h-20 border border-gray-200 rounded bg-gray-50 p-3">
                      <span className="text-sm text-gray-400">
                        Opišite prostor, površinu i učestalost čišćenja...
                      </span>
                    </div>
                  </div>

                  <WBtn label="Pošalji upit" variant="primary" fullWidth />
                  <p className="text-xs text-gray-400 text-center">
                    Odgovaramo u toku radnog dana
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ PREDNOSTI ZA FIRME ═════════════════════════════
          Cilj: diferencijacija — zašto Delfin vs. ad hoc čišćenje
          UX: 2x2 grid, numerisane kartice — isti pattern kao homepage
      ══════════════════════════════════════════════════ */}
      <WSection bg="white">
        <WSectionHeading
          label="Section heading"
          heading="Zašto firme biraju Delfin"
          subtitle="Pouzdanost i predvidivost — to je ono što firma treba od servisa."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prednosti.map((s) => (
            <div
              key={s.br}
              className="flex gap-4 p-[var(--card-padding)] border border-gray-200 rounded-[var(--card-radius)]"
            >
              <div className="flex-shrink-0 w-[var(--icon-size)] h-[var(--icon-size)] bg-gray-800 text-white text-xs font-bold rounded-[var(--icon-radius)] flex items-center justify-center">
                {s.br}
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="font-semibold text-gray-900">{s.naslov}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{s.opis}</p>
              </div>
            </div>
          ))}
        </div>
      </WSection>

      {/* ═══ USLUGE ZA FIRME ════════════════════════════════
          Cilj: prikazati relevantne usluge za B2B segment
          UX: 3 kartice s frekvencijama — ne linkuju na B2C stranice usluga
      ══════════════════════════════════════════════════ */}
      <WSection bg="gray">
        <WSectionHeading
          label="Usluge za firme"
          heading="Šta nudimo poslovnim klijentima"
          subtitle="Prilagođavamo se vašem prostoru i rasporedu."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {usluge.map((u) => (
            <div
              key={u.naziv}
              className="flex flex-col gap-3 p-[var(--card-padding)] bg-white border border-gray-200 rounded-[var(--card-radius)]"
            >
              <WBox w="w-10" h="h-10" label="ICO" />
              <p className="font-semibold text-gray-900">{u.naziv}</p>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{u.opis}</p>
              <div className="mt-auto pt-2 border-t border-gray-200 flex flex-col gap-2">
                <WLabel>Frekvencija</WLabel>
                <div className="flex flex-wrap gap-1.5">
                  {u.frekvencije.map((f) => (
                    <WTag key={f}>{f}</WTag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </WSection>

      {/* ═══ PROCES ═════════════════════════════════════════
          Cilj: smanjiti barijeru — firma zna tačno što slijedi
          UX: horizontalni stepper na desktopu, lista na mobilnom
      ══════════════════════════════════════════════════ */}
      <WSection bg="white">
        <WSectionHeading
          label="Proces"
          heading="Kako to funkcioniše"
          subtitle="Od upita do redovnog servisa — četiri koraka."
        />

        {/* Desktop stepper */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {proces.map((k, i) => (
            <div key={k.br} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0">
                  {k.br}
                </div>
                {i < proces.length - 1 && (
                  <div className="flex-1 h-px bg-gray-300" />
                )}
              </div>
              <p className="font-semibold text-gray-900 text-sm">{k.naslov}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{k.opis}</p>
            </div>
          ))}
        </div>

        {/* Mobile lista */}
        <div className="flex flex-col gap-3 md:hidden">
          {proces.map((k) => (
            <div key={k.br} className="flex gap-4 p-[var(--card-padding)] border border-gray-200 rounded-[var(--card-radius)]">
              <div className="flex-shrink-0 w-[var(--icon-size)] h-[var(--icon-size)] bg-gray-800 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {k.br}
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-0.5">{k.naslov}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{k.opis}</p>
              </div>
            </div>
          ))}
        </div>
      </WSection>

      {/* ═══ BOTTOM CTA ═════════════════════════════════════
          Cilj: drugi pokušaj konverzije za korisnika koji je scrollao
          UX: tamna sekcija, ponavlja formu ili link ka formi na vrhu
      ══════════════════════════════════════════════════ */}
      <section className="bg-gray-900 py-[var(--section-py-lg)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-px)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <WLabel>Bottom CTA — dark, forma anchor</WLabel>
            <h2 className="text-2xl font-bold text-white mb-2">
              Spremi za upit?
            </h2>
            <p className="text-gray-400 max-w-md">
              Popuni formu na vrhu stranice ili nas kontaktiraj direktno.
              Odgovaramo u toku radnog dana.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <WBtn label="Nazad na formu ↑" variant="white" />
          </div>
        </div>
      </section>

    </div>
  );
}
