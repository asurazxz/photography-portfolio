# Denzel Marani — Photography Portfolio

Source code for Denzel Marani's photography portfolio: a responsive,
single-page editorial site presenting selected work, professional background,
contact channels, and a filterable complete index.

The current repository uses local editorial placeholders. Final photographs,
captions, and credits can be added without changing the page components.

## Features

- Dark editorial design with responsive asymmetric layouts
- Curated six-image Chronicle
- Profile with specialisations, background, skills, and experience
- Direct email and Instagram contact links
- Forty-slot Complete Index with category filters
- Local images rendered through `next/image`
- Optimized Inter and Lora typography through `next/font`
- Semantic landmarks, visible keyboard focus, and descriptive alternative text
- Reduced-motion support for reveal and parallax effects
- Generated favicon, Open Graph image, and search metadata
- Static production output suitable for Vercel

## Technology

- [Next.js](https://nextjs.org/) 16 App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [pnpm](https://pnpm.io/)

The site has no backend, CMS, database, authentication, analytics, or contact
form service.

## Project structure

```text
public/images/              Local photographs and editorial placeholders
src/app/                    Routes, metadata, global styles, and generated assets
src/components/layout/      Persistent navigation, footer, and page controls
src/components/sections/    Homepage sections and portfolio cards
src/components/ui/          Reusable motion and responsive-image utilities
src/config/                 Shared site configuration
src/content/                Typed portfolio content and data contracts
```

## Local development

### Requirements

- Node.js 20.9 or newer
- pnpm 11 or newer

Linux (bash):

```bash
pnpm install
pnpm dev
```

Windows (PowerShell):

```powershell
pnpm install
pnpm dev
```

If Windows PowerShell blocks `pnpm.ps1` under its execution policy, use the
command shim without weakening the policy:

```powershell
pnpm.cmd install --frozen-lockfile
pnpm.cmd dev
```

Open [http://localhost:3000](http://localhost:3000).

### Run from this Linux server (local-only)

The server's Corepack launcher is currently incompatible with its Node.js 22
installation. From the repository root, use the cached pnpm 11.9.0 program
directly. The install command is needed only after the first setup or a change
to `pnpm-lock.yaml`; `.pnpm-store/`, `node_modules/`, and `.next/` remain
local to the Linux server and are excluded from Syncthing.

```bash
# First setup, or after pnpm-lock.yaml changes
node /home/denz-server/.cache/node/corepack/pnpm/11.9.0/bin/pnpm.mjs install --frozen-lockfile --store-dir .pnpm-store

# Start the local development server
node /home/denz-server/.cache/node/corepack/pnpm/11.9.0/bin/pnpm.mjs dev --hostname 127.0.0.1 --port 3000
```

Open `http://localhost:3000` in a browser running on the Linux server.

#### View the Linux preview from Windows

Keep the Linux development-server terminal open. On the Windows desktop, open
PowerShell and create an SSH local-port tunnel (substitute your Linux username
and server host name or address):

```powershell
ssh -N -L 3000:127.0.0.1:3000 <linux-user>@<linux-server>
```

Keep the PowerShell window open, then browse to
[http://127.0.0.1:3000](http://127.0.0.1:3000) on Windows. The `-N` flag opens
only the tunnel; it does not start a remote shell. This workflow has been
verified from the Windows desktop and keeps the development server private to
the SSH connection—no LAN firewall rule or public deployment is needed.

To view it from a phone with Termius, configure the equivalent local port
forward from local port `3000` to `127.0.0.1:3000`, keep the SSH connection
active, then open `http://localhost:3000` on the phone.

To stop the preview, press `Ctrl+C` in the Linux terminal that started Next.js.
Press `Ctrl+C` in the Windows PowerShell window to close its SSH tunnel. If the
Linux server was started in the background, stop the process bound to the port
with `fuser -k 3000/tcp`.

If pnpm is unavailable, enable the package manager shim included with current
Node.js releases:

```bash
corepack enable
corepack install
```

In Windows PowerShell, run the same two commands. Close and reopen the terminal
after installation if `pnpm` is still unavailable.

## Available commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Validate TypeScript without emitting files |
| `pnpm build` | Create and validate an optimized production build |
| `pnpm start` | Serve the completed production build |

## Updating portfolio content

Portfolio copy, work records, contact links, image metadata, and profile data
live in [`src/content/portfolio.ts`](src/content/portfolio.ts). Shared TypeScript
contracts live in [`src/content/types.ts`](src/content/types.ts).

To replace a placeholder:

1. Add the optimized image to `public/images/`.
2. Update the corresponding `image` metadata with its `src`, intrinsic `width`,
   intrinsic `height`, and descriptive `alt` text.
3. Add `credit` metadata when attribution is required.
4. Run `pnpm typecheck` and `pnpm build`.

The first six records form the Chronicle. The Complete Index contains ten slots
for each category:

- Events & Publicity
- Portraiture
- Cosplay
- Miscellaneous

Navigation labels and anchors are centralized in
[`src/config/navigation.ts`](src/config/navigation.ts).

## Working across devices and agent sessions

Shared project context lives in tracked repository files so another device or
agent session does not need access to previous chat history.

- [`AGENTS.md`](AGENTS.md) defines the required session workflow and project
  rules.
- [`docs/agent/PROJECT_CONTEXT.md`](docs/agent/PROJECT_CONTEXT.md) records stable
  product and architecture context.
- [`docs/agent/DECISIONS.md`](docs/agent/DECISIONS.md) records durable decisions.
- [`docs/agent/HANDOFF.md`](docs/agent/HANDOFF.md) records current state and next
  actions.
- [`docs/agent/WORKFLOW.md`](docs/agent/WORKFLOW.md) explains setup, branching,
  synchronization, and closeout.

Commit and push updated context before changing devices. Hidden agent memory and
local chat history do not synchronize automatically; the tracked files above
are the authoritative shared memory.

## Deployment

### Host on Vercel (recommended)

Vercel can deploy the repository without additional build configuration. The
first command signs in and creates a preview deployment; the second publishes
the production site. Run these commands from the repository root and answer
the prompted project-setup questions.

Linux (bash):

```bash
pnpm install
pnpm dlx vercel
pnpm dlx vercel --prod
```

Windows (PowerShell):

```powershell
pnpm install
pnpm dlx vercel
pnpm dlx vercel --prod
```

Alternatively, connect the Git repository in the Vercel dashboard:

1. Import the repository into Vercel.
2. Keep the detected framework preset as **Next.js**.
3. Deploy using the generated Vercel domain. Future pushes to the connected
   branch deploy automatically.

No environment variables are currently required. Next.js uses
`VERCEL_PROJECT_PRODUCTION_URL`, supplied by Vercel, to generate absolute
canonical and social-sharing URLs in production.

### Run a production server yourself

Build the site, then start Next.js on all network interfaces. Replace `3000`
with another available port when needed. Allow that port through the host's
firewall and place a reverse proxy with HTTPS in front of the server before
exposing it publicly.

Linux (bash):

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start --hostname 0.0.0.0 --port 3000
```

Windows (PowerShell):

```powershell
pnpm install --frozen-lockfile
pnpm build
pnpm start --hostname 0.0.0.0 --port 3000
```

For a local-only production check, omit `--hostname 0.0.0.0` and open
[http://localhost:3000](http://localhost:3000).

## Content rights

The source is published for portfolio and code-review purposes. Unless a
separate license is added, no permission is granted to reuse the branding,
written content, photographs, or visual assets. Final photography remains
copyright Denzel Marani.
