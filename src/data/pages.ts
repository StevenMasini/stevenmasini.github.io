/**
 * Page registry — the single source of truth for site structure.
 *
 * A **Page** is a locale-neutral piece of content built once per **Locale**.
 * A **Section** is a navigation entry; each Page belongs to exactly one.
 * See CONTEXT.md. Translated wording (Section labels, etc.) lives in
 * `portfolio.ts`; this module only knows ids, paths and SEO hints.
 */
import {
  defaultLocale,
  getLocalizedPath,
  getPortfolioData,
  localeConfigs,
  locales,
  siteMetadata,
  type Locale,
} from './portfolio';

export type SectionId = 'overview' | 'apps-and-work' | 'experience' | 'contact';

export type PageId =
  | 'overview'
  | 'apps-and-work'
  | 'curio-eye'
  | 'experience'
  | 'contact';

export interface Page {
  id: PageId;
  /** Locale-neutral path with leading and trailing slash, e.g. `/curio-eye/`. */
  path: string;
  section: SectionId;
  sitemap: {
    priority: string;
    changefreq: 'monthly' | 'yearly';
  };
}

export interface Section {
  id: SectionId;
  /** The Page the Section's nav entry links to. */
  landingPage: PageId;
}

/** Navigation order. */
export const sections: readonly Section[] = [
  { id: 'overview', landingPage: 'overview' },
  { id: 'apps-and-work', landingPage: 'apps-and-work' },
  { id: 'experience', landingPage: 'experience' },
  { id: 'contact', landingPage: 'contact' },
];

export const pages: readonly Page[] = [
  {
    id: 'overview',
    path: '/',
    section: 'overview',
    sitemap: { priority: '1.0', changefreq: 'monthly' },
  },
  {
    id: 'apps-and-work',
    path: '/apps-and-work/',
    section: 'apps-and-work',
    sitemap: { priority: '0.9', changefreq: 'monthly' },
  },
  {
    id: 'curio-eye',
    path: '/curio-eye/',
    section: 'apps-and-work',
    sitemap: { priority: '0.8', changefreq: 'yearly' },
  },
  {
    id: 'experience',
    path: '/experience/',
    section: 'experience',
    sitemap: { priority: '0.9', changefreq: 'monthly' },
  },
  {
    id: 'contact',
    path: '/contact/',
    section: 'contact',
    sitemap: { priority: '0.8', changefreq: 'yearly' },
  },
];

export function getPage(id: PageId): Page {
  const page = pages.find((p) => p.id === id);
  if (!page) throw new Error(`Unknown page id: ${id}`);
  return page;
}

/** Site-relative href for a Page in a Locale, always with a trailing slash. */
export function pagePath(id: PageId, lang: Locale): string {
  const localized = getLocalizedPath(lang, getPage(id).path);
  return localized.endsWith('/') ? localized : `${localized}/`;
}

/** Absolute URL for a Page in a Locale. */
export function pageUrl(id: PageId, lang: Locale): string {
  return `${siteMetadata.siteUrl}${pagePath(id, lang)}`;
}

export interface NavLink {
  section: SectionId;
  label: string;
  href: string;
}

/** Header/footer navigation for a Locale, in Section order. */
export function navLinks(lang: Locale): NavLink[] {
  const { sectionLabels } = getPortfolioData(lang);
  return sections.map((section) => ({
    section: section.id,
    label: sectionLabels[section.id],
    href: pagePath(section.landingPage, lang),
  }));
}

export interface Alternate {
  hreflang: string;
  href: string;
}

/** hreflang alternates for a Page: one per Locale, plus `x-default`. */
export function pageAlternates(id: PageId): Alternate[] {
  return [
    ...locales.map((lang) => ({
      hreflang: localeConfigs[lang].htmlLang,
      href: pageUrl(id, lang),
    })),
    { hreflang: 'x-default', href: pageUrl(id, defaultLocale) },
  ];
}

/** `getStaticPaths` result for a `src/pages/[lang]/` route: every non-default Locale. */
export function localizedStaticPaths() {
  return locales
    .filter((lang) => lang !== defaultLocale)
    .map((lang) => ({ params: { lang }, props: { lang } }));
}

export interface SitemapEntry {
  loc: string;
  priority: string;
  changefreq: string;
  alternates: Alternate[];
}

/** One entry per Page × Locale. */
export function sitemapEntries(): SitemapEntry[] {
  return locales.flatMap((lang) =>
    pages.map((page) => ({
      loc: pageUrl(page.id, lang),
      priority: page.sitemap.priority,
      changefreq: page.sitemap.changefreq,
      alternates: pageAlternates(page.id),
    }))
  );
}
