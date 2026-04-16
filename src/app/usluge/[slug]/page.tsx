import Link from "next/link";
import { notFound } from "next/navigation";
import { CurveRight } from "@/components/ui/Curves";

const WHATSAPP_URL = "https://wa.me/38766246346";

const usluge = [
  {
    slug: "ciscenje-stanova-i-kuca",
    naziv: "Čišćenje stanova i kuća",
    podnaslov: "Temeljito, pouzdano i bez stresa — dolazimo opremljeni, radimo po protokolu, prostor predajemo spreman.",
    za: "Privatni korisnici",
    ikona: "🏠",
    stavke: [
      "Dnevni boravak i spavaće sobe",
      "Kupatilo i WC — detaljno čišćenje i dezinfekcija",
      "Kuhinja — površine, uređaji, sudopera",
      "Podovi — usisavanje i pranje",
      "Prozori iznutra",
      "Prašina sa svih dostupnih površina",
    ],
    faq: [
      { q: "Koliko košta čišćenje stana?", a: "Cijena zavisi od veličine i stanja prostora. Kontaktiraj nas za okvirnu procjenu — odgovaramo brzo." },
      { q: "Da li trebam biti kod kuće?", a: "Ne mora. Mnogi klijenti nam ostave ključeve. Sve je osigurano i odgovorni smo za prostor." },
      { q: "Koja sredstva koristite?", a: "Koristimo profesionalna sredstva koja su sigurna za stanare, djecu i kućne ljubimce." },
      { q: "Radite li vikendom?", a: "Da, radimo subotom. Termine dogovaramo individualno prema vašim potrebama." },
    ],
    cta: {
      naslov: "Spreman za čist stan bez napora?",
      tekst: "Jedan WhatsApp i dogovoreno je. Dolazimo u Prijedor i okolinu.",
    },
  },
  {
    slug: "ciscenje-poslovnih-prostora",
    naziv: "Čišćenje poslovnih prostora",
    podnaslov: "Čisto radno okruženje za vaš tim — dolazimo kad vama odgovara, radimo brzo i pouzdano.",
    za: "Firme i poslovni prostori",
    ikona: "🏢",
    stavke: [
      "Kancelarije i sale za sastanke",
      "Hodnici i zajednički prostori",
      "Sanitarni čvorovi — dezinfekcija i čišćenje",
      "Podovi — usisavanje i pranje",
      "Radne površine i oprema",
      "Kuhinjski kutić i aparat za kafu",
    ],
    faq: [
      { q: "Radite li van radnog vremena?", a: "Da — jutro, veče ili vikend. Čišćenje planiramo tako da ne ometa rad vaše firme." },
      { q: "Da li potpisujete ugovor?", a: "Da, za svaki redovni servis potpisujemo ugovor s jasnim terminima, scope-om i cijenom." },
      { q: "Možete li izdat fakturu?", a: "Naravno. Faktura, ugovor i sva potrebna dokumentacija su standard za poslovne klijente." },
      { q: "Šta ako nismo zadovoljni?", a: "Javite nam odmah — vraćamo se i rješavamo bez dodatnih troškova. To je naša garancija." },
    ],
    cta: {
      naslov: "Čisto radno mjesto, produktivan tim.",
      tekst: "Kontaktirajte nas za bezobaveznu procjenu prostora i ponudu.",
    },
  },
  {
    slug: "generalno-i-dubinsko-ciscenje",
    naziv: "Generalno i dubinsko čišćenje",
    podnaslov: "Kada redovno čišćenje nije dovoljno — kompletna obnova prostora od poda do plafona.",
    za: "Stanovi, kuće, poslovni prostori",
    ikona: "✨",
    stavke: [
      "Kompletno čišćenje po protokolu — prostorija po prostorija",
      "Teško dostupna mjesta — iza namještaja, plafoni, uglovi",
      "Dezinfekcija svih površina",
      "Dubinsko čišćenje kuhinje i kupaonice",
      "Čišćenje unutrašnjosti kuhinjskih elemenata",
      "Prozori iznutra i okviri",
    ],
    faq: [
      { q: "Koliko traje generalno čišćenje?", a: "Ovisno o veličini prostora — stan od 60m² tipično traje 3–5 sati s timom od 2 osobe." },
      { q: "Koliko često je preporučeno?", a: "Jednom sezonski ili minimalno dva puta godišnje za održavanje prostora u odličnom stanju." },
      { q: "Je li potrebno skloniti stvari?", a: "Sitne predmete i vrijedne stvari preporučamo skloniti. Namještaj ne trebate pomjerati." },
      { q: "Radite li vikend termine?", a: "Da. Generalna čišćenja najčešće zakazujemo subotom — dogovaramo prema vašem rasporedu." },
    ],
    cta: {
      naslov: "Prostor koji diše od čistoće.",
      tekst: "Rezerviši termin — javljamo se brzo s procjenom.",
    },
  },
  {
    slug: "ciscenje-nakon-renoviranja",
    naziv: "Čišćenje nakon renoviranja",
    podnaslov: "Prašina, boja, malter — uklanjamo sve što ostaje nakon radova. Prostor spreman za useljenje.",
    za: "Stanovi i kuće nakon radova",
    ikona: "🔨",
    stavke: [
      "Uklanjanje građevinske prašine sa svih površina",
      "Čišćenje ostataka boje, maltera i ljepila",
      "Pranje podova i finalno poliranje",
      "Čišćenje prozora i okvira",
      "Sanitarni čvorovi — dezinfekcija i priprema za korištenje",
      "Kuhinja — priprema za spajanje uređaja",
    ],
    faq: [
      { q: "Kada se može raditi čišćenje nakon renoviranja?", a: "Čim su završeni radovi i prostor je oslobođen — dolazimo u roku od 24–48 sati od dogovora." },
      { q: "Koliko traje?", a: "Ovisno o obimu radova i kvadraturi — tipično jednog dana za prosječan stan." },
      { q: "Je li jedno čišćenje dovoljno?", a: "Za većinu prostora da. Kod velikih renoviranja može biti potreban drugi prolaz — procjenjujemo na licu mjesta." },
      { q: "Dolazite li i za poslovne prostore?", a: "Da, radimo i uredska i komercijalna postrojenja nakon renoviranja." },
    ],
    cta: {
      naslov: "Spreman za useljenje za 24 sata.",
      tekst: "Javi nam se odmah čim završe radovi — dolazimo brzo.",
    },
  },
  {
    slug: "dubinsko-pranje-tepisa",
    naziv: "Dubinsko pranje tepiha i namještaja",
    podnaslov: "Ručno dubinsko pranje tepiha, sofa i tapaciranog namještaja — bez mašina, bez kompromisa.",
    za: "Privatni korisnici i firme",
    ikona: "🛋️",
    stavke: [
      "Tepisi i kilimi — ručno pranje s profesionalnim sredstvima",
      "Sofe i fotelje — ekstrakcija prljavštine iz vlakana",
      "Tapacirani namještaj — čišćenje bez oštećenja tkanine",
      "Uklanjanje mrlja i neugodnih mirisa",
      "Dezinfekcija i zaštitni premaz (na zahtjev)",
      "Sušenje i vraćanje na poziciju",
    ],
    faq: [
      { q: "Koliko dugo treba da se suši?", a: "Tipično 2–4 sata ovisno o debljini tkanine i ventilaciji prostora." },
      { q: "Možete li ukloniti stare mrlje?", a: "Većinu da — ovisno o vrsti mrlje i tkanini. Procjenjujemo na licu mjesta i budemo iskreni." },
      { q: "Da li dolazite kući?", a: "Da, dolazimo s kompletnom opremom — nema potrebe da transportujete tepih ili namještaj." },
      { q: "Koliko traje pranje sofe?", a: "Trocjedsna sofa prosječno traje 1–2 sata. Tepisi se računaju po kvadratnom metru." },
    ],
    cta: {
      naslov: "Svježe, čisto, kao novo.",
      tekst: "Javi nam se s opisom komada — dajemo okvirnu cijenu brzo.",
    },
  },
];

