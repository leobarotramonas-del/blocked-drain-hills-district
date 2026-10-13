import { chromium } from 'playwright-core';
import { mkdir } from 'node:fs/promises';

const browser = await chromium.launch({ executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', headless: true });
const base = process.env.RESPONSIVE_BASE_URL || 'http://127.0.0.1:4321';
const routes = ['/', '/services/', '/services/tree-root-blockages/', '/service-areas/', '/service-areas/west-pennant-hills/', '/about/', '/contact/', '/privacy/'];
const failures = [];
await mkdir('.impeccable/review', { recursive: true });
try {
  for (const width of [320, 390, 640, 768, 1024, 1440, 1920]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    for (const route of routes) {
      await page.goto(`${base}${route}`, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      const layout = await page.evaluate(() => {
        const main = document.querySelector('main').getBoundingClientRect();
        const overflow = [...document.querySelectorAll('main *, header *, footer *')].filter(el => {
          const r = el.getBoundingClientRect();
          return r.width && (r.right > innerWidth + 1 || r.left < -1);
        }).map(el => `${el.tagName}.${el.className}`);
        return { left: main.left, right: innerWidth - main.right, width: main.width, overflow };
      });
      if (layout.left < 15 || Math.abs(layout.left - layout.right) > 1 || layout.width > 1201 || layout.overflow.length) failures.push({ viewport: width, route, ...layout });
      if (route === '/' && [390, 1440].includes(width)) {
        await page.evaluate(async () => {
          for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight) {
            scrollTo(0, y);
            await new Promise(resolve => setTimeout(resolve, 40));
          }
          await Promise.all([...document.images].map(img => img.decode().catch(() => {})));
          scrollTo(0, 0);
        });
        await page.screenshot({ path: `.impeccable/review/layout-${width}.png`, fullPage: true });
        await page.screenshot({ path: `.impeccable/review/layout-viewport-${width}.png` });
      }
      if (route === '/' && width === 320) {
        await page.locator('.mobile-menu summary').click();
        const menu = await page.locator('.mobile-menu__panel').boundingBox();
        if (!menu || menu.x < 0 || menu.x + menu.width > width) failures.push({ width, menu });
        await page.locator('.mobile-menu summary').click();
        await page.locator('.faq-list summary').first().click();
        if (!await page.locator('.faq-list details').first().getAttribute('open').then(v => v !== null)) failures.push({ width, faq: 'failed to open' });
      }
    }
    await page.close();
  }
} finally { await browser.close(); }
console.log(JSON.stringify({ checks: routes.length * 7, failures }, null, 2));
if (failures.length) process.exitCode = 1;
