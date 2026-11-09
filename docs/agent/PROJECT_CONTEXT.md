# Project context

Last reviewed: 2026-11-10

## Product

Denzel Marani Photography is a public, responsive portfolio for a
Singapore-based aspiring freelance and hobbyist photographer. The site presents
selected work, background, contact channels, and a filterable complete index.

The site currently uses local editorial placeholders. Final photographs,
captions, subjects, and credit requirements will be supplied later.

## Current information architecture

The homepage is the primary experience, in this order:

1. Hero: brief introduction and a single "Get in touch" action.
2. Chronicle: six favourite works.
3. Profile, in this order: 01 About me (portrait, background, skills, and
   secondary interests), 02 Main specialisations, 03 Past experience.
4. Inquiry: email and Instagram contact links.
5. Complete Index: filterable full gallery with ten slots per category, shown
   12 at a time with "Show more".

Complete Index categories:

- Events & Publicity
- Portraiture
- Cosplay
- Miscellaneous

The main navigation uses in-page anchors so transitions remain consistent.
Anchors land flush below the fixed header. Choosing a Complete Index filter
returns to the top of that section. Every Chronicle and Complete Index photo
opens in a lightbox. The footer repeats the contact links.

## Content and identity

- Identity: aspiring Singapore-based freelance and hobbyist photographer.
- Contact email: `thrudenzeyes@gmail.com`.
- Photography Instagram: `@thrudenzeyes`.
- Secondary Instagram: `@thrudenzvision`.
- Main specialisations: Events & Publicity, Portraiture, and Cosplay.
- Secondary interests: Street, Birding, Aviation, and Astrophotography.
- Experience: school media/publicity work from 2018-2023; DIS/NDP25 work from
  March-August 2025; freelance/hobbyist portrait and cosplay work from
  September 2025 onward.

## Technical architecture

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, pnpm.
- No backend, API, CMS, database, authentication, analytics, or form service.
- `src/app/page.tsx`: homepage composition.
- `src/app/works/page.tsx`: compatibility route for the integrated index.
- `src/components/layout/`: persistent navigation, footer, and page controls.
- `src/components/sections/`: homepage sections and gallery presentation.
- `src/components/ui/`: reveal, parallax, lightbox (`useLightbox`), and the
  View Transitions photo morph (`photo-morph.ts`).
- `src/config/navigation.ts`: navigation labels and anchors.
- `src/content/portfolio.ts`: editable portfolio content and image metadata.
- `src/content/types.ts`: shared content contracts.
- `src/app/globals.css`: site-wide visual system and responsive rules.
- `public/images/`: local placeholders and eventual portfolio images.
- `public/media/`: caption-input files grouped by gallery category.
- Syncthing transfers source and content between devices. `.stignore` excludes
  dependencies, pnpm storage, build output, caches, logs, and generated
  TypeScript/Next.js files; each device regenerates them locally. Git metadata
  and device-specific tool state also remain local to avoid concurrent database
  and index corruption.
- Linux development previews bind only to `127.0.0.1:3000`. A Windows desktop
  reaches them through an SSH local-port tunnel; this has been verified and
  does not expose a LAN or public listener.

## Design and quality constraints

- Dark, near-black editorial palette with harmonious blue and warm accents.
- Large serif display typography paired with readable sans-serif body copy.
- Responsive layouts must fit a 390 px viewport without zooming out.
- Mobile menu needs an opaque background and must not expose underlying content.
- Sticky or fixed controls must not collide with the main header.
- No italic text anywhere. Display headings may colour their second line
  (upright `<span>`).
- Type uses the tokens in `globals.css`: `--text-body` (16-19px),
  `--text-section` (56-96px, always smaller than the hero `h1`), `--text-meta`
  (13px coloured labels), and `--text-label` (12px). Nothing renders below 12px.
- Motion uses `--motion-fast`/`--motion-medium`/`--motion-slow` and
  `--ease-out`. Hovers animate only transform or opacity.
- The hero is visible on first paint. Scroll reveals hide content only under
  `html.js`. Photos "develop" on load or on scroll; triggers show crop marks
  on hover and focus; the lightbox morphs from its thumbnail.
- Motion must respect `prefers-reduced-motion`.
- Images must preserve dimensions to prevent layout shift.
- Metadata, Open Graph presentation, keyboard focus, and semantic landmarks must
  remain accurate and accessible.

## Validation baseline

Run:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

For material visual changes, inspect the homepage at 1440 px and 390 px, test
navigation and filtering, check browser console errors, and confirm that
`document.documentElement.scrollWidth === window.innerWidth`.
