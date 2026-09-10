# Session: 2026-08-01 - local Linux run

Device or environment: Linux server
Branch: `main`
Starting commit: `c8acd3b`

## Objective

Install Linux-local dependencies after Syncthing exclusions were configured and
run the portfolio without deploying it publicly.

## Changes

- Installed the lockfile-pinned dependencies into local `node_modules/` using
  a project-local `.pnpm-store/`; both are excluded from Syncthing.
- Started the Next.js development server on `127.0.0.1:3000` only.

## Decisions

None. This is local development infrastructure, not a deployment decision.

## Verification

- Confirmed `http://127.0.0.1:3000/` returned HTTP 200.
- The server is intentionally loopback-only and cannot be reached publicly.

## Remaining work

- Use an SSH tunnel from a desktop if the browser is not running on the Linux
  server.
- Stop the development process when local previewing is complete.

## Final working tree

Contains the existing uncommitted portfolio, README, and shared-memory changes.
Local `node_modules/`, `.next/`, and `.pnpm-store/` are excluded from Syncthing.
