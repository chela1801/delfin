import type { MetadataRoute } from "next";

const BASE = "https://delfin-amber.vercel.app";

const slugovi = [
  "ciscenje-stanova-i-kuca",
  "ciscenje-poslovnih-prostora",
  "generalno-i-dubinsko-ciscenje",
  "ciscenje-nakon-renoviranja",
  "dizalica-i-pranje-fasada",
  "dubinsko-pranje-namjestaja-i-madraca",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                  lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/usluge`,      lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/firme`,       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/kontakt`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/o-nama`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    ...slugovi.map((slug) => ({
      url: `${BASE}/usluge/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
