import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ContactModalProvider } from "@/components/ui/ContactModal";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://delfin-amber.vercel.app"),
  title: "Delfin — Servis za profesionalno čišćenje Prijedor",
  description:
    "Profesionalno čišćenje i održavanje objekata u Prijedoru. Čišćenje stanova, kuća i poslovnih prostora, dubinsko pranje namještaja i madraca.",
  keywords: [
    "čišćenje Prijedor",
    "servis za čišćenje Prijedor",
    "profesionalno čišćenje Prijedor",
    "dubinsko čišćenje Prijedor",
    "pranje namještaja Prijedor",
  ],
  openGraph: {
    title: "Delfin — Servis za profesionalno čišćenje Prijedor",
    description:
      "Profesionalno čišćenje i održavanje objekata u Prijedoru. Čišćenje stanova, kuća i poslovnih prostora.",
    locale: "sr_BA",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <ContactModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
