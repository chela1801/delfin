import Link from "next/link";

const PHONE = "+38765246346";
const WA_LINK = `https://wa.me/${PHONE.replace("+", "")}`;
const TEL_LINK = `tel:${PHONE}`;

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-brand flex items-center justify-center">
                <span className="text-white font-bold text-xs">D</span>
              </div>
              <span className="font-bold text-white text-lg">Delfin</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Profesionalna facility management kompanija iz Prijedora.
              Čišćenje, održavanje i uređenje objekata na najvišem nivou.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Usluge</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Čišćenje stanova i kuća",
                "Čišćenje poslovnih prostora",
                "Dubinsko pranje namještaja",
                "Pranje fasada i prozora",
                "Facility Management",
                "Hortikultura",
              ].map((s) => (
                <li key={s}>
                  <Link href="/usluge" className="hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={TEL_LINK} className="hover:text-white transition-colors flex items-center gap-2">
                  <span>📞</span> 065 246 346
                </a>
              </li>
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <span>💬</span> WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Prijedor, Bosna i Hercegovina</span>
              </li>
              <li className="text-gray-500">Pon–Sub, po dogovoru vikendom</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Delfin. Sva prava zadržana.</p>
          <p className="italic">"Dolazimo jednom. Vraćate nas stalno."</p>
        </div>
      </div>
    </footer>
  );
}
