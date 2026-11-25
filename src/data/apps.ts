/**
 * App catalog — the single source for each shipped app's store identity and
 * store metrics (rating, rating count). See CONTEXT.md.
 *
 * Content files call `appStoreLink()` and `appRatingLabel()` instead of
 * typing store URLs and rating labels; the Profile reads ratings from here;
 * `npm run metrics` (scripts/metrics.mjs) compares this catalog with live
 * store data. Keep this module free of runtime imports: Node runs it
 * directly (type stripping) from the metrics script.
 */
import type { Locale } from './locales';

export type AppId =
  | 'strong'
  | 'select'
  | 'talkmate'
  | 'pmu'
  | 'belles-demeures'
  | 'ratp'
  | 'qobuz';

export interface App {
  name: string;
  /** Words that identify the app in content prose (used by the metrics drift report). */
  aliases: string[];
  appStore?: { id: string; country: string; slug: string };
  googlePlay?: { id: string };
  /** App Store rating as shown on the site; `count` is a rounded-down floor. */
  rating?: { value: number; count?: number };
}

export const apps: Record<AppId, App> = {
  strong: {
    name: 'Strong Workout Tracker',
    aliases: ['Strong'],
    appStore: { id: '464254577', country: 'us', slug: 'strong-workout-tracker-gym-log' },
    googlePlay: { id: 'io.strongapp.strong' },
    rating: { value: 4.9, count: 185000 },
  },
  select: {
    name: 'SELECT — Your Community',
    aliases: ['SELECT'],
    appStore: { id: '1076478889', country: 'us', slug: 'select-your-community' },
    googlePlay: { id: 'co.s12e.one' },
    rating: { value: 5.0 },
  },
  talkmate: {
    name: 'Talkmate',
    aliases: ['Talkmate'],
    appStore: { id: '959231176', country: 'cn', slug: 'quan-qiu-shuotalkmate-ti-gao' },
    rating: { value: 4.7, count: 19000 },
  },
  pmu: {
    name: 'myPMU (PMU+)',
    aliases: ['PMU'],
    appStore: { id: '719630042', country: 'fr', slug: 'pmu-turf' },
    rating: { value: 4.6, count: 45400 },
  },
  'belles-demeures': {
    name: 'Belles Demeures',
    aliases: ['Belles Demeures'],
    appStore: { id: '398333286', country: 'fr', slug: 'belles-demeures' },
    rating: { value: 4.8, count: 3100 },
  },
  ratp: {
    name: 'RATP (Bonjour RATP)',
    aliases: ['RATP'],
    googlePlay: { id: 'com.fabernovel.ratp' },
  },
  qobuz: {
    name: 'Qobuz Music',
    aliases: ['Qobuz'],
    googlePlay: { id: 'com.qobuz.music' },
  },
};

export function appStoreUrl(id: AppId): string {
  const store = apps[id].appStore;
  if (!store) throw new Error(`${id} has no App Store listing`);
  return `https://apps.apple.com/${store.country}/app/${store.slug}/id${store.id}`;
}

/** Content Link to an app's App Store page. */
export function appStoreLink(id: AppId): { url: string } {
  return { url: appStoreUrl(id) };
}

/** "4.9" — one decimal, as ratings are shown everywhere on the site. */
export function formatRating(value: number): string {
  return value.toFixed(1);
}

/** Thousands-separated count in the Locale's site style: 19,000 / 19 000 / 19,000. */
export function formatCount(count: number, lang: Locale): string {
  const grouped = count.toLocaleString('en-US');
  return lang === 'fr' ? grouped.replace(/,/g, ' ') : grouped;
}

const ratingTemplates: Record<Locale, (rating: string, count?: string) => string> = {
  en: (r, c) => `App Store: ${r} ★${c ? ` (${c}+ ratings)` : ''}`,
  fr: (r, c) => `App Store : ${r} ★${c ? ` (${c}+ avis)` : ''}`,
  'zh-tw': (r, c) => `App Store：${r} ★${c ? ` (${c}+ 則評分)` : ''}`,
};

/** e.g. "App Store : 4.7 ★ (19 000+ avis)" for `appRatingLabel('talkmate', 'fr')`. */
export function appRatingLabel(id: AppId, lang: Locale): string {
  const rating = apps[id].rating;
  if (!rating) throw new Error(`${id} has no rating`);
  return ratingTemplates[lang](
    formatRating(rating.value),
    rating.count === undefined ? undefined : formatCount(rating.count, lang)
  );
}
