import Link from "next/link";
import { CurveRight, CurveLeft } from "@/components/ui/Curves";

const WHATSAPP_URL = "https://wa.me/38766246346";

const usluge = [
  {
    naziv: "Čišćenje stanova i kuća",
    opis: "Redovno i jednokratno čišćenje stambenih prostora — temeljito, pouzdano, bez stresa.",
    href: "/usluge/ciscenje-stanova-i-kuca",
    ikona: "🏠",
  },
  {
    naziv: "Čišćenje poslovnih prostora",
    opis: "Čisto radno okruženje za vaš tim — fleksibilni termini koji ne ometaju posao.",
    href: "/usluge/ciscenje-poslovnih-prostora",
    ikona: "🏢",
  },
  {
    naziv: "Generalno i dubinsko čišćenje",
    opis: "Kada redovno čišćenje nije dovoljno — kompletna obnova prostora od poda do plafona.",
    href: "/usluge/generalno-i-dubinsko-ciscenje",
    ikona: "✨",
  },
  {
    naziv: "Čišćenje nakon renoviranja",
    opis: "Prašina, boja, malter — uklanjamo sve što ostaje nakon radova. Prostor spreman za useljenje.",
    href: "/usluge/ciscenje-nakon-renoviranja",
    ikona: "🔨",
  },
  {
    naziv: "Dubinsko pranje tepiha i namještaja",
    opis: "Ručno dubinsko pranje tepiha, sofa i tapaciranog namještaja — bez mašina, bez kompromisa.",
    href: "/usluge/dubinsko-pranje-tepisa",
    ikona: "🛋️",
  },
];

const zasto = [
  {
    naslov: "Sistemičan pristup",
    opis: "Svaki prostor tretiramo po protokolu — ništa se ne preskače, ništa se ne ostavlja slučaju.",
    broj: "01",
  },
  {
    naslov: "Pouzdani termini",
    opis: "Dolazimo kad kažemo. Završavamo na vrijeme. Bez iznenađenja i pregovaranja na licu mjesta.",
    broj: "02",
  },
  {
    naslov: "Profesionalna sredstva",
    opis: "Koristimo provjerena sredstva i opremu — efikasna, sigurna za stanare i domaće ljubimce.",
    broj: "03",
  },
  {
    naslov: "Dugoročni odnos",
    opis: "Nije nam cilj jedan posao — cilj nam je da budemo agencija kojoj se vraćate.",
    broj: "04",
  },
];

