#!/usr/bin/env node

/**
 * Fetches live App Store and Google Play metrics for Steven Masini's portfolio apps.
 * Run via: npm run metrics
 */

const iosApps = [
  { name: 'Strong Workout Tracker', id: '464254577', country: 'us' },
  { name: 'SELECT - Your Community', id: '1076478889', country: 'us' },
  { name: 'Talkmate (全球说)', id: '959231176', country: 'cn' },
  { name: 'myPMU (PMU+)', id: '719630042', country: 'fr' },
  { name: 'Belles Demeures', id: '398333286', country: 'fr' },
];

const androidApps = [
  { name: 'Strong Workout Tracker', id: 'io.strongapp.strong' },
  { name: 'RATP (Bonjour RATP)', id: 'com.fabernovel.ratp' },
  { name: 'Qobuz Music', id: 'com.qobuz.music' },
  { name: 'SELECT - Your Community', id: 'co.s12e.one' },
];

const strongCountries = [
  'us',
  'gb',
  'ca',
  'au',
  'de',
  'fr',
  'nl',
  'se',
  'br',
  'mx',
  'in',
  'sg',
  'tw',
  'jp',
];

async function fetchIosMetrics() {
  console.log('\n📱 Apple App Store Metrics (iTunes Lookup API):');
  console.log('─'.repeat(65));

  for (const app of iosApps) {
    try {
      const res = await fetch(
        `https://itunes.apple.com/lookup?id=${app.id}&country=${app.country}`
      );
      const data = await res.json();
      const info = data.results?.[0];

      if (!info) {
        console.log(`• ${app.name} (${app.country.toUpperCase()}): Not currently active`);
        continue;
      }

      const rating = info.averageUserRating
        ? `${info.averageUserRating.toFixed(2)} ★`
        : 'N/A';
      const count = info.userRatingCount
        ? info.userRatingCount.toLocaleString('en-US')
        : '0';

      console.log(
        `• ${app.name.padEnd(26)} [${app.country.toUpperCase()}]  ${rating.padEnd(8)} (${count} ratings)  v${info.version}`
      );
    } catch (err) {
      console.error(`• ${app.name}: Failed to fetch (${err.message})`);
    }
  }

  // Aggregate Strong ratings across top 14 storefronts
  let strongGlobalRatings = 0;
  for (const country of strongCountries) {
    try {
      const res = await fetch(
        `https://itunes.apple.com/lookup?id=464254577&country=${country}`
      );
      const data = await res.json();
      strongGlobalRatings += data.results?.[0]?.userRatingCount || 0;
    } catch {
      // ignore individual country errors
    }
  }
  console.log(
    `  ↳ Strong Global Sample (14 countries): ${strongGlobalRatings.toLocaleString('en-US')}+ ratings`
  );
}

async function fetchAndroidMetrics() {
  console.log('\n🤖 Google Play Store Metrics:');
  console.log('─'.repeat(65));

  for (const app of androidApps) {
    try {
      const res = await fetch(
        `https://play.google.com/store/apps/details?id=${app.id}&hl=en`
      );
      const html = await res.text();
      const downloadsMatch =
        html.match(/>(\d+[KMB+]+\+?)<\/div><div[^>]*>Downloads/i) ||
        html.match(/(\d[\d,.]*[KMB]\+)\s*Downloads/i) ||
        html.match(/"(\d+[KMB]\+)"/);
      const ratingMatch = html.match(/Rated (\d\.\d) stars/i);

      const downloads = downloadsMatch?.[1] || 'N/A';
      const rating = ratingMatch?.[1] ? `${ratingMatch[1]} ★` : 'Unrated';

      console.log(
        `• ${app.name.padEnd(26)} ${downloads.padEnd(10)} downloads   ${rating}`
      );
    } catch (err) {
      console.error(`• ${app.name}: Failed to fetch (${err.message})`);
    }
  }
  console.log('');
}

await fetchIosMetrics();
await fetchAndroidMetrics();
