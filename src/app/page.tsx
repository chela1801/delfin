import Link from "next/link";
import { Home, Building2, Sparkles, HardHat, Sofa, ArrowRight, type LucideIcon } from "lucide-react";
import { CurveRight, CurveLeft } from "@/components/ui/Curves";
import HeroBg from "@/components/ui/HeroBg";
import HeroPhoto from "@/components/ui/HeroPhoto";
import ContactButton from "@/components/ui/ContactButton";

const WHATSAPP_URL = "https://wa.me/38766246346";

const usluge: { naziv: string; opis: string; href: string; Ikona: LucideIcon }[] = [
  {
    naziv: "Čišćenje stanova i kuća",
    opis: "Redovno i jednokratno čišćenje stambenih prostora — temeljito, pouzdano, bez stresa.",
    href: "/usluge/ciscenje-stanova-i-kuca",
    Ikona: Home,
  },
  {
    naziv: "Čišćenje poslovnih prostora",
    opis: "Čisto radno okruženje za vaš tim — fleksibilni termini koji ne ometaju posao.",
    href: "/usluge/ciscenje-poslovnih-prostora",
    Ikona: Building2,
  },
  {
    naziv: "Generalno i dubinsko čišćenje",
    opis: "Kada redovno čišćenje nije dovoljno — kompletna obnova prostora od poda do plafona.",
    href: "/usluge/generalno-i-dubinsko-ciscenje",
    Ikona: Sparkles,
  },
  {
    naziv: "Čišćenje nakon renoviranja",
    opis: "Prašina, boja, malter — uklanjamo sve što ostaje nakon radova. Prostor spreman za useljenje.",
    href: "/usluge/ciscenje-nakon-renoviranja",
    Ikona: HardHat,
  },
  {
    naziv: "Dubinsko pranje namještaja i madraca",
    opis: "Sofe, fotelje, madraci — dubinsko pranje na licu mjesta, dezinfekcija i uklanjanje grinja.",
    href: "/usluge/dubinsko-pranje-namjestaja-i-madraca",
    Ikona: Sofa,
  },
];

const zasto = [
  {
    naslov: "Sistemičan pristup",
    opis: "Svaki prostor prolazi isti protokol — prostorija po prostorija, po unaprijed određenom redoslijedu. Ništa se ne preskači ni kad žurimo.",
    broj: "01",
  },
  {
    naslov: "Pouzdani termini",
    opis: "Kažemo termin — dolazimo u tom terminu. Kažemo šta radimo — to i radimo. Nema iznenađenja ni pregovaranja na licu mjesta.",
    broj: "02",
  },
  {
    naslov: "Profesionalna sredstva",
    opis: "Koristimo isključivo provjerena sredstva — efikasna, bezopasna za stanare, djecu i kućne ljubimce. Dolazimo s vlastitom opremom.",
    broj: "03",
  },
  {
    naslov: "Dugoročni odnos",
    opis: "Nije nam cilj jedan angažman — cilj je biti servis kojemu se ne moraš objašnjavati svaki put iznova.",
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
      <section className="relative bg-[var(--color-primary)] min-h-[100svh] flex flex-col justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 md:pb-24">

        <HeroBg />
        <HeroPhoto />

        {/* Sadržaj */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">

          <span className="inline-flex items-center gap-1.5 mb-8 px-3 py-1.5 bg-white/10 border border-white/20 text-white/90 text-sm font-medium rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            Prijedor i regija
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-10">
            Profesionalno čišćenje<br />koje ne trebaš provjeravati
          </h1>

          <div className="flex justify-end">
            <div className="w-full max-w-sm flex flex-col gap-6">
              <p className="text-base text-white/60 leading-relaxed">
                Stanovi, kuće, poslovni prostori — dolazimo opremljeni, radimo po protokolu, predajemo ti prostor spreman.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <ContactButton
                  variant="message"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                    shadow-[0_4px_18px_rgba(74,85,104,0.50)]
                    hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(74,85,104,0.65)] hover:bg-[#3a4255]
                    active:translate-y-0 active:shadow-[0_2px_8px_rgba(74,85,104,0.35)] active:scale-[0.98]"
                >
                  Pošalji upit
                </ContactButton>
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

        {/* Prijelaz → bijela, desna krivina — heroShadow baca sjenku na fotografiju */}
        <CurveRight fill="#FFFFFF" heroShadow />
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
              { broj: "15+",       label: "godina iskustva"              },
              { broj: "1500+",     label: "zadovoljnih klijenata"        },
              { broj: "35.000 m²", label: "redovno održavamo"            },
              { broj: "Prijedor",  label: "i regija"                     },
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
                <span className="w-10 h-10 flex items-center justify-center bg-[var(--color-bg-alt)] text-[var(--color-accent)] rounded-[var(--radius-lg)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-200 flex-shrink-0">
                  <usluga.Ikona size={20} />
                </span>
                <h3 className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-snug flex-1">
                  {usluga.naziv}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors mt-auto">
                  Saznaj više <ArrowRight size={12} />
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
              <span className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-[var(--radius-lg)] flex-shrink-0">
                <ArrowRight size={20} />
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

        {/* Prijelaz → bg-alt, desna krivina */}
        <CurveRight fill="#EFF5FB" />
      </section>


      {/* ═══════════════════════════════════════════
          ZAŠTO DELFIN — bg-alt sekcija
      ═══════════════════════════════════════════ */}
      <section className="relative bg-[var(--color-bg-alt)] pt-24 md:pt-28 pb-24 md:pb-28 mt-[-2px]">
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

        {/* Prijelaz → tamna, lijeva krivina */}
        <CurveLeft fill="#0A2D6E" stroke="transparent" />
      </section>


      {/* ═══════════════════════════════════════════
          CTA BANNER — tamna sekcija
      ═══════════════════════════════════════════ */}
      <section className="relative bg-[var(--color-primary)] pt-24 md:pt-28 pb-24 md:pb-28 mt-[-2px]">

        {/* Fade overlay — prikriva spoj s krivinom iznad */}
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{ background: "linear-gradient(180deg, #0A2D6E 0%, transparent 100%)" }}
          aria-hidden="true"
        />

        {/* Statični gradijent — blur krugovi */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-[-4rem] left-[5%] w-[500px] h-[500px] rounded-full bg-[var(--color-secondary)] opacity-45 blur-2xl" />
          <div className="absolute bottom-[-7rem] left-[38%] w-[620px] h-[620px] rounded-full bg-[#2563EB] opacity-30 blur-2xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Kontakt</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight max-w-lg">
            Jedan WhatsApp.<br />Sve je dogovoreno.
          </h2>
          <p className="text-white/55 max-w-sm leading-relaxed">
            Opiši prostor i termin koji ti odgovara — odgovaramo u roku od par sati, bez formi i čekanja.
          </p>
          <ContactButton
            variant="message"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
              shadow-[0_4px_18px_rgba(74,85,104,0.50)]
              hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(74,85,104,0.65)] hover:bg-[#3a4255]
              active:translate-y-0 active:shadow-[0_2px_8px_rgba(74,85,104,0.35)] active:scale-[0.98]"
          >
            Pošalji upit
          </ContactButton>
        </div>

        {/* Fade → footer (ista boja, nema reza) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(0deg, #0A2D6E 0%, transparent 100%)" }}
          aria-hidden="true"
        />

      </section>

    </>
  );
}
