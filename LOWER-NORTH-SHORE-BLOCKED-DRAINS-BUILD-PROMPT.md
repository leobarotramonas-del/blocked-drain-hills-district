# Build Prompt: Antons Blocked Drains Lower North Shore

Use this document as the complete build brief for a new local-service website. The existing **Antons Blocked Drains Hills District** project is the reference for layout, component structure, content depth, accessibility, technical SEO and deployment workflow. Create a new site for the Lower North Shore. Do not modify or overwrite the Hills District project.

## Project inputs to confirm before launch

Replace every placeholder before committing or deploying the new site.

| Field | Required value |
| --- | --- |
| Reference project | `{{ABSOLUTE_PATH_TO_HILLS_DISTRICT_REFERENCE_PROJECT}}` |
| New project directory | `{{ABSOLUTE_PATH_TO_NEW_LOWER_NORTH_SHORE_PROJECT}}` |
| Production domain | `https://{{LOWER_NORTH_SHORE_DOMAIN}}` |
| GitHub repository | `{{GITHUB_REPOSITORY_URL}}` |
| Cloudflare Worker name | `{{CLOUDFLARE_WORKER_NAME}}` |

Do not guess the production domain, repository, Cloudflare Worker name, prices, response times, guarantees or service facts. If one of these is missing, build locally with an obvious placeholder and stop before commit or deployment.

## Objective

Build a fast, trustworthy, locally useful blocked-drain website named **Antons Blocked Drains Lower North Shore**. It should help homeowners, landlords, strata contacts, property managers and local organisations understand a blocked-drain problem, take safe immediate action, see how professionals diagnose and clear it, and call the licensed team.

The site must be designed to earn organic visibility through genuinely useful service and locality content. It must not look or read like a group of thin doorway pages. Every service-area page must contain materially distinct local context, relevant causes, access considerations, suitable professional methods and links that help the visitor continue their journey.

The public-facing site name is **Antons Blocked Drains Lower North Shore**. The licensed service provider is **Antons Plumbing & Gas**. State the provider naturally on the homepage, About page, Contact page, legal pages, licence disclosure and footer. Do not repeat the provider name in every section or major heading. Do not use **Antons Enterprises** anywhere.

## Confirmed business details

- Website name: Antons Blocked Drains Lower North Shore
- Service provider: Antons Plumbing & Gas
- NSW contractor licence: 210933C
- Phone: 0493 824 176
- Phone link: `tel:+61493824176`
- Urgent calls: taken 24 hours, 7 days a week
- Service coverage: confirm by full street address when the caller books
- Language: Australian English

Do not promise a fixed attendance time. Use wording such as: "Call with the full address, symptoms and urgency so current coverage and the next available response can be confirmed."

## Required skills and working method

Use **Impeccable** for information architecture, customer journey, responsive behaviour, accessibility, performance, content clarity and final UI review. Use **Design Taste Frontend** for the visual direction and landing-page execution.

Before writing code:

1. Read the reference project's `PRODUCT.md`, `DESIGN.md`, page templates, shared components, site data, schema generator, global styles, image component, build checks and deployment configuration.
2. Preserve the reference site's proven information architecture and component logic, but create a distinct Lower North Shore identity and unique content.
3. Write a one-line **Design Read** describing the visual direction, content density and interaction model before generating the UI.
4. Use these design dials:
   - `DESIGN_VARIANCE: 6` for a recognisable but not generic visual system.
   - `MOTION_INTENSITY: 2` for restrained hover, focus and menu feedback only.
   - `VISUAL_DENSITY: 5` for substantial information with calm spacing and strong hierarchy.
5. Work from the customer journey and proof requirements, not from a collection of decorative cards.

## Design direction

### Creative north star

Create a **Lower North Shore Drain Field Guide**: precise, calm and technically capable. The design should feel like a professional diagnostic manual adapted for established homes, apartments, strata buildings, sloping sites, mature tree cover and harbour-side terrain.

### Colour system

Use a deliberate navy, near-black and off-white system. Keep the palette coherent across the whole site instead of alternating unrelated light and dark sections.

- Deep navy: `#071A35` for header, footer and major authority sections
- Ink black: `#0A0D12` for the darkest panels and primary text on light surfaces
- Off-white: `#F6F5F0` for the page canvas and readable content surfaces
- White: `#FFFFFF` for reversed type and high-clarity controls
- Cobalt accent: `#2F73FF` for links, focus-supporting interactive states and technical labels
- Slate: `#667181` for secondary copy on light backgrounds
- Cool line: `#BFC7D1` for rules and register dividers
- Accessible focus colour: `#FFD45A`

