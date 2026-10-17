/* =====================================================================
 * MASTER TEMPLATE — site.config.ts (v2 padrão Kind Roofing)
 * ---------------------------------------------------------------------
 * COMO REUTILIZAR: para gerar o site do próximo cliente, duplique esta
 * pasta e edite SOMENTE este arquivo (+ as 4 vars --brand-* em
 * app/globals.css). Todo o conteúdo das seções é renderizado a partir
 * daqui. Nenhum texto de cliente existe hardcoded nos componentes.
 *
 * IMAGENS: arquivos locais em public/images/ (royalty-free Unsplash,
 * demonstração). Troque pelos arquivos do cliente mantendo o nome ou
 * atualize os caminhos abaixo. Nada de hotlink.
 * ===================================================================== */

export interface ServiceItem {
  title: string;
  tag: string;
  description: string;
  icon: string; // emoji-free glyph key rendered by components/sections.tsx
  image: string; // caminho local em public/images/
  imageAlt: string;
}

export interface Plan {
  name: string;
  price: string;
  per: string;
  blurb: string;
  features: string[];
  featured?: boolean;
}

export interface Faq {
  q: string;
  a: string;
}

export interface GalleryItem {
  image: string;
  alt: string;
  caption: string;
  tag: string;
}

export interface SiteConfig {
  businessName: string;
  tagline: string;
  niche: string;
  city: string;
  state: string;
  phoneDisplay: string;
  phoneHref: string;
  address: string;
  licenseNote: string;
  heroBadge: string;
  heroTitle: string;
  heroAccent: string;
  heroSub: string;
  heroBullets: string[];
  heroImage: string;
  heroImageAlt: string;
  heroSeals: string[];
  trustItems: { stat: string; label: string }[];
  aboutEyebrow: string;
  aboutTitle: string;
  aboutText: string;
  aboutBullets: string[];
  aboutImage: string;
  aboutImageAlt: string;
  servicesEyebrow: string;
  servicesTitle: string;
  servicesSub: string;
  services: ServiceItem[];
  galleryEyebrow: string;
  galleryTitle: string;
  gallerySub: string;
  gallery: GalleryItem[];
  plansEyebrow: string;
  plansTitle: string;
  plansNote: string;
  plans: Plan[];
  steps: { title: string; text: string }[];
  reviews: { quote: string; name: string; detail: string }[];
  googleRating: string | null; // null = sem dado verificado -> bloco mostra fallback honesto
  googleTotal: string | null;
  proofImage: string;
  proofImageAlt: string;
  emergencyTitle: string;
  emergencyText: string;
  areasTitle: string;
  areasZips: string[];
  faqs: Faq[];
  finalTitle: string;
  finalSub: string;
  footerNote: string;
  demoDisclaimer: string;
}

/* ---------------- PILOTO: Total Pool Care of Tampa (ID 15) -------------
 * Dados extraídos do site real https://tampapoolcleaners.com/ em 16/10/2026
 * via leitura pública (nome, telefone, endereço, planos, preços, garantia,
 * marcas, zips). Rating Google não publicado no site -> null (sem invenção).
 * Fotos: Unsplash royalty-free (demonstração) em public/images/.
 * ------------------------------------------------------------------------ */
