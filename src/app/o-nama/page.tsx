import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Delfinu — Ko smo i zašto radimo ovo",
  description:
    "Delfin nije nastao slučajno. Ovo je priča o tome zašto smo odlučili da podignemo standard čišćenja i održavanja u Prijedoru i regiji.",
};

const PHONE = "+38765246346";
const WA_LINK = `https://wa.me/${PHONE.replace("+", "")}`;

const brojevi = [
  { broj: "35.000+", label: "m² u redovnom održavanju" },
  { broj: "1.000+", label: "zadovoljnih klijenata" },
  { broj: "20m", label: "visina rada hidrauličnom platformom" },
  { broj: "B2B + B2C", label: "servis za sve vrste objekata" },
];

export default function ONamaPage() {
  return (
    <>
      {/* HERO — Hormozi hook */}
      <section className="bg-gray-900 text-white pt-16 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span>
            Prijedor, Bosna i Hercegovina
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Nismo tu da budemo{" "}
            <span className="text-brand-light">najjeftiniji.</span>
            <br />
            Tu smo da budemo{" "}
            <span className="text-white">nezamjenjivi.</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Svaka firma vam kaže da su "profesionalni" i "pouzdani". Mi vam to
            nećemo reći. Pokazat ćemo vam 35.000 kvadrata koje održavamo svaki
            dan — i ostavit ćemo da to govori umjesto nas.
          </p>
        </div>
      </section>

      {/* PRIČA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Kako je sve počelo
          </h2>

          <div className="prose prose-lg text-gray-600 space-y-6">
            <p className="text-lg leading-relaxed">
              Boris Novaković nije otvorio Delfin jer je vidio "tržišnu
              prliku". Otvorio ga je jer je vidio problem koji niko nije
              ozbiljno rješavao — u Prijedoru nije postojao servis za čišćenje
              na koji možeš računati.
            </p>

            <p className="text-lg leading-relaxed">
              Firme su dolazile, uzimale novac, i nestajale kad ne bi odgovaralo.
              Stanari su zvali po pet agencija da dobiju jednu koja će doći na
              vrijeme. Restorani i hoteli su trpjeli jer nisu imali kome da
              prepuste taj posao s povjerenjem.
            </p>

            <p className="text-lg leading-relaxed">
              <strong className="text-gray-900">
                Odluka je bila jednostavna: ako to niko ne radi kako treba —
                uradit ćemo mi.
              </strong>
            </p>

            <p className="text-lg leading-relaxed">
              Počeli smo mali. Stanovi, kancelarije, osnovni servis. Ali od
              prvog dana s jednim pravilom koje se nije smjelo prekršiti:{" "}
              <em>klijent mora biti zadovoljan ili se vraćamo dok ne bude.</em>
            </p>

            <p className="text-lg leading-relaxed">
              To pravilo nas je koštalo vremena i novca na početku. Istovremeno,
              to je jedini razlog zašto danas imamo više od hiljadu klijenata koji
              nas zovu ponovo — ne zato što moraju, nego zato što hoće.
            </p>
          </div>
        </div>
      </section>

      {/* BROJEVI */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Iza svake cifre stoji objekat koji se vidi
          </h2>
          <div className="grid grid-cols-2 gap-5">
            {brojevi.map((b) => (
              <div
                key={b.label}
                className="bg-white rounded-xl p-6 border border-gray-100 text-center"
              >
                <div className="text-3xl font-bold text-brand mb-1">
                  {b.broj}
                </div>
                <div className="text-sm text-gray-500">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILOZOFIJA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Kako mi razmišljamo o ovom poslu
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-brand pl-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Čistoća nije estetika. To je poruka.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kad uđete u prostor koji mi održavamo, osjetit ćete razliku
                prije nego je svjesno registrujete. Čist prostor govori:
                ovde su ozbiljni ljudi. Mi prodajemo tu poruku — ne samo
                uslugu čišćenja.
              </p>
            </div>

            <div className="border-l-4 border-brand pl-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Nema skrivenih troškova, nema iznenađenja.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cijena koju dogovorimo je cijena koju platite. Ako nešto
                nismo predvidjeli — to je naš problem, ne vaš. Zato smo oprezni
                kad procjenjujemo posao, i zato nam klijenti vjeruju na dugi rok.
              </p>
            </div>

            <div className="border-l-4 border-brand pl-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Investiramo u opremu jer cijenimo vaše vrijeme.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Hidraulična platforma do 20 metara, industrijske mašine za
                pranje podova, profesionalne hemikalije — nismo tu da
                improvizujemo s kofom i krpom. Pravi alati daju prave rezultate,
                i brže.
              </p>
            </div>

            <div className="border-l-4 border-brand pl-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Lokalni smo — i to je prednost.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nismo franšiza iz Sarajeva ili Beograda koja ne zna gdje je
                Urije. Znamo Prijedor, znamo firme, znamo ljude. Kad trebate
                hitnu intervenciju — tu smo, ne za sat, ne za dva dana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OBEĆANJE */}
      <section className="py-20 px-4 bg-brand">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-blue-100 text-sm font-semibold uppercase tracking-widest mb-4">
            Naše obećanje
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            "Dolazimo jednom.
            <br />
            Vraćate nas stalno."
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Ovo nije marketinški slogan. Ovo je jedini standard koji prihvatamo.
            Ako ne ispunimo obećanje — dogovorit ćemo se dok ne ispunimo.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-base"
          >
            Razgovarajmo
          </a>
          <p className="text-blue-200 text-sm mt-4">
            Milana Vrhovca 27, Prijedor · @delfinprijedor
          </p>
        </div>
      </section>
    </>
  );
}
