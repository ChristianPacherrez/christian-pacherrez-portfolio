# Portfolio

Personal portfolio built with Next.js and HeroUI, designed to be scalable and production-ready for deployment on Vercel.

## Tech Stack

- [Next.js 16](https://nextjs.org) — App Router, React Server Components
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [HeroUI v3](https://heroui.com) — accessible component library built on React Aria
- [pnpm](https://pnpm.io) — package manager
- [ESLint](https://eslint.org) + [Prettier](https://prettier.io) (with `prettier-plugin-tailwindcss`)

## Folder Structure

```
src/
├── app/                 # Routes, layouts, pages (App Router)
├── components/
│   ├── ui/              # Low-level, reusable UI building blocks
│   ├── layout/          # Header, footer, navigation, page shells
│   ├── sections/        # Page-level composed sections
│   ├── shared/          # Cross-cutting components used in multiple places
│   └── icons/           # Custom icon components
├── config/              # App-wide configuration (site metadata, nav, etc.)
├── constants/           # Static constant values
├── hooks/               # Custom React hooks
├── lib/                 # Core library code, third-party integrations
├── providers/           # React context providers
├── services/            # Data fetching / external API access
├── styles/              # Global CSS (globals.css)
├── types/               # Shared TypeScript types
├── utils/               # Pure utility/helper functions
├── data/                # Static content/data (e.g. project lists)
└── assets/
    ├── images/          # Images imported directly into components
    ├── icons/            # SVGs imported directly into components
    └── fonts/            # Local font files

public/
├── images/              # Statically served images
└── documents/           # Downloadable files (e.g. resume/CV)
```

The `@/*` path alias maps to `src/*` (configured in `tsconfig.json`), so any folder above can be imported as `@/components/...`, `@/lib/...`, etc.

## Available Scripts

| Script              | Description                              |
| ------------------- | ---------------------------------------- |
| `pnpm dev`          | Start the development server             |
| `pnpm build`        | Build the app for production             |
| `pnpm start`        | Run the production build locally         |
| `pnpm lint`         | Run ESLint                               |
| `pnpm lint:fix`     | Run ESLint and auto-fix issues           |
| `pnpm format`       | Format the codebase with Prettier        |
| `pnpm format:check` | Check formatting without writing changes |
| `pnpm typecheck`    | Run the TypeScript compiler (no emit)    |

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects the Next.js framework — no extra configuration is required.
4. Set any required environment variables under **Project Settings → Environment Variables**.
5. Deploy. Every push to the main branch triggers a new production deployment; pull requests get preview deployments automatically.
# christian-pacherrez-portfolio
