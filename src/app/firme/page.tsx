import Link from "next/link";
import { Building2, Sparkles, HardHat, ArrowRight, type LucideIcon } from "lucide-react";
import { CurveRight, CurveLeft } from "@/components/ui/Curves";
import HeroBg from "@/components/ui/HeroBg";

const prednosti = [
  {
    broj: "01",
    naslov: "Termini koji ne ometaju rad",
    opis: "Jutarnje, večernje ili vikend čišćenje — dogovaramo prema vašem rasporedu. Tim dolazi i odlazi bez da vaši zaposleni ni primijete.",
  },
  {
    broj: "02",
    naslov: "Stalni tim, predvidivi rezultat",
    opis: "Ne šaljemo svakog puta drugačiji tim. Isti ljudi uče vaš prostor jednom i rade bez da ih morate usmjeravati iznova.",
  },
  {
    broj: "03",
    naslov: "Faktura i ugovor — standard",
    opis: "Za svakog poslovnog klijenta: pisana ponuda, ugovor s jasno definisanim obimom posla, terminima i cijenom. Faktura redovno, bez podsjetnika i usmenih dogovora.",
  },
  {
    broj: "04",
    naslov: "Osiguranje i povjerljivost",
    opis: "Posjedujemo polisu osiguranja od odgovornosti prema trećim licima i zasebnu za firme i fizička lica — svako oštećenje tokom rada je pokriveno. Na zahtjev potpisujemo NDA (ugovor o povjerljivosti) — garancija da sve što tim vidi u vašim prostorijama ostaje isključivo između nas.",
  },
];

const uslugeFirme: { naziv: string; opis: string; frekvencije: string[]; Ikona: LucideIcon; href: string }[] = [
  {
    naziv: "Redovno čišćenje poslovnih prostora",
    opis: "Kancelarije, sale za sastanke, hodnici, sanitarni čvorovi — stalni tim, dogovoreni termini, predvidiv standard.",
    frekvencije: ["Dnevno", "Sedmično", "Po dogovoru"],
    Ikona: Building2,
    href: "/usluge/ciscenje-poslovnih-prostora",
  },
  {
    naziv: "Generalno i dubinsko čišćenje",
    opis: "Od iza ormarića do plafona — kompletna obnova prostora idealna za sezonsko čišćenje ili otvaranje novog ureda.",
    frekvencije: ["Jednokratno", "Sezonski"],
    Ikona: Sparkles,
    href: "/usluge/generalno-i-dubinsko-ciscenje",
  },
  {
    naziv: "Čišćenje nakon renoviranja",
    opis: "Nakon majstora dolazi naš tim — prašina, boja, malter. Ured vraćamo u funkciju za jedan dan.",
    frekvencije: ["Jednokratno"],
    Ikona: HardHat,
    href: "/usluge/ciscenje-nakon-renoviranja",
  },
];

const proces = [
  { broj: "01", naslov: "Upit putem forme", opis: "Popuni formu s osnovnim podacima o prostoru i potrebama, ili nas pozovite. Javimo se u toku radnog dana." },
  { broj: "02", naslov: "Obilazak i procjena", opis: "Dogovaramo kratki obilazak prostora radi tačne procjene — besplatno i bez obaveze." },
  { broj: "03", naslov: "Ponuda i ugovor", opis: "Šaljemo pisanu ponudu s jasno definisanim obimom posla, cijenom i terminima. Bez skrivenih troškova." },
  { broj: "04", naslov: "Redovni servis", opis: "Dogovoreni tim, dogovoreni termini. Izvještaj o urađenom na zahtjev." },
];

export const metadata = {
  title: "Za firme — Delfin Prijedor",
  description: "Profesionalno čišćenje poslovnih prostora u Prijedoru — redovni servis, fakturisanje, fleksibilni termini.",
};

