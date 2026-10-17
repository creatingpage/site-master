"use client";

import { useState } from "react";
import { site } from "../site.config";

/* FormulÃ¡rio simplificado de cotaÃ§Ã£o (front-end only, sem backend).
 * PadrÃ£o Kind: "60 segundos, sem pressÃ£o" + fallback Click-to-Call. */
export function QuoteForm({ className }: { className?: string }) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  if (sent) {
    return (
      <div className="rounded-2xl bg-white p-6 text-center shadow-xl">
        <p className="font-display text-3xl font-semibold text-brand-900">
          Request received{name ? `, ${name.split(" ")[0]}` : ""}!
        </p>
        <p className="mt-2 text-slate-600">
          This demo form doesn&apos;t send data anywhere. For the fastest
          response, call us now:
        </p>
        <a
          href={site.phoneHref}
          className="mt-4 inline-block rounded-lg bg-brand-900 px-6 py-3 text-lg font-bold text-white"
        >
          {site.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form
      id="quote"
      className={`rounded-2xl bg-white p-6 shadow-xl ${className ?? ""}`}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <p className="font-display text-2xl font-semibold uppercase text-brand-950">
        Get your free quote in 60 seconds
      </p>
      <p className="mt-1 text-sm text-slate-500">
        No forms marathon. No pressure. Just a fast answer.
      </p>
      <div className="mt-4 grid gap-4 mb-8 sm:mb-0">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          autoComplete="name"
          className="min-h-[48px] w-full rounded-lg border border-slate-300 px-4 py-3.5 text-base focus:border-brand-600 focus:outline-none"
        />
        <input
          required
          type="tel"
          placeholder="Phone number"
          autoComplete="tel"
          className="min-h-[48px] w-full rounded-lg border border-slate-300 px-4 py-3.5 text-base focus:border-brand-600 focus:outline-none"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            required
            inputMode="numeric"
            placeholder="ZIP code"
            autoComplete="postal-code"
            className="min-h-[48px] w-full rounded-lg border border-slate-300 px-4 py-3.5 text-base focus:border-brand-600 focus:outline-none"
          />
          <select
            required
            defaultValue={site.plans[1]?.name ?? ""}
            className="w-full rounded-lg border border-slate-300 px-4 py-3.5 text-base text-slate-700 focus:border-brand-600 focus:outline-none appearance-none bg-white"
          >
            {site.plans.map((p) => (
              <option key={p.name} value={p.name}>
                {p.name} â€” {p.price}
                {p.per.replace("*", "")}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="min-h-[48px] rounded-lg bg-accent-500 py-4 text-lg font-bold text-brand-950 hover:bg-amber-400"
        >
          Get my free quote
        </button>
        <p className="text-center text-sm text-slate-500">
          Prefer to talk?{" "}
          <a href={site.phoneHref} className="font-semibold text-brand-600">
            {site.phoneDisplay}
          </a>
        </p>
      </div>
    </form>
  );
}
