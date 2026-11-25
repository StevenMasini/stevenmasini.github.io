import { describe, expect, it } from 'vitest';
import { renderLlmsFullTxt, renderLlmsTxt, sections } from './llms';
import { getPortfolioData } from './portfolio';
import { defaultLocale } from './locales';

const documents = { 'llms.txt': renderLlmsTxt(), 'llms-full.txt': renderLlmsFullTxt() };
const en = getPortfolioData(defaultLocale);

describe.each(Object.entries(documents))('%s', (_name, text) => {
  it('has no missing or unserialized values', () => {
    expect(text).not.toMatch(/undefined|null|NaN|\[object /);
  });

  it('has no unfilled content placeholders', () => {
    expect(text).not.toMatch(/\{\w+\}/);
  });

  it('starts with a title and ends with a newline', () => {
    expect(text).toMatch(/^# \S/);
    expect(text.endsWith('\n')).toBe(true);
  });

  it('mentions every flagship, spotlight and agency project and every role', () => {
    const titles = [
      ...en.flagshipProjects.map((p) => p.title),
      ...en.spotlightProjects.map((p) => p.title),
      ...en.agencyProjects.map((p) => p.title),
      ...en.experienceTimeline.map((e) => e.role),
    ];
    for (const title of titles) expect(text).toContain(title);
  });

  it('only links to absolute URLs', () => {
    const targets = [...text.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1]);
    for (const target of targets) expect(target).toMatch(/^https:\/\//);
  });
});

describe('sections', () => {
  it('full detail includes every highlight and bullet; summary stays one line per item', () => {
    const fullFlagship = sections.flagship('full');
    for (const p of en.flagshipProjects) {
      for (const h of p.highlights) expect(fullFlagship).toContain(h.title);
    }
    expect(sections.flagship('summary').split('\n')).toHaveLength(en.flagshipProjects.length);
    expect(sections.spotlight('summary').split('\n')).toHaveLength(en.spotlightProjects.length);
    expect(sections.timeline('summary').split('\n')).toHaveLength(en.experienceTimeline.length);
  });

  it('lists early foundations with their stack', () => {
    for (const f of en.earlyFoundations) expect(sections.foundations()).toContain(`[${f.stack}]`);
  });
});
