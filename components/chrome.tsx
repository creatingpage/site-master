import { site, smsHref } from "../site.config";

/* Barra superior: telefone + licenÃ§a (padrÃ£o Gravity: ajuda imediata). */
export function TopBar() {
  return (
    <div className="bg-brand-950 text-white text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between gap-2">
        <span className="uppercase tracking-widest text-sky-200">
          {site.licenseNote} â€¢ {site.city}, {site.state}
        </span>
        <a href={site.phoneHref} className="font-semibold text-white hover:text-amber-300">
          Call {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}

/* Header sticky com Ã¢ncora de conversÃ£o (padrÃ£o Kind: CTA sempre visÃ­vel). */
export function Header() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Results" },
    { href: "#plans", label: "Plans & Pricing" },
    { href: "#process", label: "How it works" },
    { href: "#areas", label: "Service area" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-lg bg-brand-900 text-lg font-bold text-white">
            {site.businessName.charAt(0)}
          </span>
          <span className="leading-tight">
            <span className="font-display block text-xl font-semibold uppercase tracking-wide text-brand-950">
              {site.businessName}
            </span>
            <span className="block text-[11px] uppercase tracking-widest text-slate-500">
              {site.tagline}
            </span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-brand-600">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden sm:inline-flex rounded-lg border border-brand-900 px-4 py-2 text-sm font-semibold text-brand-900"
          >
            {site.phoneDisplay}
          </a>
          <a
            href="#quote"
            className="rounded-lg bg-accent-500 px-4 py-2 text-sm font-bold text-brand-950 hover:bg-amber-400"
          >
            Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}

/* Bottom bar mobile com 3 aÃ§Ãµes: Call / Text / Free Quote.
 * SÃ³ em <md, altura mÃ­nima 56px. O body tem pb-16 no mobile para nÃ£o
 * sobrepor conteÃºdo (ver app/layout.tsx). */
export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 grid grid-cols-3 border-t border-slate-200 bg-white md:hidden min-h-[56px]">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-1.5 bg-brand-900 py-4 text-sm font-bold text-white"
      >
        <span aria-hidden>â˜Ž</span> Call
      </a>
      <a
        href={smsHref}
        className="flex items-center justify-center gap-1.5 border-x border-slate-200 bg-white py-4 text-sm font-bold text-brand-900"
      >
        <span aria-hidden>âœ‰</span> Text
      </a>
      <a
        href="#quote"
        className="flex items-center justify-center bg-accent-500 py-4 text-sm font-bold text-brand-950"
      >
        Free Quote
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold uppercase text-white">
            {site.businessName}
          </p>
          <p className="mt-2 text-sm">{site.footerNote}</p>
          <p className="mt-4 text-sm">
            <a href={site.phoneHref} className="font-semibold text-white">
              {site.phoneDisplay}
            </a>
            <br />
            {site.address}
          </p>
        </div>
        <nav className="text-sm">
          <p className="uppercase tracking-widest text-sky-200 text-xs">Explore</p>
          <ul className="mt-3 space-y-2">
            {[
              ["#about", "About"],
              ["#services", "Services"],
              ["#work", "Results"],
              ["#plans", "Plans & Pricing"],
              ["#process", "How it works"],
              ["#areas", "Service area"],
              ["#faq", "FAQ"],
              ["#quote", "Free Quote"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm">
          <p className="uppercase tracking-widest text-sky-200 text-xs">Service area</p>
          <p className="mt-3">
            {site.city}, {site.state} and surrounding communities.
          </p>
          <a
            href="#quote"
            className="mt-4 inline-block rounded-lg bg-accent-500 px-5 py-2.5 font-bold text-brand-950"
          >
            Check availability
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-slate-400 flex flex-col gap-1 sm:flex-row sm:justify-between">
          <span>
            Â© {site.businessName}. All rights reserved.
          </span>
          <span>{site.demoDisclaimer}</span>
        </div>
      </div>
    </footer>
  );
}
