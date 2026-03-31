import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usluge — Delfin Prijedor",
  description:
    "Kompletan servis čišćenja i održavanja: stanovi, poslovni prostori, namještaj, fasade, hortikultura, facility management.",
};

const PHONE = "+38765246346";
const WA_LINK = `https://wa.me/${PHONE.replace("+", "")}`;

const kategorije = [
  {
    icon: "🏠",
    naziv: "Čišćenje i održavanje prostora",
    usluge: [
      "Čišćenje stambenih prostora (stanovi, kuće)",
      "Čišćenje poslovnih prostora",
      "Generalno čišćenje — jednodnevno, sedmično, mjesečno, polugodišnje, godišnje",
      "Mašinsko pranje podova",
      "Poliranje podova",
      "Odmašćivanje kuhinja",
      "Pranje prozora (unutrašnja i vanjska strana + okovi)",
      "Dubinsko pranje namještaja (dvosjed, trosjed, kreveti, fotelje)",
      "Dubinsko pranje tepiha na licu mjesta",
      "Čišćenje stubišta i zajedničkih prostora",
    ],
  },
  {
    icon: "🏗️",
    naziv: "Industrijski i vanjski nivo",
    usluge: [
      "Pranje staklene fasade do 25m",
      "Pranje fasadnih panala",
      "Pranje fasada (klasične i silikonske)",
      "Skidanje grafita",
    ],
  },
  {
    icon: "🌿",
    naziv: "Hortikultura i vanjsko uređenje",
    usluge: [
      "Orezivanje drveća",
      "Uređivanje zelenih površina",
      "Održavanje zelenila",
    ],
  },
  {
    icon: "🏭",
    naziv: "Facility Management",
    usluge: [
      "Redovno održavanje objekata (trenutno 35.000+ m² u portfoliju)",
      "Ugovorna redovna održavanja",
    ],
    link: "/facility-management",
    linkLabel: "Više o Facility Managementu →",
  },
  {
    icon: "🧴",
    naziv: "Prodaja proizvoda",
    usluge: [
      "Hemikalije za sve vrste čišćenja (stambeno i poslovno)",
      "Papirna galanterija",
      "Tečni sapun",
      "Aromatizacija prostora (za sve vrste objekata)",
    ],
    napomena: "Dostupno za B2B i B2C klijente.",
  },
];

export default function UslugePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white pt-14 pb-12 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-brand rounded-full"></span>
            Prijedor i regija
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Naše usluge
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Od čišćenja stana do upravljanja industrijskim kompleksom —
            Delfin pokriva cijeli spektar profesionalnog održavanja objekata.
          </p>
        </div>
      </section>

      {/* Kategorije */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-10">
          {kategorije.map((k) => (
            <div key={k.naziv} className="bg-slate-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl">{k.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{k.naziv}</h2>
                  {k.napomena && (
                    <p className="text-sm text-brand mt-1">{k.napomena}</p>
                  )}
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {k.usluge.map((u) => (
                  <li key={u} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-brand mt-0.5 flex-shrink-0">✓</span>
                    {u}
                  </li>
                ))}
              </ul>
              {k.link && (
                <div className="mt-6">
                  <Link href={k.link}
                    className="text-sm font-semibold text-brand hover:underline">
                    {k.linkLabel}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Trebate uslugu koja nije navedena?
          </h2>
          <p className="text-gray-500 mb-7">
            Javite nam se — vjerovatno to radimo. Odgovaramo brzo.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-brand-dark transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pošalji poruku na WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
