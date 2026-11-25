/**
 * Profile module — machine-readable facts about Steven, for search engines
 * and AI assistants (Schema.org JSON-LD and llms.txt / llms-full.txt).
 *
 * Facts that already appear on the site (education, spoken languages) are
 * read from the default Locale's content, never retyped here. Only facts
 * with no on-page home live in `profile` below. See CONTEXT.md.
 */
import { getPortfolioData, siteMetadata } from './portfolio';
import { defaultLocale, localeConfigs, type Locale } from './locales';
import { linkUrl, pageUrl, type Link, type PageId } from './pages';
import { appStoreLink, apps, formatRating, type AppId } from './apps';
import { careerStart, yearsOfExperienceCount } from './content/shared';

export interface ShowcasedApp {
  name: string;
  operatingSystem: string;
  /** Schema.org applicationCategory. */
  category: string;
  link: Link;
  /** Catalog entry whose rating is published as aggregateRating (when it has a count). */
  app?: AppId;
}

export const profile = {
  headline: 'Senior iOS & Backend Developer',
  careerStartYear: careerStart.year,
  location: {
    city: 'Taipei',
    country: 'Taiwan',
    countryCode: 'TW',
    timeZone: 'Asia/Taipei',
    utcOffset: 'UTC+8',
  },
  shippedApps: '15+',
  combinedUsers: '25M+',
  flagshipRating: '4.9★',
  award: 'CHINICT 2012 Hackathon Winner (Beijing, China)',
  availability:
    'Open to freelance/contract iOS projects, technical consulting, legacy Objective-C/Swift refactoring, and greenfield app development (Taipei on-site/hybrid or global remote)',
  /** Curated SEO keywords; intentionally broader than the on-page skills section. */
  keySkills: [
    'Swift',
    'Objective-C',
    'UIKit',
    'SwiftUI',
    'Core Data',
    'Realm',
    'WatchKit (Apple Watch)',
    'React Native',
    'Node.js',
    'REST/WebSocket APIs',
    'CI/CD (Fastlane, Jenkins, Git)',
  ],
  knowsAbout: [
    'iOS Development',
    'Swift',
    'Objective-C',
    'SwiftUI',
    'UIKit',
    'Core Data',
    'Realm',
    'WatchKit',
    'Node.js',
    'React Native',
    'Mobile Architecture',
    'Performance Optimization',
  ],
  services: [
    'Native iOS Application Development (Swift, SwiftUI, UIKit, Objective-C)',
    'Mobile Architecture Consulting, Legacy Codebase Refactoring & Backend Engineering (Node.js)',
  ],
  showcasedApps: [
    {
      name: 'Strong Workout Tracker Gym Log',
      operatingSystem: 'iOS, watchOS',
      category: 'HealthApplication',
      link: appStoreLink('strong'),
      app: 'strong',
    },
    {
      name: 'SELECT — Your Community',
      operatingSystem: 'iOS, Android',
      category: 'SocialNetworkingApplication',
      link: appStoreLink('select'),
      app: 'select',
    },
    {
      name: 'CURIO EYE — WeChat Official Account Monitoring System',
      operatingSystem: 'iOS',
      category: 'BusinessApplication',
      link: { page: 'curio-eye' },
    },
    {
      name: 'Talkmate Language Learning',
      operatingSystem: 'iOS',
      category: 'EducationalApplication',
      link: appStoreLink('talkmate'),
      app: 'talkmate',
    },
  ] satisfies ShowcasedApp[],
};

/** "15+" from May 2026 to April 2027: whole years since the career started, as a floor. */
export function yearsOfExperience(now: Date = new Date()): string {
  return `${yearsOfExperienceCount(now)}+`;
}

const defaultContent = () => getPortfolioData(defaultLocale);

/** e.g. "French (Native), English (Bilingual), …" — from the on-page languages list. */
export function spokenLanguagesSummary(): string {
  return defaultContent()
    .languagesList.map((l) => `${l.language} (${l.proficiency})`)
    .join(', ');
}

/** e.g. "Master's in Information Technology — EPITECH Paris (…, 2008 – 2013); …" */
export function educationSummary(): string {
  return defaultContent()
    .educationList.map(
      (e) => `${e.degree} — ${e.institution} (${e.subtitle}, ${e.period})`
    )
    .join('; ');
}

