# Steven Masini — Portfolio

Static portfolio website built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/) from the Google Stitch **iOS Engineer Portfolio** design (`16382978563912900421`).

## Architecture & Reusable Components

- **[src/layouts/BaseLayout.astro](./src/layouts/BaseLayout.astro)** — Unified HTML shell, typography (`Inter`, `JetBrains Mono`, `Material Symbols Outlined`), global styles, sticky `<Header />`, and two-tier `<Footer />`.
- **[src/components/Header.astro](./src/components/Header.astro)** — Unified editorial navigation bar with active state indicator, availability badge, CTA button, and responsive mobile drawer.
- **[src/components/Footer.astro](./src/components/Footer.astro)** — Unified editorial footer with brand monogram, page navigation, copyright, and timezone.
- **[src/components/StatsGrid.astro](./src/components/StatsGrid.astro)** — Reusable 4-column metric bar (`compact` and `detailed` variants).
- **[src/components/SectionHeader.astro](./src/components/SectionHeader.astro)** — Editorial section divider heading.
- **[src/components/Badge.astro](./src/components/Badge.astro)** — Monospace technical stack & date pills.
- **[src/components/OverviewProjectItem.astro](./src/components/OverviewProjectItem.astro)** — Editorial project row for the Overview page.
- **[src/components/FlagshipProjectCard.astro](./src/components/FlagshipProjectCard.astro)** — 2-column architectural breakdown card for flagship apps (`Strong Workout Tracker`, `SELECT`).
- **[src/components/SpotlightProjectCard.astro](./src/components/SpotlightProjectCard.astro)** — Boxed project card (`CURIO EYE`, `Talkmate`).
- **[src/components/AgencyAppRow.astro](./src/components/AgencyAppRow.astro)** — Commercial & agency app table row (`Corse Matin`, `Le Trot`, `myPMU`, `Belles Demeures`, `FFB Déchets BTP`).
- **[src/components/FoundationCard.astro](./src/components/FoundationCard.astro)** — Compact early engineering card (`Qobuz Hi-Fi`, `RATP Transit`, `Zend Framework`, `Pushmii`).
- **[src/components/TimelineItem.astro](./src/components/TimelineItem.astro)** — Chronological work history timeline entry.
- **[src/data/portfolio.ts](./src/data/portfolio.ts)** — Centralized, strongly-typed content store for all pages and components.

## Development & Build

```bash
# Start local dev server
npm run dev

# Build static output to ./dist
npm run build

# Preview production build locally
npm run preview

# Build and publish static HTML to the GitHub Pages master branch
npm run deploy
```
