import Link from "next/link";
import DelfinLogo from "@/components/ui/DelfinLogo";
import ContactButton from "@/components/ui/ContactButton";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

const usluge = [
  { label: "Čišćenje stanova i kuća", href: "/usluge/ciscenje-stanova-i-kuca" },
  { label: "Čišćenje poslovnih prostora", href: "/usluge/ciscenje-poslovnih-prostora" },
  { label: "Generalno i dubinsko čišćenje", href: "/usluge/generalno-i-dubinsko-ciscenje" },
  { label: "Čišćenje nakon renoviranja", href: "/usluge/ciscenje-nakon-renoviranja" },
  { label: "Dubinsko pranje tepiha", href: "/usluge/dubinsko-pranje-tepisa" },
];

const kompanija = [
  { label: "O nama", href: "/o-nama" },
  { label: "Za firme", href: "/firme" },
  { label: "Kontakt", href: "/kontakt" },
];

const WHATSAPP_URL = "https://wa.me/38766246346";
const PHONE = "+387 66 246 346";

const socials = [
  { label: "Instagram", href: "https://instagram.com/delfin.prijedor", Icon: FaInstagram },
  { label: "TikTok",    href: "https://tiktok.com/@delfin.prijedor",   Icon: FaTiktok   },
  { label: "Facebook",  href: "https://facebook.com/delfin.prijedor",  Icon: FaFacebookF },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-primary)] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:pt-24 pb-12 md:pb-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Brend kolona */}
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="Delfin — početna stranica">
              <DelfinLogo fill="#ffffff" height={58} />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Profesionalno čišćenje i održavanje objekata u Prijedoru i regiji.
            </p>
            <ContactButton
              variant="full"
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-[#4A5568] text-white text-sm font-semibold rounded-[var(--radius-xl)] w-fit transition-all duration-150
              shadow-[0_4px_18px_rgba(74,85,104,0.50)]
              hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(74,85,104,0.65)] hover:bg-[#3a4255]
              active:translate-y-0 active:shadow-[0_2px_8px_rgba(74,85,104,0.35)] active:scale-[0.98]"
            >
              Kontaktiraj nas
            </ContactButton>

            {/* Društvene mreže */}
            <div className="flex items-center gap-2 mt-1">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/60
                    hover:bg-white/20 hover:text-white transition-all duration-150"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Usluge */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
              Usluge
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Usluge navigacija">
              {usluge.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Kompanija + kontakt */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
              Kompanija
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Kompanija navigacija">
              {kompanija.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-2 flex flex-col gap-1">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-1">
                Kontakt
              </h3>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {PHONE}
              </a>
              <a
                href="https://maps.google.com/?q=Milana+Vrhovca+27,+Prijedor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Milana Vrhovca 27, Prijedor
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/40 text-xs">
          <span>© {new Date().getFullYear()} Delfin. Sva prava zadržana.</span>
          <span>Prijedor, Bosna i Hercegovina</span>
        </div>

      </div>
    </footer>
  );
}
