import { describe, expect, it } from 'vitest';
import {
  buildStructuredData,
  educationSummary,
  profile,
  quickFactLines,
  spokenLanguagesSummary,
  yearsOfExperience,
} from './profile';
import { getPortfolioData } from './portfolio';
import { defaultLocale, localeConfigs, locales } from './locales';
import { pages, pageUrl } from './pages';

type Node = Record<string, any>;
const nodeOfType = (graph: Node[], type: string) => graph.find((n) => n['@type'] === type)!;

describe('yearsOfExperience', () => {
  it('counts whole years since the career start', () => {
    expect(yearsOfExperience(new Date('2026-11-25'))).toBe('15+');
    expect(yearsOfExperience(new Date(`${profile.careerStartYear + 20}-01-01`))).toBe('20+');
  });
});

describe('facts read from on-page content', () => {
  const en = getPortfolioData(defaultLocale);

  it('lists every spoken language with the proficiency shown on the site', () => {
    for (const l of en.languagesList) {
      expect(spokenLanguagesSummary()).toContain(`${l.language} (${l.proficiency})`);
    }
  });

  it('lists every education entry with its degree', () => {
    for (const e of en.educationList) {
      expect(educationSummary()).toContain(`${e.degree} — ${e.institution}`);
    }
  });
});

describe('quickFactLines', () => {
  it('produces markdown bullets with no missing values', () => {
    const lines = quickFactLines();
    expect(lines.length).toBeGreaterThan(5);
    for (const line of lines) {
      expect(line).toMatch(/^- \*\*[^*]+\*\*: \S/);
      expect(line).not.toMatch(/undefined|null|NaN/);
    }
  });
});

describe('buildStructuredData', () => {
  for (const lang of locales) {
    for (const page of pages) {
      it(`${lang} ${page.id}: describes the page, person, apps and site`, () => {
        const ld = buildStructuredData({ page: page.id, lang, title: 'T', description: 'D' });
        const json = JSON.stringify(ld);
        expect(json).not.toMatch(/undefined|null|NaN/);

        const graph = ld['@graph'] as Node[];
        const profilePage = nodeOfType(graph, 'ProfilePage');
        expect(profilePage.url).toBe(pageUrl(page.id, lang));
        expect(profilePage.inLanguage).toBe(localeConfigs[lang].htmlLang);

        const person = nodeOfType(graph, 'Person');
        expect(person['@id']).toBe(profilePage.mainEntity['@id']);
        expect(person.knowsLanguage).toEqual(
          getPortfolioData(defaultLocale).languagesList.map((l) => l.code)
        );

        const apps = nodeOfType(graph, 'ItemList').itemListElement as Node[];
        expect(apps).toHaveLength(profile.showcasedApps.length);
        for (const app of apps) expect(app.item.url).toMatch(/^https:\/\//);
      });
    }
  }

  it('falls back to the given URL for pages outside the registry', () => {
    const ld = buildStructuredData({
      lang: defaultLocale,
      title: '404',
      description: 'D',
      fallbackUrl: 'https://example.com/404/',
    });
    expect(nodeOfType(ld['@graph'] as Node[], 'ProfilePage').url).toBe('https://example.com/404/');
  });
});
