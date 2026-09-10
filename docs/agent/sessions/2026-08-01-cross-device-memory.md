# Session: 2026-08-01 - cross-device memory

Device or environment: Codex desktop
Branch: `main`
Starting commit: `c8acd3b`

## Objective

Initialize repository-level instructions and persistent context so future agent
sessions on different devices can continue the same project reliably.

## Changes

- Added root `AGENTS.md` with mandatory start and closeout procedures.
- Added durable project context, decision history, current handoff, workflow,
  and a reusable session template under `docs/agent/`.
- Added cross-platform line-ending and editor defaults.
- Linked the collaboration workflow from the public README.
- Preserved all pre-existing portfolio edits and untracked caption files.

## Decisions

- Git-tracked project files form the shared memory layer.
- Hidden agent state and chat history are explicitly non-authoritative.
- Session records are append-only; the handoff is replaceable current state.

## Verification

- Documentation paths and links were inspected locally.
- Formatting and repository status checks were run.
- Application tests were not required because this session did not change
  runtime code.

## Remaining work

- Commit and push these files with the pending portfolio changes when the user
  authorizes publication.
- On another device, clone or pull the repository and confirm the required read
  order in `AGENTS.md`.

## Final working tree

The tree remains intentionally dirty because earlier portfolio edits, caption
files, and this documentation have not been committed.

