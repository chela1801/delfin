import { CurveRight } from "@/components/ui/Curves";
import HeroBg from "@/components/ui/HeroBg";

export const metadata = {
  title: "Politika privatnosti — Delfin Prijedor",
  description: "Politika privatnosti i zaštite podataka servisa Delfin Prijedor.",
  robots: { index: false },
};

const sekcije = [
  {
    naslov: "1. Ko prikuplja podatke",
    tekst: `Rukovalac podacima je Delfin, servis za profesionalno čišćenje sa sjedištem na adresi Milana Vrhovca 27, Prijedor, Bosna i Hercegovina. Kontakt: +387 66 246 346.`,
  },
  {
    naslov: "2. Koji podaci se prikupljaju",
    tekst: `Prikupljamo isključivo podatke koje nam sami dostavite putem kontakt forme ili direktne komunikacije (WhatsApp, Viber, poziv):
— Ime i prezime ili naziv firme
— Kontakt telefon ili email adresa
— Opis usluge ili prostora koji ste naveli u poruci

Ne prikupljamo automatski nikakve dodatne lične podatke. Sajt ne koristi kolačiće za praćenje (tracking cookies) niti analitičke alate.`,
  },
  {
    naslov: "3. Svrha obrade podataka",
    tekst: `Vaše podatke koristimo isključivo u svrhu:
— Odgovaranja na vaš upit i dogovaranja termina
— Slanja ponude ili ugovora (poslovni klijenti)
— Komunikacije u toku i nakon pružanja usluge

Vaše podatke ne prodajemo, ne iznajmljujemo i ne dijelimo s trećim stranama, osim ako je to zakonski obavezno.`,
  },
  {
    naslov: "4. Kolačići (cookies)",
    tekst: `Ovaj sajt koristi isključivo tehničke kolačiće neophodne za njegovo ispravno funkcionisanje. Ne koristimo kolačiće za praćenje ponašanja korisnika, reklamne mreže niti analitičke servise trećih strana.

Tehničke kolačiće nije moguće isključiti bez narušavanja funkcionalnosti sajta.`,
  },
  {
    naslov: "5. Čuvanje podataka",
    tekst: `Vaše podatke čuvamo onoliko dugo koliko je potrebno za pružanje tražene usluge ili onoliko koliko zakon nalaže za poslovnu dokumentaciju. Podatke iz upita koji nisu rezultirali angažmanom brišemo u roku od 90 dana.`,
  },
  {
    naslov: "6. Vaša prava",
    tekst: `Imate pravo da u svakom trenutku:
— Zatražite uvid u podatke koje čuvamo o vama
— Zatražite ispravku netačnih podataka
— Zatražite brisanje vaših podataka
— Povučete pristanak za obradu podataka

Zahtjeve možete uputiti na: +387 66 246 346 (WhatsApp/poziv) ili lično na adresi Milana Vrhovca 27, Prijedor.`,
  },
  {
    naslov: "7. Izmjene politike",
    tekst: `Zadržavamo pravo izmjene ove politike privatnosti. Sve izmjene bit će objavljene na ovoj stranici s datumom posljednje izmjene. Preporučujemo povremenu provjeru.

Posljednja izmjena: april 2026.`,
  },
];

export default function PolitikaPrivatnostiPage() {
  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section className="relative bg-[var(--color-primary)] pt-24 sm:pt-32 pb-20 sm:pb-28 overflow-hidden">
        <HeroBg />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Politika privatnosti
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            Kako prikupljamo, koristimo i štitimo vaše lične podatke.
          </p>
        </div>
        <CurveRight fill="#FFFFFF" />
      </section>

      {/* ═══ SADRŽAJ ════════════════════════════════════════ */}
      <section className="bg-white pt-14 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
          {sekcije.map((s) => (
            <div key={s.naslov} className="flex flex-col gap-3">
              <h2 className="text-lg font-bold text-[var(--color-text)]">{s.naslov}</h2>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed whitespace-pre-line">{s.tekst}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
