# Session: 2026-11-13 - palette trial

Device or environment: Windows desktop, in-app Chromium preview
Branch: `design-2`
Starting commit: `ca210d6`

## Objective

The user asked whether the near-black background is too jarring and whether
the blue and orange accents are cohesive, then asked to try the suggested
adjustment: slightly lifted backgrounds and a less saturated blue.

## Changes

- `src/app/globals.css`:
  - `--paper` `#0d1013`, `--paper-bright` `#13171b`, `--surface` `#181c21`,
    `--surface-raised` `#1d2228`.
  - `--blue` `#7c92de`; the two blue background washes use the same colour.
  - Inquiry, Complete Index, the footer, the lightbox, and the mobile menu
    use `var(--paper)` instead of one-off hex values.
  - The header and filter-bar translucent backgrounds use the new base.
- `src/app/layout.tsx` (theme colour), `src/app/icon.svg`, and
  `src/app/opengraph-image.tsx` use the same values.

Facts behind the suggestion:

- The old base was `#090b0d`, not pure black. Headings sit at about 17:1
  against it and body text at about 8:1.
- The old section backgrounds (`#070809`, `#090b0d`, `#0f1215`) were within
  one or two percent of lightness of each other.
- The old blue was fully saturated; the coral and gold are not. The new blue
  keeps the hue and about the same brightness (6.6:1 on the new base).

## Decisions

Recorded in `../DECISIONS.md` under "Lifted backgrounds and a softer blue".
After seeing it on the dev server, the user decided to keep it.

## Verification

- `pnpm.cmd typecheck` and `pnpm.cmd build` pass. `pnpm.cmd lint` fails with
  the same 3 `react/no-unescaped-entities` errors in `profile.tsx`.
- No old colour values remain in `src/` outside the unused light-theme block
  at the top of `globals.css`.
- At 1440x900 in Chromium: computed backgrounds are `rgb(13, 16, 19)` for the
  body, Inquiry, Complete Index, footer, and lightbox, and `rgb(19, 23, 27)`
  for Profile. The hero heading span and Profile eyebrow compute to
  `rgb(124, 146, 222)`. Screenshots of the hero, the Chronicle-to-Profile
  boundary, Inquiry, and Complete Index looked correct. No console errors.
- Not checked: 390px, the Open Graph image render, Safari, Firefox, a real
  phone or OLED screen.

## Remaining work

- Commit and push; this work is uncommitted.
- The accents still have no fixed roles.
- Re-judge the palette once real photographs replace the placeholders.

## Final working tree

```
 M docs/agent/DECISIONS.md
 M docs/agent/HANDOFF.md
 M src/app/globals.css
 M src/app/icon.svg
 M src/app/layout.tsx
 M src/app/opengraph-image.tsx
 M src/components/layout/header-height-sync.tsx
?? docs/agent/sessions/2026-11-13-palette-trial.md
?? docs/agent/sessions/2026-11-13-section-top-spacing.md
```

`header-height-sync.tsx`, the section-spacing record, and part of the
`globals.css`, `DECISIONS.md`, and `HANDOFF.md` changes belong to the
section-spacing work, not to this session.
