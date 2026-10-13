---
name: Antons Blocked Drains Hills District
description: A field-service manual expressed through confident type, real work and ruled registers.
colors:
  navy: "#081939"
  blue: "#0869f7"
  red: "#e90917"
  paper: "#f7f5ef"
  muted: "#526070"
  line: "#bcc5cf"
  white: "#ffffff"
  equipment-surface: "#e9edf0"
  focus: "#ffca28"
typography:
  display:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4rem, 6.4vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.8
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.3rem, 5.5vw, 5.8rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Saira Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1
  body:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 700
    letterSpacing: "0.07em"
rounded:
  square: "0"
  secondary-control: "0.3rem"
  inner-panel: "0.65rem"
  mobile-call: "999px"
spacing:
  section: "clamp(5rem, 9vw, 9rem)"
  outer: "clamp(1rem, 4vw, 3rem)"
  panel: "clamp(1.25rem, 3vw, 3rem)"
  inner-gutter: "clamp(1rem, 3vw, 2rem)"
components:
  button-call:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "0.7rem 1.15rem"
  button-blue:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.secondary-control}"
    padding: "0.75rem 1.15rem"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.secondary-control}"
    padding: "0.75rem 1.15rem"
  area-register:
    textColor: "{colors.navy}"
    rounded: "{rounded.square}"
    padding: "1.4rem"
  area-register-hover:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
---

# Design System: Antons Blocked Drains Hills District

## Overview

**Creative North Star: "The Antons Field-Service Manual"**

The implemented identity is direct, capable and practical: night navy, dispatch blue, signal red and warm paper frame condensed headings, factual labels and real Antons field photography. Dense service information is organised into ruled registers, with generous space around the larger explanations.

The system uses CSS layout and restrained state changes. Photography supplies evidence of technicians, vehicles and equipment; strong tonal sections carry the composition. This document records the implementation in `src/styles/global.css`, `inner-pages.css`, `section-layout.css` and the Astro components, checked against the final desktop and mobile captures in `.impeccable/review/`. Existing inner-page rounding and the mobile call pill are documented exceptions to the predominantly square language.

**Key Characteristics:**

- Condensed uppercase headings paired with readable Barlow body copy.
- Centred tonal bands with consistent outer margins and real field photographs.
- Ruled service, cause, equipment and area registers.
- Prominent phone actions and visible keyboard focus.

## Colors

Night navy anchors the system; dispatch blue and signal red give functional emphasis against warm paper.

### Primary

- **Dispatch blue** provides method links, selected-looking hover surfaces, equipment captions, experience bands and the closing call band.

### Secondary

- **Signal red** identifies primary phone actions, urgent advice, small register identifiers and the Antons wordmark.

### Neutral

- **Night navy** is both the main ink and the dark section/header/footer surface.
- **Warm paper** is the default page canvas.
- **Equipment surface** is the cooler grey backing for equipment and local-area sections.
- **Muted slate** supports descriptions on light backgrounds; **register line** separates items.
- **White** provides reversed headings and light secondary controls.
- **Focus yellow** is reserved for the global keyboard outline.

**The Functional Accent Rule.** Use red for urgency and phone access, and blue for navigation, capability and interactive register states.

## Typography

**Display Font:** Saira Extra Condensed, with Arial Narrow and sans-serif fallbacks.

**Body Font:** Barlow, with Arial and sans-serif fallbacks.

Fonts are bundled locally. Display headings use weight 700; Barlow uses 400, 600 and 700. The compressed display face conveys workshop signage while the body face carries explanations at a calmer rhythm. There is no separate mono family.

The frontmatter display and headline roles describe the current homepage. Headings are uppercase through the shared final stylesheet and use balanced wrapping. The homepage hero has a narrow measure of 11.5ch; major section headings usually have 12ch measures. At 640px and below, hero size changes to `clamp(3.6rem, 17vw, 5rem)`. Inner-page heading sizes follow their scoped rules; the last-loaded section stylesheet gives inner hero headings a more open 1.05 line-height.

Body text normally uses the frontmatter body role. Supporting hero text is slightly larger with 1.55 line-height. Description measures commonly range from 48ch to 60ch; expanded FAQ answers reach 70ch. Small labels use Barlow weight and tracking rather than a new face. Telephone numbers use tabular numerals.

**The Two-Voice Rule.** Use condensed type for hierarchy and short service names; use Barlow for explanations, navigation and action labels.

## Layout

