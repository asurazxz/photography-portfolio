# Multi-device workflow

Git synchronizes project memory. Syncthing or cloud folders can copy files, but
they do not replace Git history and can create conflicts if two devices edit the
same checkout concurrently.

## One-time setup on another device

```bash
git clone <repository-url>
cd photography-portfolio
corepack enable
corepack prepare pnpm@11.9.0 --activate
pnpm install --frozen-lockfile
```

Read `AGENTS.md` before asking an agent to work. Start the development server
with `pnpm dev` and open `http://localhost:3000`.

## Preview from a Windows desktop through Linux

When development runs on the Linux server, keep Next.js bound to
`127.0.0.1:3000`. From Windows PowerShell, create a private SSH tunnel:

```powershell
ssh -N -L 3000:127.0.0.1:3000 <linux-user>@<linux-server>
```

With the tunnel open, browse to `http://127.0.0.1:3000` on Windows. Stop the
tunnel with `Ctrl+C` in PowerShell and stop the Linux Next.js process with
`Ctrl+C` in the terminal that started it. Do not change the server to a LAN or
public listener merely to preview it remotely.

## Start every working session

```bash
git fetch --all --prune
git status --short
git log -5 --oneline --decorate
```

If the working tree is clean, update the current branch using the team's normal
Git policy. Create a task branch when another device may work concurrently:

```bash
git switch -c codex/<short-topic>
```

Use distinct branch names per device or task. Do not edit the same branch from
two devices at the same time.

Then read, in order:

1. `AGENTS.md`
2. `docs/agent/PROJECT_CONTEXT.md`
3. `docs/agent/DECISIONS.md`
4. `docs/agent/HANDOFF.md`
5. The latest relevant file in `docs/agent/sessions/`

## End every working session

1. Run relevant verification.
2. Update `HANDOFF.md` with only current state, blockers, verification, and next
   actions.
3. Add a dated session record from `SESSION_TEMPLATE.md`.
4. Update durable context or decisions when facts changed.
5. Review `git diff` and `git status --short`.
6. Commit and push the scoped files when authorized.

Suggested commit grouping:

```text
docs: update cross-device project handoff
content: update portfolio copy and metadata
feat: replace portfolio placeholders with final photography
```

## Conflict handling

- Treat `PROJECT_CONTEXT.md` and `DECISIONS.md` as durable truth.
- Treat the newest merged `HANDOFF.md` as current operational state.
- Preserve both append-only session records when branches conflict.
- Reconcile competing handoffs into one current summary after merging.
- Inspect actual code and Git history when documentation disagrees with the
  repository; then correct the stale document in the same change.

## Privacy rule

These files are intended for a public repository. Never record passwords,
tokens, private addresses, unpublished client information, private image links,
or sensitive subject details. Keep device-specific agent state in ignored
`.agents/` or `.codex/` directories.
