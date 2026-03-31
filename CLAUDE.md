# CLAUDE.md — Delfin Servis za Čišćenje

Ovaj fajl sadrži kompletan kontekst projekta. Čitaj ga prije svakog zadatka.

---

## O projektu

Gradimo web prisustvo za **Delfin** — profesionalnu facility management kompaniju iz Prijedora, Bosna i Hercegovina. Ovo nije mali lokalni servis za čišćenje. Delfin trenutno održava **preko 35.000 kvadrata** poslovnih i stambenih objekata i ima kompleksan portfolio usluga koji uključuje B2B i B2C segment, kao i prodaju proizvoda.

Klijent ima postojeći domen i hosting. Deploy ide na **Vercel**.

---

## Tech stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Backend / baza:** Supabase (po potrebi — uvodi se kada zatreba, nije obavezno od prvog dana)
- **Deploy:** Vercel
- **E-commerce:** još nije odlučeno — dogovaramo usput
- **Jezik sajta:** Bosanski / Srpski

---

## Brend identitet

### Naziv
**Delfin** — Servis za čišćenje i održavanje

### Lokacija
Prijedor, Bosna i Hercegovina

### Pozicioniranje
Delfin nije generički servis za čišćenje. Delfin je **profesionalna facility management kompanija** koja pokriva stambene objekte, poslovne prostore, industrijske površine i vanjska uređenja. Pozicioniramo ih kao **premium, pouzdan, kapacitiran partner** — ne kao najjeftiniju opciju.

### Brand promise
> "Dolazimo jednom. Vraćate nas stalno."

### Ton komunikacije
- Samopouzdan, ne agresivan
- Stručan, ne hladan
- Pouzdan, ne korporativno dosadan
- Lokalan, ali aspiracionalan
- B2B: ozbiljan, referenciran, brojevima potkrijepljen
- B2C: pristupačan, jasan, human

### Vizualni identitet
- **Primarna boja:** Plava (klijent ima postojeći logo u plavoj)
- **Sekundarna:** Bijela
- **Akcent:** Srebrna / siva
- **Stil dizajna:** Clean korporativni sa modernim detaljima
- **Tipografija:** Sans-serif, moderna, čitljiva — nije Inter ili Arial
- **Fotografija:** Visok kontrast, bright tones, prave fotografije tima i opreme na terenu
- **Animacije:** Suptilne, na scroll — ne distraktivne
- **Ne koristiti:** purple gradijente, generičke AI-estetike, stock fotografije koje izgledaju lažno

---

## Portfolio usluga

### Čišćenje i održavanje prostora
- Čišćenje stambenih prostora (stanovi, kuće)
- Čišćenje poslovnih prostora
- Generalno čišćenje — jednodnevno, sedmično, mjesečno, polugodišnje, godišnje
- Mašinsko pranje podova
- Poliranje podova
- Odmašćivanje kuhinja
- Pranje prozora (unutrašnja i vanjska strana + okovi)
- Dubinsko pranje namještaja (dvosjed, trosjed, kreveti, fotelje)
- Dubinsko pranje tepiha na licu mjesta
- Čišćenje stubišta i zajedničkih prostora

### Industrijski i vanjski nivo
- Pranje staklene fasade do 25m
- Pranje fasadnih panala
- Pranje fasada (klasične i silikonske)
- Skidanje grafita

### Hortikultura i vanjsko uređenje
- Orezivanje drveća
- Uređivanje zelenih površina
- Održavanje zelenila

### Facility Management
- Redovno održavanje objekata (trenutno **35.000+ m²** u portfoliju)
- Ugovorna redovna održavanja

### Prodaja proizvoda (B2B i B2C)
- Hemikalije za sve vrste čišćenja (stambeno i poslovno)
- Papirna galanterija
- Tečni sapun
- Aromatizacija prostora (za sve vrste objekata)

---

## Struktura sajta

Sajt je **višestranični** — ne one-page. Razlog: kompleksan portfolio i dvostruka B2B/B2C publika zahtijevaju jasnu informacionu arhitekturu.

### Stranice

**/** — Homepage
- Hero sa jednom snažnom izjavom i trust signalima (35.000m², godine, reference)
- Split sekcija B2B vs B2C
- Pregled kategorija usluga
- Recenzije / reference
- CTA

**/usluge** — Pregled svih usluga (kategorisano)

**/usluge/[slug]** — Pojedinačna stranica za svaku uslugu ili kategoriju

**/facility-management** — Posebna stranica za B2B segment
- Redovno održavanje, kapacitet, reference, kvadrati, SLA pristup

**/shop** — Web shop (faza 2, ali arhitektura mora podržavati od starta)
- B2C cijene vidljive svima
- B2B cijene vidljive registrovanim poslovnim korisnicima
- Sistem rola: guest → B2C, verified B2B → poseban cjenovnik

