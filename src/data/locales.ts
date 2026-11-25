/**
 * Locale module — the single source of truth for which Locales exist and how
 * they map onto URL paths. See CONTEXT.md.
 *
 * Client-safe: this module has no dependency on portfolio content, so browser
 * `<script>`s can import it without bundling the whole portfolio.
 */

export type Locale = 'en' | 'fr' | 'zh-tw';

export const locales: readonly Locale[] = ['en', 'fr', 'zh-tw'];
export const defaultLocale: Locale = 'en';

export interface LocaleInfo {
  code: Locale;
  shortLabel: string;
  label: string;
  htmlLang: string;
  ogLocale: string;
}

export const localeConfigs: Record<Locale, LocaleInfo> = {
  en: {
    code: 'en',
    shortLabel: 'EN',
    label: 'English',
    htmlLang: 'en',
    ogLocale: 'en_US',
  },
  fr: {
    code: 'fr',
    shortLabel: 'FR',
    label: 'Français',
    htmlLang: 'fr',
    ogLocale: 'fr_FR',
  },
  'zh-tw': {
    code: 'zh-tw',
    shortLabel: '繁中',
    label: '繁體中文',
    htmlLang: 'zh-Hant-TW',
    ogLocale: 'zh_TW',
  },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

/**
 * Prefix a locale-neutral path with its Locale. The default Locale stays
 * unprefixed. A trailing slash on `path` is preserved (`/` → `/fr/`).
 */
export function getLocalizedPath(lang: Locale, path: string = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLocale ? normalized : `/${lang}${normalized}`;
}

/**
 * Inverse of `getLocalizedPath`: split a URL pathname into its Locale and
 * locale-neutral path. Paths without a known Locale prefix belong to the
 * default Locale. `/fr` and `/fr/` both yield `{ lang: 'fr', path: '/' }`.
 */
export function parseLocalizedPath(pathname: string): { lang: Locale; path: string } {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const [, firstSegment = '', ...rest] = normalized.split('/');
  if (firstSegment !== defaultLocale && isLocale(firstSegment)) {
    return { lang: firstSegment, path: `/${rest.join('/')}` };
  }
  return { lang: defaultLocale, path: normalized };
}

const PREFERRED_LOCALE_KEY = 'preferred_locale';

/** The Locale the visitor last picked in the language switcher, if any (browser only). */
export function getPreferredLocale(): Locale | null {
  try {
    const saved = localStorage.getItem(PREFERRED_LOCALE_KEY);
    return isLocale(saved) ? saved : null;
  } catch {
    return null;
  }
}

/** Remember the visitor's language choice (browser only). */
export function setPreferredLocale(lang: Locale): void {
  try {
    localStorage.setItem(PREFERRED_LOCALE_KEY, lang);
  } catch {
    // Storage unavailable (private mode, quota): the choice just isn't remembered.
  }
}