Use the accent functionally. Do not introduce red as a dominant carry-over from the Hills District site. Do not use gradients, neon glow, glassmorphism or decorative purple. Avoid pure black over large areas when near-black is more comfortable.

All text and controls must meet WCAG 2.2 AA contrast. Verify normal text at 4.5:1 or better and large text and UI components at 3:1 or better. Never place low-opacity white text on pale blue or grey surfaces.

### Typography

- Retain the reference site's strong condensed display voice for short headings if the local font assets are available.
- Use a highly readable sans-serif for body copy, navigation, labels and calls to action.
- Bundle fonts locally, use only the weights actually needed and set `font-display: swap`.
- Prefer balanced headings and natural sentence case in body content.
- Do not use oversized headings that force ordinary words into one-word-per-line layouts on mobile.
- Keep paragraphs to a readable measure, usually 48 to 70 characters.

### Layout

- Keep content inside a centred shell with `max-width: 75rem` or approximately 1200px.
- Use responsive side gutters of `clamp(1rem, 4vw, 3rem)` so the site is never edge-to-edge on desktop.
- Let the header and footer background span the viewport while their content remains aligned to the same shell.
- Use generous section spacing, consistent internal gutters and clear ruled registers.
- Reuse the reference pattern of a split hero, service rows, causes, equipment, process, local coverage, proof, FAQs and closing call band.
- Keep most surfaces square or subtly rounded. Do not turn every section into a floating rounded card.
- Use real field photography as proof. Do not invent suburb-specific job locations from generic photos.

### Interaction and motion

- Use no scroll hijacking, entrance choreography or decorative looping animation.
- Keep hover and focus transitions around 160 to 200ms with calm ease-out timing.
- Support `prefers-reduced-motion`.
- Use visible keyboard focus, clear link states and large touch targets.
- Keep the mobile call action reachable without obscuring content. Reserve safe-area space if it is fixed.

## Information architecture

Build the following route structure with trailing slashes and canonical HTTPS URLs:

- `/`
- `/services/`
- `/services/blocked-toilets/`
- `/services/blocked-sinks-showers/`
- `/services/sewer-drain-blockages/`
- `/services/stormwater-drains/`
- `/services/high-pressure-water-jetting/`
- `/services/cctv-drain-inspections/`
- `/services/tree-root-blockages/`
- `/services/drain-repairs/`
- `/service-areas/`
- One page for each priority suburb listed below
- `/about/`
- `/contact/`
- `/privacy/`
- `/terms/`
- `/404/`
- `/sitemap.xml`

The homepage must link to the service hub and the service-area hub. Every service page must link to relevant local areas. Every local-area page must link to the relevant services. Add breadcrumbs to all inner pages. Use contextual internal links rather than repeating a large, identical block everywhere.

## Homepage customer journey

Organise the homepage in this order:

1. **Header and immediate contact**
   - Site name, service navigation, service-area navigation, licence disclosure and phone action.
   - Keep the desktop header compact and provide a clear mobile menu.
   - Do not place the Google review badge, star rating or review proof inside the header, navigation bar or mobile menu.

2. **Hero: symptom, outcome and action**
   - Place the verified Google review badge in the hero copy column, directly above the H1 or hero eyebrow, so it acts as early trust proof without competing with navigation.
   - Keep the badge compact and visually secondary to the H1. It must remain legible on navy, align with the hero text and reflow cleanly on small screens.
   - Use only the verified rating wording and supplied Google badge asset. Do not invent a rating, review count or linked destination. Host the visual locally where permitted, provide descriptive accessible text, set explicit dimensions and avoid an extra render-blocking third-party request.
   - H1 focused on "Blocked Drains Lower North Shore".
   - Brief reassurance that blocked toilets, slow wastes, sewer overflows and stormwater backups are diagnosed before the clearing or repair method is selected.
   - Phone CTA and secondary link to services.
   - One real drain-service image with a concise evidence caption.
   - The primary value and CTA should fit comfortably in the first mobile viewport.

3. **Urgent safety advice**
   - Stop using connected fixtures.
   - Keep people and pets away from wastewater.
   - Avoid chemical drain cleaners when the cause is unknown.
   - Call if sewage, widespread backup or electrical hazards are present.

4. **Common blocked-drain symptoms**
   - Rising toilet water, gurgling, slow sinks and showers, floor-waste backup, overflowing gullies, stormwater pits holding water and recurring blockages.
   - Explain which symptoms suggest a fixture problem and which can indicate a wider line issue.

