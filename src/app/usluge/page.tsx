import Link from "next/link";
import { Home, Building2, Sparkles, HardHat, Sofa, type LucideIcon } from "lucide-react";
import { CurveRight, CurveLeft } from "@/components/ui/Curves";
import HeroBg from "@/components/ui/HeroBg";

const WHATSAPP_URL = "https://wa.me/38766246346";

const usluge: {
  slug: string; naziv: string; opis: string; detalji: string[];
  za: string; Ikona: LucideIcon; broj: string;
}[] = [
  {
    slug: "ciscenje-stanova-i-kuca",
    naziv: "Čišćenje stanova i kuća",
    opis: "Redovno i jednokratno čišćenje stambenih prostora — temeljito, pouzdano, bez stresa.",
    detalji: ["Dnevni boravak i spavaće sobe", "Kupatilo i kuhinja", "Podovi, prozori, prašina"],
    za: "Privatni korisnici",
    Ikona: Home,
    broj: "01",
  },
  {
    slug: "ciscenje-poslovnih-prostora",
    naziv: "Čišćenje poslovnih prostora",
    opis: "Čisto radno okruženje za vaš tim — fleksibilni termini koji ne ometaju posao.",
    detalji: ["Kancelarije i sale", "Sanitarni čvorovi", "Hodnici i zajednički prostori"],
    za: "Firme i poslovni prostori",
    Ikona: Building2,
    broj: "02",
  },
  {
    slug: "generalno-i-dubinsko-ciscenje",
    naziv: "Generalno i dubinsko čišćenje",
    opis: "Kada redovno čišćenje nije dovoljno — kompletna obnova prostora od poda do plafona.",
    detalji: ["Kompletno čišćenje po protokolu", "Teško dostupna mjesta", "Dezinfekcija površina"],
    za: "Stanovi, kuće, poslovni prostori",
    Ikona: Sparkles,
    broj: "03",
  },
  {
    slug: "ciscenje-nakon-renoviranja",
    naziv: "Čišćenje nakon renoviranja",
    opis: "Prašina, boja, malter — uklanjamo sve što ostaje nakon radova. Prostor spreman za useljenje.",
    detalji: ["Uklanjanje građevinskog otpada", "Čišćenje premaza i fleka", "Finalno poliranje"],
    za: "Stanovi i kuće nakon radova",
    Ikona: HardHat,
    broj: "04",
  },
  {
    slug: "dubinsko-pranje-tepisa",
    naziv: "Dubinsko pranje tepiha i namještaja",
    opis: "Ručno dubinsko pranje tepiha, sofa i tapaciranog namještaja — bez mašina, bez kompromisa.",
    detalji: ["Tepisi i kilimi", "Sofe i fotelje", "Tapacirani namještaj"],
    za: "Privatni korisnici i firme",
    Ikona: Sofa,
    broj: "05",
  },
];

export const metadata = {
  title: "Usluge — Delfin Prijedor",
  description: "Pet specijalizovanih usluga profesionalnog čišćenja u Prijedoru — svaka s vlastitim protokolom.",
};

export default function UslugePage() {
  return (
    <>

      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section className="relative bg-[var(--color-primary)] pt-24 sm:pt-32 pb-20 sm:pb-28 overflow-hidden">

        <HeroBg />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4 sm:mb-5">
            Usluge profesionalnog<br className="hidden md:block" /> čišćenja u Prijedoru
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            Pet specijalizovanih usluga — svaka s vlastitim protokolom i timom.
            Izaberi ono što ti treba ili nas pitaj ako nisi siguran.
          </p>
        </div>

        <CurveRight fill="#FFFFFF" />
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
                <div className="flex md:flex-col justify-start md:justify-center gap-3 md:w-44 flex-shrink-0">
                  <Link
                    href={`/usluge/${usluga.slug}`}
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                      shadow-[0_4px_14px_rgba(74,85,104,0.38)]
                      hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(74,85,104,0.52)] hover:bg-[#3a4255]
                      active:translate-y-0 active:scale-[0.98]"
                  >
                    Saznaj više →
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-[#6B7A8D] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                      shadow-[0_4px_14px_rgba(107,122,141,0.35)]
                      hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(107,122,141,0.50)] hover:bg-[#5a6a7d]
                      active:translate-y-0 active:scale-[0.98]"
                  >
                    WhatsApp upit
                  </a>
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
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center px-7 py-3.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
              shadow-[0_4px_18px_rgba(74,85,104,0.40)]
              hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(74,85,104,0.55)] hover:bg-[#3a4255]
              active:translate-y-0 active:scale-[0.98]"
          >
            Pošalji upit na WhatsApp
          </a>
        </div>

        <CurveLeft fill="#0A2D6E" stroke="transparent" />
      </section>

    </>
  );
}
