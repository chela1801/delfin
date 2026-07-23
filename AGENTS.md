# Delfin — AGENTS.md
> Projektni fajl. Override-uje WebkeyZ OS defaults gdje je drugačije navedeno.

---

## 1. PROJEKAT

- **Šta je:** Multipage sajt + webshop + SMM (Instagram) za Delfin, agenciju za profesionalno čišćenje i održavanje objekata u Prijedoru, BiH
- **Za koga:** Vlasnik firme, kontakt +387 66 246 346
- **Problem koji rješava:** Delfin nema digitalno prisustvo — konkurencija ima vidljivost ali ne i brend ni strategiju; Delfin se pozicionira kao premium agencija koja ih sistemski nadmašuje
- **Model:** Jednokratni projekat (sajt + webshop), kontinuiran SMM
- **Ciljna grupa:**
  - **B2C** — privatni korisnici (stanovi, kuće), dominantno mobilni, WhatsApp kao primarni kanal kontakta
  - **B2B** — firme i poslovni prostori, formalniji upit putem kontakt forme

---

## 2. TECH STACK

Default WebkeyZ stack — sa sljedećim specifičnostima:

| Sloj | Alat | Napomena |
|---|---|---|
| Frontend | Next.js (App Router) | — |
| Styling | Tailwind CSS | Umjesto plain CSS |
| DB + Auth | Supabase | Za webshop (proizvodi, narudžbe) — po potrebi |
| Storage | Supabase Storage | Slike proizvoda, fotografije s terena |
| Deployment | Vercel | — |
| Tipografija | Plus Jakarta Sans (Google Fonts) | — |

**Otvoreno:** Supabase se aktivira čim se potvrdi struktura webshopa (broj artikala, kategorije, checkout flow).

---

## 3. BRAND IDENTITET

### Paleta boja
| Naziv | HEX | Uloga |
|---|---|---|
| Primary | `#0A2D6E` | CTA dugmad, naslovi, primary accenti |
| Secondary | `#1A56B0` | Hover stanja, linkovi, highlights |
| Accent / Graphite | `#4A5568` | Ikone, sekundarni tekst, borders |
| Light Graphite | `#6B7A8D` | Muted tekst, placeholders, subtitles |
| Background | `#EFF5FB` | Alternativna pozadina sekcija |
| White | `#FFFFFF` | Primarna pozadina, tekst na dark podlozi |
| Text | `#1A1A2E` | Tijelo teksta, naslovi na bijelom |

### Tipografija
- **Font:** Plus Jakarta Sans (Google Fonts)
- **Dozvoljene težine:** 400, 500, 600, 700, 800

### Logo
- Logo crta vlasnik — dostavlja SVG
- Ne mijenjati logo paths — samo fill boju ako je potrebno
- Lokacija kad stigne: `/public/logo.svg`

### CSS varijable
```css
:root {
  --color-primary:        #0A2D6E;
  --color-primary-hover:  #091F4F;
  --color-secondary:      #1A56B0;
  --color-accent:         #4A5568;
  --color-muted:          #6B7A8D;
  --color-bg:             #FFFFFF;
  --color-bg-alt:         #EFF5FB;
  --color-text:           #1A1A2E;
  --color-text-muted:     #6B7A8D;
  --color-border:         #D1DCF0;
  --font-primary:         'Plus Jakarta Sans', sans-serif;
  --radius-sm:            4px;
  --radius-md:            8px;
  --radius-lg:            16px;
  --radius-xl:            24px;
}
```

---

## 4. ARHITEKTURA

### Rute i stranice

| Ruta | Stranica | Napomena |
|---|---|---|
| `/` | Početna | Hero + usluge pregled + socijalni dokaz + CTA |
| `/usluge` | Pregled usluga | Lista svih usluga |
| `/usluge/[slug]` | Detalj usluge | Svaka usluga ima vlastitu stranicu |
| `/webshop` | Webshop | Lista proizvoda |
| `/webshop/[slug]` | Detalj proizvoda | — |
| `/o-nama` | O nama | Priča, tim, pristup |
| `/kontakt` | Kontakt | B2B forma + WhatsApp link za B2C |
| `/blog` | Blog (opciono) | SEO sadržaj — aktivira se u kasnijoj fazi |