5. **Service register**
   - Present all eight services as clear, scannable rows with useful summaries.
   - Major headings must lead with the service or customer problem, not "By Antons".

6. **Likely causes and professional diagnosis**
   - Hair, soap, grease, wipes, foreign objects, sediment, roots, open joints, broken or displaced pipework, poor fall and ground movement.
   - Explain that symptoms alone cannot confirm the cause.

7. **Professional tools and equipment**
   - Toilet-safe tools, mechanical clearing equipment, commercial high-pressure water jetter, penetrating and root-cutting nozzles, CCTV drain camera, electronic locator, wet extraction tools, excavation equipment, compatible pipe and repair materials.
   - State when each tool is appropriate and why operator judgement matters.

8. **Diagnosis-to-repair process**
   - Triage and safe access.
   - Establish the affected section and access point.
   - Clear using a method suitable for the obstruction and pipe condition.
   - Inspect or locate recurring faults where appropriate.
   - Explain maintenance clearing separately from structural repair.
   - Test flow and discuss prevention or repair options.

9. **Lower North Shore local expertise**
   - Explain common local contexts without pretending every property is the same: established pipework, mature roots, apartments and strata access, steep or terraced blocks, narrow side access, basement parking, shared drainage and harbour-side stormwater conditions.
   - Link to all priority suburb pages.

10. **Experience and authority**
    - State the provider and NSW contractor licence once in a clear, verifiable place.
    - Explain capability through methods, equipment, evidence and transparent scope rather than unsupported superlatives.

11. **Customer proof**
    - Reuse only customer-review wording already verified in the supplied Antons source material.
    - Do not invent, paraphrase or relocate reviews.
    - Do not add review or aggregate-rating schema unless eligibility and source evidence are confirmed.

12. **FAQ and final CTA**
    - Answer practical questions about first actions, chemicals, CCTV, jetting, repeat blockages, urgent calls, areas covered and access details.
    - End with a direct phone CTA that asks for the full address, symptoms and urgency.

## Core service content

Create substantial service pages for:

1. Blocked toilets
2. Blocked sinks, showers and floor wastes
3. Sewer drain blockages
4. Stormwater drains
5. High-pressure water jetting
6. CCTV drain inspections
7. Tree root blockages
8. Drain repairs

Each service page must include:

- A unique title, meta description and H1.
- Signs the visitor may notice.
- Common causes without asserting certainty.
- Safe immediate actions and what to avoid.
- How a licensed professional diagnoses the issue.
- Tools, equipment and materials that may be used.
- When the method is suitable and when another method or repair may be needed.
- Clearing versus repair, explained honestly.
- Relevant Lower North Shore property and access considerations.
- Links to closely related services and priority suburbs.
- Visible FAQs written specifically for that service.
- A phone CTA with no invented price, guarantee or ETA.

## Priority service areas

Create useful pages for these 20 marketable Lower North Shore localities. Do not exceed this list in the initial build unless search evidence and actual coverage support another page.

