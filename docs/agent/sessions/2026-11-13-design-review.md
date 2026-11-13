# Session: 2026-11-13 - design, motion, and UX review

Device or environment: Windows desktop, in-app Chromium preview
Branch: `design-2`
Starting commit: `2cf4bd9`

## Objective

Evaluate the portfolio: animations and smoothness, content layout, and user
experience, and suggest improvements. The user then approved fixing the quick
layout and lightbox issues.

## Changes

Fixes:

- `src/app/globals.css`: Chronicle cards are size containers, and below 30rem
  the plate label stacks under the copy. The lightbox background is opaque and
  sets `touch-action: pan-y pinch-zoom`. The footer has 6.5rem of bottom
  padding from 721px up.
- `src/components/ui/lightbox.tsx`: touch swipe for previous and next; focus
  returns to the photo last shown.
- `src/components/ui/photo-morph.ts`: the view transition's `ready` rejection
  is caught. It rejects whenever the animation is skipped (a newer transition
  started, or the tab is hidden) and was logging an uncaught error.

Review findings, all measured on the running dev server before the fixes:

Motion

- Scrolling held 60 fps with no dropped frames through Chronicle, Profile, and
  Complete Index at 1440x900 (main-thread frame times, 4 s per section). All
  images are small SVG placeholders, so this says nothing yet about real
  photographs.
- Nav anchor jumps settle in about 1.25 s; the target section's reveal has
  mostly finished by then.
- The lightbox morph starts within 30 ms and finishes in about 550 ms for
  open, next, and close.
- Reveals run 900 ms plus up to 400 ms of stagger in Chronicle. Each Profile
  block (up to about 1,300 px tall on mobile) fades as a single slab.
- Changing a Complete Index filter and "Show more" swap cards with no
  transition.
- The header background is 96% opaque, so its `backdrop-filter: blur(16px)`
  is invisible but still costs compositing.
- Parallax moves images by 3.5% of their offset from the viewport centre, via
  a scroll listener that reads layout every frame.

Layout

- Page height is 13,701 px at 1440 wide (about 15 screens) and 20,176 px at
  390 wide (about 24 screens). Complete Index alone is 7,384 px on mobile for
  12 single-column cards.
- Chronicle slots 2 and 5 (4 of 12 columns, 389 px): the plate label takes
  193 px of the caption row, leaving the description 181 px and 212 px wide,
  so it wraps to 7 and 5 lines. The plate label also overflows the card by
  9 px and 40 px.
- At 390 px the hero photo starts at y=711 of an 844 px viewport; the first
  screen is almost all text.
- No horizontal overflow at 390 px or 1440 px.

UX

- The lightbox background is `rgb(7 8 9 / 97%)`; page content shows through
  faintly behind the photo.
- The lightbox has no swipe gesture on touch. After navigating inside it,
  closing returns focus to the photo that opened it, not the one last shown.
- At 1440 px, with the page scrolled to the bottom, "Back to top" covers the
  third footer link (`@thrudenzvision`).
- Accent colours rotate per item rather than per category, so one category
  appears in different colours (Miscellaneous is blue in Chronicle, gold in
  the index).
- The nav has no active-section state. The Menu toggle is 72x18 px.
- Complete Index intro copy ("The placeholders preserve each intended
  crop...") is a note to the developer but is shown to visitors.
- `.work-filters` has an `aria-label` but no role, so the label is ignored.

## Decisions

Recorded in `../DECISIONS.md` under "2026-11-13 - Lightbox and caption fixes
from the design review".

## Verification

Review:

- Visual walk-through at 1440x900 and 390x844 in the in-app Chromium preview.
- Frame timing, anchor-jump timing, and view-transition timing measured with
  in-page scripts while the preview pane was visible.

Fixes:

- `pnpm.cmd typecheck` and `pnpm.cmd build` pass. `pnpm.cmd lint` fails with
  the same 3 `react/no-unescaped-entities` errors in `profile.tsx` as before;
  nothing new.
- At 1440x900: Chronicle cards 2 and 5 have a 389px description on 3 lines
  (was 181px and 212px on 7 and 5 lines) and the plate label no longer
  overflows. No footer link overlaps "Back to top". The lightbox background
  computes to `rgb(7, 8, 9)`.
- Swipe, with synthetic touch pointer events: left goes to the next photo,
  right to the previous; vertical, short (30px), and mouse drags do nothing.
- After moving to the second photo and closing, focus is on that photo's
  trigger.
- At 390x844: no horizontal overflow, captions unchanged (already stacked),
  footer unchanged (4rem padding), lightbox fits the screen.
- No unhandled promise rejections across open, next, and close.

Not checked: swipe on a real touch screen, Safari, Firefox, reduced-motion
emulation, and the mobile menu on screen. The preview was throttled in the
background for part of the session, so the fixes were verified by measurement
rather than by eye, apart from one desktop screenshot of the Chronicle
captions.

## Remaining work

- Push; the session's work is committed on `design-2` but not pushed.
- Review findings not yet addressed: mobile hero photo below the fold;
  single-column Complete Index on mobile; slow reveals; no transition on
  filter change or "Show more"; accent colour per category; nav active state;
  developer-facing Complete Index intro copy; `.work-filters` role; invisible
  header blur; parallax.
- Re-measure scroll smoothness on a real phone once real photographs replace
  the SVG placeholders.

## Final working tree

Clean after the session's commit, which contains `docs/agent/DECISIONS.md`,
`docs/agent/HANDOFF.md`, this record, `src/app/globals.css`,
`src/components/ui/lightbox.tsx`, and `src/components/ui/photo-morph.ts`.
