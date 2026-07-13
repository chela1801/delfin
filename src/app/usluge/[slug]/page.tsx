import Link from "next/link";
import { notFound } from "next/navigation";
import { Home, Building2, Sparkles, HardHat, Sofa, Forklift, ChevronLeft, type LucideIcon } from "lucide-react";
import ContactButton from "@/components/ui/ContactButton";
import { CurveRight, CurveLeft } from "@/components/ui/Curves";
import HeroBg from "@/components/ui/HeroBg";
import HeroPhoto from "@/components/ui/HeroPhoto";
import FaqAccordion from "@/components/ui/FaqAccordion";
import PhotoStack from "@/components/ui/PhotoStack";

const WHATSAPP_URL = "https://wa.me/38766246346";

const usluge: {
  slug: string; naziv: string; podnaslov: string; za: string; Ikona: LucideIcon;
  stavke: string[]; faq: { q: string; a: string }[]; cta: { naslov: string; tekst: string };
}[] = [
  {
    slug: "ciscenje-stanova-i-kuca",
    naziv: "Čišćenje stanova i kuća",
    podnaslov: "Dolazimo s opremom i protokolom, radimo od vrha do dna — ti ne moraš brinuti ni o čemu. Predajemo ti prostor spreman.",
    za: "Privatni korisnici",
    Ikona: Home,
    stavke: [
      "Dnevni boravak i spavaće sobe — prašina, podovi, površine",
      "Kupatilo i toalet — detaljno čišćenje, dezinfekcija i potpuna higijena",
      "Kuhinja — površine, uređaji, sudopera, pločice",
      "Podovi — usisavanje i pranje svih vrsta podloga",
      "Prozori iznutra i okviri",
      "Prašina sa svih dostupnih površina i kutova",
    ],
    faq: [
      { q: "Koliko košta čišćenje stana?", a: "Cijena zavisi od veličine i stanja prostora — stan od 50m² i stan od 50m² koji nije čišćen godinu dana nisu isti posao. Pošalji nam opis ili par fotografija i dajemo ti okvirnu cijenu odmah." },
      { q: "Da li trebam biti kod kuće?", a: "Ne moraš. Velik broj klijenata nam ostavi ključeve — dolazimo, uradimo posao, zaključamo. Prostor ti predamo onako kako smo ga preuzeli, plus čist." },
      { q: "Koja sredstva koristite?", a: "Koristimo isključivo provjerena profesionalna sredstva — efikasna za čišćenje, a sigurna za stanare, djecu i kućne ljubimce. Dolazimo s vlastitom opremom." },
      { q: "Radite li vikendom?", a: "Da, radimo subotom. Termine dogovaramo individualno — ako ti odgovara jutro u srijedu ili veče u petak, prilagodimo se." },
    ],
    cta: {
      naslov: "Čist stan bez da podigneš prst.",
      tekst: "Jedan WhatsApp i dogovoreno je. Dolazimo u Prijedor i okolinu.",
    },
  },
  {
    slug: "ciscenje-poslovnih-prostora",
    naziv: "Čišćenje poslovnih prostora",
    podnaslov: "Fleksibilni termini koji ne ometaju rad — jutro, veče ili vikend. Tim koji dolazi, uradi posao i ne smeta.",
    za: "Firme i poslovni prostori",
    Ikona: Building2,
    stavke: [
      "Kancelarije i sale za sastanke — radne površine, podovi, stakla",
      "Hodnici, ulazi i zajednički prostori",
      "Sanitarni čvorovi — dezinfekcija i potpuno čišćenje",
      "Podovi — usisavanje i pranje svih vrsta podloga",
      "Radne površine, monitori i uredska oprema",
      "Kuhinjski kutić, aparat za kafu i hladnjak",
    ],
    faq: [
      { q: "Radite li van radnog vremena?", a: "Da — jutro, veče ili vikend. Čišćenje planiramo tako da vaš tim ni ne primijeti da smo bili." },
      { q: "Da li potpisujete ugovor?", a: "Da, za svaki redovni servis potpisujemo ugovor s jasno definisanim terminima, scopeom i cijenom. Bez iznenađenja." },
      { q: "Možete li izdat fakturu?", a: "Naravno. Faktura, ugovor i sva potrebna dokumentacija su standard za sve poslovne klijente — bez dogovora." },
      { q: "Šta ako nismo zadovoljni?", a: "Javite nam odmah — vraćamo se i rješavamo bez dodatnih troškova ili rasprava. To je naša jedina garancija." },
    ],
    cta: {
      naslov: "Čisto radno mjesto, produktivniji tim.",
      tekst: "Kontaktirajte nas za bezobaveznu procjenu prostora i pisanu ponudu.",
    },
  },
  {
    slug: "generalno-i-dubinsko-ciscenje",
    naziv: "Generalno i dubinsko čišćenje",
    podnaslov: "Kompletna obnova prostora — od iza frižidera do plafona. Za kad se to mora uraditi kako treba, jednom i zauvijek.",
    za: "Stanovi, kuće, poslovni prostori",
    Ikona: Sparkles,
    stavke: [
      "Kompletno čišćenje po protokolu — prostorija po prostorija, bez preskakanja",
      "Teško dostupna mjesta — iza i ispod namještaja, plafoni, uglovi",
      "Dezinfekcija i higijenizacija svih površina — kvake, prekidači, okviri",
      "Dubinsko čišćenje kuhinje — rešetke, nape, unutrašnjost elemenata",
      "Kupatilo i toalet — vapnenac, fuge, sanitarije od nule",
      "Čišćenje suhom parom — bez hemikalija, sigurno za djecu, alergičare i kućne ljubimce",
      "Prozori iznutra, okviri i police",
    ],
    faq: [
      { q: "Koliko traje generalno čišćenje?", a: "Stan od 60m² tipično traje 3–5 sati s timom od 2 osobe. Za veće prostore ili jako zapuštene stanove možemo i u dva navrata — procjenjujemo pri dogovoru." },
      { q: "Koliko često je preporučeno?", a: "Jednom sezonski (4x godišnje) je ideal. Minimalno dva puta godišnje ako imaš redovno čišćenje između. Jednom godišnje ako ne čistiš redovno." },
      { q: "Je li potrebno skloniti stvari?", a: "Sitne predmete i vrijednosti preporučamo skloniti. Namještaj ne trebaš pomjerati — mi radimo oko njega i gdje god možemo pristupiti." },
      { q: "Radite li vikend termine?", a: "Da. Generalna čišćenja najčešće zakazujemo subotom — ali dogovaramo prema tvojem rasporedu, ne prema našem." },
    ],
    cta: {
      naslov: "Jednom temeljito. Dugo čisto.",
      tekst: "Javi nam se s opisom prostora — dajemo procjenu odmah.",
    },
  },
  {
    slug: "ciscenje-nakon-renoviranja",
    naziv: "Čišćenje nakon renoviranja",
    podnaslov: "Nakon majstora dolazi naš tim. Građevinska prašina, ostaci boje i maltera — uklanjamo sve dok prostor ne bude spreman za život.",
    za: "Stanovi, kuće i poslovni prostori",
    Ikona: HardHat,
    stavke: [
      "Građevinska prašina — sa svih površina, zidova, plafona i podova",
      "Ostaci boje, maltera, ljepila i silikona sa pločica i stakla",
      "Prozori i okviri — čišćenje nakon obrade zidova",
      "Podovi — temeljno pranje svih vrsta podloga, bez ogrebotina",
      "Sanitarni čvorovi — dezinfekcija i higijenska priprema za svakodnevnu upotrebu",
      "Kuhinja i ugrađeni elementi — čišćenje iznutra i izvana prije spajanja uređaja",
    ],
    faq: [
      { q: "Kada možemo zakazati čišćenje?", a: "Čim su završeni radovi — ne moraš čekati. Dogovaramo termin 24–48 sati unaprijed. Ako se majstori kasne, termin pomjeramo bez problema." },
      { q: "Koliko dugo traje?", a: "Stan od 60m² s prosječnim opsegom renoviranja — tipično 4–6 sati s timom od 2 osobe. Za kompletnu rekonstrukciju s više prostorija možemo u dva navrata." },
      { q: "Je li jedno čišćenje dovoljno?", a: "Za većinu slučajeva da. Kod rekonstrukcija s puno rezanja ili bušenja u prašnjavom materijalu, preporučamo provjeru dan-dva nakon prvog prolaza — gruba prašina se slegne. Procjenjujemo pri dogovoru." },
      { q: "Radite li i za poslovne prostore?", a: "Da — uredi, prodajni prostori, objekti svih veličina. Faktura i ugovor su standard." },
    ],
    cta: {
      naslov: "Prostor spreman za useljenje. Ti se samo useliš.",
      tekst: "Javi nam se čim završe radovi — dogovaramo u roku od par sati.",
    },
  },
  {
    slug: "dizalica-i-pranje-fasada",
    naziv: "Dizalica — pranje fasada i visinski radovi",
    podnaslov: "Dosežemo do 25 metara visine — pranje fasada, čišćenje staklenih površina i održavanje zelenih površina na visini. Dizalica dostupna i za najam.",
    za: "Firme i privatni korisnici",
    Ikona: Forklift,
    stavke: [
      "Pranje fasada do 25 metara visine — temeljito, bez skela i rizika",
      "Čišćenje staklenih površina, prozora i obloga na visini",
      "Uklanjanje mahovine, algi i naslaga s fasada i krovnih površina",
      "Održavanje zelenih površina — rezidba drveća i živica na visini",
      "Primjena profesionalnih sredstava prilagođenih vrsti fasadnog materijala",
      "Iznajmljivanje dizalice — s operaterom ili bez, po dogovoru",
    ],
    faq: [
      { q: "Kolika je maksimalna visina?", a: "Naša dizalica doseže do 25 metara. To je dovoljno za stambene zgrade, poslovne objekte i visoke fasade u Prijedoru i regiji." },
      { q: "Mogu li iznajmiti dizalicu bez vaše ekipe?", a: "Da — dizalica je dostupna za najam s operaterom ili bez njega, ovisno o vašim potrebama i obavezama. Kontaktirajte nas za slobodne termine." },
      { q: "Radite li na svim vrstama fasada?", a: "Da — fasadna obloga, cigla, kamen, staklo, žbuka, kompozitni paneli. Prilagođavamo sredstvo i metodu prema materijalu kako ne bismo oštetili površinu." },
      { q: "Koliko traje pranje fasade?", a: "Ovisi o veličini objekta i vrsti prljavštine. Manji poslovni objekat tipično jedan radni dan — za veće objekte procjenu dajemo besplatno, na licu mjesta." },
    ],
    cta: {
      naslov: "Visoki radovi — bez kompromisa i skela.",
      tekst: "Opiši nam objekat i visinu — dajemo procjenu odmah.",
    },
  },
  {
    slug: "dubinsko-pranje-namjestaja-i-madraca",
    naziv: "Dubinsko pranje namještaja i madraca",
    podnaslov: "Dolazimo s opremom, peremo na licu mjesta — nema transporta, nema logistike. Sofa, madrac ili fotelja — higijenski čisto za jedan dan.",
    za: "Privatni korisnici i firme",
    Ikona: Sofa,
    stavke: [
      "Sofe i fotelje — ekstrakcija prljavštine direktno iz vlakana tkanine",
      "Madraci — dubinsko pranje i dezinfekcija, uklanjanje grinja i alergena",
      "Tapacirani namještaj — prilagođena sredstva prema vrsti materijala",
      "Uklanjanje mrlja — tretman specifičan za vrstu mrlje (mast, vino, kava, urin)",
      "Neutralizacija neugodnih mirisa — higijenska obnova, ne maskiranje",
      "Zaštitni premaz protiv mrlja (na zahtjev) i vraćanje na poziciju",
    ],
    faq: [
      { q: "Koliko dugo treba da se suši?", a: "Tipično 2–4 sata ovisno o debljini tkanine i ventilaciji prostora. Možeš koristiti isti dan — samo daj da se potpuno osuši." },
      { q: "Možete li ukloniti stare mrlje?", a: "Većinu da — mrlje od kafe, vina, hrane, urina. Starije mrlje zahtijevaju procjenu na licu mjesta i budemo iskreni ako nešto nije moguće ukloniti bez oštećenja tkanine." },
      { q: "Da li je pranje madraca sigurno?", a: "Da. Koristimo profesionalna sredstva prilagođena tekstilu, bezbjedna za alergičare i djecu. Madrac se suši u prostoru — bez premještanja." },
      { q: "Koliko traje pranje sofe?", a: "Trocjedsna sofa prosječno traje 1–2 sata. Madrac standardnih dimenzija tipično 45–60 minuta." },
    ],
    cta: {
      naslov: "Higijenski čisto — bez da pomjeraš ništa.",
      tekst: "Opiši nam komade koje imaš — dajemo okvirnu cijenu odmah.",
    },
  },
];


