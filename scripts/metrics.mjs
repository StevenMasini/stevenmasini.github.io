#!/usr/bin/env node

/**
 * Compares live App Store / Google Play metrics with the App catalog
 * (src/data/apps.ts) and reports drift.
 * Run via: npm run metrics
 *
 * When a catalog rating or count is out of date, update src/data/apps.ts —
 * generated rating labels and JSON-LD follow automatically — then review the
 * listed content lines, which mention the figure in prose.
 */
import { readFileSync } from 'node:fs';
import { apps, formatRating } from '../src/data/apps.ts';

const contentFiles = ['en', 'fr', 'zh-tw'].map((lang) => `src/data/content/${lang}.ts`);

/** Strong's catalog count is a global figure: summed over its largest storefronts. */
const strongCountries = [
  'us', 'gb', 'ca', 'au', 'de', 'fr', 'nl', 'se', 'br', 'mx', 'in', 'sg', 'tw', 'jp',
];

async function lookup(id, country) {
  const res = await fetch(`https://itunes.apple.com/lookup?id=${id}&country=${country}`);
  const data = await res.json();
  return data.results?.[0];
}

/** Content lines that mention the app and a rating, for manual review. */
function proseMentions(app) {
  const hits = [];
  for (const file of contentFiles) {
    readFileSync(file, 'utf-8')
      .split('\n')
      .forEach((line, i) => {
        if (line.includes('★') && app.aliases.some((a) => line.includes(a))) {
          hits.push(`    ${file}:${i + 1}  ${line.trim().slice(0, 90)}…`);
        }
      });
  }
  return hits;
}

const drift = [];

async function checkIos() {
  console.log('\n📱 App Store (iTunes Lookup API) — live vs catalog:');
  console.log('─'.repeat(72));

  for (const [id, app] of Object.entries(apps)) {
    if (!app.appStore) continue;
    try {
      const info = await lookup(app.appStore.id, app.appStore.country);
      if (!info) {
        console.log(`• ${app.name.padEnd(26)} not currently listed (${app.appStore.country})`);
        continue;
      }
      let liveCount = info.userRatingCount ?? 0;
      if (id === 'strong') {
        liveCount = 0;
        for (const country of strongCountries) {
          liveCount += (await lookup(app.appStore.id, country).catch(() => null))?.userRatingCount ?? 0;
        }
      }
      const liveRating = info.averageUserRating ? formatRating(info.averageUserRating) : 'N/A';
      const catalog = app.rating;
      const notes = [];
      if (catalog && liveRating !== formatRating(catalog.value)) {
        notes.push(`rating ${formatRating(catalog.value)} → ${liveRating}`);
      }
      if (catalog?.count !== undefined && liveCount < catalog.count) {
        notes.push(`count overstated: catalog ${catalog.count}+, live ${liveCount}`);
      } else if (catalog?.count !== undefined && liveCount >= catalog.count * 1.1) {
        notes.push(`count could rise: catalog ${catalog.count}+, live ${liveCount}`);
      }
      console.log(
        `• ${app.name.padEnd(26)} ${`${liveRating} ★`.padEnd(8)} ${liveCount.toLocaleString('en-US').padStart(9)} ratings  v${info.version}` +
          (notes.length ? `  ⚠ ${notes.join('; ')}` : '  ✓')
      );
      if (notes.length) drift.push({ id, app, notes });
    } catch (err) {
      console.error(`• ${app.name}: failed to fetch (${err.message})`);
    }
  }
}

async function checkAndroid() {
  console.log('\n🤖 Google Play (informational):');
  console.log('─'.repeat(72));

  for (const app of Object.values(apps)) {
    if (!app.googlePlay) continue;
    try {
      const res = await fetch(
        `https://play.google.com/store/apps/details?id=${app.googlePlay.id}&hl=en`
      );
      const html = await res.text();
      const downloads =
        (html.match(/>(\d+[KMB+]+\+?)<\/div><div[^>]*>Downloads/i) ||
          html.match(/(\d[\d,.]*[KMB]\+)\s*Downloads/i) ||
          html.match(/"(\d+[KMB]\+)"/))?.[1] ?? 'N/A';
      const rating = html.match(/Rated (\d\.\d) stars/i)?.[1];
      console.log(`• ${app.name.padEnd(26)} ${downloads.padEnd(10)} downloads   ${rating ? `${rating} ★` : 'Unrated'}`);
    } catch (err) {
      console.error(`• ${app.name}: failed to fetch (${err.message})`);
    }
  }
}

await checkIos();
await checkAndroid();

if (drift.length) {
  console.log('\n⚠ Catalog drift — update src/data/apps.ts, then review these prose mentions:');
  for (const { app, notes } of drift) {
    console.log(`\n  ${app.name}: ${notes.join('; ')}`);
    console.log(proseMentions(app).join('\n') || '    (no prose mentions)');
  }
} else {
  console.log('\n✓ App catalog matches live App Store data.');
}
console.log('');
