# Session: 2026-11-10 - UI review, fixes, and design pass

Device or environment: Windows desktop (Claude Code desktop app)
Branch: `design-2`
Starting commit: `de2ebd9`

## Objective

Run a full UI design review of the portfolio, then implement its top three
recommendations. Follow-up requests from the user in the same session covered
spacing, italics, filter scrolling, anchor offsets, the Profile order and
portrait, the type scale, title contrast, the motion system, label sizes, and
the hero action. Each is recorded below.

## Changes

- Added `src/components/ui/lightbox.tsx`: a native `<dialog>` viewer with a
  counter, Close button, previous/next controls, arrow keys, Escape and
  click-outside dismissal, a scroll lock while open, and focus restoration.
- Added `src/components/sections/chronicle-grid.tsx` (client grid + lightbox);
  `archive-card.tsx` now renders the image as a trigger button.
- `works-gallery.tsx`: image triggers, the lightbox, 12-per-page "Show N more"
  pagination (focus moves to the first new work), pages reset on filter change,
  and the "Complete index" filter renamed to "All".
- Added `src/components/layout/header-height-sync.tsx`, which publishes
  `--header-height`.
- `globals.css`: `overflow-x: clip` on `html`/`body` (this fixes sticky), a
  header-based `scroll-padding-top` and sticky offset, a `--text-label` floor
  replacing 30 sub-11px sizes, styles for the lightbox, hero actions, Show more,
  and footer links, and removal of the `.plate-overlay` and
  `.contact-image-caption` rules.
- `hero.tsx`: removed the "Plate No. 01" overlay and added "View the work" and
  "Get in touch" buttons.
- `contact.tsx`: removed the "Channel / 0N" labels and the image caption overlay.
- `site-footer.tsx`: replaced "Portfolio / 2026" with email and Instagram links.
- Durable fact: the sticky filter bar had never worked, because
  `overflow-x: hidden` on both `html` and `body` makes `body` a non-scrolling
  scroll container.
- Durable fact: in the embedded browser, the dialog `close` event arrives
  asynchronously, so tests must wait before asserting closed state. The
  lightbox uses a direct native `close` listener.

### Spacing pass (follow-up, same session)

The user felt there was too much empty space. Measurement showed it was
concentrated at section transitions (two stacked 187px paddings plus margins
of up to 173px under headings) and inside the specialisation cards (457px tall
with about 160-225px of content). These values in `globals.css` were changed:

- `.section-space` padding: `clamp(7rem, 13vw, 13rem)` → `clamp(4.5rem, 8vw, 8rem)`
- `.section-intro` margin-bottom → `clamp(3.5rem, 6vw, 6rem)`
- `.archive-cta` margin-top and `.profile-heading` margin-bottom →
  `clamp(4rem, 7vw, 7rem)` (mobile `.profile-heading` 7rem → 4rem)
- `.profile-block` padding and `.all-works-heading` margin-bottom →
  `clamp(3.5rem, 6vw, 6rem)`
- `.block-heading` margin-bottom → `clamp(2.5rem, 4.5vw, 4.5rem)`
- `.specialization` min-height 24rem (mobile 20rem) → 0; the h4 top margin
  6rem (mobile 4rem) → 2.5rem

Chronicle staggering and row gaps were kept as deliberate space around the
photos.

### Italics removed (follow-up, same session)

At the user's request, all italic text was removed:

- `globals.css`: every `font-style: italic` was deleted, including the
  rules for eyebrows, wordmark, footer brand, ghost title, Chronicle cards 1
  and 4, and dead legacy rules. The `.archive-card-1/4 h3` and
  `.timeline-entry:hover h3` italic rules were removed entirely.
  `h1 em`/`h2 em` selectors became `span`, and the unused
  `.contact-links span` rule was removed.
- Heading accents in `hero.tsx`, `profile.tsx`, `contact.tsx`, and
  `complete-index.tsx` changed from `<em>` to `<span>`. Contact handles use
  `<span className="contact-value">`.
- `opengraph-image.tsx`: removed italic from the wordmark. `layout.tsx`: Lora
  now loads only the normal style.
- Verified: 0 elements compute to a non-normal font style. Accent colours are
  unchanged, and only `Inter normal` and `Lora normal` load.
- `typecheck` and `build` passed. Full `lint` fails only on
  `react/no-unescaped-entities` (apostrophes) in the user's in-progress About
  copy edit in `profile.tsx`, lines 62-64, which was left untouched. Lint
  passes for everything else.

### Filter clicks return to the index top (follow-up, same session)

At the user's request, choosing a Complete Index filter now scrolls to the
Complete Index section start: the same position the "Complete index" nav link
lands on. `works-gallery.tsx` calls `scrollIntoView({ block: "start" })` on
the enclosing section, so it respects `scroll-padding-top` (the header height)
and the CSS scroll-behavior (instant under reduced motion). Verified with real
clicks from deep in the grid: 9161px at 1440x900 and 11931px at 390x844, each
identical to the nav-link position.

