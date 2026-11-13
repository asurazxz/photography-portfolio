# Durable decisions

This file records decisions that future sessions must preserve. Add new entries
at the top. Do not rewrite older entries; supersede them with a newer decision.

## 2026-11-13 - DM aperture favicon

Accepted by the user, who selected the generated DM aperture design for the site.
The agent installed a 256px PNG as `src/app/icon.png` and removed the superseded
camera-outline SVG and duplicate concept file. Recheck small-size legibility if
this identity is revised.
## 2026-11-13 - Lifted backgrounds and a softer blue

Proposed by the agent; the user tried it and decided to keep it. Status:
Accepted.

- Background ladder: `--paper` `#0d1013` (was `#090b0d`), `--paper-bright`
  `#13171b`, `--surface` `#181c21`, `--surface-raised` `#1d2228`.
- `--paper` is the floor. Inquiry, Complete Index, the footer, and the
  lightbox used darker one-off values (`#070809`, `#07090b`); they now use
  `var(--paper)`. This supersedes the `#070809` value in "Lightbox and caption
  fixes"; the lightbox stays opaque.
- `--blue` is `#7c92de` (was `#6c8cff`): same hue, saturation lowered to sit
  with the coral and gold. The two blue background washes use the same colour.
- The theme colour, the icon, and the Open Graph image use the same values.
  Change them together.
- Not addressed: the three accents still have no fixed roles (heading spans
  and category labels vary by section and item).

## 2026-11-13 - Exact header height; sticky bar tucks under the header

Reported by the user; the agent chose the fix.

- `HeaderHeightSync` publishes `getBoundingClientRect().height`, which keeps
  fractional pixels. `offsetHeight` rounded the value, and at fractional
  display scaling that opened a hairline seam.
- The sticky Complete Index filter bar uses `top: calc(var(--header-height)
  - 1px)`, so it sits 1px under the header (z-index 60 over 50). This matches
  `scroll-padding-top`.

## 2026-11-13 - Inquiry fits one screen on desktop

Requested by the user; the agent chose the implementation.

- From 961px up, when the Inquiry link is used, the whole section must be
  visible at once: eyebrow, heading, intro, every contact link, and the photo.
- The eyebrow gap, heading size (`min(var(--text-section), 10vh)`), intro
  margins, and contact row padding scale with viewport height.
- The photo has a `max-height` of the viewport minus the header, the section
  top padding, and 5rem.
- Below 961px, the layout stacks and scrolls as before.

## 2026-11-13 - Tighter section tops below the navbar

Requested by the user; the agent chose the values.

- `.section-space` has a smaller top padding,
  `clamp(2.5rem, 4vw, 4rem)`, so the heading of each anchored section sits
  close under the navbar. On desktop this is about 76px from the navbar to the
  first text, and about 40-56px at 390px.
- The bottom padding stays `clamp(4.5rem, 8vw, 8rem)` and still separates the
  sections.

## 2026-11-13 - Lightbox and caption fixes from the design review

Approved by the user ("fix the quick layout and lightbox issues"); the agent
chose the implementation.

- The lightbox background is opaque (`#070809`), so the page never shows
  through behind a photo.
- On touch, a mostly horizontal swipe of 48px or more moves to the next or
  previous photo. `.lightbox` sets `touch-action: pan-y pinch-zoom`; keep it,
  or the browser claims horizontal swipes and the gesture stops working.
- Closing the lightbox returns focus to the photo last shown, not the one
  that opened it.
- Chronicle cards are size containers. Below 30rem of card width, the plate
  label stacks under the copy instead of beside it.
- From 721px up, the footer has 6.5rem of bottom padding so "Back to top"
  never covers a footer link.

## 2026-11-13 - Hero fits the first viewport; thinner navbar

Requested by the user; the agent chose the implementation.

- On desktop, the whole hero must be visible on first load, including the
  "Get in touch" button and the bottom of the photo. Hero spacing, heading
  size, and photo height scale with viewport height (`vh` and `svh`), and they
  are measured from `--header-height`.
- The navbar is thinner. Its vertical padding is
  `clamp(1rem, 1.5vw, 1.4rem)`, which makes it about 82px tall on desktop.