| Locality | Postcode | Natural orientation references | Useful local content angle |
| --- | ---: | --- | --- |
| North Sydney | 2060 | St Leonards Park, Miller Street, Pacific Highway | Apartments, offices, shared lines, loading or basement access |
| Chatswood | 2067 | Chatswood Oval, Victoria Avenue, Pacific Highway | High-density buildings, older homes, common-property access |
| Lane Cove | 2066 | Lane Cove National Park, Longueville Road | Leafy blocks, roots, sloping sites and rear-yard access |
| Mosman | 2088 | Balmoral Foreshore, Mosman Bay, Spit Road | Slopes, mature gardens, foreshore stormwater and constrained access |
| Neutral Bay | 2089 | Forsyth Park, Military Road, Ben Boyd Road | Apartments, shared drains, parking and strata coordination |
| St Leonards | 2065 | Newlands Park, Pacific Highway, Herbert Street | Towers, mixed-use sites, basements and managed access |
| Crows Nest | 2065 | Ernest Place, Willoughby Road, Falcon Street | Compact lots, older services and mixed residential buildings |
| Willoughby | 2068 | Willoughby Park, High Street, Penshurst Street | Established homes, trees, renovations and mixed pipe ages |
| Artarmon | 2064 | Artarmon Park, Hampden Road, Mowbray Road | Apartments, established homes, shared lines and restricted access |
| Naremburn | 2065 | Naremburn Park, Willoughby Road, Brook Street | Sloping streets, mature vegetation and older drainage |
| Cammeray | 2062 | Tunks Park, Cammeray Road, Miller Street | Steep blocks, retaining walls, rear access and stormwater paths |
| Cremorne | 2090 | Primrose Park, Military Road, Spofforth Street | Apartments, harbour slopes, mature trees and street access |
| Kirribilli | 2061 | Bradfield Park, Kirribilli Avenue, Broughton Street | Dense housing, narrow access, shared services and harbour slopes |
| Milsons Point | 2061 | Sydney Harbour Bridge, Bradfield Park, Alfred Street South | Apartment towers, plant access, common property and basements |
| McMahons Point | 2060 | Blues Point Reserve, Blues Point Road | Heritage streets, tight access, slopes and shared lines |
| Lavender Bay | 2060 | Lavender Bay foreshore, Clark Park, Bay View Street | Foreshore terrain, established properties and limited access |
| Wollstonecraft | 2065 | Berry Island Reserve, Shirley Road | Leafy slopes, mature roots and apartment access |
| Waverton | 2060 | Balls Head Reserve, Waverton Park, Bay Road | Sloping blocks, tree cover and older pipework |
| Greenwich | 2065 | Greenwich Point, Gore Creek Reserve, River Road | Foreshore slopes, long private runs and garden access |
| Longueville | 2066 | Aquatic Park, Tambourine Bay Reserve, River Road West | Larger leafy blocks, roots, longer drainage runs and gates |

Use landmarks and well-known streets only as natural orientation references. Do not name nearby businesses. Do not say or imply that work was completed at or near a landmark. Use no more than one or two orientation references on a page, and only where they make the copy more helpful.

Each locality page must be materially unique and include:

- `Blocked Drains {Locality} NSW {Postcode}` as a natural primary topic, not a repeated phrase in every paragraph.
- A unique introduction based on plausible property, terrain and access conditions.
- Common local drainage contexts expressed as possibilities, not facts about every property.
- Symptoms, causes, safe first actions and the professional diagnostic sequence.
- The most relevant tools and services for that context.
- Access questions such as strata contact, basement or loading access, side-gate width, parking, steep driveways, retaining walls, easements, pets or visible inspection openings.
- One or two verified public landmarks or streets for orientation.
- Links to the service pages and genuinely adjacent localities.
- Six to eight visible, unique FAQs.
- A clear statement that current coverage is confirmed by full street address.
- No fixed response-time claim and no fabricated local job story.

## SEO keyword strategy

Use keywords naturally in titles, introductions, headings, link labels, image context and answers. Write for the customer first. Avoid keyword stuffing and repeated boilerplate.

Primary themes:

- blocked drains Lower North Shore
- blocked drain plumber Lower North Shore
- drain clearing Lower North Shore
- CCTV drain inspection Lower North Shore
- high-pressure water jetting Lower North Shore
- sewer drain blockage Lower North Shore
- stormwater drain plumber Lower North Shore
- tree root drain blockage Lower North Shore
- drain repairs Lower North Shore
- blocked drains `{suburb}`
- drain plumber `{suburb}`

Use the exact local phrase where it reads naturally, then use variants such as blocked sewer, slow drain, overflowing gully, recurring blockage, drain camera inspection and professional drain clearing. Do not force location names into every subheading.

## Metadata and technical SEO

- Create a unique `<title>`, meta description and H1 for every indexable page.
- Use one primary H1 per page and a logical H2/H3 hierarchy.
- Generate canonical URLs from the confirmed production domain.
- Use the non-`www` HTTPS host and trailing slashes consistently.
- Generate a valid XML sitemap containing only canonical, indexable pages.
- Provide a production `robots.txt` and an environment-controlled noindex safeguard for staging or preview builds.
- Add `hreflang="en-AU"` and `x-default` only if implemented consistently and correctly.
- Use descriptive internal anchor text. Avoid "click here".
- Provide meaningful image alt text describing visible evidence, not keyword lists.
- Ensure the 404 page returns the correct status in deployment and helps users reach services, areas and contact details.
- Preserve URL paths and query strings in HTTP and `www` redirects.

## Structured data

Generate valid JSON-LD as one coherent graph per page. Keep page-specific nodes and descriptions unique.

Required types where relevant:

- `Plumber` or the most accurate eligible `LocalBusiness` subtype for the root business entity.
- `WebSite` for the site.
- `WebPage`, `AboutPage` or `ContactPage` for the current page.
- `BreadcrumbList` on inner pages.
- `Service` on service pages and locality pages where a specific service offering is the main entity.
- `FAQPage` only when every question and answer is visibly present on the page.

