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

## Relationships

- A **Page** belongs to exactly one **Section**
- A **Section** has exactly one landing **Page** and zero or more other **Pages** (e.g. CURIO EYE belongs to Apps & Work)
- Every **Page** is built once per **Locale**

## Example dialogue

> **Dev:** "CURIO EYE isn't in the nav — is it a **Section**?"
> **Owner:** "No, it's a **Page** in the Apps & Work **Section**. When you're on it, Apps & Work is highlighted."

## Flagged ambiguities

- `NavItem['id']` / `activeNav` was used to mean both "which **Page** is this" and "which **Section** to highlight" — resolved: these are distinct; a **Page** declares its **Section**.
