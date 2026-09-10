# Session: 2026-08-01 - Termius development origin

Device or environment: Linux server
Branch: `main`
Starting commit: `c8acd3b`

## Objective

Fix the Next.js development HMR warning encountered through Termius local port
forwarding on a phone.

## Changes

- Added `127.0.0.1` to Next.js `allowedDevOrigins`.
- Recorded the narrow local-preview access decision and restart requirement.

## Decisions

- Keep the allowlist limited to `127.0.0.1`; no external development origins
  were authorized.

## Verification

- Inspected the Next.js configuration and referenced the official Next.js
  `allowedDevOrigins` documentation.
- Lint and TypeScript checking passed.
- The production build passed after allowing its configured Google Font fetches.

## Remaining work

- Restart the local development server, then confirm the phone preview no
  longer logs the blocked HMR warning.

## Final working tree

Contains existing uncommitted portfolio and documentation changes plus the
local-development configuration update.
