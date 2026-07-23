import Link from "next/link";
import Image from "next/image";
import { Camera, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import ContactButton from "@/components/ui/ContactButton";
import { CurveRight, CurveLeft } from "@/components/ui/Curves";
import HeroBg from "@/components/ui/HeroBg";
import HeroPhoto from "@/components/ui/HeroPhoto";

const WHATSAPP_URL = "https://wa.me/38766246346";

const vrijednosti = [
  {
    broj: "01",
    naslov: "Sistem ispred improvizacije",
    opis: "Svaki posao, bez obzira na veličinu, ide po protokolu. Improvizacija je skuplja od sistema — u vremenu, u kvalitetu i u povjerenju.",
  },
  {
    broj: "02",
    naslov: "Odgovornost bez izgovora",
    opis: "Ako nešto nije kako treba — kažemo i rješavamo odmah. Ne čekamo da klijent primijeti. Ne tražimo opravdanje.",
  },
  {
    broj: "03",
    naslov: "Odnos je važniji od posla",
    opis: "Radije ćemo izgubiti jedan angažman nego izgubiti povjerenje klijenta. Svaki klijent kojeg čuvamo vrijedi više od deset novih.",
  },
];

function FotoPlaceholder({ label, aspect = "aspect-video" }: { label: string; aspect?: string }) {
  return (
    <div className={`w-full ${aspect} bg-[var(--color-bg-alt)] border-2 border-dashed border-[var(--color-border)] rounded-[var(--radius-xl)] flex flex-col items-center justify-center gap-2`}>
      <Camera size={32} className="opacity-20 text-[var(--color-muted)]" />
      <span className="text-sm text-[var(--color-muted)] font-medium text-center px-4">{label}</span>
    </div>
  );
}

export const metadata = {
  title: "O nama — Delfin servis za čišćenje",
  description: "Ko je Delfin i zašto smo ga osnovali — priča o čišćenju koje je moralo biti predvidivo, pouzdano i sistemično. Servis za čišćenje iz Prijedora koji drži riječ.",
  openGraph: {
    title: "O nama | Delfin — servis za čišćenje Prijedor",
    description: "Ko je Delfin i zašto smo ga osnovali — priča o čišćenju koje je moralo biti predvidivo, pouzdano i sistemično.",
    locale: "sr_BA",
    type: "website" as const,
  },
  alternates: {
    canonical: "https://delfin-amber.vercel.app/o-nama",
  },
};

export default function ONamaPage() {
  return (
    <>

      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section className="relative bg-[var(--color-primary)] pt-24 sm:pt-32 pb-20 sm:pb-28 overflow-hidden">

        <HeroBg />
        <HeroPhoto src="/images/delfin/hero/o-nama.png" objectPosition="60% 55%" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4 sm:mb-5">
            Ko smo i zašto radimo<br className="hidden md:block" /> ovaj posao
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            Delfin nije nastao kao posao — nastao je iz jedne konkretne frustracije:
            u Prijedoru nije postojao servis za čišćenje kojemu možeš zaista vjerovati.
          </p>
        </div>

        <CurveRight fill="#FFFFFF" heroShadow />
      </section>


      {/* ═══ PRIČA 1 — Problem ═══════════════════════════════ */}
      <section className="relative bg-white pt-14 md:pt-20 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 flex flex-col gap-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">Kako je počelo</p>
              <h2 className="text-3xl font-bold text-[var(--color-text)] tracking-tight">
                Čišćenje je uvijek izgledalo isto
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Pozoveš nekoga, dođe na vrijeme, uradi pristojno — ali sljedeći put
                je drugačije. Kasni, preskoči nešto, ili jednostavno prestane dolaziti.
                Tražiš novog čovjeka, sve ispočetka. I niko se ne osjeća odgovornim.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                To nije bio problem nedostatka radne snage.
                To je bio problem sistema — tačnije, njegovog potpunog izostanka.
              </p>
            </div>
            <div className="w-full lg:w-[420px] flex-shrink-0">
              <div className="relative w-full aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden">
                <Image
                  src="/images/delfin/o-nama/teren.png"
                  alt="Profesionalno čišćenje prostora na terenu"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <CurveLeft fill="var(--color-bg-alt)" />
      </section>


      {/* ═══ PRIČA 2 — Prekretnica ═══════════════════════════ */}
      <section className="relative bg-[var(--color-bg-alt)] pt-14 md:pt-20 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center flex flex-col gap-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">Prekretnica</p>
            <h2 className="text-3xl font-bold text-[var(--color-text)] tracking-tight">
              Onda smo odlučili da to promijenimo
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Delfin je osnovan s jednom tačno određenom idejom: da čišćenje
              može biti predvidivo. Isti standard svaki put. Tim koji se vraća.
              Protokol koji ne ovisi o raspoloženju toga dana.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Ne servis koji obećava sve — servis koji isporučuje tačno ono što dogovori.
            </p>
          </div>
        </div>

        <CurveRight fill="#FFFFFF" />
      </section>


      {/* ═══ PRIČA 3 — Tim + Rješenje ═══════════════════════ */}
      <section className="relative bg-white pt-14 md:pt-20 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="flex-1 flex flex-col gap-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">Naš pristup</p>
              <h2 className="text-3xl font-bold text-[var(--color-text)] tracking-tight">
                Svaki prostor, isti standard
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Za svaki tip čišćenja postoji protokol. Ne lista u glavi —
                pisani redoslijed koji se ne mijenja. Dolazimo opremljeni,
                radimo sistematično, i na kraju provjeravamo. Nema "mislim da smo to uradili".
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Koristimo isključivo profesionalna sredstva, sigurna za stanare,
                djecu i kućne ljubimce. Dolazimo s vlastitom opremom i odgovorni
                smo za svaki centimetar prostora koji nam povjerite.
              </p>
            </div>
            <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-4">
              <FotoPlaceholder label="Fotografija vlasnika / tima" aspect="aspect-[3/4]" />
              <div className="p-4 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-[var(--radius-xl)]">
                <p className="font-semibold text-[var(--color-text)]">[Ime vlasnika]</p>
                <p className="text-sm text-[var(--color-muted)]">Osnivač, Delfin Prijedor</p>
              </div>
            </div>
          </div>
        </div>

        <CurveLeft fill="var(--color-bg-alt)" />
      </section>


      {/* ═══ VRIJEDNOSTI ════════════════════════════════════ */}
      <section className="relative bg-[var(--color-bg-alt)] pt-14 md:pt-20 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-2">Principi</p>
            <h2 className="text-3xl font-bold text-[var(--color-text)] tracking-tight">Po čemu radimo</h2>
            <p className="text-[var(--color-muted)] mt-3 max-w-md">
              Ne misija, ne vizija — konkretna pravila po kojima donosimo odluke.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {vrijednosti.map((v) => (
              <div
                key={v.broj}
                className="flex gap-5 p-6 bg-white border border-[var(--color-border)] rounded-[var(--radius-xl)]
                  shadow-[0_2px_16px_rgba(10,45,110,0.07)]
                  hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(10,45,110,0.13)] hover:border-[var(--color-primary)]/20
                  active:translate-y-0 active:shadow-[0_2px_10px_rgba(10,45,110,0.08)]
                  transition-all duration-200"
              >
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[var(--color-primary)] text-white text-sm font-bold rounded-full">
                  {v.broj}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold text-[var(--color-text)]">{v.naslov}</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{v.opis}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CurveRight fill="#FFFFFF" />
      </section>


      {/* ═══ SLJEDEĆI KORAK ══════════════════════════════════ */}
      <section className="relative bg-white pt-14 md:pt-20 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] mb-2">Sljedeći korak</p>
            <h2 className="text-3xl font-bold text-[var(--color-text)] tracking-tight">Šta dalje?</h2>
            <p className="text-[var(--color-muted)] mt-3 max-w-md">
              Upoznali smo se — sad biramo šta ti treba.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Kartica — Usluge */}
            <Link
              href="/usluge"
              className="group flex flex-col gap-5 p-6 bg-white border border-[var(--color-border)] rounded-[var(--radius-xl)]
                shadow-[0_2px_16px_rgba(10,45,110,0.07)]
                hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(10,45,110,0.14)] hover:border-[var(--color-primary)]/25
                active:translate-y-0 active:shadow-[0_2px_10px_rgba(10,45,110,0.08)]
                transition-all duration-200"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-bg-alt)] text-[var(--color-accent)] rounded-[var(--radius-lg)] flex-shrink-0 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-200">
                <Sparkles size={22} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-[var(--color-text)] tracking-tight">Pogledaj naše usluge</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Šest specijalizovanih usluga — svaka s vlastitim protokolom.
                  Nađi onu koja odgovara tvom prostoru.
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-2.5 transition-all duration-200">
                Sve usluge
                <ArrowRight size={14} />
              </span>
            </Link>

            {/* Kartica — Kontakt */}
            <ContactButton
              variant="message"
              className="group flex flex-col gap-5 p-6 bg-white border border-[var(--color-border)] rounded-[var(--radius-xl)] text-left
                shadow-[0_2px_16px_rgba(10,45,110,0.07)]
                hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(10,45,110,0.14)] hover:border-[var(--color-primary)]/25
                active:translate-y-0 active:shadow-[0_2px_10px_rgba(10,45,110,0.08)]
                transition-all duration-200"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-bg-alt)] text-[var(--color-accent)] rounded-[var(--radius-lg)] flex-shrink-0 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-200">
                <MessageCircle size={22} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-[var(--color-text)] tracking-tight">Pošalji upit direktno</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Opiši prostor i termin — odgovaramo brzo.
                  Bez forme, bez čekanja, bez komplikacija.
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-2.5 transition-all duration-200">
                Pošalji upit
                <ArrowRight size={14} />
              </span>
            </ContactButton>

          </div>
        </div>

        <CurveLeft fill="#0A2D6E" stroke="transparent" />
      </section>


      {/* ═══ VIZIJA + CTA ════════════════════════════════════ */}
      <section className="relative bg-[var(--color-primary)] pt-16 md:pt-24 pb-20 md:pb-28 mt-[-2px] overflow-hidden">

        {/* Top fade — maskira spoj sa CurveLeft iz prethodne sekcije */}
        <div
          className="absolute top-0 left-0 right-0 h-40 pointer-events-none z-10"
          style={{ background: "linear-gradient(180deg, #0A2D6E 0%, transparent 100%)" }}
        />

        {/* Statični blur krugovi — pokrivaju cijelu širinu sekcije */}
        <div className="absolute bottom-[-5rem] left-[-8%] w-[420px] h-[420px] rounded-full bg-[var(--color-secondary)] opacity-35 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-4rem] left-[20%] w-[440px] h-[440px] rounded-full bg-[var(--color-secondary)] opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-7rem] left-[50%] w-[500px] h-[500px] rounded-full bg-[#2563EB] opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-5rem] right-[-8%] w-[420px] h-[420px] rounded-full bg-[var(--color-secondary)] opacity-35 blur-3xl pointer-events-none" />

        {/* Bottom fade — maskira prelaz ka footeru */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
          style={{ background: "linear-gradient(0deg, #0A2D6E 0%, transparent 100%)" }}
        />

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Kuda idemo</p>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Cilj nije rasti — cilj je biti pouzdan
            </h2>
            <p className="text-white/60 leading-relaxed max-w-md">
              Ne idemo za tim da budemo najveći servis za čišćenje u Bosni.
              Idemo za tim da budemo servis kojemu klijenti u Prijedoru i regiji
              bezuvjetno vjeruju — i kojemu se vraćaju godinama.
            </p>
            <p className="text-white/60 leading-relaxed max-w-md">
              Rast za nas znači bolji servis, pažljiviji odabir timova
              i duži odnosi — ne samo više klijenata.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col gap-4 p-6 bg-white/5 border border-white/10 rounded-[var(--radius-xl)] w-full md:w-72
            transition-all duration-300
            hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.30)]">
            <h3 className="font-bold text-white text-lg">Hajmo se upoznati</h3>
            <p className="text-sm text-white/55">
              Najlakši korak je jedna poruka. Opiši šta trebaš — mi ćemo predložiti kako možemo pomoći.
            </p>
            <ContactButton
              variant="message"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                shadow-[0_4px_18px_rgba(74,85,104,0.50)]
                hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(74,85,104,0.65)] hover:bg-[#3a4255]
                active:translate-y-0 active:scale-[0.98]"
            >
              Pošalji upit
            </ContactButton>
          </div>
        </div>
      </section>

    </>
  );
}