## 2026-11-10 - Larger labels; single hero action

Decided by the user.

- `--text-label` is now 0.75rem (12px). This supersedes the 11px floor from
  earlier today; nothing renders below 12px.
- New `--text-meta` (0.8125rem, 13px) for coloured meta text: eyebrows, card
  and lightbox category labels, interest codes. Timeline dates and tags are
  0.9375rem (15px), since they are the key facts in that column.
- Contact handles (`.contact-value`) are 1rem.
- The hero has one action, "Get in touch" (solid button to `#contact`). "View
  the work" was removed as unnecessary.

## 2026-11-10 - Motion system and photography-specific motion

Decided by the user ("build all six"); implementation by the agent.

- Motion tokens: `--motion-fast` 200ms, `--motion-medium` 500ms,
  `--motion-slow` 900ms, and `--ease-out`. New motion uses these. The 80ms
  parallax smoothing is the deliberate exception.
- The hero is never hidden: no scroll reveal, visible on first paint. Scroll
  reveals hide content only under `html.js`, which an inline script in
  `layout.tsx` sets, so no-JS visitors see everything. Text rises 16px; blocks
  containing photos only fade.
- Photos "develop" (pale and flat, settling to full tone). The hero does this
  once on load; others are scroll-linked through a `--develop` view timeline
  declared on each overflow-hidden frame. Browsers without
  `animation-timeline` show the photos normally.
- Image triggers show viewfinder crop marks on hover and `:focus-visible`.
- The lightbox opens, navigates, and closes with a View Transitions
  shared-element morph (`src/components/ui/photo-morph.ts`, `useLightbox`).
  Without support it falls back to the fade. Only one rendered element may
  carry the `lightbox-photo` name at a time.
- With reduced motion, the morph is skipped and the develop animations are
  not declared.
- Hover effects animate `transform`/`opacity` only, never layout properties.

## 2026-11-10 - Rebalanced type scale

Decided by the user. On desktop, the section headings were about 7.5 times
the body text, so the body read like captions.

- Body copy uses `--text-body`: `clamp(1rem, 0.9rem + 0.35vw, 1.1875rem)`
  (16px on phones, 19px on wide screens).
- Section headings (Profile, Inquiry, Complete Index) use `--text-section`:
  `clamp(3.5rem, 6.25vw, 6rem)` (56px to 96px). They must stay smaller than
  the hero `h1`. The ghost "Chronicle" title matches them on desktop.
- Block headings are `clamp(2.25rem, 4vw, 4rem)`, timeline titles
  `clamp(1.75rem, 3vw, 2.75rem)`, the About lead
  `clamp(1.6rem, 2.4vw, 2.25rem)`, and skill items 0.75rem.
- New body or heading text should use these variables rather than one-off
  sizes.

## 2026-11-10 - Profile order and About me portrait

Decided by the user; layout chosen by the agent.

- The Profile sub-blocks are ordered 01 About me, 02 Main specialisations,
  03 Past experience. The homepage section order is unchanged.
- About me includes a portrait of Denzel (`aboutPortrait` in
  `src/content/portfolio.ts`, currently
  `public/images/about-portrait-placeholder.svg`, 4:5). On desktop it sits in a
  sticky left column beside the copy, with skills and interests beneath the
  copy. Below 720px it stacks above the copy, at most 22rem wide.

## 2026-11-10 - Filter clicks return to the top of the Complete Index

Decided by the user. Selecting any Complete Index filter scrolls to the start
of the Complete Index section, the same position as the "Complete index" nav
link, instead of leaving the viewport where it was.

## 2026-11-10 - No decorative italics

Decided by the user: italic text made the site look generic ("vibe-coded").

- No text is italic: not eyebrows, the wordmark, the footer name, card titles,
  the ghost "Chronicle" title, hover states, or the OG image.
- The coloured second line of display headings stays, but upright. It is a
  plain `<span>` (styled via `h1 span`/`h2 span`), not `<em>`.
- Lora loads only its normal style. Reintroduce italics only for genuine
  emphasis or titles of works, and only with a recorded decision.

## 2026-11-10 - Works open in a client-side lightbox; index pages by twelve

Decided by the user (approved the top three UI-review fixes); implementation
choices by the agent.

