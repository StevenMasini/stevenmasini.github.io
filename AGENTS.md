# Agent Guidelines (`AGENTS.md`)

## Git & Commit Workflow
- **Commit after every change**: Always create small, atomic, descriptive git commits on the source branch (`portfolio-v2`) each time you complete a change or logical unit of work, **unless** the user explicitly asks not to commit yet (e.g., to review changes first).
- **Prefer granular commits**: When multiple distinct changes have been made (e.g., project setup, assets, components, pages, deployment scripts), split them into clean, focused commits rather than a single monolithic commit.
- **Branch structure**:
  - `portfolio-v2`: Main development branch containing the Astro source code (`src/`, `public/`, `scripts/`, configuration files).
  - `master`: Static deployment branch served by GitHub Pages (`https://stevenmasini.github.io`), updated via `npm run deploy` (`scripts/deploy.mjs`).
- **Do not run `npm run deploy` unless requested**: Only deploy to `master` when the user asks to publish/deploy changes live.

## Architecture & Component Conventions
- Keep all portfolio content and metadata centralized in `src/data/portfolio.ts`.
- Use reusable Astro components in `src/components/` and the shared shell in `src/layouts/BaseLayout.astro` so UI elements (Header, Footer, Cards, Badges, Stats, Timeline) stay consistent across all pages.