/* ─── Stranica ──────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>

      {/* ═══════════════════════════════════════════
          HERO — tamna pozadina, animirani krugovi
      ═══════════════════════════════════════════ */}
      <section className="relative bg-[var(--color-primary)] min-h-screen flex flex-col justify-center pt-40 pb-20 md:pb-24">

        {/* Animirani krugovi — izolovani od overflow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute bottom-[-5rem] left-[8%] w-[560px] h-[560px] rounded-full bg-[var(--color-secondary)] opacity-55 blur-2xl"
            style={{
              boxShadow: "0 0 140px 60px rgba(26,86,176,0.40)",
              animation: "blob-drift 13s ease-in-out infinite",
              willChange: "transform",
            }}
          />
          <div
            className="absolute bottom-[-9rem] left-[38%] w-[680px] h-[680px] rounded-full bg-[#2563EB] opacity-40 blur-2xl"
            style={{
              boxShadow: "0 0 180px 80px rgba(37,99,235,0.30)",
              animation: "blob-drift-alt 18s ease-in-out infinite",
              willChange: "transform",
            }}
          />
        </div>

        {/* Sadržaj */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">

          <span className="inline-flex items-center gap-1.5 mb-8 px-3 py-1.5 bg-white/10 border border-white/20 text-white/90 text-sm font-medium rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            Prijedor i regija
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-10">
            Profesionalno čišćenje<br />koje ne trebaš provjeravati
          </h1>

          <div className="flex justify-end">
            <div className="w-full max-w-sm flex flex-col gap-6">
              <p className="text-base text-white/60 leading-relaxed">
                Stanovi, kuće, poslovni prostori — sistemičan pristup, pouzdani termini, kvalitet koji se vidi.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                    shadow-[0_4px_18px_rgba(74,85,104,0.50)]
                    hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(74,85,104,0.65)] hover:bg-[#3a4255]
                    active:translate-y-0 active:shadow-[0_2px_8px_rgba(74,85,104,0.35)] active:scale-[0.98]"
                >
                  Pošalji upit na WhatsApp
                </a>
                <Link
                  href="/usluge"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#6B7A8D] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                    shadow-[0_4px_18px_rgba(107,122,141,0.45)]
                    hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(107,122,141,0.60)] hover:bg-[#5a6a7d]
                    active:translate-y-0 active:shadow-[0_2px_8px_rgba(107,122,141,0.30)] active:scale-[0.98]"
                >
                  Pogledaj usluge
                </Link>
              </div>
              <p className="text-xs text-white/35">
                Firma ili poslovni prostor?{" "}
                <Link href="/firme" className="text-white/60 font-semibold hover:text-white transition-colors underline underline-offset-2">
                  Ponuda za firme →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Prijelaz → bijela, desna krivina */}
        <CurveRight fill="#FFFFFF" />
      </section>


      {/* ═══════════════════════════════════════════
          TRUST BAR + USLUGE — bijela sekcija
      ═══════════════════════════════════════════ */}
      <section className="relative bg-white pt-14 pb-24 md:pb-28">

        {/* Trust bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">

          {/* Divider — ista krivulja kao sekcijski prijelaz (desna) */}
          <div className="mb-10" aria-hidden="true">
            <svg viewBox="0 0 1440 28" preserveAspectRatio="none" className="w-full h-5 md:h-6" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 Q480,28 1440,8" fill="none" stroke="#D1DCF0" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Stats sa vertikalnim linijama */}
          <div className="grid grid-cols-2 md:flex md:items-center text-center">
            {[
              { broj: "5+",       label: "godina iskustva"       },
              { broj: "200+",     label: "zadovoljnih klijenata" },
              { broj: "5",        label: "vrsta usluga"          },
              { broj: "Prijedor", label: "i regija"              },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col gap-1 py-4 md:py-0 md:flex-1 md:px-8
                  ${i !== 0 ? "md:border-l md:border-[var(--color-border)]" : ""}
                  ${i % 2 !== 0 ? "border-l border-[var(--color-border)] md:border-l" : ""}
                `}
              >
                <span className="text-2xl font-bold text-[var(--color-primary)]">{item.broj}</span>
                <span className="text-sm text-[var(--color-muted)] font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Divider — ista krivulja kao sekcijski prijelaz (lijeva) */}
          <div className="mt-10" aria-hidden="true">
            <svg viewBox="0 0 1440 28" preserveAspectRatio="none" className="w-full h-5 md:h-6" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,8 Q960,28 1440,0" fill="none" stroke="#D1DCF0" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

        </div>

        {/* Usluge */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-2">Usluge</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] tracking-tight">
              Šta radimo
            </h2>
            <p className="text-[var(--color-muted)] mt-3 max-w-md">
              Svaka usluga ima vlastiti protokol — nijedan prostor nije isti.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">

            {/* 5 usluga */}
            {usluge.map((usluga) => (
              <Link
                key={usluga.href}
                href={usluga.href}
                className="group flex flex-col gap-4 p-5 bg-white border border-[var(--color-border)] rounded-[var(--radius-xl)] transition-all duration-150 min-h-[220px]
                  shadow-[0_2px_12px_rgba(10,45,110,0.07)]
                  hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(10,45,110,0.13)] hover:border-[var(--color-primary)]/20
                  active:translate-y-0 active:shadow-[0_2px_8px_rgba(10,45,110,0.08)] active:scale-[0.99]"
              >
                <span className="w-10 h-10 flex items-center justify-center bg-[var(--color-bg-alt)] text-[var(--color-accent)] rounded-[var(--radius-lg)] text-lg group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-200 flex-shrink-0">
                  {usluga.ikona}
                </span>
                <h3 className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-snug flex-1">
                  {usluga.naziv}
                </h3>
                <span className="text-xs font-semibold text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors mt-auto">
                  Saznaj više →
                </span>
              </Link>
            ))}

            {/* 6. kartica — CTA */}
            <Link
              href="/usluge"
              className="group flex flex-col justify-between p-5 bg-[var(--color-primary)] border border-[var(--color-primary)] rounded-[var(--radius-xl)] transition-all duration-150 min-h-[220px]
                shadow-[0_2px_12px_rgba(10,45,110,0.25)]
                hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(10,45,110,0.40)] hover:bg-[var(--color-primary-hover)]
                active:translate-y-0 active:shadow-[0_2px_8px_rgba(10,45,110,0.20)] active:scale-[0.99]"
            >
              <span className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-[var(--radius-lg)] text-lg flex-shrink-0">
                →
              </span>
              <div className="flex flex-col gap-1 mt-auto">
                <h3 className="text-sm font-semibold text-white leading-snug">
                  Sve usluge
                </h3>
                <p className="text-xs text-white/55">
                  Pogledaj kompletnu ponudu
                </p>
              </div>
            </Link>

          </div>
        </div>

        {/* Prijelaz → tamna, lijeva krivina */}
        <CurveLeft fill="#0A2D6E" />
      </section>


      {/* ═══════════════════════════════════════════
          CTA BANNER — tamna sekcija
      ═══════════════════════════════════════════ */}
      <section className="relative bg-[var(--color-primary)] pt-24 md:pt-28 pb-24 md:pb-28">

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Kontakt</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight max-w-lg">
            Trebaš čišćenje?<br />Javi se danas.
          </h2>
          <p className="text-white/55 max-w-sm leading-relaxed">
            Odgovaramo brzo. Bez dugih formi i čekanja — jedan WhatsApp i dogovoreno je.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
              shadow-[0_4px_18px_rgba(74,85,104,0.50)]
              hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(74,85,104,0.65)] hover:bg-[#3a4255]
              active:translate-y-0 active:shadow-[0_2px_8px_rgba(74,85,104,0.35)] active:scale-[0.98]"
          >
            Pošalji upit na WhatsApp
          </a>
        </div>

        {/* Prijelaz → bg-alt, desna krivina */}
        <CurveRight fill="#EFF5FB" />
      </section>


      {/* ═══════════════════════════════════════════
          ZAŠTO DELFIN — bg-alt sekcija
      ═══════════════════════════════════════════ */}
      <section className="relative bg-[var(--color-bg-alt)] pt-24 md:pt-28 pb-24 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-2">Zašto mi</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] tracking-tight">
              Zašto Delfin
            </h2>
            <p className="text-[var(--color-muted)] mt-3 max-w-md">
              Nije dovoljno da je čisto — mora biti sigurno i predvidivo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {zasto.map((stavka) => (
              <div
                key={stavka.naslov}
                className="flex gap-5 p-6 bg-white border border-[var(--color-border)] rounded-[var(--radius-xl)]"
              >
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[var(--color-primary)] text-white text-sm font-bold rounded-full">
                  {stavka.broj}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold text-[var(--color-text)]">{stavka.naslov}</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{stavka.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prijelaz → footer (tamna), lijeva krivina */}
        <CurveLeft fill="#0A2D6E" />
      </section>

    </>
  );
}
