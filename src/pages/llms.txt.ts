import type { APIRoute } from 'astro';
import { getPortfolioData, llmsPageSummaries } from '../data/portfolio';
import { linkUrl, pages, pageUrl } from '../data/pages';
import { profile, quickFactLines } from '../data/profile';

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
        `- **${p.title}** (${p.period}, ${p.roleType}): ${p.summary} (${p.footerNote})${p.link ? ` — [App Store](${linkUrl(p.link, 'en')})` : ''}`
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

> ${en.ui.overview.heroBio} Based in ${profile.location.city}, ${profile.location.country} (${profile.location.utcOffset}). Available for senior native iOS engineering, Swift/Objective-C architecture consulting, performance optimization, and Node.js backend development in Taipei and worldwide remote.

## Quick Facts
${quickFactLines().join('\n')}

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

## Spoken Languages
${languageLines}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

