import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "sr" | "en";

type Dict = typeof sr;

const sr = {
  nav: { work: "Radovi", services: "Usluge", why: "Zašto mi", stats: "Brojke", packages: "Paketi", contact: "Kontakt", bookNow: "Rezerviši" },
  hero: {
    eyebrow: "Beležimo tvoju priču",
    line1: "SVAKI TRENUTAK",
    line2: "ZASLUŽUJE EPSKI KADAR",
    desc: "Premium event fotografija, cinematic video produkcija i DJ usluge koje noć pretvaraju u legendu.",
    cta1: "Pogledaj radove",
    cta2: "Rezerviši događaj",
    badges: ["250+ DOGAĐAJA", "5★ OCENA", "3 GRADA"],
  },
  services: {
    eyebrow: "Šta radimo",
    title1: "TRI NAČINA",
    title2: "DA POGODIMO U SRŽ",
    items: [
      { name: "Fotografija", desc: "Editorial pokrivanje događaja sa cinematic svetlom i besprekornim oko za sitne međutrenutke — prvi pogledi, poslednji plesovi, svaki smeh.", tags: ["Venčanja", "Korporativno", "Žurke"] },
      { name: "Video produkcija", desc: "Multi-cam cinematic filmovi i short-form montaže za društvene mreže. Color graded, story driven, isporuka u 4K — noć ostaje zauvek.", tags: ["Highlight reel", "Dokumentarac", "Reels"] },
      { name: "DJ usluge", desc: "Setovi house, hip-hop, retro i balkanske scene. Profi PA sistem, light show, MC opcija — sve da plesni podijum nikad ne stane.", tags: ["Venčanja", "Klubovi", "Korporativno"] },
    ],
  },
  portfolio: {
    eyebrow: "Naši radovi",
    title: "KADROVI KOJI POGAĐAJU",
    filters: { photo: "Fotografija", video: "Video", dj: "DJ Eventi", all: "Sve" },
  },
  why: {
    eyebrow: "Zašto Dropshot",
    title1: "GRAĐENO DA",
    title2: "NADŽIVI NOĆ",
    desc: "Osam godina na podijumu, iza objektiva i u DJ booth-u. Svaki paket gradimo oko tvoje priče — ne po šablonu.",
    points: [
      { h: "Brza isporuka", t: "Highlight reel za 72h. Cele galerije u roku od dve nedelje. Bez ghostovanja." },
      { h: "Profi oprema", t: "Sony cinema kamere, Pioneer CDJ-3000, Funktion-One zvuk. Bekap svega, uvek." },
      { h: "Kreativna režija", t: "Ne pritiskamo samo record. Pre-event mood board, shot lista, MC skripta — pravimo zajedno." },
      { h: "Personalizovani paketi", t: "Kombinuj foto, video i DJ. Plaćaš samo ono što tvoj događaj zaista zahteva." },
    ],
  },
  capabilities: {
    eyebrow: "Po čemu se razlikujemo",
    title: "VIŠE OD STUDIJA",
    cards: [
      { h: "100% Prilagođeno", t: "Svaki paket pravimo po tvojoj viziji — bez šablona." },
      { h: "Sigurna isporuka", t: "Dupli bekap u realnom vremenu. Tvoji fajlovi ne nestaju." },
      { h: "Brzo kao munja", t: "Highlight materijal već sledećeg jutra. Cela galerija u roku od 14 dana." },
      { h: "Pokrivamo Centralnu Srbiju", t: "Kruševac, Trstenik, Vrnjačka Banja, Kraljevo — i sve okolno. Bez troška puta u regionu." },
    ],
  },
  stats: { items: ["DOGAĐAJA", "FOTOGRAFIJA", "ZADOVOLJNIH KLIJENATA", "GODINA ISKUSTVA"] },
  scroll: {
    eyebrow: "Iza objektiva",
    line1: "POGLEDAJ KAKO",
    line2: "RADIMO UŽIVO",
    caption: "Skrolaj — od backstage-a do velike scene.",
  },
  testimonials: {
    eyebrow: "Reakcije",
    title: "KLIJENTI NE LAŽU",
    items: [
      { name: "Aleksa & Mila", role: "Venčanje · Kruševac", body: "Uhvatili su trenutke koje nismo ni primetili. Highlight film je rasplakao baku — dva puta." },
      { name: "Marija P.", role: "Marketing, Trstenik", body: "Foto + video + DJ u jednom paketu, bez logističke glavobolje. Podijum nikad nije ispražnjen." },
      { name: "Stefan I.", role: "Event Director, Kraljevo", body: "Radili smo sa tri studija u regionu. Dropshot je jedini koga nikad nismo morali da jurimo za isporuku." },
      { name: "Ana K.", role: "Founder, Vrnjačka Banja", body: "Editorial oko za portrete. Lansiranje su snimili kao magazinski spread, ne kao event reel." },
      { name: "Nikola M.", role: "Rođendan · Aleksandrovac", body: "Atmosfera ludačka, set perfektan. Gosti i dalje pričaju o tome." },
      { name: "Jelena T.", role: "Korporativni event · Ćićevac", body: "Profesionalci od prvog mejla do isporuke. Materijal je premašio očekivanja." },
      { name: "Marko V.", role: "Klub · Kruševac", body: "Tehnika besprekorna, set drži floor satima. Najbolji izbor za naše večeri." },
      { name: "Tijana R.", role: "Venčanje · Brus", body: "Osetili smo se kao zvezde u sopstvenom filmu. Hvala za sve." },
    ],
  },
  dj: {
    eyebrow: "▌ VIŠE OD MUZIKE",
    title: "MI POSTAVLJAMO VIBE",
    desc: "Od intimnih okupljanja do događaja sa 2000+ ljudi. Kurirani setovi, profi zvuk, nezaboravna atmosfera.",
    cta: "Pogledaj DJ pakete",
  },
  pricing: {
    eyebrow: "Paketi",
    title: "TRI NIVOA. NULA KOMPROMISA.",
    desc: "Svaki paket je startna tačka — sve može da se prilagodi tvom događaju.",
    featured: "Najtraženiji",
    tiers: [
      { badge: "ESSENTIAL", price: "od €450", suffix: "", features: ["Pokrivenost do 4h", "300+ obrađenih fotografija", "Online galerija", "Isporuka do 14 dana"], cta: "Zatraži ponudu" },
      { badge: "SIGNATURE", price: "od €890", suffix: "", features: ["Foto + Video tim", "Highlight reel 3–5 min", "Drone snimak (po dozvoli)", "Color grading u 4K", "Brza isporuka 72h"], cta: "Najtraženije" },
      { badge: "FULL PRODUCTION", price: "od €1.490", suffix: "", features: ["Foto + Video + DJ", "Profi PA i light show", "Multi-cam setup", "MC opcija", "Dedicated event manager"], cta: "Zatraži ponudu" },
    ],
  },
  glass: {
    title: "Kako možemo pomoći?",
    items: ["Fotografija", "Video", "DJ", "Lokacija"],
  },
  contact: {
    eyebrow: "Stupi u kontakt",
    title1: "HAJDE DA NAPRAVIMO",
    title2: "NEŠTO EPSKI",
    fields: { name: "Ime i prezime", email: "Email", phone: "Telefon", date: "Datum događaja", type: "Tip događaja", message: "Reci nam nešto o večeri" },
    types: ["Venčanje", "Korporativno", "Žurka / Klub", "Festival", "Drugo"],
    submit: "POŠALJI",
    success: "Primljeno. Odgovaramo u roku od 24h.",
    errors: { req: "Obavezno", email: "Neispravan email", short: "Reci nam malo više", pick: "Izaberi" },
    info: { studio: "Studio", email: "Email", phone: "Telefon", cities: "Gradovi" },
    studio: "Trg Kosturnica 7, Kruševac",
    cities: "Kruševac · Trstenik · Vrnjačka Banja · Kraljevo",
    response: "Odgovor u roku od 24h",
  },
  footer: {
    tagline: "Svaki kadar. Svaki beat. Svako sećanje.",
    quick: "Brzi linkovi",
    follow: "Prati nas",
    rights: "Sva prava zadržana",
  },
};

