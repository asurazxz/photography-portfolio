# Session: 2026-08-01 - local run commands

Device or environment: Linux server
Branch: `main`
Starting commit: `c8acd3b`

## Objective

Document repeatable local-only Linux server commands and stop the development
server created for the session.

## Changes

- Added the tested direct pnpm 11.9.0 commands for this server to `README.md`.
- Documented Termius local port forwarding for phone previewing.
- Corrected the production `pnpm start` examples to pass Next.js options
  directly, without an extra argument separator.
- Stopped only the pnpm and Next.js processes started during the prior local
  preview session.

## Decisions

None. The server remains loopback-only and is not deployed publicly.

## Verification

- Confirmed the running local site returned HTTP 200 before stopping it.
- Confirmed `127.0.0.1:3000` refused connections after stopping the identified
  Next.js child process.
- `pnpm lint` and `pnpm typecheck` passed through the cached pnpm 11.9.0
  program.
- The production build passed after allowing its configured Google Font fetches.
- Ran `git diff --check` after the documentation update.

## Remaining work

- Start the local server again only when a preview is needed, using the README
  commands.

## Final working tree

Contains the existing uncommitted portfolio, README, and shared-memory changes.
Local dependencies and build output remain excluded from Syncthing.
