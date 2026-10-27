export type Locale = 'en' | 'fr' | 'zh-tw';

export const locales: Locale[] = ['en', 'fr', 'zh-tw'];
export const defaultLocale: Locale = 'en';

export interface LocaleInfo {
  code: Locale;
  shortLabel: string;
  label: string;
  htmlLang: string;
  ogLocale: string;
}

export const localeConfigs: Record<Locale, LocaleInfo> = {
  en: {
    code: 'en',
    shortLabel: 'EN',
    label: 'English',
    htmlLang: 'en',
    ogLocale: 'en_US',
  },
  fr: {
    code: 'fr',
    shortLabel: 'FR',
    label: 'Français',
    htmlLang: 'fr',
    ogLocale: 'fr_FR',
  },
  'zh-tw': {
    code: 'zh-tw',
    shortLabel: '繁中',
    label: '繁體中文',
    htmlLang: 'zh-Hant-TW',
    ogLocale: 'zh_TW',
  },
};

export function getLocalizedPath(lang: Locale, path: string = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLocale) {
    return normalized;
  }
  if (normalized === '/') {
    return `/${lang}`;
  }
  return `/${lang}${normalized}`;
}

export interface NavItem {
  label: string;
  href: string;
  id: 'overview' | 'apps-and-work' | 'experience' | 'contact';
}

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
  href?: string;
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
  appStoreUrl?: string;
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
  copyrightYear: string;
  keywords: string[];
}

