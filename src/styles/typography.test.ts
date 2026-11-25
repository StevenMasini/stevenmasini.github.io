import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

/**
 * Typography roles (src/styles/global.css) must be used instead of
 * hand-written size classes, so the same kind of text looks the same on
 * every page.
 */
const srcDir = fileURLToPath(new URL('..', import.meta.url));
const astroFiles = (dir: string): string[] =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return astroFiles(path);
    return name.endsWith('.astro') ? [path] : [];
  });

/** Every opening tag of `tag` with its class attribute, as `file:line class`. */
function tagsWithClass(tag: string) {
  return astroFiles(srcDir).flatMap((file) => {
    const source = readFileSync(file, 'utf-8');
    return [...source.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'g'))].map((m) => ({
      where: `${relative(srcDir, file)}:${source.slice(0, m.index).split('\n').length}`,
      cls: m[0].match(/class="([^"]*)"/)?.[1] ?? '',
    }));
  });
}

describe('typography roles', () => {
  it('every page title uses type-page-title', () => {
    const titles = tagsWithClass('h1');
    expect(titles.length).toBeGreaterThan(0);
    const offenders = titles.filter((t) => !t.cls.split(/\s+/).includes('type-page-title'));
    expect(offenders.map((t) => t.where)).toEqual([]);
  });

  it('page titles do not set their own font size', () => {
    const offenders = tagsWithClass('h1').filter((t) => /(^|\s)(\w+:)?text-(xs|sm|base|lg|\d?xl)\b/.test(
      t.cls.replace(/print:\S+/g, '')
    ));
    expect(offenders.map((t) => t.where)).toEqual([]);
  });

  it('uppercase mono section headings use type-section-label', () => {
    const offenders = tagsWithClass('h2').filter((t) => {
      const cls = t.cls.split(/\s+/).filter((c) => !c.startsWith('print:'));
      const looksLikeLabel = cls.includes('uppercase') || cls.includes('font-mono');
      return looksLikeLabel && !cls.includes('type-section-label');
    });
    expect(offenders.map((t) => t.where)).toEqual([]);
  });
});
