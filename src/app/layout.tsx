import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Delfin — Agencija za profesionalno čišćenje Prijedor",
  description:
    "Profesionalno čišćenje i održavanje objekata u Prijedoru. Čišćenje stanova, kuća i poslovnih prostora, dubinsko pranje tepiha i namještaja.",
  keywords: [
    "čišćenje Prijedor",
    "agencija za čišćenje Prijedor",
    "profesionalno čišćenje Prijedor",
    "dubinsko čišćenje Prijedor",
    "pranje tepiha Prijedor",
  ],
  openGraph: {
    title: "Delfin — Agencija za profesionalno čišćenje Prijedor",
    description:
      "Profesionalno čišćenje i održavanje objekata u Prijedoru. Čišćenje stanova, kuća i poslovnih prostora.",
    locale: "sr_BA",
    type: "website",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
