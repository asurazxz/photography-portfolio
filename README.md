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
- pnpm 10 or newer

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

If pnpm is unavailable, enable the package manager shim included with current
Node.js releases:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

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

## Deployment

Vercel can deploy the repository without additional build configuration:

1. Import the repository into Vercel.
2. Keep the detected framework preset as **Next.js**.
3. Deploy using the generated Vercel domain.

No environment variables are currently required. Next.js uses
`VERCEL_PROJECT_PRODUCTION_URL`, supplied by Vercel, to generate absolute
canonical and social-sharing URLs in production.

## Content rights

The source is published for portfolio and code-review purposes. Unless a
separate license is added, no permission is granted to reuse the branding,
written content, photographs, or visual assets. Final photography remains
copyright Denzel Marani.