export default function FirmePage() {
  return (
    <>

      {/* ═══ HERO sa formom ══════════════════════════════════ */}
      <section className="relative bg-[var(--color-primary)] pt-24 sm:pt-32 pb-20 sm:pb-28 overflow-hidden">

        <HeroBg />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Lijevo — tekst */}
            <div className="flex-1 flex flex-col gap-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 text-white/90 text-sm font-medium rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                Za firme i poslovne prostore
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Čišćenje poslovnih prostora<br className="hidden md:block" /> u Prijedoru
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-lg">
                Redovan servis ili jednokratno čišćenje — dolazimo kad vama odgovara,
                radimo po protokolu, fakturišemo uredno.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Ugovor i faktura", "Fleksibilni termini", "Prijedor i regija"].map((s) => (
                  <div key={s} className="flex items-center gap-1.5 text-sm text-white/70 font-medium">
                    <span className="w-4 h-4 bg-white/20 rounded-full flex-shrink-0 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                    </span>
                    {s}
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/40">
                Trebaš čišćenje stana ili kuće?{" "}
                <Link href="/usluge" className="text-white/65 font-semibold hover:text-white transition-colors underline underline-offset-2">
                  Pogledaj usluge za privatne korisnike
                </Link>
              </p>
            </div>

            {/* Desno — forma */}
            <div className="w-full lg:w-96 flex-shrink-0">
              <div className="p-6 bg-white rounded-[var(--radius-xl)] shadow-[0_8px_40px_rgba(0,0,0,0.15)]
                transition-all duration-300 hover:shadow-[0_16px_56px_rgba(0,0,0,0.22)] hover:-translate-y-1">
                <h3 className="font-bold text-[var(--color-text)] text-lg mb-5">Zatražite ponudu</h3>
                <form className="flex flex-col gap-3">
                  {[
                    { label: "Naziv firme", type: "text", placeholder: "npr. DOO Primjer", name: "firma" },
                    { label: "Kontakt osoba", type: "text", placeholder: "Ime i prezime", name: "kontakt" },
                    { label: "Telefon", type: "tel", placeholder: "+387 6x xxx xxx", name: "telefon" },
                    { label: "Email", type: "email", placeholder: "email@firma.ba", name: "email" },
                  ].map((f) => (
                    <div key={f.name} className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[var(--color-text)]">{f.label}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        className="h-10 border border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-bg-alt)] px-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)]/40 transition-colors"
                      />
                    </div>
                  ))}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[var(--color-text)]">Vrsta prostora</label>
                    <select
                      name="prostor"
                      className="h-10 border border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-bg-alt)] px-3 text-sm text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)]/40 transition-colors"
                    >
                      <option value="">Odaberi vrstu prostora</option>
                      <option value="kancelarija">Kancelarija</option>
                      <option value="prodajni">Prodajni prostor</option>
                      <option value="magacin">Magacin / skladište</option>
                      <option value="drugo">Drugo</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[var(--color-text)]">Napomena</label>
                    <textarea
                      name="napomena"
                      rows={2}
                      placeholder="Površina, učestalost čišćenja..."
                      className="border border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-bg-alt)] px-3 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)]/40 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                      shadow-[0_4px_18px_rgba(74,85,104,0.40)]
                      hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(74,85,104,0.55)] hover:bg-[#3a4255]
                      active:translate-y-0 active:scale-[0.98]"
                  >
                    Pošalji upit
                  </button>
                  <p className="text-xs text-[var(--color-muted)] text-center">Odgovaramo u toku radnog dana</p>
                </form>
              </div>
            </div>

          </div>
        </div>

        <CurveRight fill="#FFFFFF" />
      </section>


      {/* ═══ PREDNOSTI ZA FIRME ══════════════════════════════ */}
      <section className="relative bg-white pt-14 md:pt-20 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-2">Zašto Delfin</p>
            <h2 className="text-3xl font-bold text-[var(--color-text)] tracking-tight">Zašto firme biraju Delfin</h2>
            <p className="text-[var(--color-muted)] mt-3 max-w-md">
              Pouzdanost i predvidivost — to je ono što firma treba od servisa.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prednosti.map((s) => (
              <div
                key={s.broj}
                className="flex items-start gap-5 p-6 bg-white border border-[var(--color-border)] rounded-[var(--radius-xl)] min-h-[11rem]
                  shadow-[0_2px_16px_rgba(10,45,110,0.07)]
                  hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(10,45,110,0.13)] hover:border-[var(--color-primary)]/20
                  active:translate-y-0 transition-all duration-200"
              >
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[var(--color-primary)] text-white text-sm font-bold rounded-full">
                  {s.broj}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold text-[var(--color-text)]">{s.naslov}</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{s.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CurveLeft fill="var(--color-bg-alt)" />
      </section>


      {/* ═══ USLUGE ZA FIRME ════════════════════════════════ */}
      <section className="relative bg-[var(--color-bg-alt)] pt-14 md:pt-20 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-2">Ponuda</p>
            <h2 className="text-3xl font-bold text-[var(--color-text)] tracking-tight">Šta nudimo poslovnim klijentima</h2>
            <p className="text-[var(--color-muted)] mt-3 max-w-md">
              Prilagođavamo se vašem prostoru i rasporedu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {uslugeFirme.map((u) => (
              <Link
                key={u.naziv}
                href={u.href}
                className="group flex flex-col gap-4 p-6 bg-white border border-[var(--color-border)] rounded-[var(--radius-xl)]
                  shadow-[0_2px_16px_rgba(10,45,110,0.07)]
                  hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(10,45,110,0.13)] hover:border-[var(--color-primary)]/20
                  active:translate-y-0 active:scale-[0.99] transition-all duration-200"
              >
                <span className="w-11 h-11 flex items-center justify-center bg-[var(--color-bg-alt)] text-[var(--color-accent)] rounded-[var(--radius-lg)]
                  group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-200">
                  <u.Ikona size={22} />
                </span>
                <h3 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">{u.naziv}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">{u.opis}</p>
                <div className="pt-3 border-t border-[var(--color-border)] flex flex-wrap gap-1.5">
                  {u.frekvencije.map((f) => (
                    <span key={f} className="px-2.5 py-1 bg-[var(--color-bg-alt)] text-[var(--color-muted)] text-xs font-medium rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
                <span className="mt-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                  shadow-[0_4px_14px_rgba(74,85,104,0.30)]
                  group-hover:shadow-[0_8px_24px_rgba(74,85,104,0.48)] group-hover:bg-[#3a4255]">
                  Saznaj više <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <CurveLeft fill="#0A2D6E" stroke="transparent" />
      </section>


      {/* ═══ PROCES ══════════════════════════════════════════ */}
      <section className="relative bg-[var(--color-primary)] pt-16 md:pt-24 pb-20 md:pb-28 mt-[-2px] overflow-hidden">

        {/* Top fade — maskira spoj sa CurveLeft */}
        <div
          className="absolute top-0 left-0 right-0 h-40 pointer-events-none z-10"
          style={{ background: "linear-gradient(180deg, #0A2D6E 0%, transparent 100%)" }}
        />

        {/* Statični blur krugovi */}
        <div className="absolute bottom-[-5rem] left-[-8%] w-[420px] h-[420px] rounded-full bg-[var(--color-secondary)] opacity-35 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-4rem] left-[25%] w-[440px] h-[440px] rounded-full bg-[var(--color-secondary)] opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-7rem] left-[55%] w-[500px] h-[500px] rounded-full bg-[#2563EB] opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-5rem] right-[-8%] w-[420px] h-[420px] rounded-full bg-[var(--color-secondary)] opacity-35 blur-3xl pointer-events-none" />

        {/* Bottom fade — maskira prelaz ka footeru */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
          style={{ background: "linear-gradient(0deg, #0A2D6E 0%, transparent 100%)" }}
        />

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">Proces</p>
            <h2 className="text-3xl font-bold text-white tracking-tight">Kako to funkcioniše</h2>
            <p className="text-white/55 mt-3">Od upita do redovnog servisa — četiri koraka.</p>
          </div>

          {/* Desktop stepper */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {proces.map((k, i) => (
              <div key={k.broj} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-white text-[var(--color-primary)] text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0
                    shadow-[0_2px_12px_rgba(255,255,255,0.20)]">
                    {k.broj}
                  </span>
                  {i < proces.length - 1 && (
                    <div className="flex-1 h-px bg-white/20" />
                  )}
                </div>
                <p className="font-semibold text-white text-sm">{k.naslov}</p>
                <p className="text-xs text-white/50 leading-relaxed">{k.opis}</p>
              </div>
            ))}
          </div>

          {/* Mobile lista */}
          <div className="flex flex-col gap-3 lg:hidden">
            {proces.map((k) => (
              <div key={k.broj} className="flex gap-4 p-5 bg-white/5 border border-white/10 rounded-[var(--radius-xl)]
                hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5
                transition-all duration-200">
                <span className="flex-shrink-0 w-9 h-9 bg-white text-[var(--color-primary)] text-sm font-bold rounded-full flex items-center justify-center">
                  {k.broj}
                </span>
                <div>
                  <p className="font-semibold text-white mb-1 text-sm">{k.naslov}</p>
                  <p className="text-xs text-white/55 leading-relaxed">{k.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </>
  );
}
