// Wireframe — Homepage
import { WLabel, WBox, WSection, WSectionHeading, WBtn, WCheckItem } from "@/components/wireframe/W";

const usluge = [
  "Čišćenje stanova i kuća",
  "Čišćenje poslovnih prostora",
  "Generalno i dubinsko čišćenje",
  "Čišćenje nakon renoviranja",
  "Dubinsko pranje tepiha i namještaja",
];

const zasto = [
  { br: "01", naslov: "Sistemičan pristup", opis: "Svaki prostor tretiramo po protokolu — ništa se ne preskače, ništa se ne ostavlja slučaju." },
  { br: "02", naslov: "Pouzdani termini", opis: "Dolazimo kad kažemo. Završavamo na vrijeme. Bez iznenađenja i pregovaranja na licu mjesta." },
  { br: "03", naslov: "Profesionalna sredstva", opis: "Koristimo provjerena sredstva i opremu — efikasna, sigurna za stanare i domaće ljubimce." },
  { br: "04", naslov: "Dugoročni odnos", opis: "Nije nam cilj jedan posao — cilj nam je da budemo agencija kojoj se vraćate." },
];

export default function WireframeHomepage() {
  return (
    <div className="text-gray-900">

      {/* ═══ HERO ═══════════════════════════════════════════
          Cilj: prva impresija, primarni CTA, B2B escape ruta
          UX: lijevo, H1 > subtitle > CTA > B2B link
      ══════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-b border-gray-200 py-[var(--hero-py)] md:py-[var(--hero-py-lg)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-px)]">
          <div className="max-w-2xl flex flex-col gap-5">

            <div>
              <WLabel>Badge — lokacija / segment</WLabel>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-full w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                Prijedor i regija
              </div>
            </div>

            <div>
              <WLabel>H1 — primarni SEO keyword, max 10 riječi</WLabel>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Profesionalno čišćenje koje ne trebaš provjeravati
              </h1>
            </div>

            <div>
              <WLabel>Subtitle — pojašnjava H1, ne ponavlja ga</WLabel>
              <p className="text-lg text-gray-500 leading-relaxed">
                Delfin je agencija za profesionalno održavanje objekata u Prijedoru.
                Stanovi, kuće, poslovni prostori — sistemičan pristup, pouzdani termini,
                kvalitet koji se vidi.
              </p>
            </div>

            <div>
              <WLabel>CTA grupa — primarni (WhatsApp) + sekundarni (Usluge)</WLabel>
              <div className="flex flex-col sm:flex-row gap-3">
                <WBtn label="Pošalji upit na WhatsApp" variant="primary" />
                <WBtn label="Pogledaj usluge" variant="secondary" />
              </div>
            </div>

            <div>
              <WLabel>B2B escape ruta — ispod CTA, mali tekst</WLabel>
              <p className="text-sm text-gray-500">
                Firma ili poslovni prostor?{" "}
                <span className="font-semibold text-gray-700 underline">
                  Pogledaj ponudu za firme →
                </span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ TRUST BAR ══════════════════════════════════════
          Cilj: brza validacija, socijalni dokaz
          UX: kompaktno, 4 stavke u redu
      ══════════════════════════════════════════════════ */}
      <section className="border-b border-gray-200 py-[var(--section-py-sm)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-px)]">
          <WLabel>Trust bar — 4 brojke / činjenice</WLabel>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { broj: "5+", label: "godina iskustva" },
              { broj: "200+", label: "zadovoljnih klijenata" },
              { broj: "5", label: "vrsta usluga" },
              { broj: "Prijedor", label: "i regija" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-gray-900">{item.broj}</span>
                <span className="text-sm text-gray-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ USLUGE GRID ════════════════════════════════════
          Cilj: pregled svih usluga, klik na detalj
          UX: 3+2 grid, kartica = ikona + naziv + opis + link
      ══════════════════════════════════════════════════ */}
      <WSection bg="white">
        <WLabel>Usluge sekcija</WLabel>
        <WSection bg="white">
          <WSectionHeading
            label="Section heading"
            heading="Šta radimo"
            subtitle="Svaka usluga ima vlastiti protokol — nijedan prostor nije isti."
          />
        </WSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {usluge.map((naziv) => (
            <div key={naziv} className="flex flex-col gap-3 p-[var(--card-padding)] border border-gray-200 rounded-[var(--card-radius)]">
              <WBox w="w-10" h="h-10" label="ICO" />
              <p className="font-semibold text-gray-900">{naziv}</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Kratak opis usluge — šta je uključeno i za koga je namijenjena.
              </p>
              <div className="border-t border-gray-200 pt-3 mt-auto">
                <span className="text-sm font-semibold text-gray-600">Saznaj više →</span>
              </div>
            </div>
          ))}
        </div>
      </WSection>

      {/* ═══ CTA BANNER ═════════════════════════════════════
          Cilj: konverzija u sredini stranice
          UX: tamna pozadina, jedan CTA, bez distrakcija
      ══════════════════════════════════════════════════ */}
      <section className="bg-gray-900 py-[var(--section-py-lg)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-px)] text-center flex flex-col items-center gap-5">
          <WLabel>CTA banner — tamna pozadina, jedan CTA</WLabel>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Trebaš čišćenje? Javi se danas.
          </h2>
          <p className="text-gray-400 max-w-md">
            Odgovaramo brzo. Bez dugih formi i čekanja — jedan WhatsApp i dogovoreno je.
          </p>
          <WBtn label="Pošalji upit na WhatsApp" variant="white" />
        </div>
      </section>

      {/* ═══ ZAŠTO DELFIN ═══════════════════════════════════
          Cilj: diferencijacija od konkurencije
          UX: numerisane kartice 2x2, ikona + naslov + tekst
      ══════════════════════════════════════════════════ */}
      <WSection bg="gray">
        <WSectionHeading
          label="Section heading"
          heading="Zašto Delfin"
          subtitle="Nije dovoljno da je čisto — mora biti sigurno i predvidivo."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {zasto.map((s) => (
            <div key={s.br} className="flex gap-4 p-[var(--card-padding)] bg-white border border-gray-200 rounded-[var(--card-radius)]">
              <div className="flex-shrink-0 w-[var(--icon-size)] h-[var(--icon-size)] bg-gray-800 text-white text-sm font-bold rounded-[var(--icon-radius)] flex items-center justify-center">
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

    </div>
  );
}
