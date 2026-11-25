# Steven Masini Portfolio

A static, multilingual portfolio site (Astro) presenting Steven Masini's shipped apps, career history, and contact details.

## Language

### Site structure

**Page**:
A distinct piece of site content with a stable id and a locale-neutral path (e.g. `curio-eye` → `/curio-eye/`), rendered once per **Locale**.
_Avoid_: route, slug, screen

**Section**:
A top-level area of the site that appears as an entry in the header/footer navigation and is highlighted while any of its **Pages** is shown.
_Avoid_: nav item, tab, activeNav

**Locale**:
A language edition of the whole site (`en`, `fr`, `zh-tw`); the default **Locale** has unprefixed paths, others are prefixed (`/fr/...`).
_Avoid_: language (reserved for spoken languages listed on the résumé), lang

### Content

**Profile**:
The machine-readable facts about Steven (location, career start, award, curated skills, showcased apps) that feed Schema.org JSON-LD and llms.txt, as opposed to on-page copy.
_Avoid_: bio, about, SEO data

**App catalog**:
The single record of each shipped app's store identity (App Store / Google Play ids) and store metrics (rating, rating count), in `src/data/apps.ts`.
_Avoid_: app list, metrics

**Content placeholder**:
A `{name}` token in content text for a figure that changes over time (currently `{years}`), filled at build time; each **Locale** words the sentence around it.
_Avoid_: variable, template tag

**llms documents**:
The two plain-text portfolio summaries for AI assistants: `/llms.txt` (summary detail) and `/llms-full.txt` (full detail).
_Avoid_: AI files, LLM pages

## Relationships

- A **Page** belongs to exactly one **Section**
- A **Section** has exactly one landing **Page** and zero or more other **Pages** (e.g. CURIO EYE belongs to Apps & Work)
- Every **Page** is built once per **Locale**
- The **Profile** reads ratings from the **App catalog**; content rating labels and store links are generated from it
- The **llms documents** are built from content and the **Profile**
- The **Profile** reads education and spoken languages from the default **Locale**'s content; it never retypes facts shown on a **Page**

## Example dialogue

> **Dev:** "CURIO EYE isn't in the nav — is it a **Section**?"
> **Owner:** "No, it's a **Page** in the Apps & Work **Section**. When you're on it, Apps & Work is highlighted."

## Flagged ambiguities

- `NavItem['id']` / `activeNav` was used to mean both "which **Page** is this" and "which **Section** to highlight" — resolved: these are distinct; a **Page** declares its **Section**.