**/o-nama** — Tim, oprema, vrijednosti, istorijat

**/kontakt** — Forma, WhatsApp, telefon, lokacija, mapa

### Web shop — važna napomena
Klijent već prodaje hemikalije, papirnu galanteriju, tečni sapun i aromatizaciju — B2B i B2C, sa **različitim cjenovnicima**. Shop nije opcija, to je postojeći prihodni tok koji se digitalizuje. Sistem mora podržavati dvije korisničke role sa odvojenim cijenama. E-commerce rješenje još nije odabrano — dogovaramo usput.

---

## Ključni trust signali (uvijek istaknuti)

- **35.000+ m²** redovnog održavanja u portfoliju
- Lokalna kompanija iz Prijedora
- B2B i B2C iskustvo
- Profesionalna oprema (industrijski nivo)
- Garancija zadovoljstva

---

## Ciljne publike

### B2C
Stanari, vlasnici stanova i kuća u Prijedoru i regiji. Traže povjerljiv servis, brz odgovor, jasnu cijenu.

### B2B
Firme, restorani, hoteli, tržni centri, zgrade, upravljači nekretninama. Traže kapacitet, pouzdanost, reference, ugovorni odnos. Donose veće i dugoročnije ugovore.

---

## SEO strategija

### Primarne ključne riječi
- čišćenje stanova Prijedor
- servis za čišćenje Prijedor
- dubinsko čišćenje Prijedor
- pranje tepiha Prijedor
- čišćenje poslovnih prostora Prijedor
- facility management Prijedor

### Long-tail
- cijena čišćenja stana Prijedor
- dubinsko čišćenje trosjeda Prijedor
- čišćenje nakon renoviranja Prijedor
- generalno čišćenje stanova Prijedor
- profesionalno čišćenje Prijedor
- pranje fasade Prijedor
- skidanje grafita Prijedor

### SEO fokus
- Lokalni SEO — Prijedor i regija
- Google My Business mora biti kompletno popunjen i aktivan
- Svaka usluga ima svoju stranicu optimizovanu za specifičnu ključnu riječ
- Schema markup: LocalBusiness

---

## Konkurencija

### Čisto Plus (Prijedor)
- 4.000–5.000 Instagram pratilaca
- Koriste before/after i reels format
- **Slabosti:** slab copywriting, nema brend identiteta, nema storytellinga, nema SEO, nema strukturiranog funnela, nasumične objave

### Naša prednost
Čisto Plus ima reach ali nema strategiju. Delfin gradi brend sa strategijom — to je dugoročna pobjeda.

---

## Instagram strategija (kontekst za copy)

### 4 content pilara
1. **Transformacija** (40%) — before/after reels, dramatični rezultati
2. **Edukacija** (25%) — savjeti, profesionalni trikovi
3. **Autoritet** (20%) — oprema, tim, proces, profesionalnost
4. **Socijalni dokaz** (15%) — recenzije, testimonijali, Google ratinzi

### Ton na Instagramu
Samopouzdan storytelling. Ne "nudimo čišćenje". Nego "Ovo je najtežji posao ove sedmice. Pogledajte šta smo zatekli."

---

## Kontakt informacije (placeholder — zamijeniti stvarnim)

- Telefon: +387 XX XXX XXX
- WhatsApp: +387 XX XXX XXX
- Email: info@delfin.ba
- Lokacija: Prijedor, BiH
- Radno vrijeme: Pon–Sub + po dogovoru vikendom

---

## Napomene za razvoj

- Sve tekstove pisati na bosanskom / srpskom jeziku
- Koristiti latinično pismo
- Mobilna optimizacija je prioritet — B2C korisnici dolaze sa mobitela
- B2B korisnici češće dolaze sa deskopa — oboje moraju biti besprijekorni
- Forme moraju biti što kraće — ime, telefon, usluga, poruka
- WhatsApp CTA je primarni konverzijski kanal za B2C
- Forma ili email je primarni kanal za B2B upite
- Shop arhitektura mora biti planirana od starta iako se lansira u fazi 2
- Supabase se uvodi kada zatreba (auth za B2B shop, forma submissions, po potrebi)

---

## Otvorena pitanja (dogovoriti sa klijentom)

- [ ] Koliko artikala ima u prodajnom portfoliju za shop?
- [ ] Koji e-commerce sistem preferira (WooCommerce, Shopify, custom)?
- [ ] Da li postoje postojeće fotografije tima i opreme na terenu?
- [ ] Da li postoje postojeće reference i testimonijali koje možemo koristiti?
- [ ] Tačan broj telefona i kontakt informacije
- [ ] Da li imaju certifikate ili akreditacije?
- [ ] Naziv domene

---

*Zadnja izmjena: inicijalna verzija na osnovu konsultantske sesije.*
*Ažurirati ovaj fajl kako projekat napreduje.*
