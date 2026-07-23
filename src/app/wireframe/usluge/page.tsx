// Wireframe — /usluge (Pregled usluga)
import { WLabel, WBox, WSection, WBtn, WBreadcrumb, WTag, WCheckItem } from "@/components/wireframe/W";

const usluge = [
  {
    slug: "ciscenje-stanova-i-kuca",
    naziv: "Čišćenje stanova i kuća",
    opis: "Redovno i jednokratno čišćenje stambenih prostora — temeljito, pouzdano, bez stresa.",
    detalji: ["Dnevni boravak i spavaće sobe", "Kupatilo i kuhinja", "Podovi, prozori, prašina"],
    za: "Privatni korisnici",
  },
  {
    slug: "ciscenje-poslovnih-prostora",
    naziv: "Čišćenje poslovnih prostora",
    opis: "Čisto radno okruženje za vaš tim — fleksibilni termini koji ne ometaju posao.",
    detalji: ["Kancelarije i sale", "Sanitarni čvorovi", "Hodnici i zajednički prostori"],
    za: "Firme i poslovni prostori",
  },
  {
    slug: "generalno-i-dubinsko-ciscenje",
    naziv: "Generalno i dubinsko čišćenje",
    opis: "Kada redovno čišćenje nije dovoljno — kompletna obnova prostora od poda do plafona.",
    detalji: ["Kompletno čišćenje po protokolu", "Teško dostupna mjesta", "Dezinfekcija površina"],
    za: "Stanovi, kuće, poslovni prostori",
  },
  {
    slug: "ciscenje-nakon-renoviranja",
    naziv: "Čišćenje nakon renoviranja",
    opis: "Prašina, boja, malter — uklanjamo sve što ostaje nakon radova.",
    detalji: ["Uklanjanje građevinskog otpada", "Čišćenje premaza i fleka", "Finalno poliranje"],
    za: "Stanovi i kuće nakon radova",
  },
  {
    slug: "dubinsko-pranje-tepisa",
    naziv: "Dubinsko pranje tepiha i namještaja",
    opis: "Ručno dubinsko pranje tepiha, sofa i tapaciranog namještaja — bez mašina, bez kompromisa.",
    detalji: ["Tepisi i kilimi", "Sofe i fotelje", "Tapaciran namještaj"],
    za: "Privatni korisnici i firme",
  },
];

export default function WireframeUsluge() {
  return (
    <div className="text-gray-900">

      {/* ═══ PAGE HERO ══════════════════════════════════════
          Cilj: orijentacija, SEO H1, breadcrumb
          UX: kompaktan, ne ponavlja homepage hero
      ══════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-px)]">
          <WBreadcrumb items={[{ label: "Početna" }, { label: "Usluge" }]} />
          <WLabel>H1 — SEO keyword "čišćenje Prijedor"</WLabel>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Usluge profesionalnog čišćenja u Prijedoru
          </h1>
          <p className="text-lg text-gray-500 max-w-xl">
            Pet specijalizovanih usluga — svaka s vlastitim protokolom i timom.
            Izaberi ono što ti treba ili nas pitaj ako nisi siguran.
          </p>
        </div>
      </section>

      {/* ═══ LISTA USLUGA ═══════════════════════════════════
          Cilj: svaka usluga vidljiva, lako skenirati, klik na detalj
          UX: horizontalna kartica — ikona + naziv + detalji + 2 CTA
          Razlog za listu (ne grid): više prostora za sadržaj
      ══════════════════════════════════════════════════ */}
      <WSection bg="white">
        <WLabel>Lista usluga — horizontalne kartice</WLabel>
        <div className="flex flex-col gap-4">
          {usluge.map((usluga, i) => (
            <div
              key={usluga.slug}
              className="flex flex-col md:flex-row gap-6 p-[var(--card-padding)] border border-gray-200 rounded-[var(--card-radius)] bg-white"
            >
              {/* Lijeva strana — ikona + redni broj */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <WBox w="w-12" h="h-12" label="ICO" />
                <span className="text-xs text-gray-400 font-bold">0{i + 1}</span>
              </div>

              {/* Sredina — sadržaj */}
              <div className="flex-1 flex flex-col gap-3">
                <div>
                  <WLabel>Za koga — segment tag</WLabel>
                  <WTag>{usluga.za}</WTag>
                  <h2 className="text-xl font-bold text-gray-900 mt-2">{usluga.naziv}</h2>
                  <p className="text-gray-500 mt-1">{usluga.opis}</p>
                </div>
                <div>
                  <WLabel>Šta je uključeno — 3 stavke</WLabel>
                  <ul className="flex flex-col gap-1">
                    {usluga.detalji.map((d) => (
                      <WCheckItem key={d}>{d}</WCheckItem>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Desna strana — 2 CTA */}
              <div className="flex-shrink-0 flex flex-col justify-center gap-3 md:w-40">
                <WLabel>2 CTA — detalj + direktni upit</WLabel>
                <WBtn label="Saznaj više →" variant="primary" fullWidth />
                <WBtn label="WhatsApp upit" variant="ghost" fullWidth />
              </div>

            </div>
          ))}
        </div>
      </WSection>

      {/* ═══ ESCAPE SEKCIJA ═════════════════════════════════
          Cilj: hvatanje korisnika koji ne znaju šta trebaju
          UX: kratka, direktan WhatsApp CTA
      ══════════════════════════════════════════════════ */}
      <section className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-px)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <WLabel>Nisi siguran — escape sekcija</WLabel>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Nisi siguran koja usluga ti treba?
            </h2>
            <p className="text-gray-500">
              Opiši nam prostor i situaciju — savjetujemo besplatno.
            </p>
          </div>
          <WBtn label="Pošalji upit na WhatsApp" variant="primary" />
        </div>
      </section>

    </div>
  );
}