### Usluge (definisane, svaka dobija stranicu)
1. Čišćenje stanova i kuća
2. Čišćenje poslovnih prostora
3. Generalno i dubinsko čišćenje
4. Čišćenje nakon renoviranja
5. Dubinsko pranje tepiha i namještaja (ručno)

### Webshop — otvorena pitanja
- Broj i vrsta artikala — vlasnik dostavlja
- Kategorije — TBD
- Checkout flow — TBD (da li je potrebna autentikacija)
- Plaćanje — TBD (gotovina pri dostavi / online)

### Supabase shema (aktivira se po potrebi)
```
products (id, name, slug, description, price, category, images[], stock, status)
orders   (id, customer_name, email, phone, address, items[], total, status, created_at)
```

### Storage struktura
```
delfin-products/    ← slike proizvoda
delfin-gallery/     ← fotografije s terena (vlasnik dostavlja)
```

---

## 5. BIZNIS KONTEKST

### Pozicioniranje
**Premium agencija za profesionalno održavanje objekata u Prijedoru i regiji** — ne lokalni servis, ne firma bez lica. Sistemičan pristup, kvalitet, dugoročni odnos.

### Terminologija — OBAVEZNO
- **"profesionalno održavanje objekata"** — uvijek, umjesto "facility management"
- **"dubinsko pranje"** — ne "čišćenje" kad je u pitanju tepisi i namještaj
- **"poslovni prostori"** — za B2B segment
- Komunikacija isključivo na **srpskom, ijekavica, latinica**

### Ton komunikacije
- **B2C:** Topao, praktičan, human — "riješimo ti problem"
- **B2B:** Direktan, profesionalan, brojke i pouzdanost
- Nikad korporativni žargon
- Nikad generičke fraze ("kvalitetna usluga", "dugogodišnje iskustvo")

### Konkurencija
| Firma | Lokacija | Snaga | Slabost |
|---|---|---|---|
| Čisto Plus | Prijedor | Dobra Instagram vidljivost | SEO nikakav, bez brend strategije |
| TopClean | Čelinac | Referentna tačka za kvalitet | — |
| MN Čišćenje | Banja Luka | Solidan | — |
| Eurosan | Banja Luka | Solidan | Ništa posebno |

**Strategija:** Dominacija Google pretraga za Prijedor i regiju + Instagram rast + webshop konverzija.

### Kontakt kanali
- **B2C:** WhatsApp link (+387 66 246 346) — primarni CTA na mobilnom
- **B2B:** Kontakt forma — formalni upit
- Nema telefonskog broja kao primarnog CTA

---

## 6. PRIORITETI TRENUTNOG SPRINTA

1. Finalizovati brand identitet (čekamo logo i boje od vlasnika)
2. Postaviti Next.js projekat s Tailwind-om i baznom strukturom ruta
3. Kreirati sve stranice usluga
4. Početna stranica — hero, usluge, CTA
5. Kontakt stranica — B2C WhatsApp + B2B forma
6. O nama stranica
7. Webshop — aktivira se kad vlasnik dostavi podatke o artiklima

---

## 7. ŠTA NE RADITI

- ❌ Ne koristiti "facility management" — uvijek "profesionalno održavanje objekata"
- ❌ Ne dodavati dark/light mode toggle
- ❌ Ne koristiti `<img>` — uvijek Next.js `<Image>`
- ❌ Ne pokretati Supabase setup dok vlasnik ne potvrdi webshop strukturu
- ❌ Ne pisati generički copy — svaka rečenica mora proći Hormozi test
- ❌ Ne commitovati bez eksplicitnog zahtjeva
- ❌ Ne dodavati blog stranicu u ovoj fazi
