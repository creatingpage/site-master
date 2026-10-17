import Image from "next/image";
import { site, smsHref } from "../site.config";
import { QuoteForm } from "./quote-form";

const ICONS: Record<string, React.ReactNode> = {
  drop: (
    <path d="M12 3c3.5 4.2 6 7.3 6 10a6 6 0 1 1-12 0c0-2.7 2.5-5.8 6-10Z" />
  ),
  gear: (
    <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5ZM19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3 1a7 7 0 0 0-2-1.2L14.2 3h-4l-.4 2.5a7 7 0 0 0-2 1.2l-2.3-1-2 3.4 2 1.5a7 7 0 0 0 0 2.4l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 2 1.2l.4 2.5h4l.4-2.5a7 7 0 0 0 2-1.2l2.3 1 2-3.4-2-1.5c.06-.4.1-.8.1-1.2Z" />
  ),
  spark: (
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z" />
  ),
  filter: (
    <path d="M4 5h16l-6 7v5l-4 2v-7L4 5Z" />
  ),
  wrench: (
    <path d="M14.5 6.5a4 4 0 0 0-5.6 4.8L4 16.2V20h3.8l4.9-4.9a4 4 0 0 0 4.8-5.6l-2.7 2.7-2.5-.7-.7-2.5 2.9-2.5Z" />
  ),
  shield: (
    <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
  ),
};

/* HERO full-bleed â€” imagem de fundo atrÃ¡s do conteÃºdo com overlay escuro
 * para legibilidade. Mobile-first: altura controlada, fonte proporcional,
 * botÃµes full-width, formulÃ¡rio empilhado abaixo do texto. */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white min-h-[500px] sm:min-h-[600px] lg:min-h-[720px]">
      <Image
        src={site.heroImage}
        alt={site.heroImageAlt}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-brand-950/95 via-brand-950/80 to-brand-950/60"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-950/95 to-transparent"
      />
      <div className="relative mx-auto max-w-7xl px-4 pt-10 sm:pt-16 lg:pt-24 pb-32 sm:pb-0 lg:pb-24 grid gap-6 sm:gap-10 lg:grid-cols-2 lg:items-center">
        <div className="max-w-full">
          <p className="inline-block rounded-full border border-sky-400/40 bg-white/5 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-sky-200">
            {site.heroBadge}
          </p>
          <h1 className="font-display mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase leading-[0.95]">
            {site.heroTitle}{" "}
            <span className="text-amber-400">{site.heroAccent}</span>
          </h1>
          <p className="mt-4 max-w-none sm:max-w-lg text-base sm:text-lg text-slate-200 leading-relaxed">
            {site.heroSub}
          </p>
          <ul className="mt-6 space-y-3">
            {site.heroBullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-slate-100">
                <span aria-hidden className="mt-0.5 font-bold text-emerald-400 text-lg">
                  âœ“
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:gap-4">
            <a
              href="#quote"
              className="rounded-lg bg-accent-500 px-6 sm:px-8 py-4 sm:py-3.5 text-center text-lg sm:text-base font-bold text-brand-950 hover:bg-amber-400 flex-1 sm:flex-none text-center sm:text-center"
            >
              Get my free quote
            </a>
            <a
              href={site.phoneHref}
              className="rounded-lg border-2 border-white/70 px-6 sm:px-8 py-4 sm:py-3.5 text-center text-lg sm:text-base font-bold text-white hover:bg-white/10 flex-1 sm:flex-none text-center sm:text-center"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="grid gap-4 sm:gap-6">
          <ul className="flex flex-wrap gap-2" aria-label="Credentials">
            {site.heroSeals.map((s) => (
              <li
                key={s}
                className="rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-300"
              >
                âœ“ {s}
              </li>
            ))}
          </ul>
          <QuoteForm className="max-w-sm sm:max-w-none" />
        </div>
      </div>
    </section>
  );
}

