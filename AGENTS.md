# Agent Guidelines (`AGENTS.md`)

## Git & Commit Workflow
- **Commit after every change**: Always create small, atomic, descriptive git commits on the source branch (`portfolio-v2`) each time you complete a change or logical unit of work, **unless** the user explicitly asks not to commit yet (e.g., to review changes first).
- **Prefer granular commits**: When multiple distinct changes have been made (e.g., project setup, assets, components, pages, deployment scripts), split them into clean, focused commits rather than a single monolithic commit.
- **Branch structure**:
  - `portfolio-v2`: Main development branch containing the Astro source code (`src/`, `public/`, `scripts/`, configuration files).
  - `master`: Static deployment branch served by GitHub Pages (`https://stevenmasini.github.io`), updated via `npm run deploy` (`scripts/deploy.mjs`).
- **Do not run `npm run deploy` unless requested**: Only deploy to `master` when the user asks to publish/deploy changes live.

## Architecture & Component Conventions
- Keep all portfolio content and metadata centralized in `src/data/`: the data shape and `getPortfolioData()` live in `portfolio.ts`, and the content lives in one file per Locale under `src/data/content/` (`en.ts`, `fr.ts`, `zh-tw.ts`; facts shared by all Locales are in `shared.ts`). Every Locale must list the same items in the same order, because items are matched by position. When adding, removing or reordering an item, change all three files. `portfolio.test.ts` enforces this.
- Facts for search engines and AI assistants (JSON-LD in `BaseLayout`, Quick Facts in `llms.txt`/`llms-full.txt`) come from `src/data/profile.ts`. Don't hardcode career facts (location, years, users, education, languages) in layouts or llms routes. If a fact is shown on a page, read it from content; otherwise add it to `profile`.
- Content links use `link: { page: PageId }` for site Pages, `link: appStoreLink('<app>')` for App Store pages, or `link: { url }` for other external URLs, never hand-written localized paths or App Store URLs. Render them with `src/components/ContentLink.astro` (variants `title` / `cta`), never a hand-built `<a>` with `rel`/`target`/arrow icon.
- App store ids and ratings live in the App catalog (`src/data/apps.ts`). Rating labels in content are `appRatingLabel('<app>', '<locale>')`. Run `npm run metrics` to compare the catalog with live store data; it lists the prose lines to review when a figure changes.
- Years of experience is written `{years}` in content (e.g. `'{years}+ years'`, `'Plus de {years} ans'`) and computed from `careerStart` in `content/shared.ts`. Never type the number.
- `llms.txt` / `llms-full.txt` are rendered by `src/data/llms.ts`; the route files only wrap it.
- Site structure (Pages, Sections, paths, sitemap hints) lives in `src/data/pages.ts`. To add a Page: register it there, add its two route stubs (`src/pages/<name>.astro` and `src/pages/[lang]/<name>.astro`), and add its `llmsPageSummaries` entry. Link internally with `pagePath(id, lang)`, never hand-written paths. `npm test` checks all of this. Domain terms are defined in `CONTEXT.md`.
- Locales (the list, path prefixing/parsing, saved language preference) live in `src/data/locales.ts`. It must stay free of portfolio content because browser `<script>`s import it. Never hardcode Locale codes like `'fr'` in components or scripts.
- Use reusable Astro components in `src/components/` and the shared shell in `src/layouts/BaseLayout.astro` so UI elements (Header, Footer, Cards, Badges, Stats, Timeline) stay consistent across all pages.
