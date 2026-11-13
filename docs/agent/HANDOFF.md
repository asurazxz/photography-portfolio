# Current handoff

Updated: 2026-11-13
Branch observed: `design-2`
Base commit observed: `0dcb6ac`

## Latest session (2026-11-13)

Two changes, both uncommitted:

- The navbar is thinner, about 82px tall instead of 120px.
- The hero now fits in the first viewport on desktop. Spacing, heading size,
  and photo height scale with viewport height.

Details: `sessions/2026-11-13-hero-fit-navbar.md`.

## Current state

A full UI review and the follow-up design pass are complete. The changes are
on `design-2`; the user is committing and pushing them. Details are in
`sessions/2026-11-10-ui-review-fixes.md`, and the durable rules are in the
2026-11-10 entries of `DECISIONS.md`.

What the site now does:

- **Lightbox:** every Chronicle and Complete Index photo opens full size. It
  morphs from its thumbnail via View Transitions and supports arrows, Escape,
  and click-outside. Code: `src/components/ui/lightbox.tsx`, `photo-morph.ts`.
- **Complete Index:** the sticky filter bar works (`overflow-x: clip`). The
  index shows 12 works at a time with "Show more". Choosing a filter scrolls
  back to the top of the section.
- **Profile:** ordered About me (with a portrait placeholder), Main
  specialisations, Past experience.
- **Hero:** visible on first paint, with a single "Get in touch" action;
  the whole hero fits in the first viewport on desktop (checked down to 1280x720). The
  footer carries the contact links.
- **Design:** no italics; tokenised type (`--text-body`, `--text-section`,
  `--text-meta`, `--text-label`, nothing under 12px); tighter section
  spacing; the CHRONICLE title is full contrast.
- **Motion:** tokens; photos "develop"; crop marks on hover and focus; reveals
  hide content only when JS runs; reduced motion is respected.
- **Anchors:** land flush below the header via `--header-height`.

On this Windows desktop, use `pnpm.cmd` because PowerShell blocks `pnpm.ps1`.

## Verification

- `pnpm.cmd typecheck` and `pnpm.cmd build` pass.
- `pnpm.cmd lint` fails with 3 `react/no-unescaped-entities` errors. All
  three are apostrophes in the user's own About copy (`profile.tsx`, lines
  48-50); the rest of the codebase lints clean.
- Behaviour was checked in the browser at 1440x900 and 390x844, plus 800px
  for the About layout. The session record lists the measurements.
- Not checked: Safari, Firefox, real touch devices, and reduced-motion
  emulation.

## Next actions

1. Escape the apostrophes in `profile.tsx` lines 48-50 (`&apos;` or a
   `{"..."}` string), so that `pnpm lint` passes.
2. Replace the About me portrait: save the photo in `public/images/`, then
   update `aboutPortrait` (src, width, height, alt) in `src/content/portfolio.ts`.
3. Remaining review items:
   - Escape and a focus trap for the mobile menu.
   - A 44px Menu touch target.
   - Nav active-section state.
   - Removing dead light-theme CSS from `globals.css`.
   - Explaining or removing the OBS/WLD/AIR/NIT interest codes.
   - Optionally top-aligning the Inquiry copy.
4. Replace placeholder images, plates, and captions when final photographs
   arrive.