/* Stats numerados 01â€“04 (padrÃ£o Kind: autoridade escaneÃ¡vel). */
export function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {site.trustItems.map((t, i) => (
          <div key={t.label} className="border-l-4 border-amber-400 pl-4">
            <p className="font-display text-sm font-semibold text-slate-400">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="font-display text-4xl font-semibold text-brand-900">
              {t.stat}
            </p>
            <p className="mt-1 text-sm text-slate-600">{t.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Quem somos â€” foto da equipe + bullets (padrÃ£o Kind). */
export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-2xl shadow-lg order-first">
          <Image
            src={site.aboutImage}
            alt={site.aboutImageAlt}
            width={880}
            height={550}
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
            {site.aboutEyebrow}
          </p>
          <h2 className="font-display mt-2 text-4xl font-semibold uppercase text-brand-950 sm:text-5xl">
            {site.aboutTitle}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{site.aboutText}</p>
          <ul className="mt-6 space-y-2">
            {site.aboutBullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-slate-700">
                <span aria-hidden className="mt-0.5 font-bold text-emerald-500">
                  âœ“
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="rounded-lg bg-brand-900 px-7 py-3 text-center font-bold text-white hover:bg-brand-950"
            >
              Check availability
            </a>
            <a
              href={site.phoneHref}
              className="rounded-lg border-2 border-brand-900 px-7 py-3 text-center font-bold text-brand-900 hover:bg-slate-100"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Cards de serviÃ§o com imagem 16:10 (padrÃ£o Kind). Grid 3 cols / stack mobile. */
export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
          {site.servicesEyebrow}
        </p>
        <h2 className="font-display mt-2 max-w-2xl text-4xl font-semibold uppercase text-brand-950 sm:text-5xl">
          {site.servicesTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">{site.servicesSub}</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s) => (
            <article
              key={s.title}
              className="overflow-hidden rounded-2xl border border-slate-200 transition hover:border-brand-500 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-brand-900 text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      {ICONS[s.icon]}
                    </svg>
                  </span>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
                    {s.tag}
                  </p>
                </div>
                <h3 className="font-display mt-3 text-2xl font-semibold uppercase text-brand-950">
                  {s.title}
                </h3>
                <p className="mt-2 text-slate-600">{s.description}</p>
                <a
                  href="#quote"
                  className="mt-4 inline-block font-bold text-brand-600 hover:text-brand-900"
                >
                  Learn more â†’
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Strip horizontal de serviÃ§os com imagem (padrÃ£o Kind: "scroll the strip"). */
export function WorkStrip() {
  return (
    <section aria-label="Services at a glance" className="bg-brand-950 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
          Scroll the strip
        </p>
        <div className="mt-4 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-6">
          {site.services.map((s) => (
            <a
              key={s.title}
              href="#services"
              className="group relative h-44 w-64 shrink-0 snap-start overflow-hidden rounded-xl md:w-auto"
            >
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 256px, 200px"
                className="object-cover transition group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-3">
                <span className="font-display block text-lg font-semibold uppercase text-white">
                  {s.title}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                  See the service
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Galeria lado a lado legendada (troque por before/after reais do cliente). */
export function Gallery() {
  return (
    <section id="work" className="scroll-mt-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
          {site.galleryEyebrow}
        </p>
        <h2 className="font-display mt-2 text-4xl font-semibold uppercase text-brand-950 sm:text-5xl">
          {site.galleryTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">{site.gallerySub}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {site.gallery.map((g) => (
            <figure
              key={g.caption}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={g.image}
                  alt={g.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
                  {g.tag}
                </p>
                <p className="mt-1 font-semibold text-brand-950">{g.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Planos/preÃ§os + processo (conversÃ£o local rÃ¡pida). */
export function Plans() {
  return (
    <section id="plans" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
          {site.plansEyebrow}
        </p>
        <h2 className="font-display mt-2 text-4xl font-semibold uppercase text-brand-950 sm:text-5xl">
          {site.plansTitle}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 md:max-w-4xl">
          {site.plans.map((p) => (
            <article
              key={p.name}
              className={`rounded-2xl p-7 ${
                p.featured
                  ? "bg-brand-900 text-white shadow-xl ring-4 ring-amber-400/60"
                  : "border border-slate-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-3xl font-semibold uppercase">
                  {p.name}
                </h3>
                {p.featured && (
                  <span className="rounded-full bg-accent-500 px-3 py-1 text-xs font-bold uppercase text-brand-950">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-2">
                <span className="font-display text-5xl font-semibold">{p.price}</span>
                <span className={p.featured ? "text-slate-300" : "text-slate-500"}>
                  {p.per}
                </span>
              </p>
              <p className={`mt-2 ${p.featured ? "text-slate-200" : "text-slate-600"}`}>
                {p.blurb}
              </p>
              <ul className="mt-5 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span aria-hidden className="font-bold text-emerald-500">
                      âœ“
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className={`mt-6 block rounded-lg py-3 text-center text-lg font-bold ${
                  p.featured
                    ? "bg-accent-500 text-brand-950 hover:bg-amber-400"
                    : "bg-brand-900 text-white hover:bg-brand-950"
                }`}
              >
                Choose {p.name}
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">{site.plansNote}</p>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <h2 className="font-display text-4xl font-semibold uppercase text-brand-950 sm:text-5xl">
          From quote to crystal-clear in 4 steps.
        </h2>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-white p-6 border border-slate-200">
              <p className="font-display text-5xl font-semibold text-brand-500/40">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-2 text-2xl font-semibold uppercase text-brand-950">
                {s.title}
              </h3>
              <p className="mt-2 text-slate-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* Faixa de emergÃªncia contextual (pool no verÃ£o da FlÃ³rida). CTA duplo. */
export function EmergencyBand() {
  return (
    <section className="bg-amber-400 text-brand-950">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest">
            Florida summer emergency
          </p>
          <h2 className="font-display mt-1 text-3xl font-semibold uppercase sm:text-4xl">
            {site.emergencyTitle}
          </h2>
          <p className="mt-2 max-w-2xl font-medium">{site.emergencyText}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <a
            href={site.phoneHref}
            className="rounded-lg bg-brand-950 px-7 py-3.5 text-center text-lg font-bold text-white hover:bg-brand-900"
          >
            Call {site.phoneDisplay}
          </a>
          <a
            href={smsHref}
            className="rounded-lg border-2 border-brand-950 px-7 py-3.5 text-center text-lg font-bold hover:bg-brand-950 hover:text-white"
          >
            Text us now
          </a>
        </div>
      </div>
    </section>
  );
}
