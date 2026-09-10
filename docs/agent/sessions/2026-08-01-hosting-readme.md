# Session: 2026-08-01 - hosting README

Device or environment: Codex desktop
Branch: `main`
Starting commit: `c8acd3b`

## Objective

Document how to run and host the Next.js portfolio on Linux and Windows.

## Changes

- Updated `README.md` with Linux bash and Windows PowerShell commands for local
  development, Vercel preview and production deployments, and self-hosted
  production serving.
- Corrected the documented pnpm requirement to match the package-manager pin:
  pnpm 11 or newer.
- Recorded that Vercel remains the recommended public host and the project has
  no required environment variables.

## Decisions

None. The existing Vercel deployment decision was preserved.

## Verification

- Inspected the package scripts, Node engine, pnpm lockfile, and current Next.js
  configuration.
- Application checks were not run because this change only updates Markdown
  documentation.

## Remaining work

- Deploy through the documented Vercel workflow when the user authorizes access
  to a Vercel account, or configure a selected self-hosting environment.

## Final working tree

Contains this documentation update alongside pre-existing uncommitted portfolio
and shared-memory changes.