const en: Dict = {
  nav: { work: "Work", services: "Services", why: "Why Us", stats: "Stats", packages: "Packages", contact: "Contact", bookNow: "Book Now" },
  hero: {
    eyebrow: "Capturing your story",
    line1: "EVERY MOMENT",
    line2: "DESERVES AN EPIC",
    desc: "Premium event photography, cinematic videography, and DJ services that turn nights into legends.",
    cta1: "See our work",
    cta2: "Book an event",
    badges: ["250+ EVENTS", "5★ RATED", "3 CITIES"],
  },
  services: {
    eyebrow: "What we do",
    title1: "THREE WAYS",
    title2: "WE HIT DIFFERENT",
    items: [
      { name: "Photography", desc: "Editorial event coverage with cinematic lighting and an unflinching eye for the in-between moments — first looks, last dances, every laugh.", tags: ["Weddings", "Corporate", "Parties"] },
      { name: "Videography", desc: "Multi-cam cinematic films and short-form social cuts. Color graded, story driven, delivered fast in 4K so the night lives forever.", tags: ["Highlight reels", "Documentary", "Reels"] },
      { name: "DJ Services", desc: "Curated sets across house, hip-hop, retro and Balkan. Pro PA, controlled lighting, an MC option — built to keep the floor moving.", tags: ["Weddings", "Clubs", "Corporate"] },
    ],
  },
  portfolio: {
    eyebrow: "Our work",
    title: "SHOTS THAT HIT",
    filters: { photo: "Photography", video: "Videography", dj: "DJ Events", all: "All" },
  },
  why: {
    eyebrow: "Why Dropshot",
    title1: "BUILT TO",
    title2: "OUTLAST THE NIGHT",
    desc: "Eight years on the floor, behind the lens, and inside the booth. Every package is built around your story — not a template.",
    points: [
      { h: "Fast delivery", t: "Edited highlight reels within 72 hours. Full galleries inside two weeks. No ghosting." },
      { h: "Pro equipment", t: "Sony cinema cameras, Pioneer CDJ-3000, Funktion-One sound. Backup of everything, always." },
      { h: "Creative direction", t: "We don't just press record. Pre-event mood boards, shot lists, MC scripts — co-built with you." },
      { h: "Personalized packages", t: "Mix and match photo, video, and DJ. Pay only for what your night actually needs." },
    ],
  },
  capabilities: {
    eyebrow: "What sets us apart",
    title: "MORE THAN A STUDIO",
    cards: [
      { h: "100% Customizable", t: "Every package is built around your vision — no templates." },
      { h: "Secure delivery", t: "Real-time dual backup. Your files never disappear." },
      { h: "Faster than light", t: "Highlight footage the next morning. Full gallery within 14 days." },
      { h: "Central Serbia covered", t: "Kruševac, Trstenik, Vrnjačka Banja, Kraljevo — and everything around. No travel fees in the region." },
    ],
  },
  stats: { items: ["EVENTS COVERED", "PHOTOS DELIVERED", "HAPPY CLIENTS", "YEARS EXPERIENCE"] },
  scroll: {
    eyebrow: "Behind the lens",
    line1: "SEE HOW",
    line2: "WE WORK LIVE",
    caption: "Scroll — from backstage to the main stage.",
  },
  testimonials: {
    eyebrow: "Reviews",
    title: "CLIENTS DON'T LIE",
    items: [
      { name: "Aleksa & Mila", role: "Wedding · Kruševac", body: "They caught moments we didn't even notice. The highlight film made my grandmother cry — twice." },
      { name: "Marija P.", role: "Marketing · Trstenik", body: "Photo + video + DJ in one package, zero coordination headaches. The floor never emptied." },
      { name: "Stefan I.", role: "Event Director · Kraljevo", body: "We've worked with three local studios. Dropshot is the only one we never had to chase for delivery." },
      { name: "Ana K.", role: "Founder · Vrnjačka Banja", body: "Sharp eye for editorial portraits. They shot our launch like a magazine spread." },
      { name: "Nikola M.", role: "Birthday · Aleksandrovac", body: "Atmosphere was insane, set was perfect. Guests still talk about it." },
      { name: "Jelena T.", role: "Corporate · Ćićevac", body: "Pros from first email to delivery. Material exceeded our expectations." },
      { name: "Marko V.", role: "Club · Kruševac", body: "Tech flawless, set holds the floor for hours. Our top choice for nights out." },
      { name: "Tijana R.", role: "Wedding · Brus", body: "We felt like stars in our own film. Thank you for everything." },
    ],
  },
  dj: {
    eyebrow: "▌ MORE THAN MUSIC",
    title: "WE SET THE VIBE",
    desc: "From intimate gatherings to 2000-person events. Curated sets, professional sound, unforgettable atmosphere.",
    cta: "Check DJ packages",
  },
  pricing: {
    eyebrow: "Packages",
    title: "THREE TIERS. ZERO COMPROMISE.",
    desc: "Every package is a starting point — everything is tailored to your event.",
    featured: "Most popular",
    tiers: [
      { badge: "ESSENTIAL", price: "from €450", suffix: "", features: ["Up to 4h coverage", "300+ edited photos", "Online gallery", "Delivery within 14 days"], cta: "Get a quote" },
      { badge: "SIGNATURE", price: "from €890", suffix: "", features: ["Photo + Video team", "3–5 min highlight reel", "Drone shot (where allowed)", "4K color grading", "Fast 72h delivery"], cta: "Most popular" },
      { badge: "FULL PRODUCTION", price: "from €1,490", suffix: "", features: ["Photo + Video + DJ", "Pro PA & light show", "Multi-cam setup", "MC option", "Dedicated event manager"], cta: "Get a quote" },
    ],
  },
  glass: {
    title: "How can we help?",
    items: ["Photo", "Video", "DJ", "Location"],
  },
  contact: {
    eyebrow: "Get in touch",
    title1: "LET'S CREATE",
    title2: "SOMETHING EPIC",
    fields: { name: "Full name", email: "Email", phone: "Phone", date: "Event date", type: "Event type", message: "Tell us about your night" },
    types: ["Wedding", "Corporate", "Party / Club", "Festival", "Other"],
    submit: "SEND IT",
    success: "Got it. We'll respond within 24h.",
    errors: { req: "Required", email: "Invalid email", short: "Tell us a bit more", pick: "Pick one" },
    info: { studio: "Studio", email: "Email", phone: "Phone", cities: "Cities covered" },
    studio: "Trg Kosturnica 7, Kruševac",
    cities: "Kruševac · Trstenik · Vrnjačka Banja · Kraljevo",
    response: "Response within 24h",
  },
  footer: {
    tagline: "Every shot. Every beat. Every memory.",
    quick: "Quick links",
    follow: "Follow",
    rights: "All Rights Reserved",
  },
};

const dicts: Record<Lang, Dict> = { sr, en };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("sr");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("ds-lang") as Lang | null)) || null;
    if (saved === "sr" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("ds-lang", l);
  };

  return <I18nCtx.Provider value={{ lang, setLang, t: dicts[lang] }}>{children}</I18nCtx.Provider>;
}

export function useT() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useT must be used within I18nProvider");
  return ctx;
}
