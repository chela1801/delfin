import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Delfin — Servis za čišćenje i održavanje | Prijedor",
  description:
    "Profesionalna facility management kompanija iz Prijedora. Održavamo preko 35.000 m² poslovnih i stambenih prostora. Čišćenje, hortikultura, fasade i više.",
  keywords:
    "čišćenje stanova Prijedor, servis za čišćenje Prijedor, facility management Prijedor, dubinsko čišćenje Prijedor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bs">
      <body className={font.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
