// Wireframe — /o-nama
// Cilj: izgraditi povjerenje kroz priču, ne kroz listu features
// UX: storytelling flow — Problem → Prekretnica → Rješenje → Vizija
// Copy skill: human ton, emotivno ali ne patetično, jedan emocionalni vrh

import {
  WLabel, WBox, WSection, WSectionHeading,
  WBtn, WBreadcrumb,
} from "@/components/wireframe/W";

const vrijednosti = [
  { br: "01", naslov: "Sistem ispred improvizacije", opis: "Svaki posao radimo po protokolu. Nije važno da li čistimo garsonjeru ili poslovni kompleks." },
  { br: "02", naslov: "Odgovornost bez izgovora", opis: "Ako nešto nije u redu — kažemo i rješavamo. Ne čekamo da klijent primijeti." },
  { br: "03", naslov: "Odnos je važniji od posla", opis: "Radije ćemo izgubiti jedan angažman nego izgubiti povjerenje klijenta." },
];

export default function WireframeONama() {
  return (
    <div className="text-gray-900">

      {/* ═══ PAGE HERO ══════════════════════════════════════
          Cilj: jasna orijentacija, uvod u priču
          UX: kompaktan, ne oversells — priča počinje ispod
      ══════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-px)]">
          <WBreadcrumb items={[{ label: "Početna" }, { label: "O nama" }]} />
          <WLabel>H1 — identitet, ne lista funkcija</WLabel>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Ko smo i zašto radimo ovaj posao
          </h1>
          <p className="text-lg text-gray-500 max-w-xl">
            Delfin nije nastao kao posao — nastao je iz frustracije što u Prijedoru
            nije postojala agencija kojoj možeš zaista vjerovati.
          </p>
        </div>
      </section>

      {/* ═══ PRIČA — PROBLEM ════════════════════════════════
          Copywriting skill: "O nama" počinje s problemom, ne s firminim features
          UX: tekst + slika, smjena lijevo/desno
      ══════════════════════════════════════════════════ */}
      <WSection bg="white">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 flex flex-col gap-4">
            <WLabel>Priča — korak 1: Problem (kako je bilo prije)</WLabel>
            <h2 className="text-2xl font-bold text-gray-900">
              Čišćenje je uvijek bio "nekako"
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Svako je imao svoje iskustvo — netko dođe, nešto uradi, nema garancije
              da će se ponoviti na isti način. Nema protokola, nema odgovornosti,
              nema predvidivosti. Svaki put nova igra.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Upravo to je bio svakodnevni problem vlasnika prostora u Prijedoru.
              Ne nedostatak radne snage — nedostatak sistema.
            </p>
          </div>
          <div className="w-full lg:w-96 flex-shrink-0">
            <WLabel>Slika — fotografija prostora / terena</WLabel>
            <WBox h="h-64" label="FOTOGRAFIJA" />
          </div>
        </div>
      </WSection>

      {/* ═══ PRIČA — PREKRETNICA ════════════════════════════
          Copywriting skill: zašto je ovo nastalo
          UX: tekst centriran, emotivni vrh priče
      ══════════════════════════════════════════════════ */}
      <WSection bg="gray">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-4">
          <WLabel>Priča — korak 2: Prekretnica (zašto je Delfin nastao)</WLabel>
          <h2 className="text-2xl font-bold text-gray-900">
            Onda smo odlučili da to promijenimo
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Delfin je osnovan s jednom idejom: da profesionalno čišćenje
            u Prijedoru konačno znači isto što i u većim gradovima.
            Sistem, protokol, tim koji se vraća, rezultat koji se vidi.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Ne agencija koja obećava sve — agencija koja isporučuje ono
            što dogovori.
          </p>
        </div>
      </WSection>

      {/* ═══ PRIČA — RJEŠENJE + TIM ═════════════════════════
          Copywriting skill: šta radite drugačije
          UX: tekst lijevo + fotografija vlasnika desno
      ══════════════════════════════════════════════════ */}
      <WSection bg="white">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="flex-1 flex flex-col gap-4">
            <WLabel>Priča — korak 3: Rješenje (šta radimo drugačije)</WLabel>
            <h2 className="text-2xl font-bold text-gray-900">
              Svaki prostor, isti standard
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Razvili smo vlastiti protokol za svaku vrstu čišćenja.
              Svaki tim zna tačno šta radi, kojim redoslijedom i šta se provjerava
              na kraju. Klijent ne treba da objašnjava dva puta.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Koristimo provjerena profesionalna sredstva, dolazimo opremljeni
              i odgovorni smo za prostor koji nam povjerite.
            </p>
          </div>

          {/* Vlasnik / tim */}
          <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-4">
            <WLabel>Fotografija vlasnika / tima (vlasnik dostavlja)</WLabel>
            <WBox h="h-72" label="FOTOGRAFIJA — vlasnik / tim" />
            <div className="p-4 border border-gray-200 rounded-[var(--card-radius)]">
              <WLabel>Potpis — ime i uloga</WLabel>
              <p className="font-semibold text-gray-900">[Ime vlasnika]</p>
              <p className="text-sm text-gray-500">Osnivač, Delfin Prijedor</p>
            </div>
          </div>
        </div>
      </WSection>

      {/* ═══ VRIJEDNOSTI ════════════════════════════════════
          Cilj: konkretizovati "šta radimo drugačije" kroz 3 principa
          UX: horizontalne kartice, numerisane
      ══════════════════════════════════════════════════ */}
      <WSection bg="gray">
        <WSectionHeading
          label="Vrijednosti"
          heading="Principi po kojima radimo"
          subtitle="Ne misija, ne vizija — konkretna pravila po kojima donosimo odluke."
        />
        <div className="flex flex-col gap-4">
          {vrijednosti.map((v) => (
            <div
              key={v.br}
              className="flex gap-5 p-[var(--card-padding)] bg-white border border-gray-200 rounded-[var(--card-radius)]"
            >
              <div className="flex-shrink-0 w-[var(--icon-size)] h-[var(--icon-size)] bg-gray-800 text-white text-xs font-bold rounded-[var(--icon-radius)] flex items-center justify-center">
                {v.br}
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="font-semibold text-gray-900">{v.naslov}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{v.opis}</p>
              </div>
            </div>
          ))}
        </div>
      </WSection>

      {/* ═══ PRIČA — VIZIJA ═════════════════════════════════
          Copywriting skill: korak 4 — kuda idemo
          UX: kratak, bez pompeznosti
      ══════════════════════════════════════════════════ */}
      <WSection bg="white">
        <div className="max-w-2xl flex flex-col gap-4">
          <WLabel>Priča — korak 4: Vizija (kuda idemo)</WLabel>
          <h2 className="text-2xl font-bold text-gray-900">
            Kuda idemo
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Cilj nije biti najveća agencija za čišćenje u Bosni.
            Cilj je biti agencija kojoj klijenti u Prijedoru i regiji
            bezuvjetno vjeruju — i kojoj se vraćaju godinama.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Rast za nas znači bolji servis, ne samo više klijenata.
          </p>
        </div>
      </WSection>

      {/* ═══ CTA ════════════════════════════════════════════
          Cilj: konverzija nakon čitanja priče
          UX: human CTA — ne "kupi", nego "razgovaraj"
      ══════════════════════════════════════════════════ */}
      <section className="bg-gray-900 py-[var(--section-py-lg)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-px)] text-center flex flex-col items-center gap-5">
          <WLabel>CTA — human, ne prodajni</WLabel>
          <h2 className="text-2xl font-bold text-white">
            Hajmo se upoznati
          </h2>
          <p className="text-gray-400 max-w-md">
            Najlakši korak je jedna poruka. Opiši šta trebaš —
            mi ćemo predložiti kako možemo pomoći.
          </p>
          <WBtn label="Pošalji poruku na WhatsApp" variant="white" />
        </div>
      </section>

    </div>
  );
}
