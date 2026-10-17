import Image from "next/image";
import { site } from "../site.config";

/* Prova honesta: nunca inventa estrelas. Sem rating verificado = layout rico
 * com foto + selos + card de garantia + convite a referÃªncias por telefone. */
export function Reviews() {
  const hasProof = site.googleRating && site.reviews.length > 0;
  return (
    <section className="bg-brand-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
          Proof, not promises
        </p>
        <h2 className="font-display mt-2 text-4xl font-semibold uppercase sm:text-5xl">
          {hasProof
            ? `Rated ${site.googleRating} by ${site.city} pool owners.`
            : "Backed in writing, not just words."}
        </h2>
        {hasProof ? (
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {site.reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl bg-white/5 p-6 border border-white/10">
                <p className="text-amber-400 tracking-widest" aria-label="5 star review">
                  â˜…â˜…â˜…â˜…â˜…
                </p>
                <blockquote className="mt-3 text-slate-100">â€œ{r.quote}â€</blockquote>
                <figcaption className="mt-4 flex items-center gap-3 text-sm text-slate-300">
                  <span
                    aria-hidden
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-amber-400 font-display text-lg font-semibold text-brand-950"
                  >
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <strong className="block text-white">{r.name}</strong>
                    {r.detail}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:items-stretch">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={site.proofImage}
                  alt={site.proofImageAlt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-white/5 p-6">
                <ul className="flex flex-wrap gap-2" aria-label="Credentials">
                  {["Licensed & Insured", "Written Guarantee", `Serving ${site.city}`].map(
                    (s) => (
                      <li
                        key={s}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-300"
                      >
                        âœ“ {s}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-7 border border-white/10">
              <p className="font-display text-3xl font-semibold uppercase text-amber-400">
                Written service guarantee
              </p>
              <p className="mt-3 text-slate-200">
                Every plan is backed by a written pool-cleaning guarantee. If
                something isn&apos;t right after our visit, we make it right â€”
                that&apos;s the whole pitch, in writing.
              </p>
              <p className="mt-4 text-sm text-slate-400">
                23-point checklist on every visit Â· Top-brand parts
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-7 border border-white/10">
              <p className="font-display text-3xl font-semibold uppercase text-amber-400">
                Ask for recent references
              </p>
              <p className="mt-3 text-slate-200">
                Review figures are only published here when pulled from a
                verified Google Business profile. Call{" "}
                <a href={site.phoneHref} className="font-semibold text-white underline">
                  {site.phoneDisplay}
                </a>{" "}
                and ask for recent customers on your street.
              </p>
              <a
                href={site.phoneHref}
                className="mt-5 inline-block rounded-lg bg-accent-500 px-6 py-3 font-bold text-brand-950 hover:bg-amber-400"
              >
                Call for references
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function ServiceAreas() {
  return (
    <section id="areas" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <h2 className="font-display text-4xl font-semibold uppercase text-brand-950 sm:text-5xl">
          {site.areasTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Weekly routes across {site.city}, {site.state}. Don&apos;t see your
          ZIP? Ask â€” routes expand every month.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {site.areasZips.map((z) => (
            <span
              key={z}
              className="rounded-full border border-slate-300 bg-slate-50 px-4 py-1.5 font-mono text-sm text-slate-700"
            >
              {z}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">
        <h2 className="font-display text-4xl font-semibold uppercase text-brand-950 sm:text-5xl">
          Quick answers.
        </h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {site.faqs.map((f) => (
            <details key={f.q} className="group px-6 py-5">
              <summary className="cursor-pointer list-none text-lg font-semibold text-brand-950 flex justify-between gap-4">
                {f.q}
                <span aria-hidden className="text-brand-600 group-open:rotate-45 transition">
                  +
                </span>
              </summary>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-gradient-to-br from-brand-900 to-brand-600 text-white">
      <div className="mx-auto max-w-4xl px-4 py-14 md:py-20 text-center">
        <h2 className="font-display text-5xl font-semibold uppercase sm:text-6xl">
          {site.finalTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-100">{site.finalSub}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#quote"
            className="rounded-lg bg-accent-500 px-8 py-3.5 text-lg font-bold text-brand-950 hover:bg-amber-400"
          >
            Get my free quote
          </a>
          <a
            href={site.phoneHref}
            className="rounded-lg border-2 border-white/70 px-8 py-3.5 text-lg font-bold text-white hover:bg-white/10"
          >
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