/** Markdown bullet lines shared by llms.txt and llms-full.txt. */
export function quickFactLines(): string[] {
  const { location } = profile;
  return [
    `- **Name**: ${siteMetadata.name}`,
    `- **Role**: ${profile.headline} (${yearsOfExperience()} years experience since ${profile.careerStartYear})`,
    `- **Location**: ${location.city}, ${location.country} (${location.timeZone}, ${location.utcOffset})`,
    `- **Track Record**: ${profile.shippedApps} shipped commercial applications, ${profile.combinedUsers} combined users, ${profile.flagshipRating} flagship App Store rating`,
    `- **Availability**: ${profile.availability}`,
    `- **Primary Stack**: ${profile.keySkills.join(', ')}`,
    `- **Education**: ${educationSummary()}`,
    `- **Spoken Languages**: ${spokenLanguagesSummary()}`,
    `- **Award**: ${profile.award}`,
    `- **Website**: ${siteMetadata.siteUrl}`,
    `- **LinkedIn**: ${siteMetadata.linkedinUrl}`,
    `- **GitHub**: ${siteMetadata.githubUrl}`,
  ];
}

function aggregateRating(id: AppId | undefined) {
  const rating = id ? apps[id].rating : undefined;
  if (rating?.count === undefined) return {};
  return {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: formatRating(rating.value),
      ratingCount: String(rating.count),
      bestRating: '5',
    },
  };
}

export interface StructuredDataInput {
  /** The Page being rendered; omit for pages outside the registry (404). */
  page?: PageId;
  lang: Locale;
  title: string;
  description: string;
  /** Used only when `page` is omitted. */
  fallbackUrl?: string;
}

/** Schema.org JSON-LD graph (ProfilePage, Person, app list, WebSite) for one rendered page. */
export function buildStructuredData({
  page,
  lang,
  title,
  description,
  fallbackUrl,
}: StructuredDataInput) {
  const { siteUrl } = siteMetadata;
  const content = getPortfolioData(lang);
  const pageUrlForLocale = page ? pageUrl(page, lang) : (fallbackUrl ?? `${siteUrl}/`);
  const personId = `${siteUrl}/#person`;
  const { location } = profile;
  const postalAddress = {
    '@type': 'PostalAddress',
    addressLocality: location.city,
    addressCountry: location.countryCode,
  };
  const areaServed = [location.city, location.country, 'Worldwide'];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${pageUrlForLocale}#profilepage`,
        url: pageUrlForLocale,
        name: title,
        description,
        inLanguage: localeConfigs[lang].htmlLang,
        isPartOf: { '@id': `${siteUrl}/#website` },
        mainEntity: { '@id': personId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: siteMetadata.name,
        jobTitle: content.siteMetadata.jobTitleSchema,
        description,
        url: siteUrl,
        image: `${siteUrl}/og-image.png`,
        sameAs: [
          siteMetadata.linkedinUrl,
          siteMetadata.githubUrl,
          'https://stevenmasini.github.io',
        ],
        address: postalAddress,
        workLocation: {
          '@type': 'Place',
          name: `${location.city}, ${location.country}`,
          address: postalAddress,
        },
        hasOccupation: {
          '@type': 'Occupation',
          name: profile.headline.replace('&', 'and'),
          occupationLocation: { '@type': 'City', name: location.city },
          experienceRequirements: `${yearsOfExperience()} years of software and native iOS engineering experience`,
          skills: profile.keySkills.join(', '),
        },
        alumniOf: defaultContent().educationList.map((e) => ({
          '@type': 'CollegeOrUniversity',
          name: e.institution,
        })),
        award: profile.award,
        knowsLanguage: defaultContent().languagesList.map((l) => l.code),
        knowsAbout: profile.knowsAbout,
        makesOffer: profile.services.map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name, areaServed },
        })),
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#applications`,
        name: `Shipped Mobile Applications by ${siteMetadata.name}`,
        itemListElement: profile.showcasedApps.map((app: ShowcasedApp, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'SoftwareApplication',
            name: app.name,
            operatingSystem: app.operatingSystem,
            applicationCategory: app.category,
            url: linkUrl(app.link, defaultLocale),
            author: { '@id': personId },
            ...aggregateRating(app.app),
          },
        })),
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: `${siteMetadata.name} — ${content.siteMetadata.tagline}`,
        publisher: { '@id': personId },
        inLanguage: localeConfigs[lang].htmlLang,
      },
    ],
  };
}
