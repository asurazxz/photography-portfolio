# Durable decisions

This file records decisions that future sessions must preserve. Add new entries
at the top. Do not rewrite older entries; supersede them with a newer decision.

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
