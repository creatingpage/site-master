# Master Template — Home Services (Next.js + Tailwind v4)

Landing page de alta conversão para Roofing / HVAC / Pool Care.
Padrão visual: Kind Roofing (tipografia forte) + Gravity Roofing (hero com form + prova social).

## Reutilizar para o próximo cliente (5 min)
1. Duplique esta pasta.
2. Edite **somente** `site.config.ts` (nome, cidade, telefone, serviços + `image`, planos, FAQs, galeria, about, emergency; reviews só com dado verificado).
3. Troque as 4 vars `--brand-*` / `--accent-*` em `app/globals.css` pela paleta do cliente.
4. Troque os arquivos em `public/images/` pelos do cliente (mesmos nomes ou atualize o config). Rode `node scripts/shots.mjs` e confira.
5. `npm run build` + `vercel --prod` (novo `--name`).

## Estrutura
- `site.config.ts` — TODO o conteúdo do site (tipado). Inclui `heroImage`/`heroSeals`, `about*`, `services[].image`, `gallery[]`, `proofImage`, `emergency*`. `smsHref` é derivado de `phoneHref`.
- `components/chrome.tsx` — TopBar, Header sticky, Footer compliance, MobileCallBar (Call / Text / Free Quote, só `<md`, min 56px; body tem `pb-16` mobile).
- `components/quote-form.tsx` — form 60s (client, sem backend) + fallback tel:.
- `components/sections.tsx` — Hero (foto + selos + form), TrustBar (stats 01–04), About (foto equipe), Services (cards com imagem 16:10 + "Learn more"), WorkStrip (strip horizontal snap), Gallery (lado a lado legendada), Plans, Process, EmergencyBand (CTA duplo Call/Text).
- `components/sections2.tsx` — Reviews (honesto: sem rating verificado = foto + selos + garantia + referências, nunca inventa estrelas), ServiceAreas (ZIPs), Faq, FinalCta.
- `scripts/shots.mjs` — Playwright: `shots/desktop-1440.png` + `shots/mobile-390.png` + dobras. Rodar contra `npm start` após build.

## Regras de honestidade
- `googleRating: null` + `reviews: []` = fallback de garantia. Nunca fabricar reviews/estrelas.
- Galeria: legendas de demonstração até o cliente enviar before/after reais.
- Disclaimer de demonstração sempre no rodapé.

## Piloto atual
Total Pool Care of Tampa (ID 15) → https://tampa-pool-care-demo.vercel.app
