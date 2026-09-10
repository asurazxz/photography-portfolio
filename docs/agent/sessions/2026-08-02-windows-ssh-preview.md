# Session: 2026-08-02 - Windows SSH preview documentation

Device or environment: Linux desktop and Windows desktop
Branch: `main`
Starting commit: `c8acd3b`

## Objective

Document the confirmed workflow for viewing the Linux-hosted development
preview securely from a Windows desktop.

## Changes

- Added the Windows PowerShell SSH local-port-forwarding command to the README,
  including browser access and stop instructions.
- Added the verified private-preview pattern to the project context and
  multi-device workflow guide.
- Updated the handoff with the confirmed workflow.

## Decisions

- Preserve the loopback-only Linux listener and use SSH local-port forwarding
  for Windows previews. This decision is recorded in `DECISIONS.md`.

## Verification

- The user confirmed the Windows desktop can access the Linux development
  preview through the documented SSH tunnel.
- Documentation-only change; application lint, type-check, and build were not
  rerun.

## Remaining work

- Commit and push the pending portfolio, Syncthing, and documentation changes
  when authorized.

## Final working tree

Contains pre-existing user-owned portfolio changes plus uncommitted repository
configuration and documentation changes.
