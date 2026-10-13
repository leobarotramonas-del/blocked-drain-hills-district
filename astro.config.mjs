import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://blockeddrainshillsdistrict.com.au',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
});
