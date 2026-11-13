# Current handoff

Updated: 2026-11-13
Branch observed: `design-2`
Base commit observed: `2cf4bd9` (pushed to `origin/design-2`)

## Latest session (2026-11-13, review and quick fixes)

A design, motion, and UX review, followed by the quick fixes the user
approved. It is committed on `design-2` but not pushed. Findings, measurements, and verification
are in `sessions/2026-11-13-design-review.md`.

Fixed:

- Chronicle captions in narrow cards: the plate label stacks under the copy.
- Lightbox: opaque background, swipe on touch, focus returns to the photo
  last shown, and no uncaught error when a transition is skipped.
- "Back to top" no longer covers the last footer link on desktop.

Earlier the same day: the navbar was made thinner and the hero now fits the
first viewport on desktop (`sessions/2026-11-13-hero-fit-navbar.md`,
committed in `2cf4bd9`).

## Current state

What the site does:

- **Lightbox:** every Chronicle and Complete Index photo opens full size. It
  morphs from its thumbnail via View Transitions and supports arrows, Escape,
  and click-outside. Code: `src/components/ui/lightbox.tsx`, `photo-morph.ts`.
- **Complete Index:** sticky filter bar; 12 works at a time with "Show more".
  Choosing a filter scrolls back to the top of the section.
- **Profile:** ordered About me (with a portrait placeholder), Main
  specialisations, Past experience.
- **Hero:** visible on first paint, with a single "Get in touch" action; the
  whole hero fits in the first viewport on desktop (checked down to
  1280x720). The footer carries the contact links.
- **Design:** no italics; tokenised type (`--text-body`, `--text-section`,
  `--text-meta`, `--text-label`, nothing under 12px).
- **Motion:** tokens; photos "develop"; crop marks on hover and focus; reveals
  hide content only when JS runs; reduced motion is respected.
- **Anchors:** land flush below the header via `--header-height`.

All images are still SVG placeholders.

On this Windows desktop, use `pnpm.cmd` because PowerShell blocks `pnpm.ps1`.

## Verification

- After the fixes: `pnpm.cmd typecheck` and `pnpm.cmd build` pass.
  `pnpm.cmd lint` fails with 3 `react/no-unescaped-entities` errors, all
  apostrophes in the About copy in `profile.tsx`; nothing new.
- The fixes were checked by measurement at 1440x900 and 390x844 in Chromium.
  Swipe was tested with synthetic touch events only.
- The review measured 60 fps scrolling and a 550 ms lightbox morph at
  1440x900 in Chromium, with placeholders.
- Not checked: Safari, Firefox, real touch devices (including the swipe),
  reduced-motion emulation.

## Next actions

1. Push this session's commit to `origin/design-2`.
2. Escape the apostrophes in `profile.tsx` (`&apos;` or a `{"..."}` string),
   so that `pnpm lint` passes.
3. Remaining review findings, in rough priority (details in the session
   record):
   - On mobile the hero photo is below the fold, and the page is about 24
     screens long (single-column Complete Index).
   - Shorter reveals; a transition for filter changes and "Show more".
   - Tie accent colour to category; nav active-section state.
   - Remove the developer-facing Complete Index intro copy.
4. Still open from the earlier review: Escape and a focus trap for the mobile
   menu; a 44px Menu touch target; removing dead light-theme CSS from
   `globals.css`; explaining or removing the OBS/WLD/AIR/NIT interest codes.
5. Replace the About me portrait and the placeholder images, plates, and
   captions when final photographs arrive. Then re-measure scroll smoothness
   on a real phone.
