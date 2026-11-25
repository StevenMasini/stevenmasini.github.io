import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { getPortfolioData, type PortfolioData } from './portfolio';
import { defaultLocale, locales } from './locales';

/**
 * Locale parity guard.
 *
 * Each Locale's content file lists the same items in the same order; items are
 * matched across Locales by position. These tests catch a Locale that gains,
 * loses or reorders an item, or whose language-independent facts (icons,
 * URLs, tags, flags) drift from the default Locale.
 */

type ListKey = {
  [K in keyof PortfolioData]: PortfolioData[K] extends readonly unknown[] ? K : never;
}[keyof PortfolioData];
type ItemOf<K extends ListKey> = PortfolioData[K][number];

/** Fields that must be identical in every Locale. Translated fields are omitted. */
const invariantFields: { [K in ListKey]?: (keyof ItemOf<K>)[] } = {
  overviewSelectedWork: ['icon', 'link'],
  flagshipProjects: ['title', 'icon', 'tags', 'appStoreUrl'],
  spotlightProjects: ['icon', 'period', 'link'],
  agencyProjects: ['title', 'icon', 'techLabel', 'appStoreUrl'],
  experienceTimeline: ['isCurrent', 'isCompact', 'highlightProject'],
  educationList: ['period'],
};

/** Nested lists whose length must match across Locales (one bullet per bullet). */
const nestedLists: { [K in ListKey]?: (keyof ItemOf<K>)[] } = {
  flagshipProjects: ['highlights', 'tags'],
  spotlightProjects: ['bullets'],
  experienceTimeline: ['bullets', 'tags'],
};

const reference = getPortfolioData(defaultLocale);
const listKeys = (Object.keys(reference) as (keyof PortfolioData)[]).filter(
  (key): key is ListKey => Array.isArray(reference[key])
);
const otherLocales = locales.filter((lang) => lang !== defaultLocale);
const publicDir = fileURLToPath(new URL('../../public', import.meta.url));

describe.each(otherLocales)('%s content matches the default Locale', (lang) => {
  const data = getPortfolioData(lang);

  it.each(listKeys)('%s has the same number of items', (key) => {
    expect(data[key]).toHaveLength(reference[key].length);
  });

  for (const [key, fields] of Object.entries(invariantFields) as [ListKey, string[]][]) {
    it(`${key}: ${fields.join(', ')} match item by item`, () => {
      const pick = (items: readonly Record<string, unknown>[]) =>
        items.map((item) => Object.fromEntries(fields.map((f) => [f, item[f]])));
      expect(pick(data[key] as never)).toEqual(pick(reference[key] as never));
    });
  }

  for (const [key, fields] of Object.entries(nestedLists) as [ListKey, string[]][]) {
    it(`${key}: ${fields.join(', ')} have the same length item by item`, () => {
      const lengths = (items: readonly Record<string, unknown>[]) =>
        items.map((item) => fields.map((f) => (item[f] as unknown[] | undefined)?.length ?? 0));
      expect(lengths(data[key] as never)).toEqual(lengths(reference[key] as never));
    });
  }
});

describe('content assets', () => {
  it('every icon referenced by any Locale exists under public/', () => {
    const icons = new Set<string>();
    for (const lang of locales) {
      for (const key of listKeys) {
        for (const item of getPortfolioData(lang)[key] as readonly { icon?: string }[]) {
          if (item.icon?.startsWith('/')) icons.add(item.icon);
        }
      }
    }
    expect(icons.size).toBeGreaterThan(0);
    const missing = [...icons].filter((icon) => !existsSync(`${publicDir}${icon}`));
    expect(missing).toEqual([]);
  });
});
