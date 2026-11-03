import type { APIRoute } from 'astro';
import { getPortfolioData } from '../data/portfolio';

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

  const flagshipLines = flagshipProjects
    .map(
      (p) =>
        `- **${p.title}** (${p.period}, ${p.roleType}): ${p.summary} (${p.footerNote})${p.appStoreUrl ? ` — [App Store](${p.appStoreUrl})` : ''}`
    )
    .join('\n');

  const spotlightLines = spotlightProjects
    .map((p) => {
      const linkUrl = p.appStoreUrl?.startsWith('http')
        ? p.appStoreUrl
        : `${siteMetadata.siteUrl}${p.appStoreUrl}`;
      return `- **${p.title}** (${p.period}, ${p.company}): ${p.summary}${p.ratingLabel ? ` (${p.ratingLabel})` : ''}${linkUrl ? ` — [${p.locationOrLinkText}](${linkUrl})` : ''}`;
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
- [Overview (English)](${siteMetadata.siteUrl}/): Portfolio summary, selected works, and career highlights.
- [Apps & Shipped Work](${siteMetadata.siteUrl}/apps-and-work/): Detailed case studies of flagship iOS apps, scale metrics, and agency productions.
- [CURIO EYE Product Showcase](${siteMetadata.siteUrl}/curio-eye/): Archive showcase of the CURIO EYE companion iOS app built at CuriosityChina (Farfetch Group).
- [Experience & Resume](${siteMetadata.siteUrl}/experience/): Full chronological work history (2009–Present), education, and technical focus.
- [Contact](${siteMetadata.siteUrl}/contact/): Direct inquiry form and Taipei availability details.
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

