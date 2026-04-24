import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ContactModalProvider } from "@/components/ui/ContactModal";
import CookieBanner from "@/components/ui/CookieBanner";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://delfin-amber.vercel.app"),
  title: {
    default: "Delfin — Profesionalni servis za čišćenje u Prijedoru",
    template: "%s | Delfin Prijedor",
  },
  description:
    "Profesionalni servis za čišćenje u Prijedoru — stanovi, kuće, poslovni prostori, pranje fasada, dubinsko pranje namještaja i madraca. Dolazimo opremljeni, radimo po protokolu.",
  keywords: [
    "čišćenje Prijedor",
    "servis za čišćenje Prijedor",
    "profesionalno čišćenje Prijedor",
    "čišćenje stanova Prijedor",
    "čišćenje poslovnih prostora Prijedor",
    "dubinsko čišćenje Prijedor",
    "pranje namještaja Prijedor",
    "pranje fasada Prijedor",
    "čišćenje nakon renoviranja Prijedor",
  ],
  openGraph: {
    title: "Delfin — Profesionalni servis za čišćenje u Prijedoru",
    description:
      "Profesionalni servis za čišćenje u Prijedoru — stanovi, kuće, poslovni prostori. Dolazimo opremljeni, radimo po protokolu, predajemo ti prostor spreman.",
    locale: "sr_BA",
    type: "website",
    siteName: "Delfin",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Delfin — servis za čišćenje Prijedor" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://delfin-amber.vercel.app",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Delfin",
  description: "Profesionalni servis za čišćenje u Prijedoru — stanovi, kuće, poslovni prostori, pranje fasada, dubinsko pranje namještaja i madraca.",
  url: "https://delfin-amber.vercel.app",
  telephone: "+38766246346",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Milana Vrhovca 27",
    addressLocality: "Prijedor",
    addressRegion: "Republika Srpska",
    postalCode: "79101",
    addressCountry: "BA",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "15:00" },
  ],
  priceRange: "$$",
  areaServed: { "@type": "City", name: "Prijedor" },
  hasMap: "https://maps.google.com/?q=Milana+Vrhovca+27,+Prijedor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <ContactModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
        </ContactModalProvider>
      </body>
    </html>
  );
}
