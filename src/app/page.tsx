import Link from "next/link";

const PHONE = "+38765246346";
const WA_LINK = `https://wa.me/${PHONE.replace("+", "")}`;
const TEL_LINK = `tel:${PHONE}`;

const usluge = [
  {
    icon: "🏠",
    naziv: "Čišćenje stambenih prostora",
    opis: "Stanovi, kuće, generalno i dubinsko čišćenje. Jednokratno ili po ugovoru.",
    href: "/usluge/cistenje-stambenih",
  },
  {
    icon: "🏢",
    naziv: "Čišćenje poslovnih prostora",
    opis: "Kancelarije, restorani, hoteli, tržni centri. Redovno i vanredno.",
    href: "/usluge/cistenje-poslovnih",
  },
  {
    icon: "🛋️",
    naziv: "Dubinsko pranje namještaja",
    opis: "Dvosjeди, trosjeди, kreveti, fotelje, tepihi — na licu mjesta.",
    href: "/usluge/dubinsko-pranje",
  },
  {
    icon: "🏗️",
    naziv: "Fasade i prozori",
    opis: "Pranje staklenih fasada do 25m, klasičnih i silikonskih fasada, skidanje grafita.",
    href: "/usluge/fasade",
  },
  {
    icon: "🌿",
    naziv: "Hortikultura",
    opis: "Orezivanje drveća, uređivanje i održavanje zelenih površina.",
    href: "/usluge/hortikultura",
  },
  {
    icon: "🏭",
    naziv: "Facility Management",
    opis: "Redovno ugovorno održavanje objekata. Trenutno 35.000+ m² u portfoliju.",
    href: "/facility-management",
  },
];

const trustSignali = [
  { broj: "35.000+", label: "m² u redovnom održavanju" },
  { broj: "B2B + B2C", label: "puni servis za sve klijente" },
  { broj: "Prijedor", label: "i cijela regija" },
  { broj: "Industrijska", label: "oprema profesionalnog nivoa" },
];

const recenzije = [
  {
    tekst: "Odlična ekipa, profesionalni pristup. Stanove čiste redovno već godinama. Uvijek na vrijeme, uvijek uredno.",
    autor: "Amira K.",
    tip: "B2C",
  },
  {
    tekst: "Delfin nam čisti poslovni prostor već dvije godine. Pouzdani, diskretni, bez komplikacija. Preporučujem.",
    autor: "Direktor, IT kompanija Prijedor",
    tip: "B2B",
  },
  {
    tekst: "Pranje trosjeda je bilo kao novi. Nisam vjerovala da se može tako očistiti. Zakazujem svake godine.",
    autor: "Maja P.",
    tip: "B2C",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-light text-brand text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-brand rounded-full"></span>
              Prijedor i regija · 35.000+ m² u portfoliju
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Profesionalno čišćenje i{" "}
              <span className="text-brand">održavanje objekata</span>
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
              Delfin nije generički servis za čišćenje. Upravljamo kompleksnim objektima,
              radimo sa firmama i domaćinstvima — i rezultati govore sami za sebe.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand text-white font-semibold px-6 py-3.5 rounded-xl text-base hover:bg-brand-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pošalji poruku
              </a>
              <a
                href={TEL_LINK}
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold px-6 py-3.5 rounded-xl text-base hover:border-brand hover:text-brand transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                </svg>
                065 246 346
              </a>
            </div>
          </div>

          {/* Trust signali */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {trustSignali.map((s) => (
              <div key={s.label} className="bg-slate-50 rounded-xl p-5 border border-gray-100">
                <div className="text-2xl font-bold text-brand mb-1">{s.broj}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B vs B2C */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Radimo sa svima
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Bilo da trebate čišćenje stana ili upravljanje kompleksom od hiljada kvadrata —
            imamo kapacitet i iskustvo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* B2C */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Za domaćinstva</h3>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                Čišćenje stanova i kuća, dubinsko pranje namještaja i tepiha,
                generalna čišćenja, selidbe — brzo, pouzdano, bez komplikacija.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-7">
                {["Jednokratno ili redovno", "Jasna cijena unaprijed", "Brz odgovor i dolazak", "Garancija zadovoljstva"].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-brand">✓</span> {i}
                  </li>
                ))}
              </ul>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-brand-dark transition-colors">
                Pošalji upit
              </a>
            </div>

            {/* B2B */}
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-2">Za firme i objekte</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Kancelarije, restorani, hoteli, tržni centri, industrijski objekti.
                Ugovoreno redovno održavanje sa SLA pristupom i izvještavanjem.
              </p>
              <ul className="space-y-2 text-sm text-gray-300 mb-7">
                {["35.000+ m² u redovnom upravljanju", "Ugovorni odnos sa SLA", "Profesionalna oprema", "Reference dostupne na upit"].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-brand-light">✓</span> {i}
                  </li>
                ))}
              </ul>
              <Link href="/facility-management"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-white/10 transition-colors">
                Facility Management →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Usluge */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Naše usluge
          </h2>
          <p className="text-gray-500 text-center mb-12">
            Kompletan servis od stana do industrijske fasade.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {usluge.map((u) => (
              <Link
                key={u.naziv}
                href={u.href}
                className="group bg-slate-50 rounded-xl p-6 border border-gray-100 hover:border-brand hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{u.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand transition-colors">
                  {u.naziv}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{u.opis}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/usluge"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl text-sm hover:border-brand hover:text-brand transition-colors">
              Pogledaj sve usluge →
            </Link>
          </div>
        </div>
      </section>

      {/* Recenzije */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Šta kažu klijenti
          </h2>
          <p className="text-gray-500 text-center mb-12">
            Gradimo povjerenje — jedan objekat po jedan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {recenzije.map((r) => (
              <div key={r.autor} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                  "{r.tekst}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900 text-sm">{r.autor}</span>
                  <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                    {r.tip}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-brand">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Dolazimo jednom. Vraćate nas stalno.
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Zakažite čišćenje ili zatražite ponudu za vaš objekat. Odgovaramo brzo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a href={TEL_LINK}
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
              Pozovi: 065 246 346
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
