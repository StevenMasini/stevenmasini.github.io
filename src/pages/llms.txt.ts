import type { APIRoute } from 'astro';
import { getPortfolioData, llmsPageSummaries } from '../data/portfolio';
import { linkUrl, pages, pageUrl } from '../data/pages';

export const GET: APIRoute = () => {
  const en = getPortfolioData('en');
  const {
    siteMetadata,
    flagshipProjects,
    spotlightProjects,
    agencyProjects,
    experienceTimeline,
    educationList,
    technicalFocusList,
    languagesList,
  } = en;

  const keyPageLines = pages
    .map((page) => {
      const { title, summary } = llmsPageSummaries[page.id];
      return `- [${title}](${pageUrl(page.id, 'en')}): ${summary}`;
    })
    .join('\n');

  const flagshipLines = flagshipProjects
    .map(
      (p) =>
        `- **${p.title}** (${p.period}, ${p.roleType}): ${p.summary} (${p.footerNote})${p.appStoreUrl ? ` — [App Store](${p.appStoreUrl})` : ''}`
    )
    .join('\n');

  const spotlightLines = spotlightProjects
    .map((p) => {
      const url = p.link ? linkUrl(p.link, 'en') : undefined;
      return `- **${p.title}** (${p.period}, ${p.company}): ${p.summary}${p.ratingLabel ? ` (${p.ratingLabel})` : ''}${url ? ` — [${p.locationOrLinkText}](${url})` : ''}`;
    })
    .join('\n');

  const agencyLines = agencyProjects
    .map(
      (p) =>
        `- **${p.title}** — ${p.subtitle}: ${p.description}${p.ratingLabel ? ` (${p.ratingLabel})` : ''}`
    )
    .join('\n');

  const experienceLines = experienceTimeline
    .map(
      (e) =>
        `- **${e.role}** at **${e.companyAndLocation}** (${e.period}): ${e.summary}`
    )
    .join('\n');

  const educationLines = educationList
    .map(
      (ed) =>
        `- **${ed.institution}** (${ed.period}): ${ed.subtitle}${ed.degree ? ` — ${ed.degree}` : ''}. ${ed.description}`
    )
    .join('\n');

  const skillsLines = technicalFocusList
    .map((t) => `- **${t.category}**: ${t.skills}`)
    .join('\n');

  const languageLines = languagesList
    .map((l) => `- **${l.language}**: ${l.proficiency}`)
    .join('\n');

  const content = `# ${siteMetadata.name} — ${siteMetadata.tagline}

> ${en.ui.overview.heroBio} Based in Taipei, Taiwan (UTC+8). Available for senior native iOS engineering, Swift/Objective-C architecture consulting, performance optimization, and Node.js backend development in Taipei and worldwide remote.

## Quick Facts
- **Name**: ${siteMetadata.name}
- **Role**: Senior iOS & Backend Developer (15+ years experience since 2011)
- **Location**: ${siteMetadata.location} (${siteMetadata.timezoneLabel})
- **Availability**: Open to freelance/contract iOS projects, technical consulting, legacy Objective-C/Swift refactoring, and greenfield app development (Taipei on-site/hybrid or global remote)
- **Primary Stack**: Swift, Objective-C, UIKit, SwiftUI, Core Data, Realm, WatchKit (Apple Watch), React Native, Node.js, REST/WebSocket APIs, CI/CD (Fastlane, Jenkins, Git)
- **Education**: Master's Degree in Information Technology from EPITECH (Paris, France) & Exchange at Beijing Jiaotong University
- **Spoken Languages**: French (Native), English (Fluent), Mandarin Chinese (Conversational), Japanese (Conversational)
- **Website**: ${siteMetadata.siteUrl}
- **LinkedIn**: ${siteMetadata.linkedinUrl}
- **GitHub**: ${siteMetadata.githubUrl}

## Key Pages
${keyPageLines}
- [Complete LLM Portfolio Reference](${siteMetadata.siteUrl}/llms-full.txt): Full case studies, bullet-level engineering achievements, and multilingual profiles (English, Français, 繁體中文).

## Localized Versions
- [English Portfolio](${siteMetadata.siteUrl}/)
- [Portfolio en Français](${siteMetadata.siteUrl}/fr/)
- [繁體中文作品集 (台北 iOS 與後端開發工程師)](${siteMetadata.siteUrl}/zh-tw/)

## Flagship Shipped Applications
${flagshipLines}

## Spotlight Applications
${spotlightLines}

## Earlier Commercial & Agency iOS Applications (Paris)
${agencyLines}

## Career Timeline Summary
${experienceLines}

## Technical Expertise
${skillsLines}

## Education
${educationLines}
- **CHINICT 2012 Hackathon**: Winner / Honors & Awards (Beijing, China)

## Spoken Languages
${languageLines}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

