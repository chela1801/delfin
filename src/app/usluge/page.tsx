import Link from "next/link";
import { CurveRight, CurveLeft } from "@/components/ui/Curves";

const WHATSAPP_URL = "https://wa.me/38766246346";

const usluge = [
  {
    slug: "ciscenje-stanova-i-kuca",
    naziv: "Čišćenje stanova i kuća",
    opis: "Redovno i jednokratno čišćenje stambenih prostora — temeljito, pouzdano, bez stresa.",
    detalji: ["Dnevni boravak i spavaće sobe", "Kupatilo i kuhinja", "Podovi, prozori, prašina"],
    za: "Privatni korisnici",
    ikona: "🏠",
    broj: "01",
  },
  {
    slug: "ciscenje-poslovnih-prostora",
    naziv: "Čišćenje poslovnih prostora",
    opis: "Čisto radno okruženje za vaš tim — fleksibilni termini koji ne ometaju posao.",
    detalji: ["Kancelarije i sale", "Sanitarni čvorovi", "Hodnici i zajednički prostori"],
    za: "Firme i poslovni prostori",
    ikona: "🏢",
    broj: "02",
  },
  {
    slug: "generalno-i-dubinsko-ciscenje",
    naziv: "Generalno i dubinsko čišćenje",
    opis: "Kada redovno čišćenje nije dovoljno — kompletna obnova prostora od poda do plafona.",
    detalji: ["Kompletno čišćenje po protokolu", "Teško dostupna mjesta", "Dezinfekcija površina"],
    za: "Stanovi, kuće, poslovni prostori",
    ikona: "✨",
    broj: "03",
  },
  {
    slug: "ciscenje-nakon-renoviranja",
    naziv: "Čišćenje nakon renoviranja",
    opis: "Prašina, boja, malter — uklanjamo sve što ostaje nakon radova. Prostor spreman za useljenje.",
    detalji: ["Uklanjanje građevinskog otpada", "Čišćenje premaza i fleka", "Finalno poliranje"],
    za: "Stanovi i kuće nakon radova",
    ikona: "🔨",
    broj: "04",
  },
  {
    slug: "dubinsko-pranje-tepisa",
    naziv: "Dubinsko pranje tepiha i namještaja",
    opis: "Ručno dubinsko pranje tepiha, sofa i tapaciranog namještaja — bez mašina, bez kompromisa.",
    detalji: ["Tepisi i kilimi", "Sofe i fotelje", "Tapacirani namještaj"],
    za: "Privatni korisnici i firme",
    ikona: "🛋️",
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
      <section className="relative bg-[var(--color-primary)] pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="text-sm text-white/40 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white/70 transition-colors">Početna</Link>
            <span>/</span>
            <span className="text-white/70">Usluge</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Usluge profesionalnog čišćenja<br className="hidden md:block" /> u Prijedoru
          </h1>
          <p className="text-lg text-white/60 max-w-xl">
            Pet specijalizovanih usluga — svaka s vlastitim protokolom i timom.
            Izaberi ono što ti treba ili nas pitaj ako nisi siguran.
          </p>
        </div>
        <CurveRight fill="#FFFFFF" />
      </section>


      {/* ═══ LISTA USLUGA ═══════════════════════════════════ */}
      <section className="relative bg-white pt-14 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-4">
            {usluge.map((usluga) => (
              <div
                key={usluga.slug}
                className="flex flex-col md:flex-row gap-6 p-6 bg-white border border-[var(--color-border)] rounded-[var(--radius-xl)]
                  shadow-[0_2px_12px_rgba(10,45,110,0.06)] hover:shadow-[0_6px_24px_rgba(10,45,110,0.10)]
                  hover:border-[var(--color-primary)]/20 transition-all duration-200"
              >
                {/* Lijevo — ikona + broj */}
                <div className="flex md:flex-col items-center gap-3 md:gap-2 flex-shrink-0 md:w-16">
                  <span className="w-12 h-12 flex items-center justify-center bg-[var(--color-bg-alt)] rounded-[var(--radius-lg)] text-2xl flex-shrink-0">
                    {usluga.ikona}
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
                      shadow-[0_2px_10px_rgba(74,85,104,0.35)]
                      hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(74,85,104,0.50)] hover:bg-[#3a4255]
                      active:translate-y-0 active:scale-[0.98]"
                  >
                    Saznaj više →
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 border border-[var(--color-border)] text-[var(--color-text)] text-sm font-medium rounded-[var(--radius-xl)] hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)] transition-all duration-150"
                  >
                    WhatsApp upit
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CurveLeft fill="#0A2D6E" />
      </section>


      {/* ═══ ESCAPE — Nisi siguran ═══════════════════════════ */}
      <section className="relative bg-[var(--color-primary)] pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Nisi siguran koja usluga ti treba?
            </h2>
            <p className="text-white/60 max-w-md">
              Opiši nam prostor i situaciju — savjetujemo besplatno i brzo.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
              shadow-[0_4px_18px_rgba(74,85,104,0.50)]
              hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(74,85,104,0.65)] hover:bg-[#3a4255]
              active:translate-y-0 active:scale-[0.98]"
          >
            Pošalji upit na WhatsApp
          </a>
        </div>
      </section>

    </>
  );
}
