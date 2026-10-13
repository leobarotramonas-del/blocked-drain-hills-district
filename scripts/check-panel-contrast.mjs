import { chromium } from 'playwright-core';
import { readdir, mkdir } from 'node:fs/promises';

const base = process.env.RESPONSIVE_BASE_URL || 'http://127.0.0.1:4322';
const routes = [];
for (const group of ['services', 'service-areas']) {
  for (const entry of await readdir(`dist/${group}`, { withFileTypes: true })) {
    if (entry.isDirectory()) routes.push(`/${group}/${entry.name}/`);
  }
}
const browser = await chromium.launch({ executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', headless: true });
const failures = [];
let minimum = Infinity;
await mkdir('.impeccable/review', { recursive: true });
try {
  for (const width of [390, 1041]) {
    const page = await browser.newPage({ viewport: { width, height: 884 }, reducedMotion: 'reduce' });
    for (const route of routes) {
      await page.goto(`${base}${route}`, { waitUntil: 'networkidle' });
      const result = await page.locator('.method-panel, .expertise-panel').evaluate(panel => {
        const rgb = value => value.match(/[\d.]+/g).slice(0, 3).map(Number);
        const luminance = color => rgb(color).map(v => { v /= 255; return v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }).reduce((sum, v, i) => sum + v * [.2126, .7152, .0722][i], 0);
        const background = getComputedStyle(panel).backgroundColor;
        const bg = luminance(background);
        const ratios = [...panel.querySelectorAll('h2, p, li, a')].map(el => {
          const fg = luminance(getComputedStyle(el).color);
          return (Math.max(fg, bg) + .05) / (Math.min(fg, bg) + .05);
        });
        return { background, minimum: Math.min(...ratios), overflow: panel.scrollWidth > panel.clientWidth + 1 };
      });
      minimum = Math.min(minimum, result.minimum);
      if (result.minimum < 4.5 || result.overflow || result.background !== 'rgb(8, 25, 57)') failures.push({ route, width, ...result });
      if (route.includes('west-pennant-hills') || route.includes('tree-root-blockages')) {
        await page.locator('.method-panel, .expertise-panel').screenshot({ path: `.impeccable/review/panel-${route.split('/')[2]}-${width}.png` });
      }
    }
    await page.close();
  }
} finally { await browser.close(); }
console.log(JSON.stringify({ pages: routes.length, checks: routes.length * 2, minimumTextContrast: minimum.toFixed(2), failures }, null, 2));
if (failures.length) process.exitCode = 1;