All main content, including the homepage closing call band, uses a centred 75rem maximum-width shell with responsive 1–3rem outer gutters. Homepage panels use 1.25–3rem internal gutters. Its hero splits approximately 46/54 between copy and photography; equipment and experience sections split evenly. Section introductions pair a large narrow heading with a shorter explanatory paragraph. Equipment definitions stack labels over descriptions to preserve readable space in the capped split panel. The process register and local coverage have four columns on wide screens.

At 900px and below, hero, cause, equipment, experience and section introductions stack; process becomes two columns and coverage becomes three. At 760px and below, symptom rows, reviews and hero actions stack, and coverage becomes two columns. At 640px and below, paired details and process become one column. Coverage becomes one column at 480px and below, with smaller fluid display headings for narrow phones. DOM reading order remains unchanged. Header and footer backgrounds span the viewport while their contents align to the shared shell.

The header and inner-page shells use a 75rem maximum width. Header navigation changes to its menu control at 1180px. The header is sticky above 760px, with scroll padding to protect anchored content; at 760px and below a fixed bottom call bar appears with safe-area spacing and reserved body padding. Inner pages keep inset panels and collapse to one-column layouts at that same breakpoint, with a separate 1050px compact-layout adjustment.

## Elevation & Depth

Most sections are flat. Tonal bands, photography and borders establish separation. Shadows are local affordances: the phone control lifts slightly on hover, a blue photo caption sits above the image, the mobile menu floats above the page and the mobile phone action remains distinct from scrolling content. This is not a shadow-card grid system.

The sidecar records the exact shadow and motion values. Homepage register and button transitions use 180ms ease-out. Reduced-motion preferences shorten animation and transition durations to 0.01ms and remove smooth scrolling. Do not add entrance choreography to the current homepage.

## Shapes

Registers, primary phone controls and major homepage bands are square. Heavy top rules and thinner item dividers create the field-manual structure. The live implementation also includes subtly rounded secondary buttons, rounded inner-page panels and a fully rounded fixed mobile call bar, as specified in the frontmatter. Small proof dots are circular. These exceptions are intentional documentation of existing code, not a universal no-radius policy.

## Components

### Phone and secondary actions

Phone controls use white text on signal red, a compact instruction and a prominent telephone number. Standard controls have a 3.7rem minimum height; the header version stretches to the header height and removes the resting shadow. Hover darkens the red and shifts the control upward by 2px. Secondary blue and white buttons have a 3rem minimum height and the softer secondary-control corners. Global focus is a 3px yellow outline offset by 4px.

The mobile call pill uses a 3.25rem minimum height, sits one rem plus the bottom safe-area inset above the viewport edge, and has a special white focus outline with a navy outer separation. Retain the reserved bottom page space.

### Navigation

The navy header combines a compact text brand, navigation, licence disclosure and phone access. Barlow links use tracked, bold labels and a lighter blue hover. Responsive navigation uses native `details`/`summary`, a square bordered toggle and a navy dropdown with a blue top rule. The toggle changes from three lines to a cross when open. No form, dialog or input component is implemented.

### Service and area registers

Service rows place a condensed service name beside explanatory copy and a short destination label. Hover and keyboard focus both turn the row blue with reversed text; service rows also move horizontally by 0.35rem. Inner-page service rows suppress that movement. Area cells use postcode, condensed suburb name and property context. Their hover and focus states reverse every text role, including secondary context.

### Cause, equipment and process registers

Noninteractive cause and equipment rows use clear borders and paired labels/descriptions, without hover affordances. The numbered process is a connected four-part ruled register on desktop, then two and one columns as available width decreases. Preserve the distinction between actionable links and explanatory rows.

### Reviews and FAQ

Reviews are square ruled figures with generous internal space, readable quotations and author names. FAQ uses native `details` elements with a plus/minus indicator, a condensed summary and a constrained body measure. Keyboard focus stays visible on the interactive summary. There is no animated height expansion.

### Photography and call band

Real field photographs fill their grid region with `object-fit: cover`. The hero uses subtle navy overlays and a blue equipment caption; equipment and team images remain direct evidence. Responsive image assets supply width variants. The closing dispatch-blue band pairs a condensed invitation with a red phone control and stacks on small screens.

## Do's and Don'ts

### Do:

- **Do** preserve real Antons field photography and its diagnostic context.
- **Do** use ruled registers for related services, methods and locations.
- **Do** preserve visible focus, reduced-motion behaviour and large mobile call targets.
- **Do** read the complete stylesheet cascade before changing a shared component.

### Don't:

- **Don't** replace the condensed/Barlow pairing with a generic interface font system.
- **Don't** turn every content group into a floating rounded card.
- **Don't** use urgency colours as arbitrary decoration or invent visual proof claims.
- **Don't** remove mobile call-bar clearance or obscure actionable text beneath fixed UI.