### Strip above anchored sections fixed (follow-up, same session)

The user reported a strip between the header and the Profile, Inquiry, and
Complete Index sections after using the nav. The cause was this session's
`scroll-padding-top: calc(var(--header-height) + 1rem)`: the extra 16px
exposed the previous section's background and the next section's top border.
It is now `calc(var(--header-height, 7.5rem) - 1px)`, so sections land flush
and their 1px top border tucks under the header's border. Measured section top
minus header bottom for all four nav links and a filter click: -0.7 to -1.5px
at both 1440x900 and 390x844.

### Profile reorder and About me portrait (follow-up, same session)

- `profile.tsx`: moved About me above Main specialisations and renumbered the
  blocks 01/02/03. Added a `next/image` portrait (`.about-portrait`) and
  wrapped the copy, skills, and interests in `.about-body` and
  `.about-details`. The user's in-progress About paragraph was left untouched.
- `portfolio.ts`: added `aboutPortrait` metadata. Added the new
  `public/images/about-portrait-placeholder.svg` (1000x1250).
- `globals.css`: About grid is 5fr/7fr with a sticky portrait offset by the
  header height plus 2rem. Below 960px it is 2fr/3fr and the details stack;
  below 720px it is one column, with the portrait at most 22rem wide and not
  sticky.
- Verified on the dev server: order is "01 About me", "02 Main
  specialisations", "03 Past experience". At 1440, the portrait is 516x645 and
  sticks, stopping at the bottom of the copy column. At 800, it is 272px beside
  a 409px copy column. At 390, it is 345x432 above the copy. No horizontal
  overflow at any width. `typecheck` and `build` passed; `lint` still fails
  only on the user's apostrophes (now lines 48-50).

### Type scale rebalanced (follow-up, same session)

The user felt the body text was too small relative to the headings. Measured
at 1440px: section headings were 115-122px against 16px grey body text
(7.2-7.7 times), section headings were larger than the hero `h1` (95px), and
timeline descriptions were 13px because the higher-specificity legacy rule
`.timeline-entry > div > p:last-child` overrode `.timeline-copy p`.

- Added `--text-body` and `--text-section` to `:root`. Body rules now use
  `--text-body` (hero intro, section intro, Chronicle and Complete Index text,
  About, specialisation and timeline paragraphs, contact intro, CTA).
  Profile, Inquiry, and Complete Index `h2`s use `--text-section`, including
  the mobile override that was previously 23vw.
- The ghost title, block `h3`, timeline `h4`, About lead, and skill items were
  resized. The legacy timeline rule was deleted.
- Verified at 1440: body 19px; section `h2`s and ghost title 90px; hero 95px;
  block `h3` 57.6px; timeline `h4` 43.2px; lead 34.6px. At 390: body 16px;
  section `h2`s 56px; hero 66px. No horizontal overflow. `typecheck` and
  `build` passed; `lint` still fails only on the user's apostrophes.

### CHRONICLE title contrast (follow-up, same session)

The decorative `.archive-display-title` was `rgb(243 240 233 / 28%)`, about
2.3:1 on the background. It now uses `var(--ink)` (17.3:1), matching the other
section headings. `typecheck` and `build` passed; `lint` still fails only on
the user's apostrophes.

### Motion pass: three fixes and three additions (follow-up, same session)

- Tokens: durations of 220, 250, and 280ms became `--motion-fast`; 500ms
  became `--motion-medium`; 700, 800, and 900ms became `--motion-slow`. The
  ease curve is now `--ease-out`.
- Hero: `hero.tsx` no longer uses `Reveal`. `layout.tsx` adds an inline script
  that sets `html.js` (with `suppressHydrationWarning` on `<html>`). Reveal CSS
  is scoped to `.js`, including the reduced-motion override.
- Contact rows: hover and focus translate the label and handle; the padding
  transition was removed.
- Develop: a `@keyframes develop`. The hero runs it for 1.6s on load; other
  photos use `animation-timeline: --develop` over
  `entry 10%` to `cover 40%`. All of it sits inside
  `prefers-reduced-motion: no-preference` and
  `@supports (animation-timeline: view())`.
- Crop marks: `.image-trigger::after`, eight gradient strokes that scale in on
  hover and `:focus-visible`.
- Morph: new `photo-morph.ts` (`runPhotoMorph`, which waits up to 400ms for
  the lightbox photo to decode). `lightbox.tsx` adds `useLightbox`, opens the
  dialog in a layout effect, and routes `cancel` (Escape) through the morphing
  close. Both galleries use the hook. Also added `scrollbar-gutter: stable`.