- Every Chronicle and Complete Index image is a button that opens a shared
  native `<dialog>` lightbox (`src/components/ui/lightbox.tsx`) with Escape,
  arrow-key navigation, click-outside dismissal, and focus restoration. This is
  static client code, not a CMS-backed gallery, so the version-one static
  scope still holds. Per-work pages were the alternative and remain possible.
- The Complete Index shows 12 works per filter with a "Show N more" button;
  changing filters resets to 12. The "all" filter is labelled "All".
- Text must not render below `--text-label` (0.6875rem / 11px).
- Use `overflow-x: clip` (not `hidden`) on `html` and `body`; `hidden` makes
  `body` a scroll container and disables `position: sticky`.
- `--header-height` is published at runtime by `HeaderHeightSync`; sticky
  elements and anchor offsets must use it rather than hard-coded values.
  Anchors land flush: `scroll-padding-top` is the header height minus 1px. Do
  not add breathing room there, or a strip of the previous section shows.
- Decorative labels that carried no information were removed: the hero
  "Plate No. 01" overlay, the contact image caption, "Channel / 0N" prefixes,
  and the footer "Portfolio / 2026". The footer now carries the contact links,
  and the hero has "View the work" and "Get in touch" actions. The section
  order is unchanged.

## 2026-08-02 - Syncthing carries source, not generated dependencies

- Keep `.stignore` tracked so every Syncthing device applies the same rules.
- Exclude `node_modules`, `.pnpm-store`, `.next`, build/test caches, logs,
  `next-env.d.ts`, and TypeScript build-info files from synchronization.
- Keep `.git`, Vercel linkage, and device-specific agent/editor state local to
  each device. Synchronizing an active `.git` directory can damage repository
  state or make concurrent working copies disagree.
- Run a frozen-lockfile install on each device instead of synchronizing package
  trees or platform-specific native modules.
- Preserve `.kombai` and `user-context` locally because they contain original
  design references; Git intentionally ignores them.

## 2026-08-02 - Use SSH local-port forwarding for Windows previews

- Keep the Linux development server bound to `127.0.0.1:3000`.
- Access it from a Windows desktop through `ssh -N -L 3000:127.0.0.1:3000` and
  browse to `http://127.0.0.1:3000` locally on Windows.
- This verified workflow does not authorize a LAN, Twingate, wildcard, or
  public listener.

## 2026-08-01 - Permit local Termius development previews

- Allow `127.0.0.1` as a Next.js development origin so Termius local port
  forwarding can load hot-reload resources on a phone.
- Do not add public, LAN, Twingate, or wildcard origins without a separate
  access decision.

## 2026-08-01 - Repository files are the shared memory layer

- Context must persist through tracked Markdown files, not hidden agent memory.
- `PROJECT_CONTEXT.md` holds stable facts and constraints.
- `DECISIONS.md` holds append-only product and architecture decisions.
- `HANDOFF.md` holds only the current working state and next actions.
- `sessions/` holds append-only session evidence.
- A change becomes available to another device only after it is committed and
  pushed, then fetched or pulled on that device.

## 2026-07-28 - Complete Index belongs after Inquiry

Visitors should see contact information before the full gallery. The homepage
order is Chronicle, Profile, Inquiry, then Complete Index. Navigation follows
that order.

## 2026-07-28 - Complete Index is integrated into the homepage

The full gallery uses an in-page section instead of behaving like a separate
destination. Keep `/works` only as a compatibility route unless a later decision
removes or repurposes it.

## 2026-07-28 - Dark editorial direction

The public design uses a near-black editorial theme with restrained harmonious
accents. The earlier paper-white concept and scrolling credentials marquee are
not part of the current direction.

## 2026-07-28 - Local, metadata-driven portfolio content

Portfolio records and image metadata stay centralized in typed content data.
Final photography replaces placeholders without requiring component rewrites.
The repository must not retain third-party stock images or unsupported credits.

## 2026-07-28 - Version-one scope remains static

Do not add galleries backed by a CMS, a contact backend, database,
authentication, or analytics. Vercel hosts the static Next.js portfolio on its
generated domain until custom-domain work is explicitly requested.

