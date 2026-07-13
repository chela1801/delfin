import Link from "next/link";
import { Home, Building2, Sparkles, HardHat, Sofa, Forklift, type LucideIcon } from "lucide-react";
import ContactButton from "@/components/ui/ContactButton";
import { CurveRight, CurveLeft } from "@/components/ui/Curves";
import HeroBg from "@/components/ui/HeroBg";
import HeroPhoto from "@/components/ui/HeroPhoto";

const WHATSAPP_URL = "https://wa.me/38766246346";

const usluge: {
  slug: string; naziv: string; opis: string; detalji: string[];
  za: string; Ikona: LucideIcon; broj: string;
}[] = [
  {
    slug: "ciscenje-stanova-i-kuca",
    naziv: "Čišćenje stanova i kuća",
    opis: "Dolazimo s opremom, radimo od vrha do dna po protokolu, predajemo ti stan spreman. Nema pregovaranja na licu mjesta — unaprijed znaš šta dobijаš.",
    detalji: ["Dnevni boravak i spavaće sobe", "Kupatilo i kuhinja", "Podovi, prozori, prašina"],
    za: "Privatni korisnici",
    Ikona: Home,
    broj: "01",
  },
  {
    slug: "ciscenje-poslovnih-prostora",
    naziv: "Čišćenje poslovnih prostora",
    opis: "Jutarnji, večernji ili vikend termini — čišćenje koje se uklapa u vaš raspored, ne obrnuto. Ugovor, faktura, stalni tim.",
    detalji: ["Kancelarije i sale", "Sanitarni čvorovi — visoka higijena", "Hodnici i zajednički prostori"],
    za: "Firme i poslovni prostori",
    Ikona: Building2,
    broj: "02",
  },
  {
    slug: "generalno-i-dubinsko-ciscenje",
    naziv: "Generalno i dubinsko čišćenje",
    opis: "Od iza frižidera do plafona — mjesta koja redovno čišćenje zaobilazi. Jednom kako treba, pa dugo čisto.",
    detalji: ["Kompletno čišćenje po protokolu", "Teško dostupna mjesta", "Dezinfekcija i higijenizacija površina"],
    za: "Stanovi, kuće, poslovni prostori",
    Ikona: Sparkles,
    broj: "03",
  },
  {
    slug: "ciscenje-nakon-renoviranja",
    naziv: "Čišćenje nakon renoviranja",
    opis: "Nakon majstora dolazi naš tim. Prašina, boja, malter — sve ide. Prostor spreman za useljenje za jedan dan.",
    detalji: ["Građevinska prašina i ostaci", "Premazi, fleke, silikon", "Finalno poliranje i priprema"],
    za: "Stanovi, kuće i poslovni prostori",
    Ikona: HardHat,
    broj: "04",
  },
  {
    slug: "dizalica-i-pranje-fasada",
    naziv: "Dizalica — pranje fasada i visinski radovi",
    opis: "Do 25 metara visine — pranje fasada, čišćenje staklenih površina, rezidba drveća i uklanjanje naslaga. Dizalica dostupna i za najam.",
    detalji: ["Pranje fasada do 25m visine", "Uklanjanje mahovine i algi", "Najam dizalice s operaterom ili bez"],
    za: "Firme i privatni korisnici",
    Ikona: Forklift,
    broj: "06",
  },
  {
    slug: "dubinsko-pranje-namjestaja-i-madraca",
    naziv: "Dubinsko pranje namještaja i madraca",
    opis: "Dolazimo k tebi s opremom, peremo na licu mjesta — nema transporta, nema logistike. Sofa, madrac ili fotelja higijenski čisto za jedan dan.",
    detalji: ["Sofe i fotelje", "Madraci — dezinfekcija i uklanjanje grinja", "Tapacirani namještaj"],
    za: "Privatni korisnici i firme",
    Ikona: Sofa,
    broj: "07",
  },
];

export const metadata = {
  title: "Usluge čišćenja u Prijedoru",
  description: "Šest specijalizovanih usluga čišćenja u Prijedoru — od redovnog čišćenja stanova do pranja fasada dizalicom. Svaka usluga s vlastitim protokolom i timom.",
  openGraph: {
    title: "Usluge čišćenja u Prijedoru | Delfin",
    description: "Šest specijalizovanih usluga čišćenja u Prijedoru — od redovnog čišćenja stanova do pranja fasada dizalicom. Svaka usluga s vlastitim protokolom i timom.",
    locale: "sr_BA",
    type: "website" as const,
  },
  alternates: {
    canonical: "https://delfin-amber.vercel.app/usluge",
  },
};

