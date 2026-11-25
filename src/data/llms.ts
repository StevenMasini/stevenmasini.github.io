/**
 * llms documents — the two plain-text portfolio summaries for AI assistants:
 * /llms.txt (summary) and /llms-full.txt (full reference). See CONTEXT.md.
 *
 * Each content list has one section renderer with a `summary` and/or `full`
 * detail level, so a renamed content field breaks one place and both
 * documents are testable as plain strings.
 */
import { getPortfolioData, llmsPageSummaries, siteMetadata } from './portfolio';
import { defaultLocale, type Locale } from './locales';
import { linkUrl, pages, pageUrl } from './pages';
import { profile, quickFactLines } from './profile';

export type Detail = 'summary' | 'full';

const content = () => getPortfolioData(defaultLocale);
const url = (link: Parameters<typeof linkUrl>[0] | undefined) =>
  link ? linkUrl(link, defaultLocale) : undefined;
const nested = (items: readonly string[]) => items.map((item) => `  - ${item}`).join('\n');

export const sections = {
  flagship(detail: Detail): string {
    if (detail === 'summary') {
      return content()
        .flagshipProjects.map(
          (p) =>
            `- **${p.title}** (${p.period}, ${p.roleType}): ${p.summary} (${p.footerNote})${p.link ? ` — [App Store](${url(p.link)})` : ''}`
        )
        .join('\n');
    }
    return content()
      .flagshipProjects.map(
        (p) => `### ${p.title} (${p.period})
- **Context**: ${p.roleType}
- **Summary**: ${p.summary}
- **Technologies**: ${p.tags.join(', ')}
- **Scale & Ratings**: ${p.footerNote}
${p.link ? `- **App Store**: ${url(p.link)}\n` : ''}- **Key Engineering Contributions**:
${nested(p.highlights.map((h) => `**${h.title}**: ${h.description}`))}`
      )
      .join('\n\n');
  },

  spotlight(detail: Detail): string {
    if (detail === 'summary') {
      return content()
        .spotlightProjects.map((p) => {
          const href = url(p.link);
          return `- **${p.title}** (${p.period}, ${p.company}): ${p.summary}${p.ratingLabel ? ` (${p.ratingLabel})` : ''}${href ? ` — [${p.locationOrLinkText}](${href})` : ''}`;
        })
        .join('\n');
    }
    return content()
      .spotlightProjects.map((p) => {
        const href = url(p.link);
        return `### ${p.title} (${p.period})
- **Role**: ${p.category} — ${p.company}
- **Summary**: ${p.summary}
${p.ratingLabel ? `- **Ratings**: ${p.ratingLabel}\n` : ''}${href ? `- **Link**: ${href}\n` : ''}- **Key Engineering Contributions**:
${nested(p.bullets)}`;
      })
      .join('\n\n');
  },

  agency(detail: Detail): string {
    return content()
      .agencyProjects.map((p) =>
        detail === 'summary'
          ? `- **${p.title}** — ${p.subtitle}: ${p.description}${p.ratingLabel ? ` (${p.ratingLabel})` : ''}`
          : `- **${p.title}** (${p.subtitle}) [${p.techLabel}]: ${p.description}${p.ratingLabel ? ` (${p.ratingLabel})` : ''}${p.link ? ` — ${url(p.link)}` : ''}`
      )
      .join('\n');
  },

  foundations(): string {
    return content()
      .earlyFoundations.map((f) => `- **${f.title}** (${f.category}) [${f.stack}]: ${f.description}`)
      .join('\n');
  },

  timeline(detail: Detail): string {
    if (detail === 'summary') {
      return content()
        .experienceTimeline.map(
          (e) => `- **${e.role}** at **${e.companyAndLocation}** (${e.period}): ${e.summary}`
        )
        .join('\n');
    }
    return content()
      .experienceTimeline.map((item) => {
        const bullets = item.bullets ? `\n${nested(item.bullets)}` : '';
        const tags = item.tags ? `\n  - **Tech**: ${item.tags.join(', ')}` : '';
        return `### ${item.role} — ${item.companyAndLocation} (${item.period})
${item.summary}${bullets}${tags}`;
      })
      .join('\n\n');
  },

  education(): string {
    return content()
      .educationList.map(
        (ed) =>
          `- **${ed.institution}** (${ed.period}): ${ed.subtitle}${ed.degree ? ` — ${ed.degree}` : ''}. ${ed.description}`
      )
      .join('\n');
  },

  skills(): string {
    return content()
      .technicalFocusList.map((t) => `- **${t.category}**: ${t.skills}`)
      .join('\n');
  },

  languages(): string {
    return content()
      .languagesList.map((l) => `- **${l.language}**: ${l.proficiency}`)
      .join('\n');
  },

  keyPages(): string {
    return pages
      .map((page) => {
        const { title, summary } = llmsPageSummaries[page.id];
        return `- [${title}](${pageUrl(page.id, defaultLocale)}): ${summary}`;
      })
      .join('\n');
  },
};