function FotoPlaceholder() {
  return (
    <div className="w-full aspect-[16/9] bg-[var(--color-bg-alt)] border-2 border-dashed border-[var(--color-border)] rounded-[var(--radius-xl)] flex flex-col items-center justify-center gap-2">
      <span className="text-3xl opacity-20">📷</span>
      <span className="text-sm text-[var(--color-muted)] font-medium">Fotografija s terena</span>
    </div>
  );
}

const proces = [
  { broj: "01", naslov: "Upit i dogovor", opis: "Pošalješ upit na WhatsApp. U roku od par sati dogovorimo termin, vrstu čišćenja i okvirnu cijenu." },
  { broj: "02", naslov: "Dolazak tima", opis: "Dolazimo opremljeni — sredstva i oprema su naša. Nema potrebe da pripremate ništa." },
  { broj: "03", naslov: "Čišćenje po protokolu", opis: "Radimo sistematično, prostorija po prostorija. Ništa se ne preskače." },
  { broj: "04", naslov: "Provjera i predaja", opis: "Po završetku provjeri rezultat. Ako nešto nije kako treba — rješavamo odmah." },
];

export function generateStaticParams() {
  return usluge.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const usluga = usluge.find((u) => u.slug === slug);
  if (!usluga) return {};
  return {
    title: `${usluga.naziv} u Prijedoru — Delfin`,
    description: usluga.podnaslov,
  };
}

