// Wireframe — /usluge/[slug] (Detalj usluge)
// Primjer: Čišćenje stanova i kuća
// Cilj: korisnik s Googlea razumije šta dobija i šalje upit
// UX: dvije kolone na desktopu — sadržaj lijevo, sticky CTA desno

import {
  WLabel, WBox, WSection, WBtn,
  WBreadcrumb, WTag, WCheckItem,
} from "@/components/wireframe/W";

const stavke = [
  "Dnevni boravak i spavaće sobe",
  "Kupatilo i WC — detaljno čišćenje i dezinfekcija",
  "Kuhinja — površine, uređaji, sudopera",
  "Podovi — usisavanje i pranje",
  "Prozori iznutra",
  "Prašina sa svih dostupnih površina",
];

const proces = [
  { br: "01", naslov: "Upit i dogovor", opis: "Pošalješ upit na WhatsApp. U roku od par sati dogovorimo termin, vrstu čišćenja i okvirnu cijenu." },
  { br: "02", naslov: "Dolazak tima", opis: "Dolazimo opremljeni — sredstva i oprema su naša. Nema potrebe da pripremate ništa." },
  { br: "03", naslov: "Čišćenje po protokolu", opis: "Radimo sistematično, prostorija po prostorija. Ništa se ne preskače." },
  { br: "04", naslov: "Provjera i predaja", opis: "Po završetku provjeri rezultat. Ako nešto nije kako treba — rješavamo odmah." },
];

const faq = [
  { q: "Koliko košta čišćenje stana?", a: "Cijena zavisi od veličine i stanja prostora. Kontaktiraj nas za okvirnu procjenu — odgovaramo brzo." },
  { q: "Da li trebam biti kod kuće?", a: "Ne mora. Mnogi klijenti nam ostave ključeve. Sve je osigurano i odgovorni smo za prostor." },
  { q: "Koja sredstva koristite?", a: "Koristimo profesionalna sredstva koja su sigurna za stanare, djecu i kućne ljubimce." },
  { q: "Radite li vikendom?", a: "Da, radimo subotom. Termine dogovaramo individualno prema vašim potrebama." },
];

export default function WireframeUslugaDetalj() {
  return (
    <div className="text-gray-900">

      {/* ═══ PAGE HERO ══════════════════════════════════════
          Cilj: orijentacija, SEO H1 s uslugom i lokacijom
          UX: breadcrumb + H1 + tag + subtitle + mobile CTA
      ══════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-b border-gray-200 py-10 md:py-14">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-px)]">
          <WBreadcrumb items={[
            { label: "Početna" },
            { label: "Usluge", href: "/wireframe/usluge" },
            { label: "Čišćenje stanova i kuća" },
          ]} />

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-xl">
              <WLabel>H1 — usluga + lokacija</WLabel>
              <WTag>Privatni korisnici</WTag>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-3">
                Čišćenje stanova i kuća u Prijedoru
              </h1>
              <p className="text-lg text-gray-500">
                Temeljito, pouzdano i bez stresa — dolazimo opremljeni,
                radimo po protokolu, prostor predajemo spreman.
              </p>
            </div>

            {/* Mobile CTA — vidljiv samo na mobilnom */}
            <div className="md:hidden flex flex-col gap-3">
              <WLabel>Mobile CTA — ispod H1</WLabel>
              <WBtn label="Pošalji upit na WhatsApp" variant="primary" fullWidth />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GLAVNI SADRŽAJ — 2 kolone ══════════════════════
          Lijevo: sadržaj (šta uključuje, proces, FAQ)
          Desno: sticky CTA kartica (desktop only)
          UX: korisnik čita lijevo, CTA uvijek dostupan desno
      ══════════════════════════════════════════════════ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-px)]">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* ── Lijeva kolona — sadržaj ─────────────────── */}
            <div className="flex-1 flex flex-col gap-12">

              {/* Šta je uključeno */}
              <div>
                <WLabel>Šta je uključeno — lista stavki</WLabel>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Šta uključuje ova usluga
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {stavke.map((s) => (
                    <WCheckItem key={s}>{s}</WCheckItem>
                  ))}
                </ul>
              </div>

              {/* Slika — placeholder */}
              <div>
                <WLabel>Slika — fotografija s terena (vlasnik dostavlja)</WLabel>
                <WBox h="h-56 md:h-72" label="FOTOGRAFIJA — čišćenje stana" />
              </div>

              {/* Proces — kako funkcioniše */}
              <div>
                <WLabel>Proces — 4 koraka</WLabel>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Kako funkcioniše
                </h2>
                <div className="flex flex-col gap-3">
                  {proces.map((k) => (
                    <div
                      key={k.br}
                      className="flex gap-4 p-[var(--card-padding)] border border-gray-200 rounded-[var(--card-radius)]"
                    >
                      <div className="flex-shrink-0 w-[var(--icon-size)] h-[var(--icon-size)] bg-gray-800 text-white text-xs font-bold rounded-[var(--icon-radius)] flex items-center justify-center">
                        {k.br}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-0.5">{k.naslov}</p>
                        <p className="text-sm text-gray-500 leading-relaxed">{k.opis}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <WLabel>FAQ — 4 pitanja (SEO + konverzija)</WLabel>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Često postavljana pitanja
                </h2>
                <div className="flex flex-col gap-3">
                  {faq.map((item) => (
                    <div
                      key={item.q}
                      className="p-[var(--card-padding)] border border-gray-200 rounded-[var(--card-radius)]"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-900">{item.q}</p>
                        <WLabel>[ accordion toggle ]</WLabel>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ── Desna kolona — sticky CTA kartica ──────── */}
            <div className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24 flex flex-col gap-4 p-[var(--card-padding)] border border-gray-200 rounded-[var(--card-radius)] bg-white">
                <WLabel>Sticky CTA kartica — desktop</WLabel>

                <h3 className="font-bold text-gray-900 text-lg">
                  Zatraži upit
                </h3>
                <p className="text-sm text-gray-500">
                  Opiši prostor i termin koji ti odgovara — odgovaramo brzo.
                </p>

                <div className="border-t border-gray-200 pt-4 flex flex-col gap-2">
                  <WLabel>Šta dobijaš</WLabel>
                  {["Besplatna procjena", "Dolazak opremljenih", "Garancija kvaliteta"].map((s) => (
                    <WCheckItem key={s}>{s}</WCheckItem>
                  ))}
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <WBtn label="Pošalji upit na WhatsApp" variant="primary" fullWidth />
                  <p className="text-xs text-gray-400 text-center">
                    Odgovaramo u roku od par sati
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═════════════════════════════════════
          Cilj: hvatanje korisnika koji su scrollali do dna
          UX: tamna sekcija, jedna poruka, jedan CTA
      ══════════════════════════════════════════════════ */}
      <section className="bg-gray-900 py-[var(--section-py-lg)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-px)] text-center flex flex-col items-center gap-5">
          <WLabel>Bottom CTA — tamna pozadina</WLabel>
          <h2 className="text-2xl font-bold text-white">
            Spreman za čist stan bez napora?
          </h2>
          <p className="text-gray-400 max-w-sm">
            Jedan WhatsApp i dogovoreno je. Dolazimo u Prijedor i okolinu.
          </p>
          <WBtn label="Pošalji upit na WhatsApp" variant="white" />
        </div>
      </section>

    </div>
  );
}
