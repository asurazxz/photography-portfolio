# Current handoff

Updated: 2026-08-02
Branch observed: `main`
Base commit observed: `c8acd3b` (`scaffold done`)

## Current state

The Windows workspace was audited and cleaned. Reproducible dependency, build,
and TypeScript-generated files were removed, then regenerated from
`pnpm-lock.yaml` with pnpm 11.9.0. Empty local `.agents/` and `.codex/`
directories were removed.

`.stignore` now excludes dependencies, generated output, test artifacts, logs,
Git metadata, Vercel linkage, and device-specific agent/editor state. Existing
ignored directories on another Syncthing device may need one local cleanup;
adding an ignore rule does not necessarily delete an already-synchronized copy.

The original Kombai canvas in `.kombai/` and two design-reference PDFs in
`user-context/` were preserved because they are non-reproducible source
material. Git ignores both directories.

The local development server is running at `http://127.0.0.1:3000` and was
observed on Windows process ID `10688`. That PID is ephemeral; verify the port
before relying on it in a later session. The server uses fallback fonts when
the sandbox blocks Google Fonts, while the verified production build includes
the configured font assets.

PowerShell blocks `pnpm.ps1` on this desktop. Use `pnpm.cmd`, which preserves the
current execution policy:

```powershell
pnpm.cmd install --frozen-lockfile
pnpm.cmd dev
```

The portfolio's pre-existing uncommitted source changes and untracked
`public/media/` caption JSON files remain intact.

## Verification

- Frozen-lockfile install completed: 352 packages, pnpm 11.9.0.
- `pnpm.cmd lint` passed.
- `pnpm.cmd typecheck` passed.
- `pnpm.cmd build` passed after allowing the configured Google Font downloads.
- `http://127.0.0.1:3000` returned HTTP 200 with expected hero content.
- Browser verification found meaningful content, no Next.js error overlay, all
  expected navigation and portfolio sections, and zero horizontal overflow at
  the verification viewport.
- The lockfile did not change.

## Next actions

1. Open `http://127.0.0.1:3000` on this Windows desktop while the process is
   running.
2. Stop the local server when finished with `Stop-Process -Id 10688`, after
   confirming that PID still owns port 3000.
3. Review and commit the pending portfolio, documentation, and Syncthing files
   when requested.
4. Replace placeholder metadata as final images and captions are supplied.

No files were staged or committed during this session.