export default async function UslugaDetaljPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const usluga = usluge.find((u) => u.slug === slug);
  if (!usluga) notFound();

  return (
    <>

      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section className="relative bg-[var(--color-primary)] pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <nav className="text-sm text-white/40 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white/70 transition-colors">Početna</Link>
            <span>/</span>
            <Link href="/usluge" className="hover:text-white/70 transition-colors">Usluge</Link>
            <span>/</span>
            <span className="text-white/70">{usluga.naziv}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-xl flex flex-col gap-4">
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold rounded-full w-fit">
                {usluga.za}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                {usluga.naziv} u Prijedoru
              </h1>
              <p className="text-lg text-white/60 leading-relaxed">
                {usluga.podnaslov}
              </p>
            </div>

            {/* Mobile CTA */}
            <div className="md:hidden">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                  shadow-[0_4px_18px_rgba(74,85,104,0.45)]
                  hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(74,85,104,0.60)] hover:bg-[#3a4255]
                  active:translate-y-0 active:scale-[0.98]"
              >
                Pošalji upit na WhatsApp
              </a>
            </div>
          </div>

        </div>
        <CurveRight fill="#FFFFFF" />
      </section>


      {/* ═══ SADRŽAJ — 2 kolone ══════════════════════════════ */}
      <section className="bg-white pt-14 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Lijeva kolona */}
            <div className="flex-1 flex flex-col gap-12">

              {/* Šta je uključeno */}
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-bold text-[var(--color-text)] tracking-tight">
                  Šta uključuje ova usluga
                </h2>
                <ul className="flex flex-col gap-3">
                  {usluga.stavke.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-[var(--color-text)]">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-white" />
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Foto placeholder */}
              <FotoPlaceholder />

              {/* Proces */}
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-bold text-[var(--color-text)] tracking-tight">
                  Kako funkcioniše
                </h2>
                <div className="flex flex-col gap-3">
                  {proces.map((k) => (
                    <div
                      key={k.broj}
                      className="flex gap-4 p-5 border border-[var(--color-border)] rounded-[var(--radius-xl)]
                        shadow-[0_2px_12px_rgba(10,45,110,0.05)]"
                    >
                      <span className="flex-shrink-0 w-10 h-10 bg-[var(--color-primary)] text-white text-sm font-bold rounded-full flex items-center justify-center">
                        {k.broj}
                      </span>
                      <div>
                        <p className="font-semibold text-[var(--color-text)] mb-1">{k.naslov}</p>
                        <p className="text-sm text-[var(--color-muted)] leading-relaxed">{k.opis}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-bold text-[var(--color-text)] tracking-tight">
                  Često postavljana pitanja
                </h2>
                <div className="flex flex-col gap-3">
                  {usluga.faq.map((item) => (
                    <div
                      key={item.q}
                      className="p-5 border border-[var(--color-border)] rounded-[var(--radius-xl)]
                        shadow-[0_2px_12px_rgba(10,45,110,0.05)]"
                    >
                      <p className="font-semibold text-[var(--color-text)] mb-2">{item.q}</p>
                      <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link natrag */}
              <Link
                href="/usluge"
                className="self-start text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors font-medium"
              >
                ← Sve usluge
              </Link>

            </div>

            {/* Desna kolona — sticky CTA kartica */}
            <div className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24 flex flex-col gap-5 p-6 border border-[var(--color-border)] rounded-[var(--radius-xl)]
                shadow-[0_4px_24px_rgba(10,45,110,0.10)]">

                <div className="w-11 h-11 flex items-center justify-center bg-[var(--color-bg-alt)] rounded-[var(--radius-lg)] text-xl">
                  {usluga.ikona}
                </div>

                <div>
                  <h3 className="font-bold text-[var(--color-text)] text-lg mb-1">Zatraži upit</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    Opiši prostor i termin koji ti odgovara — odgovaramo brzo.
                  </p>
                </div>

                <div className="border-t border-[var(--color-border)] pt-4 flex flex-col gap-2.5">
                  {["Besplatna procjena", "Dolazak opremljenih", "Garancija kvaliteta"].map((s) => (
                    <div key={s} className="flex items-center gap-2.5 text-sm text-[var(--color-text)]">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      </span>
                      {s}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-3 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                      shadow-[0_4px_14px_rgba(74,85,104,0.40)]
                      hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(74,85,104,0.55)] hover:bg-[#3a4255]
                      active:translate-y-0 active:scale-[0.98]"
                  >
                    Pošalji upit na WhatsApp
                  </a>
                  <p className="text-xs text-[var(--color-muted)] text-center">
                    Odgovaramo u roku od par sati
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ═══ BOTTOM CTA ══════════════════════════════════════ */}
      <section className="bg-[var(--color-primary)] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {usluga.cta.naslov}
          </h2>
          <p className="text-white/60 max-w-sm">
            {usluga.cta.tekst}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
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
