import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — Delfin Prijedor",
  description:
    "Kontaktirajte Delfin za čišćenje i održavanje u Prijedoru. Pozovite ili pošaljite WhatsApp poruku.",
};

const PHONE = "+38765246346";
const PHONE_DISPLAY = "065 246 346";
const WA_LINK = `https://wa.me/${PHONE.replace("+", "")}`;
const TEL_LINK = `tel:${PHONE}`;

export default function KontaktPage() {
  return (
    <>
      <section className="bg-white pt-14 pb-12 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Kontakt
          </h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Najbrži način — WhatsApp ili poziv. Odgovaramo u roku od sat vremena
            tokom radnog vremena.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-5">
          {/* WhatsApp */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 bg-green-50 border border-green-200 rounded-2xl p-6 hover:bg-green-100 transition-colors group"
          >
            <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">
                WhatsApp · Preporučeno
              </div>
              <div className="text-xl font-bold text-gray-900">{PHONE_DISPLAY}</div>
              <div className="text-sm text-gray-500 mt-1">
                Pišite nam — odgovaramo brzo, radnim danima i subotom
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Poziv */}
          <a
            href={TEL_LINK}
            className="flex items-center gap-5 bg-brand-light border border-blue-200 rounded-2xl p-6 hover:bg-blue-100 transition-colors group"
          >
            <div className="w-14 h-14 bg-brand rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-brand uppercase tracking-wide mb-1">
                Direktan poziv
              </div>
              <div className="text-xl font-bold text-gray-900">{PHONE_DISPLAY}</div>
              <div className="text-sm text-gray-500 mt-1">
                Pon – Sub · po dogovoru vikendom
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-brand transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Lokacija */}
          <div className="bg-slate-50 border border-gray-100 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                📍
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Lokacija
                </div>
                <div className="text-lg font-bold text-gray-900">
                  Prijedor, Bosna i Hercegovina
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Pokrivamo Prijedor i okolinu — kontaktirajte nas za detalje o dolasku
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
