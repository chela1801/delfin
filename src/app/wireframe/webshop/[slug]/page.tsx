// Wireframe — /webshop/[slug] (Detalj proizvoda)
// Cilj: korisnik vidi sve o proizvodu i doda u korpu
// UX: slika lijevo + info desno (sticky), opis + upotreba ispod

import { WLabel, WBox, WSection, WBtn, WBreadcrumb, WTag, WCheckItem } from "@/components/wireframe/W";

const povezani = [
  "Mikrofiber krpe — set 10 kom",
  "Raspršivač s okidačem — profesionalni",
  "Starter set za novo domaćinstvo",
];

export default function WireframeProizvodDetalj() {
  return (
    <div className="text-gray-900">

      {/* ═══ BREADCRUMB ══════════════════════════════════ */}
      <section className="border-b border-gray-200 py-4">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-px)]">
          <WBreadcrumb items={[
            { label: "Početna" },
            { label: "Webshop" },
            { label: "Sredstvo za dubinsko čišćenje podova" },
          ]} />
        </div>
      </section>

      {/* ═══ PRODUKT — 2 KOLONE ═════════════════════════════
          Lijevo: galerija slika
          Desno: naziv, cijena, dodaj u korpu — sticky
          UX: sticky desna kolona prati scroll kroz opis
      ══════════════════════════════════════════════════ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-px)]">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* ── Lijevo — galerija ──────────────────────── */}
            <div className="flex-1 flex flex-col gap-3">
              <WLabel>Glavna slika proizvoda</WLabel>
              <WBox h="h-80 md:h-96" label="GLAVNA SLIKA" />
              <div className="flex gap-2">
                <WLabel>Thumbnail galerija — 4 slike</WLabel>
                {[1, 2, 3, 4].map((i) => (
                  <WBox key={i} w="w-20" h="h-20" label={`${i}`} />
                ))}
              </div>
            </div>

            {/* ── Desno — info + kupovina ─────────────────── */}
            <div className="w-full lg:w-96 flex-shrink-0">
              <div className="sticky top-24 flex flex-col gap-5">
                <WLabel>Sticky info panel — desktop</WLabel>

                <div className="flex flex-col gap-3">
                  <WTag>Sredstva za čišćenje</WTag>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Sredstvo za dubinsko čišćenje podova
                  </h1>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Profesionalno sredstvo za dubinsko čišćenje svih vrsta podova.
                    Efikasno uklanja masnoće i prljavštinu, sigurno za ljude i kućne ljubimce.
                  </p>
                </div>

                {/* Cijena + količina */}
                <div className="flex flex-col gap-3 py-4 border-y border-gray-200">
                  <div className="flex items-center justify-between">
                    <WLabel>Cijena</WLabel>
                    <span className="text-2xl font-bold text-gray-900">12,90 KM</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <WLabel>Količina</WLabel>
                    <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                      <div className="w-10 h-10 flex items-center justify-center text-gray-500 font-bold border-r border-gray-200">−</div>
                      <div className="w-12 h-10 flex items-center justify-center font-semibold">1</div>
                      <div className="w-10 h-10 flex items-center justify-center text-gray-500 font-bold border-l border-gray-200">+</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <WBtn label="Dodaj u korpu" variant="primary" fullWidth />
                  <WBtn label="Kupi odmah" variant="secondary" fullWidth />
                </div>

                {/* Benefiti */}
                <div className="flex flex-col gap-2">
                  <WLabel>Benefiti — dostava i sigurnost</WLabel>
                  {[
                    "Dostava na adresu u Prijedoru",
                    "Plaćanje pouzećem",
                    "Povrat u roku od 14 dana",
                  ].map((b) => (
                    <WCheckItem key={b}>{b}</WCheckItem>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ OPIS PROIZVODA ═════════════════════════════════
          Cilj: detaljan opis, upotreba, sastav
          UX: tabovi — Opis / Upotreba / Specifikacije
      ══════════════════════════════════════════════════ */}
      <WSection bg="gray" border="top">
        <WLabel>Tabovi — Opis / Upotreba / Specifikacije</WLabel>
        <div className="flex gap-4 border-b border-gray-200 mb-6">
          {["Opis", "Upotreba", "Specifikacije"].map((t, i) => (
            <div
              key={t}
              className={`pb-3 text-sm font-semibold cursor-pointer ${
                i === 0
                  ? "border-b-2 border-gray-900 text-gray-900"
                  : "text-gray-400"
              }`}
            >
              {t}
            </div>
          ))}
        </div>

        <div className="max-w-2xl flex flex-col gap-3">
          <WLabel>Aktivan tab: Opis</WLabel>
          <p className="text-gray-600 leading-relaxed">
            Profesionalno sredstvo za dubinsko čišćenje svih vrsta podova —
            parket, laminat, keramika, kamen. Posebno formulisano za
            uklanjanje tvrdokornih mrlja i masnoća bez oštećivanja površine.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Sigurno za djecu i kućne ljubimce nakon sušenja.
            Ne ostavlja tragove ni miris.
          </p>
        </div>
      </WSection>

      {/* ═══ POVEZANI PROIZVODI ══════════════════════════════
          Cilj: upsell — korisnik kupi i nešto uz glavni proizvod
          UX: horizontalni scroll na mobilnom, 3 kartice na desktopu
      ══════════════════════════════════════════════════ */}
      <WSection bg="white">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Možda te zanima i
        </h2>
        <WLabel>Povezani proizvodi — 3 kartice</WLabel>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {povezani.map((naziv) => (
            <div
              key={naziv}
              className="flex flex-col border border-gray-200 rounded-[var(--card-radius)] overflow-hidden"
            >
              <WBox h="h-36" label="SLIKA" />
              <div className="p-4 flex flex-col gap-2">
                <p className="font-semibold text-gray-900 text-sm leading-snug">{naziv}</p>
                <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                  <span className="font-bold text-gray-900 text-sm">— KM</span>
                  <div className="px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded">
                    Dodaj
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </WSection>

    </div>
  );
}