const localeHome = (lang: Locale) => pageUrl('overview', lang);

/** /llms.txt */
export function renderLlmsTxt(): string {
  const en = content();
  const { location } = profile;
  return `# ${siteMetadata.name} — ${siteMetadata.tagline}

> ${en.ui.overview.heroBio} Based in ${location.city}, ${location.country} (${location.utcOffset}). Available for senior native iOS engineering, Swift/Objective-C architecture consulting, performance optimization, and Node.js backend development in Taipei and worldwide remote.

## Quick Facts
${quickFactLines().join('\n')}

## Key Pages
${sections.keyPages()}
- [Complete LLM Portfolio Reference](${siteMetadata.siteUrl}/llms-full.txt): Full case studies, bullet-level engineering achievements, and multilingual profiles (English, Français, 繁體中文).

## Localized Versions
- [English Portfolio](${localeHome('en')})
- [Portfolio en Français](${localeHome('fr')})
- [繁體中文作品集 (台北 iOS 與後端開發工程師)](${localeHome('zh-tw')})

## Flagship Shipped Applications
${sections.flagship('summary')}

## Spotlight Applications
${sections.spotlight('summary')}

## Earlier Commercial & Agency iOS Applications (Paris)
${sections.agency('summary')}

## Career Timeline Summary
${sections.timeline('summary')}

## Technical Expertise
${sections.skills()}

## Education
${sections.education()}

## Spoken Languages
${sections.languages()}
`;
}

/** /llms-full.txt */
export function renderLlmsFullTxt(): string {
  const en = content();
  const fr = getPortfolioData('fr');
  const zh = getPortfolioData('zh-tw');
  const { location } = profile;
  return `# ${siteMetadata.name} — Complete Portfolio & Engineering Reference (llms-full.txt)

> Comprehensive reference for AI assistants, search engines, and technical recruiters looking for a Senior iOS Developer, Swift/Objective-C Architect, or Mobile + Backend Engineer in ${location.city}, ${location.country} (or remote).

---

## 1. Executive Profile
${quickFactLines().join('\n')}
- **Contact Page**: ${pageUrl('contact', defaultLocale)}

---

## 2. Services & Availability (${location.city} & Remote)
${en.ui.contact.notes.map((n) => `- **${n.title}**: ${n.description}`).join('\n')}
- **Project Types**: ${en.ui.contact.projectTypes.join(' | ')}

---

## 3. Flagship Production Case Studies

${sections.flagship('full')}

---

## 4. Spotlight Production Case Studies

${sections.spotlight('full')}

---

## 5. Agency & Commercial Apps (Paris — userADgents, 2012–2014)
${sections.agency('full')}

---

## 6. Early Technical Foundations (2009–2011)
${sections.foundations()}

---

## 7. Complete Chronological Work History (2009–Present)

${sections.timeline('full')}

---

## 8. Education, Languages & Technical Stack

### Education
${sections.education()}
- **Awards**: ${en.ui.experience.hackathonTitle} (${en.ui.experience.hackathonSubtitle})

### Technical Focus
${sections.skills()}

### Spoken Languages
${sections.languages()}

---

## 9. Multilingual Profiles (Français & 繁體中文)

### Profil en Français (${localeHome('fr')})
- **Titre**: ${fr.siteMetadata.tagline}
- **Résumé**: ${fr.ui.overview.heroBio}
- **Parcours**: ${fr.ui.experience.description}
- **Localisation**: ${fr.siteMetadata.location} (${fr.siteMetadata.timezoneLabel})

### 繁體中文簡介 (${localeHome('zh-tw')})
- **職稱**: ${zh.siteMetadata.tagline} (駐台北資深 iOS 與後端開發工程師)
- **簡介**: ${zh.ui.overview.heroBio}
- **專業經歷**: ${zh.ui.experience.description}
- **所在地**: ${zh.siteMetadata.location} (${zh.siteMetadata.timezoneLabel})
`;
}
