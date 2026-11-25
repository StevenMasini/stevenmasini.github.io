/**
 * Portfolio data: the shape of each Locale's content and the accessor for it.
 * The content itself lives in ./content/<locale>.ts, one file per Locale.
 */
import type { Link, PageId, SectionId } from './pages';

import { defaultLocale, type Locale, type LocaleInfo } from './locales';
import { en } from './content/en';
import { fr } from './content/fr';
import { zhTw } from './content/zh-tw';

export interface StatItem {
  label: string;
  value: string;
  sublabel?: string;
}

export interface OverviewWorkItem {
  title: string;
  subtitle: string;
  period: string;
  icon: string;
  link?: Link;
  description: string;
}

export interface FlagshipHighlight {
  title: string;
  description: string;
}

export interface FlagshipProject {
  title: string;
  period: string;
  roleType: string;
  icon: string;
  summary: string;
  tags: string[];
  highlights: FlagshipHighlight[];
  footerNote: string;
  appStoreUrl?: string;
  appStoreLabel?: string;
}

export interface SpotlightProject {
  title: string;
  category: string;
  period: string;
  icon: string;
  summary: string;
  bullets: string[];
  company: string;
  ratingLabel?: string;
  locationOrLinkText: string;
  link?: Link;
}

export interface AgencyProject {
  title: string;
  subtitle: string;
  ratingLabel?: string;
  icon: string;
  description: string;
  techLabel: string;
  appStoreUrl?: string;
  appStoreLabel?: string;
}

export interface EarlyFoundation {
  category: string;
  title: string;
  description: string;
  stack: string;
}

export interface ExperienceItem {
  role: string;
  companyAndLocation: string;
  period: string;
  isCurrent?: boolean;
  isCompact?: boolean;
  summary: string;
  highlightProject?: string;
  bullets?: string[];
  tags?: string[];
}

export interface OverviewExperienceSummary {
  role: string;
  period: string;
  location: string;
  summary: string;
}

export interface EducationItem {
  institution: string;
  period: string;
  subtitle: string;
  degree: string;
  description: string;
}

export interface TechnicalFocusItem {
  category: string;
  skills: string;
}

export interface LanguageItem {
  /** BCP 47 code of the spoken language (Schema.org knowsLanguage). */
  code: string;
  language: string;
  proficiency: string;
}

export interface SiteMetadata {
  name: string;
  monogram: string;
  tagline: string;
  jobTitleSchema: string;
  siteUrl: string;
  location: string;
  timezoneLabel: string;
  timezoneShort: string;
  linkedinUrl: string;
  linkedinDisplay: string;
  githubUrl: string;
  formSubmitToken: string;
  googleAnalyticsId: string;
  copyrightYear: string;
  keywords: string[];
}

export interface PortfolioUI {
  curioEye: {
    metaTitle: string;
    metaDescription: string;
    backLink: string;
    badge: string;
    note: string;
    infographicAlt: string;
  };
  notFound: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    homeLink: string;
    appsLink: string;
    contactLink: string;
  };
  header: {
    getInTouch: string;
    languageLabel: string;
    toggleMenuLabel: string;
  };
  overview: {
    metaTitle: string;
    metaDescription: string;
    heroBio: string;
    selectedWorkTitle: string;
    selectedWorkPeriod: string;
    allAppsLink: string;
    backgroundTitle: string;
    backgroundDescription: string;
    languagesSummary: string;
    locationPrefix: string;
    fullResumeLink: string;
    contactTitle: string;
    contactDescription: string;
    sendMessageBtn: string;
    orReachOutVia: string;
  };
  appsAndWork: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrowLeft: string;
    heroEyebrowRight: string;
    heroTitle: string;
    heroDescription: string;
    section01Title: string;
    section01Right: string;
    section02Title: string;
    section02Right: string;
    agencySubheading: string;
    foundationsSubheading: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaPrimaryBtn: string;
    ctaSecondaryBtn: string;
  };
  experience: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    downloadPdfBtn: string;
    contactFormLink: string;
    workHistoryTitle: string;
    workHistoryPeriod: string;
    educationTitle: string;
    hackathonTitle: string;
    hackathonSubtitle: string;
    technicalFocusTitle: string;
    languagesTitle: string;
    inquiriesTitle: string;
    inquiriesDescription: string;
    inquiriesLink: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    directContactTitle: string;
    locationAndTimezoneLabel: string;
    remoteLabel: string;
    clockPrefix: string;
    professionalProfileLabel: string;
    workingNotesTitle: string;
    notes: {
      title: string;
      description: string;
    }[];
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    projectTypeLabel: string;
    projectTypes: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    sendingBtn: string;
    sentBtn: string;
    successTitle: string;
    successBody: string;
    errorTitle: string;
    errorBodyPrefix: string;
  };
}

export interface PortfolioData {
  lang: Locale;
  localeInfo: LocaleInfo;
  siteMetadata: SiteMetadata;
  /** Navigation label for each Section, in this Locale. */
  sectionLabels: Record<SectionId, string>;
  ui: PortfolioUI;
  overviewSelectedWork: OverviewWorkItem[];
  overviewExperience: OverviewExperienceSummary[];
  workPageStats: StatItem[];
  flagshipProjects: FlagshipProject[];
  spotlightProjects: SpotlightProject[];
  agencyProjects: AgencyProject[];
  earlyFoundations: EarlyFoundation[];
  experiencePageStats: StatItem[];
  experienceTimeline: ExperienceItem[];
  educationList: EducationItem[];
  technicalFocusList: TechnicalFocusItem[];
  languagesList: LanguageItem[];
}

const portfolioByLocale: Record<Locale, PortfolioData> = {
  en,
  fr,
  'zh-tw': zhTw,
};

export function getPortfolioData(lang: Locale = defaultLocale): PortfolioData {
  return portfolioByLocale[lang] ?? portfolioByLocale[defaultLocale];
}

/** Locale-independent site facts (URL, name, social links). */
export const siteMetadata = en.siteMetadata;

/** English one-line summary of each Page, listed under "Key Pages" in llms.txt. */
export const llmsPageSummaries: Record<PageId, { title: string; summary: string }> = {
  overview: {
    title: 'Overview (English)',
    summary: 'Portfolio summary, selected works, and career highlights.',
  },
  'apps-and-work': {
    title: 'Apps & Shipped Work',
    summary:
      'Detailed case studies of flagship iOS apps, scale metrics, and agency productions.',
  },
  'curio-eye': {
    title: 'CURIO EYE Product Showcase',
    summary:
      'Archive showcase of the CURIO EYE companion iOS app built at CuriosityChina (Farfetch Group).',
  },
  experience: {
    title: 'Experience & Resume',
    summary:
      'Full chronological work history (2009–Present), education, and technical focus.',
  },
  contact: {
    title: 'Contact',
    summary: 'Direct inquiry form and Taipei availability details.',
  },
};
