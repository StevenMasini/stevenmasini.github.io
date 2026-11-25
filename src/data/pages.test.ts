import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import {
  getPage,
  localizedStaticPaths,
  navLinks,
  pageAlternates,
  pagePath,
  pages,
  pageUrl,
  sections,
  sitemapEntries,
} from './pages';
import {
  defaultLocale,
  llmsPageSummaries,
  localeConfigs,
  locales,
  siteMetadata,
} from './portfolio';

const pagesDir = fileURLToPath(new URL('../pages/', import.meta.url));

describe('Page registry', () => {
  it('has unique Page ids and paths', () => {
    expect(new Set(pages.map((p) => p.id)).size).toBe(pages.length);
    expect(new Set(pages.map((p) => p.path)).size).toBe(pages.length);
  });

  it('stores locale-neutral paths with leading and trailing slashes', () => {
    for (const page of pages) {
      expect(page.path).toMatch(/^\/([a-z0-9-]+\/)*$/);
    }
  });

  it("gives every Section a landing Page that belongs to that Section", () => {
    for (const section of sections) {
      expect(getPage(section.landingPage).section).toBe(section.id);
    }
  });

  it('has a route file for every Page in the default and prefixed Locales', () => {
    for (const page of pages) {
      const name = page.path === '/' ? 'index' : page.path.slice(1, -1);
      expect(existsSync(`${pagesDir}${name}.astro`), `${name}.astro`).toBe(true);
      expect(existsSync(`${pagesDir}[lang]/${name}.astro`), `[lang]/${name}.astro`).toBe(true);
    }
  });

  it('has an llms.txt summary for every Page', () => {
    for (const page of pages) {
      expect(llmsPageSummaries[page.id].summary).not.toBe('');
    }
  });
});

describe('pagePath / pageUrl', () => {
  it('leaves the default Locale unprefixed', () => {
    expect(pagePath('overview', defaultLocale)).toBe('/');
    expect(pagePath('curio-eye', defaultLocale)).toBe('/curio-eye/');
  });

  it('prefixes other Locales and always ends with a slash', () => {
    expect(pagePath('overview', 'fr')).toBe('/fr/');
    expect(pagePath('curio-eye', 'zh-tw')).toBe('/zh-tw/curio-eye/');
  });

  it('builds absolute URLs on the site origin', () => {
    expect(pageUrl('contact', 'fr')).toBe(`${siteMetadata.siteUrl}/fr/contact/`);
  });
});

describe('pageAlternates', () => {
  it('lists every Locale once plus x-default pointing at the default Locale', () => {
    const alternates = pageAlternates('experience');
    expect(alternates.map((a) => a.hreflang)).toEqual([
      ...locales.map((l) => localeConfigs[l].htmlLang),
      'x-default',
    ]);
    expect(alternates.at(-1)?.href).toBe(pageUrl('experience', defaultLocale));
  });
});

describe('localizedStaticPaths', () => {
  it('covers every non-default Locale exactly once', () => {
    expect(localizedStaticPaths().map((p) => p.params.lang)).toEqual(
      locales.filter((l) => l !== defaultLocale)
    );
  });
});

describe('sitemapEntries', () => {
  it('contains every Page × Locale exactly once', () => {
    const locs = sitemapEntries().map((e) => e.loc);
    const expected = locales.flatMap((lang) => pages.map((p) => pageUrl(p.id, lang)));
    expect(locs.sort()).toEqual(expected.sort());
  });

  it('gives every entry the full set of alternates', () => {
    for (const entry of sitemapEntries()) {
      expect(entry.alternates).toHaveLength(locales.length + 1);
      expect(entry.alternates.map((a) => a.href)).toContain(entry.loc);
    }
  });
});

describe('navLinks', () => {
  it('lists Sections in order with labels and localized hrefs for every Locale', () => {
    for (const lang of locales) {
      const links = navLinks(lang);
      expect(links.map((l) => l.section)).toEqual(sections.map((s) => s.id));
      links.forEach((link, i) => {
        expect(link.label).not.toBe('');
        expect(link.href).toBe(pagePath(sections[i].landingPage, lang));
      });
    }
  });
});
