# Antons Blocked Drains Hills District

Static Astro website for `https://blockeddrainshillsdistrict.com.au`.

## Development

Use Node 22 LTS or a compatible newer release.

```sh
npm ci
npm run dev
```

Run `npm run build` before release. This performs Astro checks, generates `dist/`, and checks metadata, internal links and static performance requirements. Generated files and dependencies are not committed.

## Cloudflare Workers Builds

Connect this repository's `main` branch to a Cloudflare Worker:

- Root directory: repository root
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Worker name: `blocked-drain-hills-district` (must match `wrangler.jsonc`)
- Static assets: `dist`
- Custom domain: `blockeddrainshillsdistrict.com.au`

The source uses canonical HTTPS URLs with trailing slashes. Configure HTTP and www redirects at Cloudflare, preserving paths and query strings. Verify DNS, TLS, redirects, sitemap and deployed responses before launch. A Git push only triggers deployment once Cloudflare's repository integration is configured.

Production builds are indexable by default. Set `PUBLIC_ALLOW_INDEXING=false` for staging builds to emit noindex HTML. The static robots.txt permits crawling; preview-host noindex headers must be verified on the selected hosting platform.

## Content

The site contains eight drainage service pages and twelve locality pages. Business details and content are in `src/data/site.ts`; FAQ content is in `src/data/faqs.ts`. Existing Antons job photography is reused without asserting that the photographs were taken in a particular Hills District suburb.

Website name: Antons Blocked Drains Hills District. Service provider: Antons Plumbing & Gas. NSW contractor licence: 210933C. Phone: 0493 824 176.

## Verification scope

`npm run build` runs the current local checks. Some optional utility scripts were retained from the Ryde reference project; in particular, `check:live`, map generation and redirect generation need adaptation before use on this site's production deployment. They are not part of the build command.

The initial build's dependency audit reported five findings. Review these before production release; no automatic breaking upgrades have been applied.
