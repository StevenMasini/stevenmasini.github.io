import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { appRatingLabel, apps, appStoreUrl, formatCount, type AppId } from './apps';

const srcDir = fileURLToPath(new URL('..', import.meta.url));
const sourceFiles = (dir: string): string[] =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return sourceFiles(path);
    return /\.(ts|astro)$/.test(name) && !name.endsWith('.test.ts') ? [path] : [];
  });

describe('appRatingLabel', () => {
  it('formats the label in each Locale’s site style', () => {
    expect(appRatingLabel('talkmate', 'en')).toBe('App Store: 4.7 ★ (19,000+ ratings)');
    expect(appRatingLabel('talkmate', 'fr')).toBe('App Store : 4.7 ★ (19 000+ avis)');
    expect(appRatingLabel('talkmate', 'zh-tw')).toBe('App Store：4.7 ★ (19,000+ 則評分)');
  });

  it('omits the count when the catalog has none', () => {
    expect(appRatingLabel('select', 'en')).toBe('App Store: 5.0 ★');
  });

  it('refuses apps without a rating', () => {
    expect(() => appRatingLabel('ratp', 'en')).toThrow();
  });
});

describe('formatCount', () => {
  it('groups thousands with commas, or plain spaces in French', () => {
    expect(formatCount(185000, 'en')).toBe('185,000');
    expect(formatCount(185000, 'fr')).toBe('185 000');
    expect(formatCount(3100, 'zh-tw')).toBe('3,100');
  });
});

describe('catalog', () => {
  it('builds App Store URLs from store id, country and slug', () => {
    expect(appStoreUrl('pmu')).toBe('https://apps.apple.com/fr/app/pmu-turf/id719630042');
  });

  it('gives every app at least one store and at least one alias', () => {
    for (const app of Object.values(apps)) {
      expect(app.appStore ?? app.googlePlay).toBeDefined();
      expect(app.aliases.length).toBeGreaterThan(0);
    }
  });

  it('keeps ratings on the 0–5 scale with one decimal', () => {
    for (const id of Object.keys(apps) as AppId[]) {
      const rating = apps[id].rating;
      if (!rating) continue;
      expect(rating.value).toBeGreaterThanOrEqual(0);
      expect(rating.value).toBeLessThanOrEqual(5);
      expect(Number.isInteger(rating.value * 10)).toBe(true);
    }
  });
});

describe('single source', () => {
  const files = sourceFiles(srcDir).filter((f) => !f.endsWith(join('data', 'apps.ts')));

  it('has no hand-typed App Store URLs outside the catalog', () => {
    const offenders = files.filter((f) => readFileSync(f, 'utf-8').includes('apps.apple.com/'));
    expect(offenders).toEqual([]);
  });

  it('has no hand-typed rating labels in content', () => {
    const offenders = files.filter((f) => /ratingLabel:\s*'/.test(readFileSync(f, 'utf-8')));
    expect(offenders).toEqual([]);
  });
});
