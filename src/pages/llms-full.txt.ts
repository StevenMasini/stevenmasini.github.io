import type { APIRoute } from 'astro';
import { getPortfolioData } from '../data/portfolio';

export const GET: APIRoute = () => {
  const en = getPortfolioData('en');
  const fr = getPortfolioData('fr');
  const zh = getPortfolioData('zh-tw');
  const { siteMetadata } = en;

  const flagshipDetails = en.flagshipProjects
    .map((p) => {
      const highlights = p.highlights
        .map((h) => `  - **${h.title}**: ${h.description}`)
        .join('\n');
      return `### ${p.title} (${p.period})
- **Context**: ${p.roleType}
- **Summary**: ${p.summary}
- **Technologies**: ${p.tags.join(', ')}
- **Scale & Ratings**: ${p.footerNote}
${p.appStoreUrl ? `- **App Store**: ${p.appStoreUrl}\n` : ''}- **Key Engineering Contributions**:
${highlights}`;
    })
    .join('\n\n');

  const spotlightDetails = en.spotlightProjects
    .map((p) => {
      const bullets = p.bullets.map((b) => `  - ${b}`).join('\n');
      const linkUrl = p.appStoreUrl?.startsWith('http')
        ? p.appStoreUrl
        : `${siteMetadata.siteUrl}${p.appStoreUrl}`;
      return `### ${p.title} (${p.period})
- **Role**: ${p.category} — ${p.company}
- **Summary**: ${p.summary}
${p.ratingLabel ? `- **Ratings**: ${p.ratingLabel}\n` : ''}${linkUrl ? `- **Link**: ${linkUrl}\n` : ''}- **Key Engineering Contributions**:
${bullets}`;
    })
    .join('\n\n');

  const agencyDetails = en.agencyProjects
    .map(
      (p) =>
        `- **${p.title}** (${p.subtitle}) [${p.techLabel}]: ${p.description}${p.ratingLabel ? ` (${p.ratingLabel})` : ''}${p.appStoreUrl ? ` — ${p.appStoreUrl}` : ''}`
    )
    .join('\n');

  const foundationDetails = en.earlyFoundations
    .map(
      (f) =>
        `- **${f.title}** (${f.category}) [${f.techLabel}]: ${f.description}`
    )
    .join('\n');

  const timelineDetails = en.experienceTimeline
    .map((item) => {
      const bullets = item.bullets
        ? '\n' + item.bullets.map((b) => `  - ${b}`).join('\n')
        : '';
      const tags = item.tags ? `\n  - **Tech**: ${item.tags.join(', ')}` : '';
      return `### ${item.role} — ${item.companyAndLocation} (${item.period})
${item.summary}${bullets}${tags}`;
    })
    .join('\n\n');

  const content = `# ${siteMetadata.name} — Complete Portfolio & Engineering Reference (llms-full.txt)

> Comprehensive reference for AI assistants, search engines, and technical recruiters looking for a Senior iOS Developer, Swift/Objective-C Architect, or Mobile + Backend Engineer in Taipei, Taiwan (or remote).

---

## 1. Executive Profile
- **Full Name**: ${siteMetadata.name}
- **Current Location**: Taipei, Taiwan (Asia/Taipei, UTC+8)
- **Title**: ${siteMetadata.tagline}
- **Years of Experience**: 15+ years shipping production software since 2011 (mobile engineering in Paris, Beijing, and Taipei)
- **Track Record**: 15+ shipped commercial applications, 10M+ cumulative end users, 4.9★ flagship App Store ratings
- **Canonical Website**: ${siteMetadata.siteUrl}
- **LinkedIn**: ${siteMetadata.linkedinUrl}
- **GitHub**: ${siteMetadata.githubUrl}
- **Contact Page**: ${siteMetadata.siteUrl}/contact/

---

## 2. Services & Availability (Taipei & Remote)
${en.ui.contact.notes.map((n) => `- **${n.title}**: ${n.description}`).join('\n')}
- **Project Types**: ${en.ui.contact.projectTypes.join(' | ')}

---

## 3. Flagship Production Case Studies

${flagshipDetails}

---

## 4. Spotlight Production Case Studies

${spotlightDetails}

---

## 5. Agency & Commercial Apps (Paris — userADgents, 2012–2014)
${agencyDetails}

---

## 6. Early Technical Foundations (2009–2011)
${foundationDetails}

---

## 7. Complete Chronological Work History (2009–Present)

${timelineDetails}

---

## 8. Education, Languages & Technical Stack

### Education
${en.educationList
  .map(
    (ed) =>
      `- **${ed.institution}** (${ed.period}): ${ed.subtitle}${ed.degree ? ` — ${ed.degree}` : ''}. ${ed.description}`
  )
  .join('\n')}
- **Awards**: ${en.ui.experience.hackathonTitle} (${en.ui.experience.hackathonSubtitle})

### Technical Focus
${en.technicalFocusList.map((t) => `- **${t.category}**: ${t.skills}`).join('\n')}

### Spoken Languages
${en.languagesList.map((l) => `- **${l.language}**: ${l.proficiency}`).join('\n')}

---

## 9. Multilingual Profiles (Français & 繁體中文)

### Profil en Français (${siteMetadata.siteUrl}/fr/)
- **Titre**: ${fr.siteMetadata.tagline}
- **Résumé**: ${fr.ui.overview.heroBio}
- **Parcours**: ${fr.ui.experience.description}
- **Localisation**: ${fr.siteMetadata.location} (${fr.siteMetadata.timezoneLabel})

### 繁體中文簡介 (${siteMetadata.siteUrl}/zh-tw/)
- **職稱**: ${zh.siteMetadata.tagline} (駐台北資深 iOS 與後端開發工程師)
- **簡介**: ${zh.ui.overview.heroBio}
- **專業經歷**: ${zh.ui.experience.description}
- **所在地**: ${zh.siteMetadata.location} (${zh.siteMetadata.timezoneLabel})
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
