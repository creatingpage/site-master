/* Captura screenshots desktop + mobile da home local.
 * Uso: `npm run dev` em background (ou `npm run build && npm start`)
 * e então `node scripts/shots.mjs [baseUrl]`.
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const base = process.argv[2] ?? "http://localhost:3000";
mkdirSync("shots", { recursive: true });

const browser = await chromium.launch();
try {
  // Desktop 1440x900 fullPage
  const d = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await d.goto(base, { waitUntil: "networkidle" });
  await d.waitForTimeout(1500);
  await d.screenshot({ path: "shots/desktop-1440.png", fullPage: true });
  // Dobras principais desktop: hero, services, plans
  for (const [name, sel] of [
    ["hero", "section"],
    ["services", "#services"],
    ["plans", "#plans"],
  ]) {
    const el = d.locator(sel).first();
    if ((await el.count()) > 0)
      await el.screenshot({ path: `shots/desktop-${name}.png` }).catch(() => {});
  }
  await d.close();

  // Mobile 390x844 fullPage
  const m = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  await m.goto(base, { waitUntil: "networkidle" });
  await m.waitForTimeout(1500);
  await m.screenshot({ path: "shots/mobile-390.png", fullPage: true });
  const bar = m.locator("div.fixed.bottom-0").first();
  if ((await bar.count()) > 0)
    await bar.screenshot({ path: "shots/mobile-bottombar.png" }).catch(() => {});
  await m.close();

  console.log("shots ok: shots/desktop-1440.png shots/mobile-390.png");
} finally {
  await browser.close();
}