Schema rules:

- Use the website name as the public entity name and **Antons Plumbing & Gas** as the alternate or provider name where accurate.
- Include phone, licence identifier, canonical URL, page language and actual areas served.
- Give every node a stable, canonical `@id`.
- Make each page's `name`, `description`, `url`, `areaServed`, breadcrumbs and service details specific to that page.
- Do not output duplicate business nodes with conflicting names.
- Do not add review, aggregate-rating, price-range or offer schema without verified eligibility and evidence.
- Validate representative pages with Schema.org and Google Rich Results tools where applicable.

## Content truth and trust rules

- Be positive, calm, practical and reassuring.
- Explain why trained, licensed professionals with commercial equipment are better placed to diagnose and resolve blocked drains safely.
- Do not use fear, shame, absolute guarantees or unsupported claims such as "best", "number one" or "permanent fix".
- Do not invent response minutes, prices, discounts, awards, years in business, service quantities or job locations.
- Do not claim that a photograph was taken in a locality unless evidence confirms it.
- Distinguish restored flow from a repaired underlying fault.
- Describe causes as possibilities until inspection provides evidence.
- Do not use an em dash in public-facing copy.

## Image and asset rules

- Reuse suitable real Antons drain, vehicle, technician, CCTV, jetting, excavation and drainage-work assets from the supplied projects.
- Create a simple asset inventory before choosing images. Prefer evidence that supports the adjacent content.
- Never stretch a small image into a large hero.
- Generate responsive AVIF or WebP derivatives at widths appropriate to their rendered size.
- Use an Astro image component or an equivalent static image pipeline with `srcset`, `sizes`, explicit width, explicit height and stable aspect ratio.
- Give the LCP hero image `loading="eager"` and `fetchpriority="high"` only when it is the actual LCP candidate.
- Lazy-load below-the-fold images.
- Aim to keep the mobile hero transfer under approximately 100 KB when visual quality allows.
- Do not serve a 1200px image into a 360px mobile slot.
- Do not use map screenshots as a substitute for useful local copy.

## Performance and Core Web Vitals

Use Astro 5 with static output unless the project has a documented reason to change stack. Keep client JavaScript close to zero and avoid unnecessary dependencies.

Performance targets on representative production-like mobile tests:

- LCP under 2.5 seconds
- INP under 200 milliseconds
- CLS under 0.1
- FCP under 1.8 seconds as a working target
- Lighthouse accessibility and SEO at 95 or higher, with no critical errors

Implementation requirements:

- Render primary content as HTML, not client-only JavaScript.
- Minimise render-blocking CSS and eliminate unused styles where practical.
- Preload only the actual LCP image and at most the critical local font resources that prove necessary.
- Use local fonts, compressed subsets or system fallbacks. Avoid remote font requests.
- Avoid third-party scripts. Load analytics only in production and defer it.
- Use hashed static assets with long immutable cache headers.
- Give images and embeds fixed dimensions to prevent layout shift.
- Avoid large DOM duplication across desktop and mobile variants.
- Keep mobile navigation usable without a heavy framework.
- Run PageSpeed Insights or Lighthouse on the homepage, one service page and one locality page after deployment.
- Treat the highest-impact LCP, accessibility and crawlability findings first rather than chasing every low-value audit item.

## Accessibility and mobile quality

- Meet WCAG 2.2 AA.
- Test keyboard navigation, visible focus, link purpose, heading order, landmark structure, form labels, menu state and native disclosure elements.
- Use a minimum 44px mobile touch target where practical.
- Ensure the fixed call action does not cover links, footer content or browser safe areas.
- Keep phone numbers as accessible links with readable labels.
- Do not rely on colour alone for state or meaning.
- Ensure all content works at 320px, 375px, 768px, 1024px and wide desktop sizes without horizontal scrolling.
- Verify long suburb names, long headings, expanded FAQs and error states.

## Recommended project architecture

Follow the reference project's maintainable data-driven pattern:

- Shared base layout for metadata, canonical links, schema, header, footer and mobile call action.
- Data files for business details, services, areas, FAQs and verified reviews.
- Dynamic service and service-area routes driven by typed data.
- Shared image, hero, service register, area register, FAQ, CTA and breadcrumb components.
- A central schema generator that receives unique page data.
- Shared design tokens for colours, spacing, typography, focus and breakpoints.
- Build checks for metadata, canonical URLs, internal links, sitemap completeness, missing alt text, duplicate H1s and performance budgets.

