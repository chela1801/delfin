// Wireframe — /webshop
// Cilj: korisnik pronađe proizvod, doda u korpu, kupi
// UX: filter po kategoriji, grid proizvoda, korpa uvijek vidljiva

import { WLabel, WBox, WSection, WSectionHeading, WBreadcrumb, WTag } from "@/components/wireframe/W";

const kategorije = ["Sve", "Sredstva za čišćenje", "Oprema", "Setovi", "Akcija"];

const proizvodi = [
  { naziv: "Sredstvo za dubinsko čišćenje podova", cijena: "12,90 KM", kategorija: "Sredstva za čišćenje", novo: false, akcija: false },
  { naziv: "Profesionalni set za čišćenje kupatila", cijena: "24,90 KM", kategorija: "Setovi", novo: true, akcija: false },
  { naziv: "Mikrofiber krpe — set 10 kom", cijena: "9,90 KM", kategorija: "Oprema", novo: false, akcija: false },
  { naziv: "Sredstvo za uklanjanje vodenog kamenca", cijena: "8,50 KM", kategorija: "Sredstva za čišćenje", novo: false, akcija: true },
  { naziv: "Raspršivač s okidačem — profesionalni", cijena: "6,90 KM", kategorija: "Oprema", novo: false, akcija: false },
  { naziv: "Starter set za novo domaćinstvo", cijena: "39,90 KM", kategorija: "Setovi", novo: true, akcija: false },
];

export default function WireframeWebshop() {
  return (
    <div className="text-gray-900">

      {/* ═══ PAGE HERO ══════════════════════════════════════
          Kratak, fokus na pretragu i filter
      ══════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-b border-gray-200 py-10 md:py-14">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-px)]">
          <WBreadcrumb items={[{ label: "Početna" }, { label: "Webshop" }]} />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <WLabel>H1 — webshop naslov</WLabel>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Webshop
              </h1>
              <p className="text-gray-500">
                Profesionalna sredstva i oprema za čišćenje — dostupno online.
              </p>
            </div>
            <div>
              <WLabel>Pretraga proizvoda</WLabel>
              <div className="h-10 w-full md:w-64 border border-gray-200 rounded bg-white px-3 flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <span className="text-sm text-gray-400">Pretraži proizvode...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FILTER + GRID ══════════════════════════════════
          Cilj: brzo pronalaženje proizvoda po kategoriji
          UX: filter tabovi iznad grida, 3 kolone desktop / 2 tablet / 1 mobil
      ══════════════════════════════════════════════════ */}
      <WSection bg="white">

        {/* Filter tabovi */}
        <div className="mb-8">
          <WLabel>Filter — kategorije (tabovi)</WLabel>
          <div className="flex flex-wrap gap-2">
            {kategorije.map((k, i) => (
              <div
                key={k}
                className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                  i === 0
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {k}
              </div>
            ))}
          </div>
        </div>

        {/* Rezultati + sort */}
        <div className="flex items-center justify-between mb-6">
          <WLabel>Broj rezultata</WLabel>
          <p className="text-sm text-gray-500">{proizvodi.length} proizvoda</p>
          <div>
            <WLabel>Sort — select</WLabel>
            <div className="h-9 border border-gray-200 rounded bg-white px-3 flex items-center gap-2 text-sm text-gray-500">
              Sortiraj: Popularnost ▾
            </div>
          </div>
        </div>

        {/* Produkt grid */}
        <WLabel>Produkt grid — 3 kolone desktop, 2 tablet, 1 mobil</WLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {proizvodi.map((p) => (
            <div
              key={p.naziv}
              className="flex flex-col border border-gray-200 rounded-[var(--card-radius)] overflow-hidden"
            >
              {/* Slika */}
              <div className="relative">
                <WBox h="h-48" label="SLIKA PROIZVODA" />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  {p.novo && (
                    <span className="px-2 py-0.5 bg-gray-900 text-white text-xs font-bold rounded">
                      NOVO
                    </span>
                  )}
                  {p.akcija && (
                    <span className="px-2 py-0.5 bg-gray-600 text-white text-xs font-bold rounded">
                      AKCIJA
                    </span>
                  )}
                </div>
              </div>

              {/* Sadržaj */}
              <div className="flex flex-col gap-3 p-[var(--card-padding)] flex-1">
                <WTag>{p.kategorija}</WTag>
                <p className="font-semibold text-gray-900 leading-snug">{p.naziv}</p>
                <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-lg font-bold text-gray-900">{p.cijena}</span>
                  <div className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded">
                    Dodaj u korpu
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </WSection>

      {/* ═══ KORPA — FLOATING ═══════════════════════════════
          UX: floating korpa dugme u donjem desnom uglu (mobile)
          Desktop: korpa ikona u headeru (već u headeru)
      ══════════════════════════════════════════════════ */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <WLabel>Floating korpa — mobile only</WLabel>
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 text-white text-sm font-semibold rounded-full shadow-lg">
          <div className="w-4 h-4 bg-white/30 rounded" />
          Korpa (0)
        </div>
      </div>

    </div>
  );
}
