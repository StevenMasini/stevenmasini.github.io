import { describe, expect, it } from 'vitest';
import {
  defaultLocale,
  getLocalizedPath,
  isLocale,
  localeConfigs,
  locales,
  parseLocalizedPath,
} from './locales';

const samplePaths = ['/', '/apps-and-work/', '/curio-eye/', '/contact', '/a/b/'];

describe('getLocalizedPath', () => {
  it('leaves the default Locale unprefixed', () => {
    expect(getLocalizedPath(defaultLocale, '/contact/')).toBe('/contact/');
  });

  it('prefixes other Locales and preserves the trailing slash', () => {
    expect(getLocalizedPath('fr', '/')).toBe('/fr/');
    expect(getLocalizedPath('zh-tw', '/contact/')).toBe('/zh-tw/contact/');
    expect(getLocalizedPath('fr', 'contact')).toBe('/fr/contact');
  });
});

describe('parseLocalizedPath', () => {
  it('round-trips getLocalizedPath for every Locale', () => {
    for (const lang of locales) {
      for (const path of samplePaths) {
        expect(parseLocalizedPath(getLocalizedPath(lang, path))).toEqual({ lang, path });
      }
    }
  });

  it('treats a bare Locale prefix without trailing slash as that Locale home', () => {
    expect(parseLocalizedPath('/fr')).toEqual({ lang: 'fr', path: '/' });
  });

  it('assigns unprefixed and unknown-prefix paths to the default Locale', () => {
    expect(parseLocalizedPath('/missing/page')).toEqual({
      lang: defaultLocale,
      path: '/missing/page',
    });
    expect(parseLocalizedPath('/french/')).toEqual({ lang: defaultLocale, path: '/french/' });
    expect(parseLocalizedPath(`/${defaultLocale}/contact/`)).toEqual({
      lang: defaultLocale,
      path: `/${defaultLocale}/contact/`,
    });
  });
});

describe('isLocale', () => {
  it('accepts exactly the configured Locales', () => {
    for (const lang of locales) expect(isLocale(lang)).toBe(true);
    for (const value of ['', 'FR', 'zh', null, undefined, 1]) expect(isLocale(value)).toBe(false);
  });
});

describe('localeConfigs', () => {
  it('has a config whose code matches its key for every Locale', () => {
    for (const lang of locales) expect(localeConfigs[lang].code).toBe(lang);
  });
});