## Verification workflow

Before declaring the site complete:

1. Run `npm ci` in the new project.
2. Run the image optimisation task and inspect the generated sizes.
3. Run Astro type and content checks.
4. Run the full production build.
5. Run internal-link, metadata, sitemap and performance-budget checks.
6. Preview the production build locally.
7. Visually inspect desktop and mobile captures for the homepage, service hub, one service page, area hub, one dense locality page, About, Contact and 404.
8. Test the menu, phone actions, FAQs, breadcrumbs and keyboard focus.
9. Check that no page says Antons Enterprises.
10. Check that no page contains an invented ETA, price, guarantee, review, landmark job claim or fake local anecdote.
11. Validate JSON-LD on representative page types.
12. Verify the deployed canonical host, redirects, TLS, headers, sitemap, robots and 404 behaviour.

Do not finish with placeholders, broken image paths, generic lorem ipsum, duplicated suburb copy or untested mobile overflow.

## GitHub and Cloudflare deployment

Prepare the new project for automated deployment from the confirmed GitHub repository's `main` branch.

- Install with: `npm ci`
- Build with: `npm run build`
- Output directory: `dist`
- Deploy with: `npx wrangler deploy`
- Configure the Worker name and static asset directory in `wrangler.jsonc`.
- Configure Cloudflare Git integration so every successful push to `main` runs the build and deploy command.
- Keep preview builds non-indexable.
- Add the custom domain only after the exact production domain is confirmed.
- Configure HTTPS and `www` redirects while preserving paths and query strings.
- Do not commit `.env`, credentials, local caches, `node_modules` or generated build output.

A Git push does not deploy automatically until the Cloudflare repository integration, build command, deploy command and project permissions are configured and verified.

## Deliverables

Provide:

- A complete Astro source project.
- Original, useful copy for all service and locality pages.
- Responsive production-ready images.
- Unique page metadata and JSON-LD.
- XML sitemap, robots configuration, canonical URLs and redirects documentation.
- Accessible responsive header, navigation, FAQs, contact actions and footer.
- Automated quality checks in `npm run build`.
- A README containing local setup, validation, GitHub and Cloudflare deployment instructions.
- A final report listing pages built, checks passed, remaining evidence-dependent placeholders and the exact production deployment URL.

## Final acceptance checklist

- [ ] The design clearly belongs to the same layout family as the Hills District reference without copying its red-led colour identity.
- [ ] Navy, near-black and off-white form one coherent, accessible system.
- [ ] Desktop content has proper left and right margins and a centred maximum width.
- [ ] Mobile layouts have no horizontal overflow, clipped headings or covered content.
- [ ] The verified Google review badge appears in the hero above the main heading and never in the header, navigation bar or mobile menu.
- [ ] Homepage, services and locality pages support a clear symptom-to-call customer journey.
- [ ] There are 20 or fewer initial suburb pages and every one is materially useful and unique.
- [ ] Landmarks are verified public orientation references, not business names or implied job locations.
- [ ] Major headings focus on customer problems, services and local search intent rather than the operator name.
- [ ] Antons Plumbing & Gas appears only where business identity and licensing context make it useful.
- [ ] Antons Enterprises does not appear anywhere.
- [ ] No fixed response-time, price, guarantee, review or job-location claim has been invented.
- [ ] Every page has unique metadata, canonical URL, H1 and page-specific schema.
- [ ] Images are responsive, right-sized and do not create CLS.
- [ ] LCP, FCP, INP, accessibility and crawlability have been checked on production-like mobile conditions.
- [ ] The full production build and all repository checks pass.
- [ ] GitHub-to-Cloudflare automatic deployment is configured and verified before claiming it works.

## Locality reference sources

Use these sources only to verify public place names and local orientation. Do not copy council text and do not treat a landmark as evidence of a completed job.

- [North Sydney Council parks and open spaces](https://www.northsydney.nsw.gov.au/homepage/242/booking-a-park-or-open-space)
- [Willoughby City Council parks, reserves and playgrounds](https://www.willoughby.nsw.gov.au/Residents/Parks-and-recreation/Parks-reserves-and-playgrounds)
- [Lane Cove Council parks, reserves and playgrounds](https://www.lanecove.nsw.gov.au/Community/Parks-and-Recreation/Parks-Reserves-and-Playgrounds)
- [Mosman Council parks and reserves](https://mosman.nsw.gov.au/recreation/parks-and-reserves)

