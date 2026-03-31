import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facility Management — Delfin Prijedor",
  description:
    "Profesionalno upravljanje i redovno održavanje objekata u Prijedoru. 35.000+ m² u portfoliju. Ugovorne usluge za firme, hotele, tržne centre.",
};

const PHONE = "+38765246346";
const WA_LINK = `https://wa.me/${PHONE.replace("+", "")}`;
const TEL_LINK = `tel:${PHONE}`;
const PHONE_DISPLAY = "065 246 346";

const prednosti = [
  {
    icon: "📋",
    naziv: "Ugovorni odnos",
    opis: "Jasno definisan SLA, raspored intervencija i izvještavanje. Nema iznenađenja.",
  },
  {
    icon: "🏭",
    naziv: "Industrijska oprema",
    opis: "Mašine i hemikalije profesionalnog nivoa — rezultati koji se vide i mjere.",
  },
  {
    icon: "👥",
    naziv: "Iskusna ekipa",
    opis: "Obučeno osoblje koje zna raditi u aktivnim poslovnim objektima diskretno i efikasno.",
  },
  {
    icon: "📊",
    naziv: "35.000+ m² portfolija",
    opis: "Kapacitet i iskustvo za objekte svih veličina — od kancelarije do tržnog centra.",
  },
];

const tipObjekta = [
  "Poslovne zgrade i kancelarije",
  "Restorani i ugostiteljski objekti",
  "Hoteli i smještajni kapaciteti",
  "Tržni centri i retail prostori",
  "Industrijski i skladišni prostori",
  "Stambeni kompleksi i zgrade",
  "Zdravstvene i obrazovne ustanove",
  "Vanjski prostori i parking",
];

export default function FacilityManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span>
            B2B · Ugovorni odnos
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight max-w-2xl">
            Facility Management za vaš objekat
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            Redovno, pouzdano, ugovorno održavanje. Delfin trenutno upravlja sa
            <strong className="text-white"> 35.000+ m²</strong> poslovnih i stambenih objekata.
            Postanite dio portfolija koji funkcioniše.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white font-bold px-6 py-3.5 rounded-xl hover:bg-brand-dark transition-colors">
              Zatražite ponudu
            </a>
            <a href={TEL_LINK}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
              Pozovite: {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Prednosti */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Zašto Delfin za vaš objekat?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {prednosti.map((p) => (
              <div key={p.naziv} className="bg-slate-50 rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.naziv}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.opis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tip objekta */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Za koje objekte radimo?
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Imamo iskustvo sa svim vrstama komercijalnih i stambenih objekata.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tipObjekta.map((t) => (
              <div key={t} className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-5 py-3.5">
                <span className="text-brand font-bold">✓</span>
                <span className="text-gray-700 text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-brand">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Razgovarajmo o vašem objektu
          </h2>
          <p className="text-blue-100 mb-7">
            Svaki objekat je drugačiji. Pozovite ili pišite — napravit ćemo ponudu
            prilagođenu vašim potrebama i budžetu.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
              WhatsApp poruka
            </a>
            <a href={TEL_LINK}
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
              Pozovite: {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