export const site: SiteConfig = {
  businessName: "Total Pool Care of Tampa",
  tagline: "Tampa Pool Cleaning",
  niche: "Pool Cleaning & Maintenance",
  city: "Tampa",
  state: "FL",
  phoneDisplay: "(813) 981-1122",
  phoneHref: "tel:+18139811122",
  address: "5701 E Hillsborough Ave STE 579, Tampa, FL 33610",
  licenseNote: "Licensed & Insured",
  heroBadge: "Tampa, FL — Locally owned pool care",
  heroTitle: "Tampa pool cleaning,",
  heroAccent: "done right every week.",
  heroSub:
    "Weekly pool cleaning in Tampa, FL backed by a written service guarantee and a 23-point checklist — so your pool looks great every time you step into the backyard.",
  heroBullets: [
    "Written satisfaction guarantee",
    "23-point weekly checklist",
    "Top-brand parts: Hayward, Jandy, Pentair, Polaris",
  ],
  heroImage: "/images/hero-pool.jpg",
  heroImageAlt: "Clean Tampa backyard swimming pool at sunset (demonstration photo)",
  heroSeals: ["Licensed & Insured", "Written Guarantee", "23-Point Checklist"],
  trustItems: [
    { stat: "23-pt", label: "Weekly cleaning checklist" },
    { stat: "$99+", label: "Plans from $99/mo" },
    { stat: "100%", label: "Service guarantee" },
    { stat: "20+", label: "Tampa ZIPs served" },
  ],
  aboutEyebrow: "Who we are",
  aboutTitle: "Your Tampa neighbors for pool care.",
  aboutText:
    "One technician, one checklist, zero stress. We run weekly routes across Tampa with tested water chemistry, checked equipment and a full clean — backed by our written service guarantee.",
  aboutBullets: [
    "Same checklist on every visit",
    "Genuine parts: Hayward, Jandy, Pentair, Polaris",
    "Ask for recent references on your street",
  ],
  aboutImage: "/images/backyard-pool.jpg",
  aboutImageAlt: "Tampa home with clean swimming pool (demonstration photo)",
  servicesEyebrow: "What we do",
  servicesTitle: "Everything your pool needs, every week.",
  servicesSub:
    "One technician, one checklist, zero stress. Pick a plan and we handle the chemistry, the equipment and the cleaning.",
  services: [
    {
      title: "Water Chemistry",
      tag: "11 balancing tests",
      description:
        "Chlorine, pH, alkalinity, calcium, stabilizer and salt — tested weekly.",
      icon: "drop",
      image: "/images/service-chemistry.jpg",
      imageAlt: "Clear blue pool water (demonstration photo)",
    },
    {
      title: "Equipment Checks",
      tag: "7 inspection points",
      description:
        "Pump and skimmer baskets, valves, backwashes and bags checked.",
      icon: "gear",
      image: "/images/service-equipment.jpg",
      imageAlt: "Clean resort-style pool (demonstration photo)",
    },
    {
      title: "Full Cleaning",
      tag: "Full Plus plan",
      description:
        "Weekly vacuuming, netting, wall and step brushing, plus spa.",
      icon: "spark",
      image: "/images/service-cleaning.jpg",
      imageAlt: "Backyard pool ready for swimming (demonstration photo)",
    },
    {
      title: "Filters & Pumps",
      tag: "Included care",
      description:
        "DE filters backwashed monthly, sand filters weekly — peak flow.",
      icon: "filter",
      image: "/images/pool-detail.jpg",
      imageAlt: "Modern home pool with clear water (demonstration photo)",
    },
    {
      title: "Repairs & Parts",
      tag: "Top brands",
      description:
        "Repairs with Hayward, Jandy, Pentair and Polaris. Leak detection.",
      icon: "wrench",
      image: "/images/clean-supplies.jpg",
      imageAlt: "Repair planning workbench (demonstration photo)",
    },
    {
      title: "Service Guarantee",
      tag: "In writing",
      description:
        "Every plan backed in writing. If it isn't right, we make it right.",
      icon: "shield",
      image: "/images/pool-evening.jpg",
      imageAlt: "Tampa home pool in daylight (demonstration photo)",
    },
  ],
  galleryEyebrow: "Recent work",
  galleryTitle: "What weekly care looks like.",
  gallerySub:
    "Demonstration photos of the kind of result a weekly route delivers. Ask us for recent customers on your street.",
  gallery: [
    {
      image: "/images/pool-lanes.jpg",
      alt: "Resort-style clean pool (demonstration photo)",
      caption: "Crystal-clear water, every visit",
      tag: "Weekly cleaning",
    },
    {
      image: "/images/hero-pool.jpg",
      alt: "Pool with loungers at sunset (demonstration photo)",
      caption: "Backyard-ready for the weekend",
      tag: "Full Plus plan",
    },
    {
      image: "/images/pool-detail.jpg",
      alt: "Home pool with clear water (demonstration photo)",
      caption: "Chemistry balanced + equipment checked",
      tag: "23-point checklist",
    },
  ],
  plansEyebrow: "Simple pricing",
  plansTitle: "Two plans. Zero headaches.",
  plansNote:
    "*Starting price, based on a 4-week billing period. Attached spa included in your quote.",
  plans: [
    {
      name: "Regular",
      price: "$99",
      per: "/mo*",
      blurb: "Reliable weekly pool cleaning for Tampa homes.",
      features: [
        "Weekly technician visit",
        "Water balancing & chemicals managed",
        "Equipment checks",
        "Skimmer & pump baskets emptied",
        "Service guarantee included",
      ],
    },
    {
      name: "Full Plus",
      price: "$129",
      per: "/mo*",
      blurb: "Our most meticulous clean — the whole backyard-ready package.",
      features: [
        "Everything in Regular",
        "Weekly leaf & debris vacuuming",
        "Surface & bottom netting",
        "Brush walls, steps & spa",
        "Weekly hose vacuum",
      ],
      featured: true,
    },
  ],
  steps: [
    {
      title: "Get your quote",
      text: "Call or send the 60-second form. We confirm your ZIP and pool setup.",
    },
    {
      title: "First deep clean",
      text: "We baseline your water chemistry and equipment on visit one.",
    },
    {
      title: "Weekly route",
      text: "Same checklist, every week — chemistry, equipment and cleaning.",
    },
    {
      title: "Guaranteed",
      text: "Backed by our written guarantee. Not right? We make it right.",
    },
  ],
  reviews: [],
  googleRating: null,
  googleTotal: null,
  proofImage: "/images/team.jpg",
  proofImageAlt: "Service professional at work (demonstration photo)",
  emergencyTitle: "Green pool? Party this weekend?",
  emergencyText:
    "Florida summer turns a pool green fast. Call or text now — we'll tell you honestly if a cleanup plus a weekly route fixes it.",
  areasTitle: "Weekly routes across Tampa.",
  areasZips: [
    "33647", "33614", "33612", "33615", "33617", "33610", "33624", "33604",
    "33619", "33613", "33611", "33626", "33618", "33625", "33629", "33607",
    "33634", "33603", "33606", "33605",
  ],
  faqs: [
    {
      q: "How much does weekly pool cleaning cost?",
      a: "Plans start at $99/mo (Regular) and $129/mo (Full Plus), based on a 4-week billing period. Attached spas are included in your quote.",
    },
    {
      q: "What does the 23-point checklist cover?",
      a: "Eleven water-chemistry tests, seven equipment checks and full general cleaning — from chlorine and pH balancing to vacuuming, netting and brushing.",
    },
    {
      q: "Is there really a guarantee?",
      a: "Yes. Every plan is backed by a written pool-cleaning service guarantee. If something isn't right, we make it right.",
    },
    {
      q: "Which equipment brands do you service?",
      a: "Our technicians work with parts and equipment from Hayward, Jandy, Pentair and Polaris.",
    },
    {
      q: "Do you serve my neighborhood?",
      a: "We run weekly routes across most of Tampa — 20+ ZIP codes including 33647, 33612, 33610 and 33629. Call to confirm your address.",
    },
  ],
  finalTitle: "Walk out to a perfect pool.",
  finalSub:
    "Get a fast quote for weekly pool cleaning in Tampa — backed by our written service guarantee.",
  footerNote:
    "Local, licensed & insured pool cleaning serving Tampa, FL and surrounding communities.",
  demoDisclaimer:
    "Demonstration website built as a design concept. Not affiliated with or endorsed by the business named above.",
};

/** sms: link derivado do telefone para a bottom bar e faixa de emergência. */
export const smsHref = site.phoneHref.replace(/^tel:/, "sms:");