export interface PortfolioUI {
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
  navItems: NavItem[];
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

const baseMetadata = {
  name: 'Steven Masini',
  monogram: 'SM',
  siteUrl: 'https://stevenmasini.com',
  linkedinUrl: 'https://www.linkedin.com/in/stevenmasini',
  linkedinDisplay: 'linkedin.com/in/stevenmasini',
  githubUrl: 'https://github.com/StevenMasini',
  formSubmitToken: 'f87fcc8becf3b1ec96cc073c7f5cf448',
  copyrightYear: '2026',
  keywords: [
    'Steven Masini',
    'iOS Developer',
    'Senior iOS Engineer',
    'Swift Developer',
    'Backend Developer',
    'Taipei',
    'Taiwan',
    'Objective-C',
    'SwiftUI',
    'UIKit',
    'Core Data',
    'Node.js',
    'Mobile Architecture',
  ],
};

const enData: PortfolioData = {
  lang: 'en',
  localeInfo: localeConfigs.en,
  siteMetadata: {
    ...baseMetadata,
    tagline: 'iOS and Backend Developer in Taipei',
    jobTitleSchema: 'iOS and Backend Developer',
    location: 'Taipei, Taiwan',
    timezoneLabel: 'Taipei Standard Time (UTC+8)',
    timezoneShort: 'Taipei (UTC+8)',
  },
  navItems: [
    { label: 'Overview', href: '/', id: 'overview' },
    { label: 'Apps & Work', href: '/apps-and-work', id: 'apps-and-work' },
    { label: 'Experience', href: '/experience', id: 'experience' },
    { label: 'Contact', href: '/contact', id: 'contact' },
  ],
  ui: {
    header: {
      getInTouch: 'Get in touch',
      languageLabel: 'Select language',
      toggleMenuLabel: 'Toggle navigation menu',
    },
    overview: {
      metaTitle: 'Steven Masini — iOS and Backend Developer in Taipei',
      metaDescription:
        '15+ years building native iOS apps and backend services since 2011. Focused on clean architecture, performance, and code that lasts.',
      heroBio:
        '15+ years building native iOS apps and backend services since 2011. Focused on clean architecture, performance, and code that lasts.',
      selectedWorkTitle: 'Selected Work',
      selectedWorkPeriod: '2015 — Present',
      allAppsLink: 'All Apps →',
      backgroundTitle: 'Background',
      backgroundDescription:
        "Master's in Information Technology from EPITECH. Rigor derived from UNIX and C99 foundations applied to modern Swift architecture.",
      languagesSummary: 'Languages: French, English, Mandarin, Japanese',
      locationPrefix: 'Location:',
      fullResumeLink: 'Full Resume & Timeline →',
      contactTitle: 'Get in touch',
      contactDescription:
        'Whether you have an upcoming iOS project, need assistance refactoring an existing codebase, or would like to talk code over coffee in Taipei.',
      sendMessageBtn: 'Send a Message via Contact Form',
      orReachOutVia: 'or reach out via',
    },
    appsAndWork: {
      metaTitle: 'Apps & Shipped Work — Steven Masini',
      metaDescription:
        'A documented record of native iOS applications, performance turnarounds, and client infrastructure shipped to millions of users worldwide.',
      heroEyebrowLeft: 'Portfolio',
      heroEyebrowRight: '15+ Years Shipped Native Software',
      heroTitle: 'Apps & Shipped Work',
      heroDescription:
        'A documented record of native iOS applications, performance turnarounds, and client infrastructure shipped to millions of users worldwide.',
      section01Title: '01 / Flagship Productions',
      section01Right: 'Deep-Dive Architectures',
      section02Title: '02 / Earlier Work & Agency Era',
      section02Right: 'Paris (userADgents) & Foundations',
      agencySubheading:
        'Press, Media & High-Volume Commercial Apps (2012 – 2014)',
      foundationsSubheading:
        'Early Technical Foundations & Internships (2009 – 2011)',
      ctaEyebrow: 'Available For Hire',
      ctaTitle: 'Need native iOS engineering support?',
      ctaDescription:
        'Available for contract roles, performance diagnostics, and greenfield app releases. Direct communication, clean Git history, zero bloat.',
      ctaPrimaryBtn: 'Get in Touch →',
      ctaSecondaryBtn: 'View Experience Bio →',
    },
    experience: {
      metaTitle: 'Experience & Background — Steven Masini',
      metaDescription:
        'Developing software & native iOS applications since 2011. 15+ years across Paris, Beijing, and Taipei.',
      eyebrow: 'Resume & Work History',
      title: 'Experience & Background',
      description:
        'Developing software & native iOS applications since 2011. 15+ years across Paris, Beijing, and Taipei. From fundamental Unix and C systems to native iOS architecture, companion Node.js backend infrastructure, and modern AI workflows.',
      downloadPdfBtn: 'Download PDF Resume',
      contactFormLink: 'Contact Form →',
      workHistoryTitle: 'Work History',
      workHistoryPeriod: '2009 — Present',
      educationTitle: 'Education & Honors',
      hackathonTitle: 'CHINICT 2012 Hackathon',
      hackathonSubtitle: 'Honors & Awards • Beijing, China',
      technicalFocusTitle: 'Technical Focus',
      languagesTitle: 'Languages',
      inquiriesTitle: 'Inquiries',
      inquiriesDescription:
        'Open for selective contract work, mobile architecture audits, or advisory engagements.',
      inquiriesLink: 'Get in touch via Contact Form →',
    },
    contact: {
      metaTitle: 'Contact — Steven Masini',
      metaDescription:
        'Available for freelance iOS engineering, architectural reviews, and backend integrations. Developing native iOS apps since 2011.',
      eyebrow: 'Get in Touch',
      title: 'Let’s talk about your next project.',
      description:
        'Available for freelance iOS engineering, architectural reviews, and backend integrations. Developing native iOS apps since 2011.',
      directContactTitle: 'Direct Contact',
      locationAndTimezoneLabel: 'Location & Timezone',
      remoteLabel: 'Remote',
      clockPrefix: 'Taipei',
      professionalProfileLabel: 'Professional Profile',
      workingNotesTitle: 'Working Notes',
      notes: [
        {
          title: 'Asynchronous by default',
          description:
            'I prefer clear, documented async communication (GitHub PRs, Linear issues, concise screen recordings). Keeps meetings minimal and deep-work velocity high.',
        },
        {
          title: 'Timezone coordination',
          description:
            'Based in Taipei (UTC+8) with routine overlap across North American morning hand-offs, European afternoon syncs, and APAC business hours.',
        },
        {
          title: 'Response timeframe',
          description:
            'Inquiries are typically acknowledged within 24 hours Monday through Friday.',
        },
      ],
      formTitle: 'Send a message',
      formSubtitle:
        'Fill out the brief outline below to start a conversation.',
      nameLabel: 'Name',
      namePlaceholder: 'Alex Chen',
      emailLabel: 'Email',
      emailPlaceholder: 'alex@company.com',
      projectTypeLabel: 'Project type',
      projectTypes: [
        'New iOS Application',
        'Refactoring & Maintenance',
        'Performance & Crash Audit',
        'Consulting / Architecture',
      ],
      messageLabel: 'Message',
      messagePlaceholder:
        'Brief outline of your application, technical stack (SwiftUI/UIKit, backend), and target timeline...',
      submitBtn: 'Send Message',
      sendingBtn: 'Sending...',
      sentBtn: 'Message Sent',
      successTitle: 'Message received.',
      successBody:
        'Thank you for reaching out. I’ll review your note and follow up promptly.',
      errorTitle: 'Unable to send message right now.',
      errorBodyPrefix: 'Please try again or reach out directly via',
    },
  },
  overviewSelectedWork: [
    {
      title: 'Strong Workout Tracker',
      subtitle: 'iOS Client • ~5M Users • ~580k MAU',
      period: '2019 — Present',
      icon: '/images/apps/strong.jpg',
      href: 'https://apps.apple.com/us/app/strong-workout-tracker-gym-log/id464254577',
      description:
        'Workout tracker with ~5,000,000 registered users, ~580,000 monthly active users, and 4.9 ★ (185k+ global ratings). Contributed to the SwiftUI & Combine refactoring for Strong 6.0, implemented Live Activity and Dynamic Island rest timers, improved xRM estimation accuracy (Brzycki & Epley formulas), and enhanced Exercise List caching, filtering, and fuzzy search.',
    },
    {
      title: 'SELECT',
      subtitle: 'Super Effective',
      period: '2017 — 2019',
      icon: '/images/apps/select.jpg',
      href: 'https://apps.apple.com/us/app/select-your-community/id1076478889',
      description:
        'Contributed to both the native iOS app (cutting build times from 70 to 11 minutes via CocoaPods modularization and MVVM + DI) and the complete React Native rewrite (WebSocket protocol, Multi Friend Selector, custom deep-link intro screens, and an Objective-C native image picker bridge).',
    },
    {
      title: 'CURIO EYE',
      subtitle: 'CuriosityChina (A Farfetch Company)',
      period: '2016 — 2017',
      icon: '/images/apps/curioeye.jpg',
      description:
        'Sole iOS developer for CURIO EYE, a companion app for WeChat Official Account managers. Built the entire application from scratch in Swift (v1.0 to v1.1.5), managing bi-weekly releases, ASO, bundle optimization, and product direction.',
    },
    {
      title: 'Talkmate',
      subtitle: 'Beijing 200H Education • 10M+ Users',
      period: '2015',
      icon: '/images/apps/talkmate.jpg',
      href: 'https://apps.apple.com/cn/app/quan-qiu-shuotalkmate-ti-gao/id959231176',
      description:
        'Led a team of 3–4 iOS developers for Talkmate (4.7 ★, 19k+ ratings, Apple App Store Featured & UNESCO Official Partner). Inherited a stalled 1+ year project, completely rewrote the codebase in Swift, reduced bundle size, and shipped v1.0 through v2.1.',
    },
  ],
  overviewExperience: [
    {
      role: 'Freelance iOS & Node.js Developer',
      period: '2019 — Present',
      location: 'Taipei City, Taiwan',
      summary:
        'Long-term iOS engineering on Strong Workout Tracker (~5M registered users, ~580k MAU, 4.9 ★ — SwiftUI/Combine v6.0 refactor, Live Activities, xRM formulas, fuzzy search) and companion Node.js backend services.',
    },
    {
      role: 'Mobile Developer (iOS & React Native) — Super Effective',
      period: '2017 — 2019',
      location: 'Beijing, China',
      summary:
        'Engineered native iOS (v1.32–1.37) and the React Native rewrite (v1.38+) for SELECT. Cut build times from 70m to 11m and built WebSocket, MFS, and native bridge modules.',
    },
    {
      role: 'iOS Mobile Developer — CuriosityChina (Farfetch)',
      period: '2016 — 2017',
      location: 'Beijing, China',
      summary:
        'Sole iOS engineer for CURIO EYE (v1.0–1.1.5). Built the entire Swift codebase from scratch with bi-weekly releases and App Store Optimization.',
    },
    {
      role: 'Lead iOS Developer — Beijing 200H Education',
      period: '2015',
      location: 'Beijing, China',
      summary:
        'Led 3–4 iOS developers on Talkmate (10M+ users, 4.7 ★). Rewrote the entire codebase in Swift, optimized bundle size, and delivered versions 1.0 through 2.1.',
    },
    {
      role: 'iOS Mobile Developer — userADgents',
      period: '2012 — 2014',
      location: 'Paris, France',
      summary:
        'Delivered 5 major iPhone, iPad, and Windows Phone applications for French media and enterprise clients (Corse Matin, Le Trot, myPMU, Belles Demeures, FFB Déchets BTP).',
    },
  ],
  workPageStats: [
    { label: 'Track Record', value: '15+ Store Apps' },
    { label: 'Specialization', value: 'Swift, SwiftUI & UIKit' },
    { label: 'Combined Reach', value: '25M+ Users' },
    { label: 'Experience', value: 'Since 2011' },
  ],
  flagshipProjects: [
    {
      title: 'Strong Workout Tracker',
      period: '2019 – Present',
      roleType: 'Freelance',
      icon: '/images/apps/strong.jpg',
      summary:
        'One of the world’s leading workout and strength-training apps, with ~5,000,000 registered users, ~580,000 monthly active users (MAU), 185,000+ global App Store ratings (4.9 ★), and recognition from CNBC and The Verge. Long-term collaboration across major architectural milestones and core user-facing features.',
      tags: [
        'Swift',
        'SwiftUI',
        'Combine',
        'ActivityKit',
        'Core Data',
        'HealthKit',
      ],
      highlights: [
        {
          title: 'Strong 6.0 Refactoring (SwiftUI & Combine)',
          description:
            'Contributed to the major codebase refactoring adopting SwiftUI and Combine reactive pipelines, culminating in the landmark version 6.0 release.',
        },
        {
          title: 'Live Activities & Dynamic Island Rest Timers',
          description:
            'Implemented and released the Live Activity and Dynamic Island feature displaying active workout rest timers directly on the iOS Lock Screen and Dynamic Island.',
        },
        {
          title: 'xRM Formula Engine (Brzycki & Epley)',
          description:
            'Improved x Repetition Maximum (xRM — estimated best weight performance for x repetitions of a given set) accuracy by adding support for both Brzycki and Epley formulas across Personal Records, Charts, and workout analytics.',
        },
        {
          title: 'Exercise List Caching, Filtering & Fuzzy Search',
          description:
            'Improved Exercise List caching for faster loading performance, refined filtering and sorting methods, and helped develop fuzzy search with real-time character highlighting.',
        },
        {
          title: 'Customizable Themes, Diagnostics, Privacy & Maintenance',
          description:
            'Developed customizable themes and alternate app icons, built local database diagnostic tools, implemented GDPR and Apple Privacy Nutrition Label compliance, and handled ongoing app maintenance, bug/crash fixes, and technical support.',
        },
      ],
      footerNote:
        'App Store: 4.9 ★ (185k+ ratings) • ~5M Registered Users • ~580k MAU',
      appStoreUrl:
        'https://apps.apple.com/us/app/strong-workout-tracker-gym-log/id464254577',
      appStoreLabel: 'View on App Store →',
    },
    {
      title: 'SELECT — Your Community',
      period: '2017 – 2019',
      roleType: 'Beijing • Full-time',
      icon: '/images/apps/select.jpg',
      summary:
        'Cross-platform social community application connecting people with shared interests. Contributed to both the native iOS codebase (v1.32–1.37) and the complete React Native rewrite (v1.38+).',
      tags: [
        'Swift 3.0',
        'React Native',
        'Objective-C',
        'WebSocket',
        'MVVM',
        'Fastlane',
        'Jenkins',
      ],
      highlights: [
        {
          title:
            'Native iOS Phase (v1.32–1.37) — Build Time Cut from 70 min to 11 min (-84%)',
          description:
            'Modularized the codebase using CocoaPods, refactored the architecture to MVVM with Dependency Injection, and configured Continuous Delivery using Fastlane and Jenkins.',
        },
        {
          title:
            'React Native Rewrite (v1.38+) — WebSocket Protocol & Core Features',
          description:
            'Defined and implemented the client/server WebSocket communication protocol, built the Multi Friend Selector (MFS) intelligent contact search and suggestion system, and built deep-link activated custom intro launch screens.',
        },
        {
          title: 'Native Objective-C Image Picker & Cross-Platform Flexbox UI',
          description:
            'Built a custom Objective-C native image picker module bridged to React Native for optimal performance, and implemented responsive Flexbox screen layouts across iOS and Android.',
        },
      ],
      footerNote: 'App Store: 5.0 ★ • Shipped on iOS & Google Play',
      appStoreUrl:
        'https://apps.apple.com/us/app/select-your-community/id1076478889',
      appStoreLabel: 'View on App Store →',
    },
  ],
  spotlightProjects: [
    {
      title: 'CURIO EYE',
      category: 'Sole iOS Developer • Farfetch Group',
      period: '2016 – 2017',
      icon: '/images/apps/curioeye.jpg',
      summary:
        'Companion iOS app for WeChat Official Account managers built from the ground up at CuriosityChina (a Farfetch company). Full ownership of the entire application from v1.0 to v1.1.5.',
      bullets: [
        'Wrote the entire application from scratch in Swift and UIKit, owning all source code, resources, and architecture.',
        'Planned and executed bi-weekly release cycles, App Store Optimization (ASO), and contributed to product direction.',
        'Minimized app bundle size and resource footprint for fast downloads and smooth runtime performance.',
      ],
      company: 'CuriosityChina (A Farfetch Company)',
      locationOrLinkText: 'Beijing',
    },
    {
      title: 'Talkmate',
      category: 'Lead iOS Developer • 10M+ Users',
      period: '2015',
      icon: '/images/apps/talkmate.jpg',
      summary:
        'Language learning platform (10M+ users, Apple App Store Featured, and UNESCO Official Partner). Inherited a project in development for over a year and transformed it into a flagship release (v1.0 to v2.1).',
      bullets: [
        'Led a team of 3–4 iOS developers, managing task allocation, architecture decisions, and release planning.',
        'Completely rewrote and re-architected the entire codebase in Swift and UIKit for scalability and maintainability.',
        'Reduced app bundle size through resource optimization and drove App Store Optimization (ASO) and product decisions.',
      ],
      company: 'Beijing 200H Education',
      ratingLabel: 'App Store: 4.7 ★ (19,000+ ratings)',
      locationOrLinkText: 'View on App Store →',
      appStoreUrl:
        'https://apps.apple.com/cn/app/quan-qiu-shuotalkmate-ti-gao/id959231176',
    },
  ],
  agencyProjects: [
    {
      title: 'Corse Matin per noï (v1.0–1.2)',
      subtitle: 'Digital Newspaper Reader (Universal iPhone & iPad)',
      icon: '/images/apps/corsematin.jpg',
      description:
        'Integrated MiLibris API v3 and v4 for enriched PDF viewing of daily and weekly publications and designed/developed the iPad version. Built for iOS 4.3+ with forward-thinking architecture that continued running on iOS 11 without major updates.',
      techLabel: 'Objective-C / MiLibris',
    },
    {
      title: 'Le Trot — Cheval Français (v1.1)',
      subtitle: 'Horse Racing Information (iPhone & iPad)',
      icon: '/images/apps/letrot.jpg',
      description:
        "Completely rewrote the source code for both iPhone and iPad versions for France's harness racing authority, ensured iOS 5+ compatibility, and fixed critical Apple Push Notification service (APNs) issues.",
      techLabel: 'Objective-C / APNs',
    },
    {
      title: "myPMU — L'information Hippique (v1.0)",
      subtitle: 'Horse Racing Information (iPhone & iPad)',
      ratingLabel: 'App Store: 4.6 ★ (45,400+ ratings)',
      icon: '/images/apps/mypmu.jpg',
      description:
        "Took over a project already in development within a 3-developer iOS engineering team for France's premier horse-racing platform, responsible for custom UI implementation and Core Data local database support.",
      techLabel: 'Objective-C / Core Data',
      appStoreUrl: 'https://apps.apple.com/fr/app/pmu-turf/id719630042',
      appStoreLabel: 'View on App Store →',
    },
    {
      title: 'Belles Demeures (v1.0)',
      subtitle: 'Luxury Real Estate (iPhone & iPad)',
      ratingLabel: 'App Store: 4.8 ★ (3,100+ ratings)',
      icon: '/images/apps/belledemeures.jpg',
      description:
        'Worked in a 3-developer team delivering full universal iPhone and iPad development and custom UI integration for 30,000+ prestige property listings across 10+ countries.',
      techLabel: 'Objective-C / UIKit',
      appStoreUrl: 'https://apps.apple.com/fr/app/belles-demeures/id398333286',
      appStoreLabel: 'View on App Store →',
    },
    {
      title: 'Fédération Française du Bâtiment (FFB) — Déchets BTP',
      subtitle: 'Construction Waste Management (iOS 7 & Windows Phone 8)',
      icon: '/images/apps/ffb.jpg',
      description:
        'Developed both the iOS 7 and Windows Phone 8 clients, handling REST API integration, navigation and UI implementation, and Core Data cache management.',
      techLabel: 'Objective-C & WP8 / Core Data',
    },
  ],
  earlyFoundations: [
    {
      category: 'Android • C4M Prod (2011)',
      title: 'Qobuz Music Streaming (1M+ Downloads • 4.8 ★)',
      description:
        'Developed the Android music player interface, customizable artist information section, and social sharing (Facebook, Twitter, SMS, Email) for tracks and playlists.',
      stack: 'Java / Android SDK / Social APIs',
    },
    {
      category: 'Android • C4M Prod (2011)',
      title: 'RATP Paris Transit (10M+ Downloads • 4.6 ★)',
      description:
        'Updated the internal Paris transit schedule database and integrated the AdMob mobile advertising framework for the official Paris metro and transit app.',
      stack: 'Java / Android / AdMob',
    },
    {
      category: 'Web Services • C4M Prod (2011)',
      title: 'Zend Framework APIs',
      description:
        'Maintained backend web services for major commercial accounts including Atol les opticiens, Volkswagen, and Digitick.',
      stack: 'PHP / Zend Framework',
    },
    {
      category: 'Push Server • C4M Prod (2011)',
      title: 'Pushmii Server',
      description:
        'Handled server maintenance and created a PHP client library for deployment automation to simplify sending push notifications.',
      stack: 'PHP / Push Notifications',
    },
    {
      category: 'Windows C# • C4M Prod (2011)',
      title: 'Daiichi-Sankyo e-ADV',
      description:
        'Created an HTML template generator for an e-ADV application using Microsoft C# and .NET 4.0 with automated Excel data extraction and formatting.',
      stack: 'C# / .NET 4.0 / Excel',
    },
    {
      category: 'Web Frontend • Technivore (2009)',
      title: 'CMS & XHTML Platforms',
      description:
        'Upgraded Joomla 1.0 to 1.5 with DB migration, SEO partner visibility, and CSS3/JS enhancements for Association Pacamômes, hand-coded XHTML/CSS2 for Programme SIRS, and maintained SPIP CMS for Faire du sport à Marseille.',
      stack: 'XHTML / CSS2 & CSS3 / JS / Joomla / SPIP',
    },
  ],
  experiencePageStats: [
    {
      label: 'Total Experience',
      value: 'Since 2011',
      sublabel: '15+ Years in Engineering',
    },
    {
      label: 'Shipped Apps',
      value: '15+ Releases',
      sublabel: '25M+ Combined Users',
    },
    {
      label: 'Core Focus',
      value: 'Native iOS',
      sublabel: 'Swift, SwiftUI & Node.js',
    },
    {
      label: 'Current Base',
      value: 'Taipei, Taiwan',
      sublabel: 'UTC+8 • Worldwide',
    },
  ],
  experienceTimeline: [
    {
      role: 'Freelance iOS & Node.js Developer',
      companyAndLocation: 'Self-Employed • Taipei, Taiwan',
      period: 'Dec 2019 – Present',
      isCurrent: true,
      summary:
        'Collaborating with clients on native iOS and backend Node.js projects, including long-term engineering on Strong Workout Tracker (~5,000,000 registered users, ~580,000 MAU, 4.9 ★ with 185k+ global ratings), featured by CNBC and The Verge.',
      highlightProject: 'Strong Workout Tracker',
      bullets: [
        'Contributed to the major codebase refactoring adopting SwiftUI and Combine, leading to the release of Strong 6.0.',
        'Implemented and shipped the Live Activity and Dynamic Island feature displaying active rest timers on the Lock Screen and Dynamic Island.',
        'Improved the xRM (x Repetition Maximum) estimation formula by adding support for both Brzycki and Epley formulas across Personal Records, Charts, and analytics.',
        'Enhanced Exercise List filters, sorting methods, and caching to improve loading performance, and helped develop fuzzy search with real-time character highlighting.',
        'Developed customizable themes, alternate app icons, local database diagnostic tools, GDPR / Apple Privacy Nutrition Label compliance, and handled ongoing app maintenance, bug/crash fixes, and technical support.',
      ],
      tags: [
        'Swift',
        'SwiftUI',
        'Combine',
        'ActivityKit',
        'Core Data',
        'HealthKit',
        'Node.js',
      ],
    },
    {
      role: 'Mobile Developer (iOS & React Native)',
      companyAndLocation: 'Super Effective • Beijing, China',
      period: 'Jul 2017 – Nov 2019',
      summary:
        'Engineered SELECT - Your Community, contributing to both the native iOS application (v1.32–1.37) and the complete cross-platform React Native rewrite (v1.38+).',
      highlightProject: 'SELECT - Your Community',
      bullets: [
        'Native iOS (v1.32–1.37): Cut compilation time from 70 minutes to 11 minutes (-84%), modularized the codebase with CocoaPods, refactored to MVVM with Dependency Injection, and configured CI/CD with Fastlane and Jenkins.',
        'React Native Rewrite (v1.38+): Defined and implemented the WebSocket communication protocol, built the Multi Friend Selector (MFS) intelligent contact search/suggestion system, and built deep-link custom intro screens.',
        'Built an Objective-C native image picker module bridged to React Native and implemented cross-platform Flexbox screen layouts for iOS and Android.',
      ],
      tags: [
        'Swift 3.0',
        'React Native',
        'Objective-C',
        'WebSocket',
        'MVVM',
        'Fastlane',
        'Jenkins',
      ],
    },
    {
      role: 'iOS Mobile Developer',
      companyAndLocation:
        'CuriosityChina (A Farfetch Company) • Beijing, China',
      period: 'Jan 2016 – Apr 2017',
      summary:
        'Sole iOS developer responsible for building CURIO EYE, a companion app for WeChat Official Account managers, from the ground up (v1.0 to v1.1.5).',
      highlightProject: 'CURIO EYE',
      bullets: [
        'Wrote the entire application from scratch in Swift and UIKit, owning all source code, resources, and architecture decisions.',
        'Planned and executed bi-weekly release cycles, handled App Store Optimization (ASO), and contributed to product roadmap decisions.',
        'Optimized app bundle size and resource usage while maintaining high code quality across rapid iterations.',
      ],
      tags: ['Swift', 'UIKit', 'WeChat API', 'ASO', 'iOS SDK'],
    },
    {
      role: 'Lead iOS Developer',
      companyAndLocation: 'Beijing 200H Education • Beijing, China',
      period: 'Mar 2015 – Dec 2015',
      summary:
        'Led a team of 3–4 iOS developers for Talkmate (10M+ users, 4.7 ★ with 19k+ ratings, Apple App Store Featured & UNESCO Official Partner). Inherited a project in development for over a year and delivered versions 1.0 through 2.1.',
      highlightProject: 'Talkmate',
      bullets: [
        'Completely rewrote and re-architected the entire codebase in Swift and UIKit for scalability and maintainability.',
        'Managed team task allocation, architectural decisions, and version release schedules.',
        'Reduced app bundle size through resource optimization and participated in ASO and product direction.',
      ],
      tags: [
        'Swift',
        'UIKit',
        'Team Leadership',
        'Codebase Rewrite',
        'Real-time Communication',
      ],
    },
    {
      role: 'iOS Mobile Developer',
      companyAndLocation: 'userADgents • Paris, France',
      period: 'Sep 2012 – Nov 2014',
      summary:
        'Developed iPhone, iPad, and Windows Phone applications across multiple industries for prominent French media and enterprise clients.',
      bullets: [
        'Corse Matin per noï (v1.0–1.2): Integrated MiLibris API v3 & v4 for enriched PDF viewing, designed/developed the iPad version, and built for iOS 4.3+ with longevity through iOS 11.',
        'Le Trot - Cheval Français (v1.1): Rewrote source code for iPhone and iPad, ensured iOS 5+ compatibility, and fixed push notification issues.',
        "myPMU - L'information Hippique (v1.0, 4.6 ★ / 45k+ ratings) & Belles Demeures (v1.0, 4.8 ★ / 3.1k+ ratings): Worked in 3-developer teams taking over an in-progress project (myPMU) and delivering universal iPhone/iPad apps, UI integration, and Core Data support.",
        'Fédération Française du Bâtiment (FFB) - Déchets BTP: Developed both iOS 7 and Windows Phone 8 apps with REST API integration, UI/navigation, and Core Data cache management.',
      ],
      tags: [
        'Objective-C',
        'UIKit',
        'Core Data',
        'Push Notifications',
        'MiLibris API',
        'Windows Phone 8',
      ],
    },
    {
      role: 'Developer (Android, Web, C#)',
      companyAndLocation: 'C4M Prod • Marseille, France',
      period: 'May 2011 – Aug 2011',
      isCompact: true,
      summary:
        "End-of-third-year Bachelor's multi-platform internship across Android, PHP Web Services, and Windows C#/.NET.",
      bullets: [
        'Android: Developed Qobuz music player UI (1M+ downloads, 4.8 ★), customizable artist info views, and social sharing (Facebook, Twitter, SMS, Email); updated RATP internal database (10M+ downloads, 4.6 ★) and integrated AdMob.',
        'Web & Push: Maintained Zend Framework web services (Atol les opticiens, Volkswagen, Digitick) and built a PHP deployment automation client library for the Pushmii server.',
        'Windows C#: Built an HTML template generator in C# and .NET 4.0 with Excel data extraction for Daiichi-Sankyo e-ADV.',
      ],
      tags: ['Java (Android)', 'PHP (Zend)', 'C# (.NET 4.0)', 'AdMob'],
    },
    {
      role: 'Web Frontend Developer',
      companyAndLocation: 'Technivore • Marseille, France',
      period: 'Jul 2009 – Nov 2009',
      isCompact: true,
      summary:
        'End-of-first-year internship focused on web frontend development and CMS migrations: upgraded Joomla 1.0 to 1.5 with database migration, commercial partner search visibility, and CSS3/JS enhancements for Association Pacamômes, hand-coded XHTML/CSS2 for Programme SIRS, and maintained SPIP CMS for Faire du sport à Marseille.',
      tags: ['HTML/XHTML', 'CSS2/CSS3', 'JavaScript', 'Joomla', 'SPIP', 'PHP'],
    },
  ],
  educationList: [
    {
      institution: 'EPITECH Paris',
      period: '2008 – 2013',
      subtitle: 'European Institute of Technology',
      degree: "Master's in Information Technology",
      description:
        'Rigorous foundations in UNIX and C99 programming, followed by Object-Oriented Programming (OOP) and design patterns with C++, PHP, and C#.',
    },
    {
      institution: 'Beijing Jiaotong University',
      period: '2011 – 2012',
      subtitle: 'International Academic Exchange',
      degree: "Master's in Computer Software Engineering",
      description:
        'Curriculum focused on software engineering methodologies, international collaboration, and Chinese language.',
    },
  ],
  technicalFocusList: [
    {
      category: 'Primary Core',
      skills:
        'Swift, Objective-C, UIKit, SwiftUI, Combine, SwiftData, Core Data, SQLite, Typescript/Javascript, React Native, Rust',
    },
    {
      category: 'Architecture',
      skills:
        'MVVM, MVC, Functional Programming, Reactive, Modular Framework, Dependency Injection',
    },
    {
      category: 'Tooling & Testing',
      skills:
        'Xcode Instruments, Xcode Cloud, Fastlane, Jenkins, Git, GitHub Actions, REST APIs, Command Line tools',
    },
    {
      category: 'Asset & Design Craft',
      skills: 'Photoshop, Sketch, Figma, Affinity, Glyphs, Remotion',
    },
    {
      category: 'AI Models & Workflows',
      skills:
        'Claude Code, Google Gemini, Google Stitch, Nano Banana, Black Forest Flux3',
    },
  ],
  languagesList: [
    { language: 'French', proficiency: 'Native' },
    { language: 'English', proficiency: 'Bilingual' },
    { language: 'Mandarin Chinese', proficiency: 'Working Proficiency' },
    { language: 'Japanese', proficiency: 'Learning' },
  ],
};

const frData: PortfolioData = {
  lang: 'fr',
  localeInfo: localeConfigs.fr,
  siteMetadata: {
    ...baseMetadata,
    tagline: 'Développeur iOS & Backend à Taipei',
    jobTitleSchema: 'Développeur iOS et Backend',
    location: 'Taipei, Taïwan',
    timezoneLabel: 'Heure normale de Taipei (UTC+8)',
    timezoneShort: 'Taipei (UTC+8)',
    keywords: [
      ...baseMetadata.keywords,
      'Développeur iOS',
      'Ingénieur iOS Senior',
      'Développeur Swift',
      'Développeur Mobile Freelance',
      'Développeur Backend Node.js',
      'Architecture Mobile',
      'Taïwan',
    ],
  },
  navItems: [
    { label: 'Aperçu', href: '/fr', id: 'overview' },
    {
      label: 'Applications & Projets',
      href: '/fr/apps-and-work',
      id: 'apps-and-work',
    },
    { label: 'Expérience', href: '/fr/experience', id: 'experience' },
    { label: 'Contact', href: '/fr/contact', id: 'contact' },
  ],
  ui: {
    header: {
      getInTouch: 'Me contacter',
      languageLabel: 'Choisir la langue',
      toggleMenuLabel: 'Ouvrir ou fermer le menu de navigation',
    },
    overview: {
      metaTitle: 'Steven Masini — Développeur iOS & Backend à Taipei',
      metaDescription:
        'Plus de 15 ans d’expérience dans le développement d’applications iOS natives et de services backend depuis 2011. Architecture propre, performance et pérennité.',
      heroBio:
        'Plus de 15 ans d’expérience dans le développement d’applications iOS natives et de services backend depuis 2011. Orienté architecture propre, haute performance et code pérenne.',
      selectedWorkTitle: 'Projets Sélectionnés',
      selectedWorkPeriod: '2015 — Présent',
      allAppsLink: 'Toutes les applications →',
      backgroundTitle: 'Parcours',
      backgroundDescription:
        'Master en Technologies de l’Information (EPITECH). Une rigueur issue des fondations UNIX et C99 appliquée aux architectures Swift modernes.',
      languagesSummary: 'Langues : Français, Anglais, Mandarin, Japonais',
      locationPrefix: 'Localisation :',
      fullResumeLink: 'CV complet & Chronologie →',
      contactTitle: 'Me contacter',
      contactDescription:
        'Que vous ayez un projet iOS à venir, besoin d’accompagnement pour refondre une base de code existante ou envie d’échanger autour d’un café à Taipei.',
      sendMessageBtn: 'Envoyer un message via le formulaire',
      orReachOutVia: 'ou directement sur',
    },
    appsAndWork: {
      metaTitle: 'Applications & Réalisations — Steven Masini',
      metaDescription:
        'Un historique documenté d’applications iOS natives, d’optimisations de performance et d’infrastructures clientes déployées auprès de millions d’utilisateurs.',
      heroEyebrowLeft: 'Portfolio',
      heroEyebrowRight: '15+ ans de logiciels natifs en production',
      heroTitle: 'Applications & Réalisations',
      heroDescription:
        'Un historique documenté d’applications iOS natives, d’optimisations de performance et d’infrastructures clientes déployées auprès de millions d’utilisateurs dans le monde.',
      section01Title: '01 / Réalisations Phares',
      section01Right: 'Architectures Détaillées',
      section02Title: '02 / Projets Précédents & Agence',
      section02Right: 'Paris (userADgents) & Fondations',
      agencySubheading:
        'Presse, Médias & Applications Grand Public à Fort Trafic (2012 – 2014)',
      foundationsSubheading:
        'Premières Fondations Techniques & Stages (2009 – 2011)',
      ctaEyebrow: 'Disponible pour missions',
      ctaTitle: 'Besoin d’une expertise iOS native ?',
      ctaDescription:
        'Disponible pour des missions freelance, audits de performance et créations d’applications de bout en bout. Communication directe, historique Git irréprochable, zéro superflu.',
      ctaPrimaryBtn: 'Me contacter →',
      ctaSecondaryBtn: 'Voir le parcours complet →',
    },
    experience: {
      metaTitle: 'Expérience & Parcours — Steven Masini',
      metaDescription:
        'Développement logiciel et applications iOS natives depuis 2011. Plus de 15 ans d’expérience entre Paris, Pékin et Taipei.',
      eyebrow: 'CV & Parcours Professionnel',
      title: 'Expérience & Parcours',
      description:
        'Développement logiciel et applications iOS natives depuis 2011. Plus de 15 ans d’expérience entre Paris, Pékin et Taipei. Des fondations systèmes Unix et C jusqu’aux architectures iOS modernes, services backend Node.js et workflows d’IA.',
      downloadPdfBtn: 'Télécharger le CV en PDF',
      contactFormLink: 'Formulaire de contact →',
      workHistoryTitle: 'Parcours Professionnel',
      workHistoryPeriod: '2009 — Présent',
      educationTitle: 'Formation & Distinctions',
      hackathonTitle: 'Hackathon CHINICT 2012',
      hackathonSubtitle: 'Prix & Distinctions • Pékin, Chine',
      technicalFocusTitle: 'Compétences Techniques',
      languagesTitle: 'Langues',
      inquiriesTitle: 'Collaborations',
      inquiriesDescription:
        'Ouvert aux missions freelance sélectives, aux audits d’architecture mobile et au conseil technique.',
      inquiriesLink: 'Me contacter via le formulaire →',
    },
    contact: {
      metaTitle: 'Contact — Steven Masini',
      metaDescription:
        'Disponible pour le développement iOS freelance, les revues d’architecture et les intégrations backend. Développement iOS natif depuis 2011.',
      eyebrow: 'Contact',
      title: 'Parlons de votre prochain projet.',
      description:
        'Disponible pour du développement iOS freelance, des revues d’architecture et des intégrations backend. Développement d’applications iOS natives depuis 2011.',
      directContactTitle: 'Contact Direct',
      locationAndTimezoneLabel: 'Localisation & Fuseau Horaire',
      remoteLabel: 'À distance',
      clockPrefix: 'Taipei',
      professionalProfileLabel: 'Profil Professionnel',
      workingNotesTitle: 'Méthode de Travail',
      notes: [
        {
          title: 'Asynchrone par défaut',
          description:
            'Je privilégie une communication asynchrone claire et documentée (PRs GitHub, tickets Linear, captures vidéo concises). Cela réduit les réunions et maximise la vélocité.',
        },
        {
          title: 'Coordination multi-fuseaux',
          description:
            'Basé à Taipei (UTC+8) avec des plages de synchronisation régulières avec les matinées nord-américaines, les après-midis européens et les horaires Asie-Pacifique.',
        },
        {
          title: 'Délai de réponse',
          description:
            'Les demandes reçoivent généralement une réponse sous 24 heures, du lundi au vendredi.',
        },
      ],
      formTitle: 'Envoyer un message',
      formSubtitle:
        'Remplissez ce bref formulaire ci-dessous pour démarrer la discussion.',
      nameLabel: 'Nom',
      namePlaceholder: 'Alex Chen',
      emailLabel: 'E-mail',
      emailPlaceholder: 'alex@entreprise.com',
      projectTypeLabel: 'Type de projet',
      projectTypes: [
        'Nouvelle Application iOS',
        'Refonte & Maintenance',
        'Audit Performance & Crashs',
        'Conseil / Architecture',
      ],
      messageLabel: 'Message',
      messagePlaceholder:
        'Brève présentation de votre application, stack technique (SwiftUI/UIKit, backend) et calendrier souhaité...',
      submitBtn: 'Envoyer le message',
      sendingBtn: 'Envoi en cours...',
      sentBtn: 'Message envoyé',
      successTitle: 'Message bien reçu.',
      successBody:
        'Merci pour votre message. J’examinerai votre demande et vous répondrai dans les plus brefs délais.',
      errorTitle: 'Impossible d’envoyer le message pour le moment.',
      errorBodyPrefix:
        'Veuillez réessayer ou me contacter directement via',
    },
  },
  overviewSelectedWork: [
    {
      title: 'Strong Workout Tracker',
      subtitle: 'Client iOS • ~5M Utilisateurs • ~580k MAU',
      period: '2019 — Présent',
      icon: '/images/apps/strong.jpg',
      href: 'https://apps.apple.com/us/app/strong-workout-tracker-gym-log/id464254577',
      description:
        'Application de suivi de musculation comptant ~5 000 000 d’utilisateurs inscrits, ~580 000 utilisateurs actifs mensuels (MAU) et 4.9 ★ (185k+ avis mondiaux). Contribution à la refonte SwiftUI & Combine pour Strong 6.0, implémentation des minuteurs Live Activity et Dynamic Island, amélioration du calcul xRM (formules de Brzycki & Epley), et optimisation du cache, du filtrage et de la recherche floue (fuzzy search).',
    },
    {
      title: 'SELECT',
      subtitle: 'Super Effective',
      period: '2017 — 2019',
      icon: '/images/apps/select.jpg',
      href: 'https://apps.apple.com/us/app/select-your-community/id1076478889',
      description:
        'Contribution à l’application iOS native (réduction du temps de compilation de 70 à 11 minutes via modularisation CocoaPods et architecture MVVM + DI) ainsi qu’à la réécriture complète en React Native (protocole WebSocket, Multi Friend Selector, écrans d’introduction par deep-link et module natif Objective-C de sélection d’images).',
    },
    {
      title: 'CURIO EYE',
      subtitle: 'CuriosityChina (Groupe Farfetch)',
      period: '2016 — 2017',
      icon: '/images/apps/curioeye.jpg',
      description:
        'Unique développeur iOS pour CURIO EYE, application compagnon dédiée aux gestionnaires de comptes officiels WeChat. Développement intégral en Swift (v1.0 à v1.1.5), gestion des cycles de publication bi-hebdomadaires, ASO, optimisation de la taille du binaire et orientation produit.',
    },
    {
      title: 'Talkmate',
      subtitle: 'Beijing 200H Education • 10M+ Utilisateurs',
      period: '2015',
      icon: '/images/apps/talkmate.jpg',
      href: 'https://apps.apple.com/cn/app/quan-qiu-shuotalkmate-ti-gao/id959231176',
      description:
        'Direction d’une équipe de 3 à 4 développeurs iOS pour Talkmate (4.7 ★, 19k+ avis, mise en avant par l’App Store d’Apple & partenaire officiel de l’UNESCO). Reprise d’un projet en difficulté depuis plus d’un an, réécriture complète en Swift, réduction du poids de l’application et livraison des versions 1.0 à 2.1.',
    },
  ],
  overviewExperience: [
    {
      role: 'Développeur Freelance iOS & Node.js',
      period: '2019 — Présent',
      location: 'Taipei, Taïwan',
      summary:
        'Ingénierie iOS long terme sur Strong Workout Tracker (~5M d’inscrits, ~580k MAU, 4.9 ★ — refonte SwiftUI/Combine v6.0, Live Activities, formules xRM, recherche floue) et services backend Node.js associés.',
    },
    {
      role: 'Développeur Mobile (iOS & React Native) — Super Effective',
      period: '2017 — 2019',
      location: 'Pékin, Chine',
      summary:
        'Développement iOS natif (v1.32–1.37) et réécriture React Native (v1.38+) pour SELECT. Réduction du temps de build de 70 min à 11 min et création des modules WebSocket, MFS et ponts natifs.',
    },
    {
      role: 'Développeur Mobile iOS — CuriosityChina (Farfetch)',
      period: '2016 — 2017',
      location: 'Pékin, Chine',
      summary:
        'Unique ingénieur iOS sur CURIO EYE (v1.0–1.1.5). Création complète de la base de code Swift avec sorties bi-hebdomadaires et référencement App Store (ASO).',
    },
    {
      role: 'Lead Développeur iOS — Beijing 200H Education',
      period: '2015',
      location: 'Pékin, Chine',
      summary:
        'Direction de 3 à 4 développeurs iOS sur Talkmate (10M+ utilisateurs, 4.7 ★). Réécriture intégrale en Swift, optimisation des ressources et livraison des versions 1.0 à 2.1.',
    },
    {
      role: 'Développeur Mobile iOS — userADgents',
      period: '2012 — 2014',
      location: 'Paris, France',
      summary:
        'Livraison de 5 applications majeures iPhone, iPad et Windows Phone pour des grands comptes médias et entreprises français (Corse Matin, Le Trot, myPMU, Belles Demeures, FFB Déchets BTP).',
    },
  ],
  workPageStats: [
    { label: 'Réalisations', value: '15+ Apps Publiées' },
    { label: 'Spécialisation', value: 'Swift, SwiftUI & UIKit' },
    { label: 'Audience Cumulée', value: '25M+ Utilisateurs' },
    { label: 'Expérience', value: 'Depuis 2011' },
  ],
  flagshipProjects: [
    {
      title: 'Strong Workout Tracker',
      period: '2019 – Présent',
      roleType: 'Freelance',
      icon: '/images/apps/strong.jpg',
      summary:
        'L’une des applications de suivi d’entraînement et de musculation les plus populaires au monde, avec ~5 000 000 d’utilisateurs inscrits, ~580 000 utilisateurs actifs mensuels (MAU), plus de 185 000 avis sur l’App Store (4.9 ★), et saluée par CNBC et The Verge. Collaboration de longue durée sur les jalons architecturaux majeurs et les fonctionnalités clés.',
      tags: [
        'Swift',
        'SwiftUI',
        'Combine',
        'ActivityKit',
        'Core Data',
        'HealthKit',
      ],
      highlights: [
        {
          title: 'Refonte Strong 6.0 (SwiftUI & Combine)',
          description:
            'Contribution à la refonte architecturale majeure adoptant SwiftUI et les pipelines réactifs Combine, aboutissant au lancement de la version 6.0.',
        },
        {
          title: 'Minuteurs de Repos Live Activities & Dynamic Island',
          description:
            'Implémentation et mise en production des Live Activities et de la Dynamic Island affichant les minuteurs de repos en temps réel sur l’écran verrouillé iOS et la Dynamic Island.',
        },
        {
          title: 'Moteur de Calcul xRM (Brzycki & Epley)',
          description:
            'Amélioration de la précision du calcul x Repetition Maximum (xRM — estimation de la charge maximale pour x répétitions) en intégrant les formules de Brzycki et d’Epley dans les records personnels, graphiques et statistiques.',
        },
        {
          title: 'Cache, Filtrage & Recherche Floue de la Liste d’Exercices',
          description:
            'Optimisation du cache de la liste d’exercices pour un chargement accéléré, amélioration des filtres et méthodes de tri, et développement de la recherche floue (fuzzy search) avec surlignage des caractères en temps réel.',
        },
        {
          title:
            'Thèmes Personnalisables, Diagnostics, Confidentialité & Maintenance',
          description:
            'Développement des thèmes personnalisables et icônes alternatives, création d’outils de diagnostic de base de données locale, mise en conformité RGPD et Apple Privacy Nutrition Labels, ainsi que maintenance continue, correction de crashs et support technique.',
        },
      ],
      footerNote:
        'App Store : 4.9 ★ (185k+ avis) • ~5M d’inscrits • ~580k MAU',
      appStoreUrl:
        'https://apps.apple.com/us/app/strong-workout-tracker-gym-log/id464254577',
      appStoreLabel: 'Voir sur l’App Store →',
    },
    {
      title: 'SELECT — Your Community',
      period: '2017 – 2019',
      roleType: 'Pékin • Temps plein',
      icon: '/images/apps/select.jpg',
      summary:
        'Application sociale communautaire multiplateforme connectant les utilisateurs autour de centres d’intérêt communs. Contribution à la fois à la base de code iOS native (v1.32–1.37) et à la réécriture complète en React Native (v1.38+).',
      tags: [
        'Swift 3.0',
        'React Native',
        'Objective-C',
        'WebSocket',
        'MVVM',
        'Fastlane',
        'Jenkins',
      ],
      highlights: [
        {
          title:
            'Phase iOS Native (v1.32–1.37) — Temps de compilation réduit de 70 min à 11 min (-84%)',
          description:
            'Modularisation du code avec CocoaPods, refonte de l’architecture vers MVVM avec injection de dépendances, et mise en place du déploiement continu via Fastlane et Jenkins.',
        },
        {
          title:
            'Réécriture React Native (v1.38+) — Protocole WebSocket & Fonctionnalités Clés',
          description:
            'Définition et implémentation du protocole de communication client/serveur WebSocket, création du système intelligent de recherche et suggestion de contacts Multi Friend Selector (MFS), et développement d’écrans d’accueil personnalisés activés par deep-link.',
        },
        {
          title: 'Sélecteur d’Images Natif Objective-C & UI Flexbox Multiplateforme',
          description:
            'Création d’un module natif Objective-C de sélection d’images ponté vers React Native pour des performances optimales, et intégration d’interfaces responsives Flexbox sur iOS et Android.',
        },
      ],
      footerNote: 'App Store : 5.0 ★ • Publié sur iOS & Google Play',
      appStoreUrl:
        'https://apps.apple.com/us/app/select-your-community/id1076478889',
      appStoreLabel: 'Voir sur l’App Store →',
    },
  ],
  spotlightProjects: [
    {
      title: 'CURIO EYE',
      category: 'Unique Développeur iOS • Groupe Farfetch',
      period: '2016 – 2017',
      icon: '/images/apps/curioeye.jpg',
      summary:
        'Application iOS compagnon pour les gestionnaires de comptes officiels WeChat, conçue de zéro chez CuriosityChina (société du groupe Farfetch). Responsabilité complète de l’application de la v1.0 à la v1.1.5.',
      bullets: [
        'Écriture intégrale de l’application en Swift et UIKit, avec maîtrise complète du code source, des ressources et de l’architecture.',
        'Planification et exécution de cycles de sortie bi-hebdomadaires, référencement App Store (ASO) et participation aux décisions produit.',
        'Réduction maximale de la taille du binaire et de l’empreinte mémoire pour des téléchargements rapides et une exécution fluide.',
      ],
      company: 'CuriosityChina (Groupe Farfetch)',
      locationOrLinkText: 'Pékin',
    },
    {
      title: 'Talkmate',
      category: 'Lead Développeur iOS • 10M+ Utilisateurs',
      period: '2015',
      icon: '/images/apps/talkmate.jpg',
      summary:
        'Plateforme d’apprentissage des langues (10M+ utilisateurs, mise en avant par l’App Store d’Apple et partenaire officiel de l’UNESCO). Reprise d’un projet en développement depuis plus d’un an pour en faire une application phare (v1.0 à v2.1).',
      bullets: [
        'Direction d’une équipe de 3 à 4 développeurs iOS : répartition des tâches, choix d’architecture et planification des versions.',
        'Réécriture et ré-architecture complètes de la base de code en Swift et UIKit pour garantir évolutivité et maintenabilité.',
        'Réduction de la taille de l’application par l’optimisation des ressources et participation active à l’ASO et à la stratégie produit.',
      ],
      company: 'Beijing 200H Education',
      ratingLabel: 'App Store : 4.7 ★ (19 000+ avis)',
      locationOrLinkText: 'Voir sur l’App Store →',
      appStoreUrl:
        'https://apps.apple.com/cn/app/quan-qiu-shuotalkmate-ti-gao/id959231176',
    },
  ],
  agencyProjects: [
    {
      title: 'Corse Matin per noï (v1.0–1.2)',
      subtitle: 'Liseuse de Presse Numérique (Universel iPhone & iPad)',
      icon: '/images/apps/corsematin.jpg',
      description:
        'Intégration des API MiLibris v3 et v4 pour la lecture PDF enrichie des éditions quotidiennes et hebdomadaires, et conception/développement de la version iPad. Conçue pour iOS 4.3+ avec une architecture pérenne ayant fonctionné jusqu’à iOS 11 sans mise à jour majeure.',
      techLabel: 'Objective-C / MiLibris',
    },
    {
      title: 'Le Trot — Cheval Français (v1.1)',
      subtitle: 'Information Hippique (iPhone & iPad)',
      icon: '/images/apps/letrot.jpg',
      description:
        'Réécriture complète du code source des versions iPhone et iPad pour la société mère du trot en France, compatibilité iOS 5+ et correction de problèmes critiques liés aux notifications push Apple (APNs).',
      techLabel: 'Objective-C / APNs',
    },
    {
      title: "myPMU — L'information Hippique (v1.0)",
      subtitle: 'Information Hippique (iPhone & iPad)',
      ratingLabel: 'App Store : 4.6 ★ (45 400+ avis)',
      icon: '/images/apps/mypmu.jpg',
      description:
        'Reprise d’un projet en cours de développement au sein d’une équipe de 3 ingénieurs iOS pour la principale plateforme hippique française, en charge des interfaces sur mesure et de la base de données locale Core Data.',
      techLabel: 'Objective-C / Core Data',
      appStoreUrl: 'https://apps.apple.com/fr/app/pmu-turf/id719630042',
      appStoreLabel: 'Voir sur l’App Store →',
    },
    {
      title: 'Belles Demeures (v1.0)',
      subtitle: 'Immobilier de Prestige (iPhone & iPad)',
      ratingLabel: 'App Store : 4.8 ★ (3 100+ avis)',
      icon: '/images/apps/belledemeures.jpg',
      description:
        'Développement universel iPhone et iPad au sein d’une équipe de 3 développeurs et intégration d’interfaces personnalisées pour plus de 30 000 annonces immobilières de luxe dans plus de 10 pays.',
      techLabel: 'Objective-C / UIKit',
      appStoreUrl: 'https://apps.apple.com/fr/app/belles-demeures/id398333286',
      appStoreLabel: 'Voir sur l’App Store →',
    },
    {
      title: 'Fédération Française du Bâtiment (FFB) — Déchets BTP',
      subtitle: 'Gestion des Déchets de Chantier (iOS 7 & Windows Phone 8)',
      icon: '/images/apps/ffb.jpg',
      description:
        'Développement conjoint des applications clientes iOS 7 et Windows Phone 8 : intégration d’API REST, navigation, interfaces utilisateur et gestion du cache Core Data.',
      techLabel: 'Objective-C & WP8 / Core Data',
    },
  ],
  earlyFoundations: [
    {
      category: 'Android • C4M Prod (2011)',
      title: 'Qobuz Streaming Musical (1M+ Téléchargements • 4.8 ★)',
      description:
        'Développement de l’interface du lecteur musical Android, de la vue personnalisable d’informations artistes et du partage social (Facebook, Twitter, SMS, E-mail) de pistes et playlists.',
      stack: 'Java / Android SDK / APIs Sociales',
    },
    {
      category: 'Android • C4M Prod (2011)',
      title: 'RATP Transports à Paris (10M+ Téléchargements • 4.6 ★)',
      description:
        'Mise à jour de la base de données interne des horaires de transport parisiens et intégration du SDK publicitaire AdMob pour l’application officielle de la RATP.',
      stack: 'Java / Android / AdMob',
    },
    {
      category: 'Services Web • C4M Prod (2011)',
      title: 'APIs Zend Framework',
      description:
        'Maintenance de services web backend pour des grands comptes commerciaux tels qu’Atol les opticiens, Volkswagen et Digitick.',
      stack: 'PHP / Zend Framework',
    },
    {
      category: 'Serveur Push • C4M Prod (2011)',
      title: 'Serveur Pushmii',
      description:
        'Maintenance serveur et création d’une bibliothèque cliente PHP d’automatisation de déploiement pour simplifier l’envoi de notifications push.',
      stack: 'PHP / Notifications Push',
    },
    {
      category: 'Windows C# • C4M Prod (2011)',
      title: 'Daiichi-Sankyo e-ADV',
      description:
        'Création d’un générateur de modèles HTML pour une application e-ADV en Microsoft C# et .NET 4.0 avec extraction et formatage automatisés de données Excel.',
      stack: 'C# / .NET 4.0 / Excel',
    },
    {
      category: 'Frontend Web • Technivore (2009)',
      title: 'Plateformes CMS & XHTML',
      description:
        'Migration de Joomla 1.0 vers 1.5 avec base de données, visibilité SEO partenaires et améliorations CSS3/JS pour l’Association Pacamômes, intégration XHTML/CSS2 pour Programme SIRS et maintenance du CMS SPIP pour Faire du sport à Marseille.',
      stack: 'XHTML / CSS2 & CSS3 / JS / Joomla / SPIP',
    },
  ],
  experiencePageStats: [
    {
      label: 'Expérience Totale',
      value: 'Depuis 2011',
      sublabel: '15+ ans en ingénierie',
    },
    {
      label: 'Apps Publiées',
      value: '15+ Versions',
      sublabel: '25M+ d’utilisateurs cumulés',
    },
    {
      label: 'Spécialité',
      value: 'iOS Natif',
      sublabel: 'Swift, SwiftUI & Node.js',
    },
    {
      label: 'Base Actuelle',
      value: 'Taipei, Taïwan',
      sublabel: 'UTC+8 • International',
    },
  ],
  experienceTimeline: [
    {
      role: 'Développeur Freelance iOS & Node.js',
      companyAndLocation: 'Indépendant • Taipei, Taïwan',
      period: 'Déc. 2019 – Présent',
      isCurrent: true,
      summary:
        'Collaboration avec des clients sur des projets iOS natifs et backend Node.js, dont l’ingénierie au long cours sur Strong Workout Tracker (~5 000 000 d’utilisateurs inscrits, ~580 000 MAU, 4.9 ★ avec 185k+ avis mondiaux), citée par CNBC et The Verge.',
      highlightProject: 'Strong Workout Tracker',
      bullets: [
        'Contribution à la refonte majeure du code adoptant SwiftUI et Combine, aboutissant à la sortie de Strong 6.0.',
        'Implémentation et déploiement de la fonctionnalité Live Activity et Dynamic Island affichant les minuteurs de repos actifs sur l’écran verrouillé et la Dynamic Island.',
        'Amélioration de la formule d’estimation xRM (x Repetition Maximum) avec la prise en charge des formules de Brzycki et d’Epley dans les records personnels, graphiques et analyses.',
        'Optimisation des filtres, du tri et de la mise en cache de la liste d’exercices pour accélérer le chargement, et développement de la recherche floue (fuzzy search) avec surlignage en temps réel.',
        'Développement de thèmes personnalisables, d’icônes d’application alternatives, d’outils de diagnostic de base de données locale, conformité RGPD / Apple Privacy Nutrition Labels, ainsi que maintenance continue, correction de bugs/crashs et support technique.',
      ],
      tags: [
        'Swift',
        'SwiftUI',
        'Combine',
        'ActivityKit',
        'Core Data',
        'HealthKit',
        'Node.js',
      ],
    },
    {
      role: 'Développeur Mobile (iOS & React Native)',
      companyAndLocation: 'Super Effective • Pékin, Chine',
      period: 'Juil. 2017 – Nov. 2019',
      summary:
        'Développement de SELECT - Your Community, en contribuant à la fois à l’application iOS native (v1.32–1.37) et à la réécriture complète multiplateforme en React Native (v1.38+).',
      highlightProject: 'SELECT - Your Community',
      bullets: [
        'iOS Natif (v1.32–1.37) : Réduction du temps de compilation de 70 minutes à 11 minutes (-84%), modularisation via CocoaPods, refonte en MVVM avec injection de dépendances et configuration CI/CD avec Fastlane et Jenkins.',
        'Réécriture React Native (v1.38+) : Définition et implémentation du protocole WebSocket, création du sélecteur intelligent de contacts Multi Friend Selector (MFS) et d’écrans d’accueil personnalisés par deep-link.',
        'Création d’un module natif Objective-C de sélection d’images ponté vers React Native et intégration d’interfaces Flexbox multiplateformes pour iOS et Android.',
      ],
      tags: [
        'Swift 3.0',
        'React Native',
        'Objective-C',
        'WebSocket',
        'MVVM',
        'Fastlane',
        'Jenkins',
      ],
    },
    {
      role: 'Développeur Mobile iOS',
      companyAndLocation: 'CuriosityChina (Groupe Farfetch) • Pékin, Chine',
      period: 'Janv. 2016 – Avr. 2017',
      summary:
        'Unique développeur iOS en charge de la conception intégrale de CURIO EYE, application compagnon pour les gestionnaires de comptes officiels WeChat (v1.0 à v1.1.5).',
      highlightProject: 'CURIO EYE',
      bullets: [
        'Écriture complète de l’application de zéro en Swift et UIKit, avec responsabilité totale du code source, des ressources et des choix d’architecture.',
        'Planification et exécution de cycles de sortie bi-hebdomadaires, gestion de l’App Store Optimization (ASO) et participation à la feuille de route produit.',
        'Optimisation du poids du binaire et de la consommation de ressources tout en maintenant une haute qualité de code.',
      ],
      tags: ['Swift', 'UIKit', 'WeChat API', 'ASO', 'iOS SDK'],
    },
    {
      role: 'Lead Développeur iOS',
      companyAndLocation: 'Beijing 200H Education • Pékin, Chine',
      period: 'Mars 2015 – Déc. 2015',
      summary:
        'Direction d’une équipe de 3 à 4 développeurs iOS pour Talkmate (10M+ utilisateurs, 4.7 ★ avec 19k+ avis, mise en avant sur l’App Store d’Apple & partenaire officiel de l’UNESCO). Reprise d’un projet en développement depuis plus d’un an et livraison des versions 1.0 à 2.1.',
      highlightProject: 'Talkmate',
      bullets: [
        'Réécriture et ré-architecture complètes de la base de code en Swift et UIKit pour assurer évolutivité et maintenabilité.',
        'Gestion de la répartition des tâches de l’équipe, des décisions d’architecture et du calendrier des sorties.',
        'Réduction de la taille de l’application via l’optimisation des ressources et participation à l’ASO et à l’orientation produit.',
      ],
      tags: [
        'Swift',
        'UIKit',
        'Leadership Technique',
        'Refonte Complète',
        'Communication Temps Réel',
      ],
    },
    {
      role: 'Développeur Mobile iOS',
      companyAndLocation: 'userADgents • Paris, France',
      period: 'Sept. 2012 – Nov. 2014',
      summary:
        'Développement d’applications iPhone, iPad et Windows Phone dans plusieurs secteurs pour de grands médias et entreprises français.',
      bullets: [
        'Corse Matin per noï (v1.0–1.2) : Intégration des API MiLibris v3 & v4 pour la lecture PDF enrichie, conception/développement de la version iPad et support d’iOS 4.3+ avec une longévité jusqu’à iOS 11.',
        'Le Trot - Cheval Français (v1.1) : Réécriture du code source pour iPhone et iPad, compatibilité iOS 5+ et résolution de bugs critiques sur les notifications push.',
        "myPMU - L'information Hippique (v1.0, 4.6 ★ / 45k+ avis) & Belles Demeures (v1.0, 4.8 ★ / 3.1k+ avis) : Travail en équipes de 3 développeurs sur la reprise d’un projet en cours (myPMU) et la livraison d’applications universelles iPhone/iPad, intégration UI et support Core Data.",
        'Fédération Française du Bâtiment (FFB) - Déchets BTP : Développement des applications iOS 7 et Windows Phone 8 avec intégration d’API REST, navigation/UI et gestion du cache Core Data.',
      ],
      tags: [
        'Objective-C',
        'UIKit',
        'Core Data',
        'Notifications Push',
        'MiLibris API',
        'Windows Phone 8',
      ],
    },
    {
      role: 'Développeur (Android, Web, C#)',
      companyAndLocation: 'C4M Prod • Marseille, France',
      period: 'Mai 2011 – Août 2011',
      isCompact: true,
      summary:
        'Stage multiplateforme de fin de 3e année de Bachelor couvrant Android, les services web PHP et Windows C#/.NET.',
      bullets: [
        'Android : Développement de l’interface du lecteur musical Qobuz (1M+ téléchargements, 4.8 ★), des fiches artistes personnalisables et du partage social (Facebook, Twitter, SMS, E-mail) ; mise à jour de la base de données interne RATP (10M+ téléchargements, 4.6 ★) et intégration d’AdMob.',
        'Web & Push : Maintenance de services web Zend Framework (Atol les opticiens, Volkswagen, Digitick) et création d’une bibliothèque cliente PHP d’automatisation de déploiement pour le serveur Pushmii.',
        'Windows C# : Création d’un générateur de modèles HTML en C# et .NET 4.0 avec extraction de données Excel pour Daiichi-Sankyo e-ADV.',
      ],
      tags: ['Java (Android)', 'PHP (Zend)', 'C# (.NET 4.0)', 'AdMob'],
    },
    {
      role: 'Développeur Web Frontend',
      companyAndLocation: 'Technivore • Marseille, France',
      period: 'Juil. 2009 – Nov. 2009',
      isCompact: true,
      summary:
        'Stage de fin de 1re année axé sur le développement frontend et la migration de CMS : mise à niveau de Joomla 1.0 vers 1.5 avec migration de base de données, référencement des partenaires et améliorations CSS3/JS pour l’Association Pacamômes, intégration XHTML/CSS2 pour Programme SIRS et maintenance du CMS SPIP pour Faire du sport à Marseille.',
      tags: ['HTML/XHTML', 'CSS2/CSS3', 'JavaScript', 'Joomla', 'SPIP', 'PHP'],
    },
  ],
  educationList: [
    {
      institution: 'EPITECH Paris',
      period: '2008 – 2013',
      subtitle: 'École de l’Expertise Informatique',
      degree: 'Master Expert en Technologies de l’Information',
      description:
        'Fondations rigoureuses en programmation UNIX et C99, suivies par la programmation orientée objet (POO) et les design patterns en C++, PHP et C#.',
    },
    {
      institution: 'Université Jiaotong de Pékin',
      period: '2011 – 2012',
      subtitle: 'Échange Académique International',
      degree: 'Master en Génie Logiciel Informatique',
      description:
        'Cursus axé sur les méthodologies de génie logiciel, la collaboration internationale et la langue chinoise.',
    },
  ],
  technicalFocusList: [
    {
      category: 'Cœur Technique',
      skills:
        'Swift, Objective-C, UIKit, SwiftUI, Combine, SwiftData, Core Data, SQLite, Typescript/Javascript, React Native, Rust',
    },
    {
      category: 'Architecture',
      skills:
        'MVVM, MVC, Programmation Fonctionnelle, Programmation Réactive, Frameworks Modulaires, Injection de Dépendances',
    },
    {
      category: 'Outils & Tests',
      skills:
        'Xcode Instruments, Xcode Cloud, Fastlane, Jenkins, Git, GitHub Actions, APIs REST, Outils en ligne de commande',
    },
    {
      category: 'Design & Création Graphique',
      skills: 'Photoshop, Sketch, Figma, Affinity, Glyphs, Remotion',
    },
    {
      category: 'Modèles & Workflows IA',
      skills:
        'Claude Code, Google Gemini, Google Stitch, Nano Banana, Black Forest Flux3',
    },
  ],
  languagesList: [
    { language: 'Français', proficiency: 'Langue maternelle' },
    { language: 'Anglais', proficiency: 'Bilingue' },
    { language: 'Chinois Mandarin', proficiency: 'Compétence professionnelle' },
    { language: 'Japonais', proficiency: 'En apprentissage' },
  ],
};

const zhTwData: PortfolioData = {
  lang: 'zh-tw',
  localeInfo: localeConfigs['zh-tw'],
  siteMetadata: {
    ...baseMetadata,
    tagline: '駐台北的 iOS 與後端開發工程師',
    jobTitleSchema: 'iOS 與後端開發工程師',
    location: '台灣台北',
    timezoneLabel: '台北標準時間 (UTC+8)',
    timezoneShort: '台北 (UTC+8)',
    keywords: [
      ...baseMetadata.keywords,
      'iOS 工程師',
      '資深 iOS 開發工程師',
      'Swift 工程師',
      'iOS 接案',
      '行動端架構',
      '後端工程師',
      '台北',
      '台灣',
    ],
  },
  navItems: [
    { label: '總覽', href: '/zh-tw', id: 'overview' },
    { label: '作品與專案', href: '/zh-tw/apps-and-work', id: 'apps-and-work' },
    { label: '經歷與背景', href: '/zh-tw/experience', id: 'experience' },
    { label: '聯絡方式', href: '/zh-tw/contact', id: 'contact' },
  ],
  ui: {
    header: {
      getInTouch: '聯絡我',
      languageLabel: '選擇語言',
      toggleMenuLabel: '切換導覽選單',
    },
    overview: {
      metaTitle: 'Steven Masini — 駐台北的 iOS 與後端開發工程師',
      metaDescription:
        '自 2011 年起深耕原生 iOS 應用程式與後端服務開發逾 15 年。專注於清晰架構、極致效能與經得起時間考驗的程式碼。',
      heroBio:
        '自 2011 年起投入原生 iOS 應用程式與後端服務開發，累積逾 15 年實戰經驗。專注於高擴充性架構、極致效能與易於長期維護的程式碼。',
      selectedWorkTitle: '精選專案作品',
      selectedWorkPeriod: '2015 — 至今',
      allAppsLink: '查看所有作品 →',
      backgroundTitle: '專業背景',
      backgroundDescription:
        '法國 EPITECH 資訊科技碩士。將深厚的 UNIX 與 C99 系統底層嚴謹思維，融入現代 Swift 軟體架構設計。',
      languagesSummary: '語言能力：法文、英文、中文、日文',
      locationPrefix: '所在地：',
      fullResumeLink: '完整履歷與職涯時程 →',
      contactTitle: '合作洽談',
      contactDescription:
        '無論您有即將啟動的 iOS 專案、需要重構既有程式碼庫，或想在台北約杯咖啡交流技術，都歡迎隨時聯繫。',
      sendMessageBtn: '透過聯絡表單發送訊息',
      orReachOutVia: '或透過以下方式聯繫',
    },
    appsAndWork: {
      metaTitle: '作品與專案實績 — Steven Masini',
      metaDescription:
        '完整記錄服務全球數百萬用戶的原生 iOS 應用程式、編譯與執行效能優化，以及跨平台客戶端基礎設施。',
      heroEyebrowLeft: '作品集',
      heroEyebrowRight: '15+ 年原生軟體開發與上線實績',
      heroTitle: '作品與專案實績',
      heroDescription:
        '完整記錄服務全球數百萬用戶的原生 iOS 應用程式、效能重構工程，以及客戶端架構實踐。',
      section01Title: '01 / 旗艦級代表作',
      section01Right: '深度架構解析',
      section02Title: '02 / 早期專案與代理商時期',
      section02Right: '巴黎 (userADgents) 與技術奠基',
      agencySubheading: '新聞媒體與高流量商業應用程式 (2012 – 2014)',
      foundationsSubheading: '早期技術奠基與實習專案 (2009 – 2011)',
      ctaEyebrow: '開放合作洽談',
      ctaTitle: '需要資深原生 iOS 工程支援嗎？',
      ctaDescription:
        '提供專案合約開發、效能診斷優化與全新 App 從零打造服務。溝通直接透明、Git 提交紀錄清晰、零冗餘程式碼。',
      ctaPrimaryBtn: '立即聯絡 →',
      ctaSecondaryBtn: '查看完整經歷 →',
    },
    experience: {
      metaTitle: '經歷與專業背景 — Steven Masini',
      metaDescription:
        '自 2011 年起開發軟體與原生 iOS 應用程式。橫跨巴黎、北京與台北逾 15 年的工程實戰經驗。',
      eyebrow: '履歷與職涯紀錄',
      title: '經歷與專業背景',
      description:
        '自 2011 年起從事軟體與原生 iOS 應用程式開發，橫跨巴黎、北京與台北逾 15 年。從底層 Unix 與 C 語言系統出發，延伸至現代原生 iOS 架構、Node.js 後端服務與 AI 輔助開發流程。',
      downloadPdfBtn: '下載 PDF 履歷',
      contactFormLink: '聯絡表單 →',
      workHistoryTitle: '工作經歷',
      workHistoryPeriod: '2009 — 至今',
      educationTitle: '學歷與榮譽',
      hackathonTitle: 'CHINICT 2012 黑客松競賽',
      hackathonSubtitle: '榮譽獎項 • 中國北京',
      technicalFocusTitle: '技術專長',
      languagesTitle: '語言能力',
      inquiriesTitle: '合作諮詢',
      inquiriesDescription:
        '開放特定合約專案開發、行動端架構審查與技術顧問合作。',
      inquiriesLink: '透過聯絡表單洽詢 →',
    },
    contact: {
      metaTitle: '聯絡方式 — Steven Masini',
      metaDescription:
        '提供 iOS 獨立接案開發、架構審查與後端整合服務。自 2011 年起專注於原生 iOS 開發。',
      eyebrow: '聯絡方式',
      title: '聊聊您的下一個專案。',
      description:
        '提供 iOS 獨立接案開發、架構審查與後端整合服務。自 2011 年起專注於打造高品質原生 iOS 應用程式。',
      directContactTitle: '直接聯繫',
      locationAndTimezoneLabel: '所在地與時區',
      remoteLabel: '遠端合作',
      clockPrefix: '台北',
      professionalProfileLabel: '專業社群檔案',
      workingNotesTitle: '合作與工作模式',
      notes: [
        {
          title: '預設非同步高效溝通',
          description:
            '偏好清晰且有文件紀錄的非同步溝通（GitHub PR、Linear 工單、精簡螢幕錄影），減少不必要會議並保持高度開發專注力。',
        },
        {
          title: '跨時區協作彈性',
          description:
            '常駐台北 (UTC+8)，工作時段可順暢銜接北美早晨交接、歐洲下午同步會議及亞太區上班時間。',
        },
        {
          title: '回覆時效',
          description: '週一至週五的洽詢訊息通常會在 24 小時內回覆。',
        },
      ],
      formTitle: '發送訊息',
      formSubtitle: '請填寫下方簡要資訊以開啟對話。',
      nameLabel: '您的姓名',
      namePlaceholder: 'Alex Chen',
      emailLabel: '電子郵件',
      emailPlaceholder: 'alex@company.com',
      projectTypeLabel: '專案類型',
      projectTypes: [
        '全新 iOS 應用程式開發',
        '架構重構與長期維護',
        '效能優化與閃退診斷',
        '技術顧問 / 架構審查',
      ],
      messageLabel: '專案需求說明',
      messagePlaceholder:
        '請簡述您的應用程式內容、技術架構（SwiftUI/UIKit、後端）與預計時程...',
      submitBtn: '發送訊息',
      sendingBtn: '傳送中...',
      sentBtn: '訊息已送出',
      successTitle: '已收到您的訊息。',
      successBody: '感謝您的聯繫，我會盡快審閱您的內容並與您回覆。',
      errorTitle: '目前無法傳送訊息。',
      errorBodyPrefix: '請稍後再試，或直接透過以下方式聯繫：',
    },
  },
  overviewSelectedWork: [
    {
      title: 'Strong Workout Tracker',
      subtitle: 'iOS 客戶端 • ~500萬註冊用戶 • ~58萬 MAU',
      period: '2019 — 至今',
      icon: '/images/apps/strong.jpg',
      href: 'https://apps.apple.com/us/app/strong-workout-tracker-gym-log/id464254577',
      description:
        '全球頂尖健身訓練紀錄 App，擁有約 500 萬註冊用戶、58 萬月活躍用戶 (MAU) 及 4.9 ★ 評價（全球逾 18.5 萬則評分）。參與 Strong 6.0 的 SwiftUI 與 Combine 大型重構、實作即時動態 (Live Activity) 與動態島 (Dynamic Island) 休息計時器、導入 Brzycki 與 Epley 公式提升 xRM 最大肌力估算精準度，並強化動作列表快取、篩選與模糊搜尋功能。',
    },
    {
      title: 'SELECT',
      subtitle: 'Super Effective',
      period: '2017 — 2019',
      icon: '/images/apps/select.jpg',
      href: 'https://apps.apple.com/us/app/select-your-community/id1076478889',
      description:
        '同時參與原生 iOS 版本（透過 CocoaPods 模組化與 MVVM + 依賴注入將編譯時間從 70 分鐘縮短至 11 分鐘）與 React Native 跨平台重寫版本（制定 WebSocket 通訊協定、開發 MFS 多重好友推薦系統、深層連結自訂引導頁，以及 Objective-C 原生圖片選擇器橋接模組）。',
    },
    {
      title: 'CURIO EYE',
      subtitle: 'CuriosityChina (Farfetch 集團旗下)',
      period: '2016 — 2017',
      icon: '/images/apps/curioeye.jpg',
      description:
        '擔任 CURIO EYE 唯一 iOS 開發工程師，專為微信公眾號管理者打造的行動端工具。以 Swift 從零獨立完成 v1.0 至 v1.1.5 全部開發，負責雙週版本發布、App Store 搜尋優化 (ASO)、安裝包體積瘦身與產品規劃。',
    },
    {
      title: 'Talkmate (全球說)',
      subtitle: '北京兩百小時教育科技 • 1,000萬+ 用戶',
      period: '2015',
      icon: '/images/apps/talkmate.jpg',
      href: 'https://apps.apple.com/cn/app/quan-qiu-shuotalkmate-ti-gao/id959231176',
      description:
        '帶領 3–4 名 iOS 工程師開發 Talkmate 語言學習平台（4.7 ★、1.9 萬+ 評分、獲 Apple App Store 官方精選推薦及聯合國教科文組織 UNESCO 官方合作夥伴）。接手停滯逾一年的專案，以 Swift 全面重寫架構、大幅縮減 App 體積並順利交付 v1.0 至 v2.1 版本。',
    },
  ],
  overviewExperience: [
    {
      role: 'iOS 與 Node.js 獨立開發工程師 (Freelance)',
      period: '2019 — 至今',
      location: '台灣台北市',
      summary:
        '長期負責 Strong Workout Tracker（~500萬註冊用戶、~58萬 MAU、4.9 ★ — SwiftUI/Combine v6.0 重構、即時動態、xRM 演算法、模糊搜尋）之 iOS 工程開發，以及相關 Node.js 後端服務。',
    },
    {
      role: '行動端開發工程師 (iOS & React Native) — Super Effective',
      period: '2017 — 2019',
      location: '中國北京',
      summary:
        '負責 SELECT 原生 iOS (v1.32–1.37) 與 React Native 跨平台重寫版 (v1.38+)。將編譯時間由 70 分鐘降至 11 分鐘，並打造 WebSocket、MFS 與原生橋接模組。',
    },
    {
      role: 'iOS 行動端開發工程師 — CuriosityChina (Farfetch)',
      period: '2016 — 2017',
      location: '中國北京',
      summary:
        '擔任 CURIO EYE (v1.0–1.1.5) 唯一 iOS 工程師。以 Swift 從零建立完整程式碼庫，執行雙週迭代發布與 ASO 優化。',
    },
    {
      role: '首席 iOS 開發工程師 (Lead) — 北京兩百小時教育科技',
      period: '2015',
      location: '中國北京',
      summary:
        '帶領 3–4 人 iOS 團隊開發 Talkmate（1,000萬+ 用戶、4.7 ★）。以 Swift 全面重寫程式碼、優化資源體積並交付 v1.0 至 v2.1 版本。',
    },
    {
      role: 'iOS 行動端開發工程師 — userADgents',
      period: '2012 — 2014',
      location: '法國巴黎',
      summary:
        '為法國知名媒體與大型企業客戶交付 5 款重點 iPhone、iPad 與 Windows Phone 應用程式（Corse Matin、Le Trot、myPMU、Belles Demeures、FFB Déchets BTP）。',
    },
  ],
  workPageStats: [
    { label: '上線實績', value: '15+ 款商店 App' },
    { label: '核心專長', value: 'Swift, SwiftUI & UIKit' },
    { label: '累計觸及', value: '2,500萬+ 用戶' },
    { label: '開發資歷', value: '自 2011 年起' },
  ],
  flagshipProjects: [
    {
      title: 'Strong Workout Tracker',
      period: '2019 – 至今',
      roleType: '獨立接案 (Freelance)',
      icon: '/images/apps/strong.jpg',
      summary:
        '全球最受歡迎的重訓與健身紀錄應用程式之一，擁有約 5,000,000 名註冊用戶、約 580,000 名月活躍用戶 (MAU)、全球超過 185,000 則 App Store 評分 (4.9 ★)，並獲 CNBC 與 The Verge 專文推薦。長期參與核心架構演進與關鍵功能開發。',
      tags: [
        'Swift',
        'SwiftUI',
        'Combine',
        'ActivityKit',
        'Core Data',
        'HealthKit',
      ],
      highlights: [
        {
          title: 'Strong 6.0 大型架構重構 (SwiftUI & Combine)',
          description:
            '參與大規模程式碼庫現代化重構，導入 SwiftUI 與 Combine 響應式資料流，成功推動指標性的 6.0 版本發布。',
        },
        {
          title: '即時動態 (Live Activities) 與動態島休息計時器',
          description:
            '實作並發布 Live Activity 與動態島 (Dynamic Island) 功能，讓用戶在 iOS 鎖定畫面與動態島上直接查看並操作組間休息倒數計時器。',
        },
        {
          title: 'xRM 最大肌力估算引擎 (Brzycki & Epley 公式)',
          description:
            '於個人最佳紀錄 (PR)、圖表與數據分析中新增 Brzycki 與 Epley 雙公式支援，大幅提升 xRM（特定反覆次數下之預估最大負重表現）的計算精準度。',
        },
        {
          title: '動作列表快取加速、進階篩選與即時模糊搜尋',
          description:
            '優化動作列表快取機制以提升載入速度，重構篩選與排序邏輯，並協助開發具備即時字元高亮顯示的模糊搜尋 (Fuzzy Search) 功能。',
        },
        {
          title: '自訂主題圖示、資料庫診斷工具、隱私合規與日常維護',
          description:
            '開發自訂佈景主題與替換桌面圖示功能、建置本地資料庫診斷工具、落實歐盟 GDPR 與 Apple 隱私權標籤合規，並負責日常維護、閃退修復與技術支援。',
        },
      ],
      footerNote:
        'App Store：4.9 ★ (18.5萬+ 則評分) • ~500萬註冊用戶 • ~58萬 MAU',
      appStoreUrl:
        'https://apps.apple.com/us/app/strong-workout-tracker-gym-log/id464254577',
      appStoreLabel: '於 App Store 查看 →',
    },
    {
      title: 'SELECT — Your Community',
      period: '2017 – 2019',
      roleType: '北京 • 全職',
      icon: '/images/apps/select.jpg',
      summary:
        '連結共同興趣用戶的跨平台社群應用程式。同時參與原生 iOS 程式碼庫 (v1.32–1.37) 架構優化，以及後續 React Native 跨平台全面重寫 (v1.38+)。',
      tags: [
        'Swift 3.0',
        'React Native',
        'Objective-C',
        'WebSocket',
        'MVVM',
        'Fastlane',
        'Jenkins',
      ],
      highlights: [
        {
          title:
            '原生 iOS 階段 (v1.32–1.37) — 編譯時間由 70 分鐘縮短至 11 分鐘 (-84%)',
          description:
            '透過 CocoaPods 將程式碼庫拆解模組化、重構為具備依賴注入 (DI) 的 MVVM 架構，並以 Fastlane 與 Jenkins 建置持續交付 (CI/CD) 流程。',
        },
        {
          title: 'React Native 重寫階段 (v1.38+) — WebSocket 協定與核心功能',
          description:
            '制定並實作客戶端與伺服器端 WebSocket 通訊協定、打造 MFS (Multi Friend Selector) 智慧聯絡人搜尋與推薦系統，以及支援深層連結 (Deep Link) 觸發的客製化啟動引導畫面。',
        },
        {
          title: '原生 Objective-C 圖片選擇器橋接與跨平台 Flexbox 介面',
          description:
            '以 Objective-C 開發高效能原生圖片選擇器並橋接至 React Native，同時完成相容 iOS 與 Android 的響應式 Flexbox 畫面佈局。',
        },
      ],
      footerNote: 'App Store：5.0 ★ • 於 iOS 與 Google Play 雙平台發布',
      appStoreUrl:
        'https://apps.apple.com/us/app/select-your-community/id1076478889',
      appStoreLabel: '於 App Store 查看 →',
    },
  ],
  spotlightProjects: [
    {
      title: 'CURIO EYE',
      category: '唯一 iOS 開發工程師 • Farfetch 集團',
      period: '2016 – 2017',
      icon: '/images/apps/curioeye.jpg',
      summary:
        '於 CuriosityChina（Farfetch 旗下公司）從零打造的微信公眾號管理輔助 iOS App，獨立負責 v1.0 至 v1.1.5 的完整開發與發布。',
      bullets: [
        '使用 Swift 與 UIKit 從零撰寫整個應用程式，全權負責原始碼、資源管理與系統架構。',
        '規劃並執行雙週版本迭代、App Store 搜尋優化 (ASO)，並參與產品發展方向決策。',
        '極小化安裝包體積與記憶體資源佔用，確保快速下載與流暢的執行效能。',
      ],
      company: 'CuriosityChina (Farfetch 集團旗下)',
      locationOrLinkText: '北京',
    },
    {
      title: 'Talkmate (全球說)',
      category: '首席 iOS 開發工程師 • 1,000萬+ 用戶',
      period: '2015',
      icon: '/images/apps/talkmate.jpg',
      summary:
        '大型語言學習平台（突破 1,000 萬用戶、獲 Apple App Store 精選推薦及聯合國教科文組織 UNESCO 官方合作夥伴）。接手開發逾一年的專案並成功轉型為旗艦級產品（v1.0 至 v2.1）。',
      bullets: [
        '帶領 3–4 名 iOS 開發人員，負責任務分配、架構決策與版本發布排程。',
        '使用 Swift 與 UIKit 全面重寫並重構既有程式碼庫，大幅提升擴充性與可維護性。',
        '透過資源最佳化縮減 App 安裝包大小，並主導 ASO 與產品功能演進。',
      ],
      company: '北京兩百小時教育科技',
      ratingLabel: 'App Store：4.7 ★ (19,000+ 則評分)',
      locationOrLinkText: '於 App Store 查看 →',
      appStoreUrl:
        'https://apps.apple.com/cn/app/quan-qiu-shuotalkmate-ti-gao/id959231176',
    },
  ],
  agencyProjects: [
    {
      title: 'Corse Matin per noï (v1.0–1.2)',
      subtitle: '數位報紙閱讀器 (iPhone & iPad 通用版)',
      icon: '/images/apps/corsematin.jpg',
      description:
        '整合 MiLibris API v3 與 v4 實現日報與週刊的互動式 PDF 閱讀體驗，並設計與開發 iPad 版本。針對 iOS 4.3+ 打造的前瞻架構，在未經大改版的情況下持續穩定運作至 iOS 11。',
      techLabel: 'Objective-C / MiLibris',
    },
    {
      title: 'Le Trot — Cheval Français (v1.1)',
      subtitle: '法國賽馬資訊平台 (iPhone & iPad)',
      icon: '/images/apps/letrot.jpg',
      description:
        '為法國官方輕駕車賽馬協會全面重寫 iPhone 與 iPad 版本原始碼，確保相容於 iOS 5+，並修復關鍵的 Apple 推播通知服務 (APNs) 問題。',
      techLabel: 'Objective-C / APNs',
    },
    {
      title: "myPMU — L'information Hippique (v1.0)",
      subtitle: '法國權威賽馬資訊 App (iPhone & iPad)',
      ratingLabel: 'App Store：4.6 ★ (45,400+ 則評分)',
      icon: '/images/apps/mypmu.jpg',
      description:
        '於 3 人 iOS 工程團隊中接手開發中的法國最大賽馬平台專案，負責客製化 UI 元件實作與 Core Data 本地資料庫架構支援。',
      techLabel: 'Objective-C / Core Data',
      appStoreUrl: 'https://apps.apple.com/fr/app/pmu-turf/id719630042',
      appStoreLabel: '於 App Store 查看 →',
    },
    {
      title: 'Belles Demeures (v1.0)',
      subtitle: '頂級豪宅房地產平台 (iPhone & iPad)',
      ratingLabel: 'App Store：4.8 ★ (3,100+ 則評分)',
      icon: '/images/apps/belledemeures.jpg',
      description:
        '於 3 人開發團隊中完成 iPhone 與 iPad 通用版開發與客製化介面整合，支援橫跨 10 多個國家、超過 30,000 筆頂級豪宅物件瀏覽。',
      techLabel: 'Objective-C / UIKit',
      appStoreUrl: 'https://apps.apple.com/fr/app/belles-demeures/id398333286',
      appStoreLabel: '於 App Store 查看 →',
    },
    {
      title: 'Fédération Française du Bâtiment (FFB) — Déchets BTP',
      subtitle: '營建廢棄物管理系統 (iOS 7 & Windows Phone 8)',
      icon: '/images/apps/ffb.jpg',
      description:
        '為法國建築業聯合會同時開發 iOS 7 與 Windows Phone 8 雙平台客戶端，負責 REST API 串接、導覽與介面實作，以及 Core Data 快取管理。',
      techLabel: 'Objective-C & WP8 / Core Data',
    },
  ],
  earlyFoundations: [
    {
      category: 'Android • C4M Prod (2011)',
      title: 'Qobuz 高音質音樂串流 (100萬+ 下載 • 4.8 ★)',
      description:
        '開發 Android 音樂播放器介面、客製化藝人資訊頁面，以及曲目與歌單的社群分享功能（Facebook、Twitter、簡訊、Email）。',
      stack: 'Java / Android SDK / 社群 API',
    },
    {
      category: 'Android • C4M Prod (2011)',
      title: 'RATP 巴黎大眾運輸官方 App (1,000萬+ 下載 • 4.6 ★)',
      description:
        '更新巴黎地鐵與大眾運輸內部時刻表資料庫，並為官方應用程式整合 AdMob 行動廣告框架。',
      stack: 'Java / Android / AdMob',
    },
    {
      category: '後端服務 • C4M Prod (2011)',
      title: 'Zend Framework Web API',
      description:
        '維護 Atol les opticiens、福斯汽車 (Volkswagen) 與 Digitick 等大型商業客戶之後端 Web 服務。',
      stack: 'PHP / Zend Framework',
    },
    {
      category: '推播伺服器 • C4M Prod (2011)',
      title: 'Pushmii 推播伺服器',
      description:
        '負責伺服器維護並開發 PHP 自動化部署客戶端函式庫，大幅簡化推播通知發送流程。',
      stack: 'PHP / 推播通知',
    },
    {
      category: 'Windows C# • C4M Prod (2011)',
      title: '第一三共 (Daiichi-Sankyo) e-ADV',
      description:
        '使用 Microsoft C# 與 .NET 4.0 開發醫療 e-ADV 應用程式之 HTML 樣板產生器，具備自動化擷取與格式化 Excel 資料功能。',
      stack: 'C# / .NET 4.0 / Excel',
    },
    {
      category: '前端開發 • Technivore (2009)',
      title: 'CMS 與 XHTML 網站平台',
      description:
        '為 Association Pacamômes 將 Joomla 1.0 升級至 1.5 並完成資料庫轉移、SEO 曝光優化與 CSS3/JS 強化；為 Programme SIRS 手寫打造 XHTML/CSS2 頁面；並維護馬賽運動資訊網之 SPIP CMS。',
      stack: 'XHTML / CSS2 & CSS3 / JS / Joomla / SPIP',
    },
  ],
  experiencePageStats: [
    {
      label: '總開發年資',
      value: '自 2011 年起',
      sublabel: '15+ 年軟體工程經驗',
    },
    {
      label: '已發布應用',
      value: '15+ 款作品',
      sublabel: '累計超過 2,500 萬用戶',
    },
    {
      label: '核心領域',
      value: '原生 iOS',
      sublabel: 'Swift, SwiftUI & Node.js',
    },
    {
      label: '目前據點',
      value: '台灣台北',
      sublabel: 'UTC+8 • 服務全球客戶',
    },
  ],
  experienceTimeline: [
    {
      role: 'iOS 與 Node.js 獨立開發工程師 (Freelance)',
      companyAndLocation: '自由接案 • 台灣台北',
      period: '2019年12月 – 至今',
      isCurrent: true,
      summary:
        '與全球客戶合作開發原生 iOS 與 Node.js 後端專案，包含長期參與 Strong Workout Tracker（約 500 萬註冊用戶、58 萬 MAU、全球逾 18.5 萬則評分達 4.9 ★，獲 CNBC 與 The Verge 報導推薦）的核心工程研發。',
      highlightProject: 'Strong Workout Tracker',
      bullets: [
        '參與大規模程式碼庫現代化重構，導入 SwiftUI 與 Combine 架構並順利推出 Strong 6.0。',
        '實作並上線 Live Activity（即時動態）與動態島功能，於鎖定畫面及動態島即時顯示訓練休息倒數計時器。',
        '於個人紀錄、圖表與訓練分析中整合 Brzycki 與 Epley 雙計算公式，提升 xRM（最大反覆次數重量估算）準確度。',
        '強化動作列表篩選器、排序邏輯與快取機制以加速載入效能，並協助開發具備即時字元高亮的模糊搜尋功能。',
        '開發自訂主題、替代桌面圖示、本地資料庫診斷工具、落實 GDPR 與 Apple 隱私權標籤合規，並負責持續性維護、閃退修復與技術支援。',
      ],
      tags: [
        'Swift',
        'SwiftUI',
        'Combine',
        'ActivityKit',
        'Core Data',
        'HealthKit',
        'Node.js',
      ],
    },
    {
      role: '行動端開發工程師 (iOS & React Native)',
      companyAndLocation: 'Super Effective • 中國北京',
      period: '2017年7月 – 2019年11月',
      summary:
        '負責開發 SELECT - Your Community 社群平台，同時貢獻於原生 iOS 應用程式 (v1.32–1.37) 以及完整的跨平台 React Native 重寫版本 (v1.38+)。',
      highlightProject: 'SELECT - Your Community',
      bullets: [
        '原生 iOS (v1.32–1.37)：將編譯時間由 70 分鐘大幅縮短至 11 分鐘 (-84%)、以 CocoaPods 實作模組化、重構為 MVVM 搭配依賴注入，並使用 Fastlane 與 Jenkins 建立 CI/CD 自動化流程。',
        'React Native 重寫 (v1.38+)：制定並實作 WebSocket 通訊協定、打造 MFS 智慧聯絡人搜尋與推薦系統，以及深層連結客製化啟動引導頁。',
        '開發橋接至 React Native 的 Objective-C 原生圖片選擇器模組，並完成支援 iOS 與 Android 的跨平台 Flexbox 佈局。',
      ],
      tags: [
        'Swift 3.0',
        'React Native',
        'Objective-C',
        'WebSocket',
        'MVVM',
        'Fastlane',
        'Jenkins',
      ],
    },
    {
      role: 'iOS 行動端開發工程師',
      companyAndLocation: 'CuriosityChina (Farfetch 集團旗下) • 中國北京',
      period: '2016年1月 – 2017年4月',
      summary:
        '擔任唯一 iOS 開發工程師，從零獨立打造服務微信公眾號管理者的 CURIO EYE 應用程式（v1.0 至 v1.1.5）。',
      highlightProject: 'CURIO EYE',
      bullets: [
        '以 Swift 與 UIKit 從零撰寫完整應用程式，全權負責原始碼、資源與架構設計。',
        '規劃並執行每兩週一次的版本發布週期、負責 App Store 搜尋優化 (ASO) 並參與產品路線圖決策。',
        '在快速迭代中持續優化 App 安裝包大小與資源消耗，維持高品質程式碼標準。',
      ],
      tags: ['Swift', 'UIKit', 'WeChat API', 'ASO', 'iOS SDK'],
    },
    {
      role: '首席 iOS 開發工程師 (Lead)',
      companyAndLocation: '北京兩百小時教育科技 • 中國北京',
      period: '2015年3月 – 2015年12月',
      summary:
        '帶領 3–4 名 iOS 工程師開發 Talkmate 全球說（1,000萬+ 用戶、1.9萬+ 評分達 4.7 ★、獲 Apple App Store 官方精選推薦及 UNESCO 官方合作夥伴）。接手開發逾一年的專案並成功交付 v1.0 至 v2.1 版本。',
      highlightProject: 'Talkmate',
      bullets: [
        '以 Swift 與 UIKit 全面重寫並重構程式碼庫，確保高擴充性與長期可維護性。',
        '負責團隊任務分配、技術架構決策與版本發布時程管理。',
        '透過資源最佳化顯著縮減安裝包體積，並參與 ASO 與產品策略制定。',
      ],
      tags: ['Swift', 'UIKit', '團隊領導', '架構重寫', '即時通訊'],
    },
    {
      role: 'iOS 行動端開發工程師',
      companyAndLocation: 'userADgents • 法國巴黎',
      period: '2012年9月 – 2014年11月',
      summary:
        '為法國知名媒體與大型企業客戶開發橫跨多個產業的 iPhone、iPad 與 Windows Phone 應用程式。',
      bullets: [
        'Corse Matin per noï (v1.0–1.2)：整合 MiLibris API v3 與 v4 支援互動式 PDF 報紙閱讀、設計與開發 iPad 版本，並以相容 iOS 4.3+ 的穩健架構持續運作至 iOS 11。',
        'Le Trot - Cheval Français (v1.1)：全面重寫 iPhone 與 iPad 版本原始碼、確保 iOS 5+ 相容性並修復推播通知問題。',
        "myPMU - L'information Hippique (v1.0，4.6 ★ / 4.5萬+ 評分) 與 Belles Demeures (v1.0，4.8 ★ / 3,100+ 評分)：於 3 人開發團隊中接手進行中專案 (myPMU) 並交付 iPhone/iPad 通用版應用、UI 整合與 Core Data 本地資料庫支援。",
        '法國建築業聯合會 (FFB) - Déchets BTP：同時開發 iOS 7 與 Windows Phone 8 雙平台應用程式，負責 REST API 串接、介面導覽與 Core Data 快取管理。',
      ],
      tags: [
        'Objective-C',
        'UIKit',
        'Core Data',
        '推播通知',
        'MiLibris API',
        'Windows Phone 8',
      ],
    },
    {
      role: '軟體開發實習生 (Android, Web, C#)',
      companyAndLocation: 'C4M Prod • 法國馬賽',
      period: '2011年5月 – 2011年8月',
      isCompact: true,
      summary:
        '大學三年級跨平台綜合技術實習，涵蓋 Android、PHP Web 服務與 Windows C#/.NET 開發。',
      bullets: [
        'Android：開發 Qobuz 音樂播放器介面（100萬+ 下載、4.8 ★）、藝人資訊頁面與社群分享功能；更新巴黎大眾運輸 RATP 內部時刻表資料庫（1,000萬+ 下載、4.6 ★）並整合 AdMob。',
        'Web 與推播：維護 Zend Framework 後端服務（Atol 眼鏡、福斯汽車、Digitick），並為 Pushmii 推播伺服器打造 PHP 自動化部署客戶端函式庫。',
        'Windows C#：使用 C# 與 .NET 4.0 為第一三共 (Daiichi-Sankyo) e-ADV 開發具備 Excel 資料擷取功能的 HTML 樣板產生器。',
      ],
      tags: ['Java (Android)', 'PHP (Zend)', 'C# (.NET 4.0)', 'AdMob'],
    },
    {
      role: '前端網頁開發實習生',
      companyAndLocation: 'Technivore • 法國馬賽',
      period: '2009年7月 – 2009年11月',
      isCompact: true,
      summary:
        '大學一年級網頁前端與 CMS 轉移實習：為 Association Pacamômes 將 Joomla 1.0 升級至 1.5 並完成資料庫轉移、合作夥伴搜尋曝光優化與 CSS3/JS 強化；為 Programme SIRS 手寫打造 XHTML/CSS2 頁面；並維護馬賽運動資訊網之 SPIP CMS。',
      tags: ['HTML/XHTML', 'CSS2/CSS3', 'JavaScript', 'Joomla', 'SPIP', 'PHP'],
    },
  ],
  educationList: [
    {
      institution: '法國巴黎 EPITECH 歐洲理工學院',
      period: '2008 – 2013',
      subtitle: 'European Institute of Technology',
      degree: '資訊科技碩士 (Master in Information Technology)',
      description:
        '奠定紮實的 UNIX 與 C99 系統程式設計基礎，並深入研習 C++、PHP 與 C# 之物件導向程式設計 (OOP) 與設計模式。',
    },
    {
      institution: '北京交通大學',
      period: '2011 – 2012',
      subtitle: '國際學術交換計畫',
      degree: '電腦軟體工程碩士課程',
      description:
        '課程專注於軟體工程方法論、跨文化國際團隊協作以及中文進修。',
    },
  ],
  technicalFocusList: [
    {
      category: '核心技術',
      skills:
        'Swift, Objective-C, UIKit, SwiftUI, Combine, SwiftData, Core Data, SQLite, Typescript/Javascript, React Native, Rust',
    },
    {
      category: '系統架構',
      skills:
        'MVVM, MVC, 函數式編程 (FP), 響應式編程 (Reactive), 模組化框架, 依賴注入 (DI)',
    },
    {
      category: '開發工具與測試',
      skills:
        'Xcode Instruments, Xcode Cloud, Fastlane, Jenkins, Git, GitHub Actions, REST APIs, 命令列工具 (CLI)',
    },
    {
      category: '視覺與設計工具',
      skills: 'Photoshop, Sketch, Figma, Affinity, Glyphs, Remotion',
    },
    {
      category: 'AI 模型與工作流',
      skills:
        'Claude Code, Google Gemini, Google Stitch, Nano Banana, Black Forest Flux3',
    },
  ],
  languagesList: [
    { language: '法文 (French)', proficiency: '母語' },
    { language: '英文 (English)', proficiency: '雙語流利' },
    { language: '中文 (Mandarin)', proficiency: '工作流利' },
    { language: '日文 (Japanese)', proficiency: '學習中' },
  ],
};

export const portfolioByLocale: Record<Locale, PortfolioData> = {
  en: enData,
  fr: frData,
  'zh-tw': zhTwData,
};

export function getPortfolioData(lang: Locale = defaultLocale): PortfolioData {
  return portfolioByLocale[lang] ?? enData;
}

// Default English exports for backwards compatibility
export const siteMetadata = enData.siteMetadata;
export const navItems = enData.navItems;
export const overviewSelectedWork = enData.overviewSelectedWork;
export const overviewExperience = enData.overviewExperience;
export const workPageStats = enData.workPageStats;
export const flagshipProjects = enData.flagshipProjects;
export const spotlightProjects = enData.spotlightProjects;
export const agencyProjects = enData.agencyProjects;
export const earlyFoundations = enData.earlyFoundations;
export const experiencePageStats = enData.experiencePageStats;
export const experienceTimeline = enData.experienceTimeline;
export const educationList = enData.educationList;
export const technicalFocusList = enData.technicalFocusList;
export const languagesList = enData.languagesList;