const proces = [
  { broj: "01", naslov: "Upit i dogovor", opis: "Pošalješ upit na WhatsApp. U roku od par sati dogovorimo termin, vrstu čišćenja i okvirnu cijenu." },
  { broj: "02", naslov: "Dolazak tima", opis: "Dolazimo opremljeni — sredstva i oprema su naša. Nema potrebe da pripremate ništa." },
  { broj: "03", naslov: "Čišćenje po protokolu", opis: "Radimo sistematično, prostorija po prostorija. Ništa se ne preskače." },
  { broj: "04", naslov: "Provjera i predaja", opis: "Po završetku provjeri rezultat. Ako nešto nije kako treba — rješavamo odmah." },
];

export function generateStaticParams() {
  return usluge.map((u) => ({ slug: u.slug }));
}

const seoMeta: Record<string, { title: string; description: string }> = {
  "ciscenje-stanova-i-kuca": {
    title: "Čišćenje stanova i kuća u Prijedoru",
    description: "Profesionalno čišćenje stanova i kuća u Prijedoru — od prašine do podova, od vrha do dna. Dolazimo opremljeni, ti samo otvori vrata.",
  },
  "ciscenje-poslovnih-prostora": {
    title: "Čišćenje poslovnih prostora Prijedor",
    description: "Čišćenje kancelarija i poslovnih prostora u Prijedoru — jutarnji, večernji ili vikend termini. Ugovor, faktura i stalni tim po standardu.",
  },
  "generalno-i-dubinsko-ciscenje": {
    title: "Generalno i dubinsko čišćenje Prijedor",
    description: "Dubinsko čišćenje prostora u Prijedoru — od iza frižidera do plafona. Suha para, dezinfekcija i higijenizacija svih površina. Jednom temeljito — dugo čisto.",
  },
  "ciscenje-nakon-renoviranja": {
    title: "Čišćenje nakon renoviranja Prijedor",
    description: "Čišćenje nakon renoviranja u Prijedoru — prašina, boja, malter. Tim dolazi odmah po završetku radova, prostor spreman za useljenje isti dan.",
  },
  "dizalica-i-pranje-fasada": {
    title: "Pranje fasada i visinski radovi Prijedor",
    description: "Pranje fasada i visinski radovi u Prijedoru — do 25 metara visine bez skela. Uklanjanje mahovine i algi, čišćenje stakla. Dizalica dostupna i za najam.",
  },
  "dubinsko-pranje-namjestaja-i-madraca": {
    title: "Dubinsko pranje namještaja i madraca",
    description: "Dubinsko pranje namještaja i madraca u Prijedoru — sofe, fotelje, dezinfekcija madraca i uklanjanje grinja. Dolazimo s opremom, peremo na licu mjesta.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const usluga = usluge.find((u) => u.slug === slug);
  if (!usluga) return {};
  const meta = seoMeta[slug];
  const title = meta?.title ?? `${usluga.naziv} u Prijedoru`;
  const description = meta?.description ?? usluga.podnaslov;
  return {
    title,
    description,
    openGraph: {
      title: `${title} | Delfin`,
      description,
      locale: "sr_BA",
      type: "website" as const,
    },
    alternates: {
      canonical: `https://delfin-amber.vercel.app/usluge/${slug}`,
    },
  };
}

export default async function UslugaDetaljPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const usluga = usluge.find((u) => u.slug === slug);
  if (!usluga) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: usluga.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section className="relative bg-[var(--color-primary)] pt-24 sm:pt-32 pb-20 sm:pb-28 overflow-hidden">

        <HeroBg />
        <HeroPhoto />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-xl flex flex-col gap-4">
              <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold rounded-full w-fit">
                {usluga.za}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                {usluga.naziv} u Prijedoru
              </h1>
              <p className="text-lg text-white/60 leading-relaxed">
                {usluga.podnaslov}
              </p>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden">
              <ContactButton
                variant="message"
                className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                  shadow-[0_4px_18px_rgba(74,85,104,0.45)]
                  hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(74,85,104,0.60)] hover:bg-[#3a4255]
                  active:translate-y-0 active:scale-[0.98]"
              >
                Pošalji upit
              </ContactButton>
            </div>
          </div>

        </div>
        <CurveRight fill="#FFFFFF" heroShadow />
      </section>


      {/* ═══ SADRŽAJ — 2 kolone ══════════════════════════════ */}
      <section className="relative bg-white pt-14 pb-20 md:pb-28">
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

              {/* Fotografije s terena */}
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-[var(--color-text)] tracking-tight">
                  Fotografije s terena
                </h2>
                <PhotoStack />
              </div>

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
                <FaqAccordion items={usluga.faq} />
              </div>

              {/* Dugme natrag */}
              <Link
                href="/usluge"
                className="self-start inline-flex items-center gap-2 px-5 py-2.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                  shadow-[0_4px_14px_rgba(74,85,104,0.30)]
                  hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(74,85,104,0.48)] hover:bg-[#3a4255]
                  active:translate-y-0 active:scale-[0.98]"
              >
                <ChevronLeft size={16} />
                Sve usluge
              </Link>

            </div>

            {/* Desna kolona — sticky CTA kartica */}
            <div className="hidden lg:block w-72 flex-shrink-0">
              <div className="group sticky top-24 flex flex-col gap-5 p-6 border border-[var(--color-border)] rounded-[var(--radius-xl)]
                shadow-[0_4px_24px_rgba(10,45,110,0.10)]">

                <div className="w-11 h-11 flex items-center justify-center bg-[var(--color-bg-alt)] text-[var(--color-accent)] rounded-[var(--radius-lg)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-200">
                  <usluga.Ikona size={22} />
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
                  <ContactButton
                    variant="message"
                    className="inline-flex items-center justify-center px-5 py-3 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
                      shadow-[0_4px_14px_rgba(74,85,104,0.40)]
                      hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(74,85,104,0.55)] hover:bg-[#3a4255]
                      active:translate-y-0 active:scale-[0.98]"
                  >
                    Pošalji upit
                  </ContactButton>
                  <p className="text-xs text-[var(--color-muted)] text-center">
                    Odgovaramo u roku od par sati
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

        <CurveLeft fill="#0A2D6E" stroke="transparent" />
      </section>


      {/* ═══ BOTTOM CTA ══════════════════════════════════════ */}
      <section className="relative bg-[var(--color-primary)] pt-16 md:pt-24 pb-20 md:pb-28 mt-[-2px] overflow-hidden">

        {/* Fade overlay — maskira spoj sa curve-om iz prethodne sekcije */}
        <div
          className="absolute top-0 left-0 right-0 h-40 pointer-events-none z-10"
          style={{ background: "linear-gradient(180deg, #0A2D6E 0%, transparent 100%)" }}
        />

        {/* Statični blur krugovi na dnu */}
        <div className="absolute bottom-[-4rem] left-[15%] w-[420px] h-[420px] rounded-full bg-[var(--color-secondary)] opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-7rem] left-[50%] w-[500px] h-[500px] rounded-full bg-[#2563EB] opacity-30 blur-3xl pointer-events-none" />

        {/* Bottom fade — maskira prelaz ka footeru */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
          style={{ background: "linear-gradient(0deg, #0A2D6E 0%, transparent 100%)" }}
        />

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {usluga.cta.naslov}
          </h2>
          <p className="text-white/60 max-w-sm">
            {usluga.cta.tekst}
          </p>
          <ContactButton
            variant="message"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] transition-all duration-150
              shadow-[0_4px_18px_rgba(74,85,104,0.50)]
              hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(74,85,104,0.65)] hover:bg-[#3a4255]
              active:translate-y-0 active:scale-[0.98]"
          >
            Pošalji upit
          </ContactButton>
        </div>
      </section>

    </>
  );
}