- Verified on the dev server at 1440x900:
  - `html.js` is set and the hero `h1` has opacity 1 immediately.
  - All 15 below-fold reveals are hidden until scrolled to; removing `js`
    makes them visible.
  - A Chronicle photo measured grayscale 1 at entry, 0.46 at 300px into view,
    and 0 by 520px.
  - The crop-mark `::after` reaches opacity 1 on hover.
  - View transitions were instrumented. Open from Chronicle and from the
    index, Next, Escape, and Close each ran with exactly one named element,
    and `ready` and `finished` both resolved. State reset and focus returned
    to the opening trigger.
  - No console errors.
- At 390x844: the hero was visible immediately, the maximum `scrollWidth` was
  390 across the page, and the lightbox opened.
- `typecheck` and `build` passed; `lint` failed only on the user's
  apostrophes.
- Not verified: reduced-motion emulation, Safari, and Firefox (Firefox lacks
  scroll timelines, so photos simply show normally).

### Larger labels; hero action removed (follow-up, same session)

- The user found the timeline's left column, most gold text, and the social
  handles too small.
- `--text-label` went from 0.6875rem to 0.75rem. Added `--text-meta`
  (0.8125rem), used by `.eyebrow`, `.interests-panel dd`,
  `.archive-category`, `.work-card-meta p`, and `.lightbox-caption p`.
- `.timeline-period` text is 0.9375rem; `.contact-value` is 1rem.
- `hero.tsx`: removed the "View the work" button at the user's request.
  "Get in touch" became `button-solid`.
- Verified at 1440: timeline dates and tags 15px; eyebrows, categories, and
  codes 13px; handles 16px; nav, buttons, and filters 12px; 0 visible text
  elements under 12px. At 390: maximum `scrollWidth` 390, no clipped labels,
  and the hero button is 345x50. `typecheck` and `build` passed; `lint` failed
  only on the user's apostrophes.

## Decisions

- Lightbox, pagination, text-size floor, overflow rule, header-height variable,
  and label trimming were recorded in `../DECISIONS.md` (2026-11-10).

## Verification

- `pnpm.cmd lint`, `pnpm.cmd typecheck`, `pnpm.cmd build`: passed (final run
  after all edits).
- Production server `127.0.0.1:3100`, 1440x900: the lightbox open, arrow
  navigation with wrap, Escape, Close button, click-outside, reopening the same
  work, and focus return all pass. The filter bar's top is 120px, matching the
  header bottom. Show more goes from 12 to 24 with focus on item 13. Cosplay
  shows 10 with no Show more, and All resets to 12. 0 visible text nodes under
  11px. No console errors.
- 390x844: `scrollWidth` 390, the page is 20,351px (was 35,079px), hero buttons
  are 345x50, footer links 44px tall, `--header-height` is 73px, and the
  lightbox fits the viewport with 44px controls.
- Spacing pass, measured on the dev server: at 1440x900 the page went from
  14,629px to 13,428px, gaps over 30% of the viewport height from 5 to 2, and
  the largest gap from 448px to 304px. At 390x844 the page went from 20,395px
  to 19,626px, gaps over 20% of the viewport height from 7 to 2 (both 186px),
  and `scrollWidth` stayed at 390. `pnpm.cmd lint`, `typecheck`, and `build`
  passed afterwards.
- Not run: visual screenshots (the browser pane was hidden), Safari/Firefox,
  real touch devices.

## Remaining work

- `pnpm lint` fails only on 3 unescaped apostrophes in the user's About copy
  (`profile.tsx`, lines 48-50). Left for the user, who was editing that copy.
- Supply the real About me portrait (`aboutPortrait` in `portfolio.ts`).
- Mobile menu Escape handling and focus trap; Menu toggle touch target.
- Nav active-section indicator; dead light-theme CSS cleanup.
- Interest codes (OBS/WLD/AIR/NIT) are still shown.
- Optional: top-align the Inquiry copy.
- Unverified: Safari, Firefox, touch devices, reduced-motion emulation.
- The user is committing and pushing; no commit was made by the agent.

## Final working tree

Before the user's commit:

```
 M README.md
 M docs/agent/DECISIONS.md
 M docs/agent/HANDOFF.md
 M docs/agent/PROJECT_CONTEXT.md
 M src/app/globals.css
 M src/app/layout.tsx
 M src/app/opengraph-image.tsx
 M src/components/layout/site-footer.tsx
 M src/components/layout/site-header.tsx
 M src/components/sections/archive-card.tsx
 M src/components/sections/chronicle.tsx
 M src/components/sections/complete-index.tsx
 M src/components/sections/contact.tsx
 M src/components/sections/hero.tsx
 M src/components/sections/profile.tsx
 M src/components/sections/works-gallery.tsx
 M src/content/portfolio.ts
?? docs/agent/sessions/2026-11-10-ui-review-fixes.md
?? public/images/about-portrait-placeholder.svg
?? src/components/layout/header-height-sync.tsx
?? src/components/sections/chronicle-grid.tsx
?? src/components/ui/lightbox.tsx
?? src/components/ui/photo-morph.ts
```