export default function UslugePage() {
  return (
    <>

      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section className="relative bg-[var(--color-primary)] pt-24 sm:pt-32 pb-20 sm:pb-28 overflow-hidden">

        <HeroBg />
        <HeroPhoto />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4 sm:mb-5">
            Usluge profesionalnog<br className="hidden md:block" /> čišćenja u Prijedoru
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            Šest specijalizovanih usluga — svaka s vlastitim protokolom i timom.
            Izaberi ono što ti treba ili nas pitaj ako nisi siguran.
          </p>
        </div>

        <CurveRight fill="#FFFFFF" heroShadow />
      </section>


      {/* ═══ LISTA USLUGA ═══════════════════════════════════ */}
      <section className="relative bg-white pt-12 md:pt-16 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-2">Ponuda</p>
            <h2 className="text-3xl font-bold text-[var(--color-text)] tracking-tight">Šta nudimo</h2>
          </div>

          <div className="flex flex-col gap-4">
            {usluge.map((usluga) => (
              <div
                key={usluga.slug}
                className="group flex flex-col md:flex-row gap-6 p-6 bg-white border border-[var(--color-border)] rounded-[var(--radius-xl)]
                  shadow-[0_2px_16px_rgba(10,45,110,0.07)]
                  hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(10,45,110,0.13)] hover:border-[var(--color-primary)]/20
                  active:translate-y-0 active:shadow-[0_2px_10px_rgba(10,45,110,0.08)]
                  transition-all duration-200"
              >
                {/* Lijevo — ikona + broj */}
                <div className="flex md:flex-col items-center gap-3 md:gap-2 flex-shrink-0 md:w-16">
                  <span className="w-12 h-12 flex items-center justify-center bg-[var(--color-bg-alt)] text-[var(--color-accent)] rounded-[var(--radius-lg)] flex-shrink-0 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-200">
                    <usluga.Ikona size={22} />
                  </span>
                  <span className="text-xs font-bold text-[var(--color-muted)]">{usluga.broj}</span>
                </div>

                {/* Sredina — sadržaj */}
                <div className="flex-1 flex flex-col gap-3">
                  <div>
                    <span className="inline-block px-2.5 py-1 bg-[var(--color-bg-alt)] text-[var(--color-muted)] text-xs font-semibold rounded-full mb-2">
                      {usluga.za}
                    </span>
                    <h2 className="text-xl font-bold text-[var(--color-text)]">{usluga.naziv}</h2>
                    <p className="text-[var(--color-muted)] mt-1 text-sm leading-relaxed">{usluga.opis}</p>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {usluga.detalji.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-[var(--color-text)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Desno — CTA */}
                <div className="flex flex-wrap md:flex-col justify-start md:justify-center gap-3 md:w-44 flex-shrink-0">
                  <Link
                    href={`/usluge/${usluga.slug}`}
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                      shadow-[0_4px_14px_rgba(74,85,104,0.38)]
                      hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(74,85,104,0.52)] hover:bg-[#3a4255]
                      active:translate-y-0 active:scale-[0.98]"
                  >
                    Saznaj više →
                  </Link>
                  <ContactButton
                    variant="message"
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-[#6B7A8D] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                      shadow-[0_4px_14px_rgba(107,122,141,0.35)]
                      hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(107,122,141,0.50)] hover:bg-[#5a6a7d]
                      active:translate-y-0 active:scale-[0.98]"
                  >
                    Pošalji upit
                  </ContactButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CurveLeft fill="var(--color-bg-alt)" />
      </section>


      {/* ═══ ESCAPE — Nisi siguran ═══════════════════════════ */}
      <section className="relative bg-[var(--color-bg-alt)] pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-3">Besplatno savjetovanje</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] tracking-tight mb-2">
              Nisi siguran koja usluga ti treba?
            </h2>
            <p className="text-[var(--color-muted)] max-w-md leading-relaxed">
              Opiši nam prostor i situaciju — savjetujemo besplatno i brzo.
            </p>
          </div>
          <ContactButton
            variant="message"
            className="flex-shrink-0 inline-flex items-center justify-center px-7 py-3.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
              shadow-[0_4px_18px_rgba(74,85,104,0.40)]
              hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(74,85,104,0.55)] hover:bg-[#3a4255]
              active:translate-y-0 active:scale-[0.98]"
          >
            Pošalji upit
          </ContactButton>
        </div>

        <CurveLeft fill="#0A2D6E" stroke="transparent" />
      </section>

    </>
  );
}
