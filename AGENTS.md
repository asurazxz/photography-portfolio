# Repository instructions for coding agents

These instructions apply to the entire repository. They exist so work can move
between devices and sessions without relying on private chat history.

## Required session workflow

At the start of every session:

1. Read this file, `docs/agent/PROJECT_CONTEXT.md`,
   `docs/agent/DECISIONS.md`, and `docs/agent/HANDOFF.md`.
2. Run `git status --short` and `git log -5 --oneline --decorate`.
3. Treat the current working tree as user-owned. Preserve unrelated and
   uncommitted changes.
4. Check the latest relevant record in `docs/agent/sessions/` when the handoff
   refers to one.
5. State any assumption that could materially change content, design, or scope.

Before ending every session that changes the project or discovers durable
information:

1. Run checks proportionate to the change. The default full verification is
   `pnpm lint`, `pnpm typecheck`, and `pnpm build`.
2. Replace `docs/agent/HANDOFF.md` with a concise, current handoff.
3. Add a new append-only record under `docs/agent/sessions/` using
   `docs/agent/SESSION_TEMPLATE.md`.
4. Add durable product or architecture decisions to
   `docs/agent/DECISIONS.md`. Do not use the handoff as permanent history.
5. Report uncommitted files and any checks not run. Never claim cross-device
   persistence until the relevant files have been committed and pushed.

Do not assume that hidden agent memory, local `.codex/` data, or chat history is
available on another device. The tracked files above are the source of truth.

## Project rules

- Build a responsive photography portfolio for Denzel Marani with Next.js,
  TypeScript, and Tailwind CSS.
- Keep the dark editorial design, serif/sans-serif hierarchy, restrained
  accents, asymmetric composition, and accessible interaction patterns.
- Keep editable portfolio data and image metadata in
  `src/content/portfolio.ts`; keep shared contracts in `src/content/types.ts`.
- Use local assets and `next/image`. Every meaningful image needs descriptive
  alternative text and accurate optional credit metadata.
- Keep claims evidence-based. Do not introduce unsupported experience,
  availability, awards, clients, or skill claims.
- Preserve the single-page section order: Hero, Chronicle, Profile, Inquiry,
  Complete Index. `/works` may remain only as a compatibility route unless a
  documented decision changes this.
- Support keyboard navigation, visible focus, reduced motion, responsive
  layouts, and no horizontal overflow.
- Add comments only where intent or non-obvious behavior cannot be expressed
  clearly through names and structure.
- Do not add a CMS, backend, database, authentication, analytics, or contact
  form without explicit approval.

## Change discipline

- Use narrow edits and avoid unrelated formatting churn.
- Update visible copy and matching metadata or social imagery together.
- Verify desktop and 390 px mobile layouts after material UI changes.
- Never delete or replace photographs, captions, or user edits unless the user
  explicitly places them in scope.
- Use a separate Git branch per device or task when work may overlap. Pull or
  fetch before starting, and resolve the handoff from the newest merged state.

