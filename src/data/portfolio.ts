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
  locationOrLinkText: string;
  appStoreUrl?: string;
}

export interface AgencyProject {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  techOrLinkLabel: string;
  appStoreUrl?: string;
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

export const siteMetadata = {
  name: 'Steven Masini',
  monogram: 'SM',
  tagline: 'iOS and Backend Developer in Taipei',
  siteUrl: 'https://stevenmasini.com',
  location: 'Taipei, Taiwan',
  timezoneLabel: 'Taipei Standard Time (UTC+8)',
  timezoneShort: 'Taipei (UTC+8)',
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

export const navItems: NavItem[] = [
  { label: 'Overview', href: '/', id: 'overview' },
  { label: 'Apps & Work', href: '/apps-and-work', id: 'apps-and-work' },
  { label: 'Experience', href: '/experience', id: 'experience' },
  { label: 'Contact', href: '/contact', id: 'contact' },
];

export const overviewSelectedWork: OverviewWorkItem[] = [
  {
    title: 'Strong Workout Tracker',
    subtitle: 'iOS Client',
    period: '2019 — Present',
    icon: '/images/apps/strong.jpg',
    href: 'https://apps.apple.com/us/app/strong-workout-tracker-gym-log/id464254577',
    description:
      'Contributed to the SwiftUI & Combine refactoring for Strong 6.0, implemented Live Activity and Dynamic Island rest timers, improved xRM estimation accuracy (Brzycki & Epley formulas) across Personal Records and Charts, and enhanced Exercise List caching, filtering, and fuzzy search with character highlighting.',
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
    subtitle: 'Beijing 200H Education',
    period: '2015',
    icon: '/images/apps/talkmate.jpg',
    href: 'https://apps.apple.com/cn/app/quan-qiu-shuotalkmate-ti-gao/id959231176',
    description:
      'Led a team of 3–4 iOS developers for Talkmate, a language learning platform connecting students with native speakers. Inherited a stalled 1+ year project, completely rewrote the codebase in Swift, reduced bundle size, and shipped v1.0 through v2.1.',
  },
];

export const overviewExperience: OverviewExperienceSummary[] = [
  {
    role: 'Freelance iOS & Node.js Developer',
    period: '2019 — Present',
    location: 'Taipei City, Taiwan',
    summary:
      'Long-term iOS engineering on Strong Workout Tracker (SwiftUI/Combine v6.0 refactor, Live Activities, xRM formulas, fuzzy search) and companion Node.js backend services.',
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
      'Led 3–4 iOS developers on Talkmate. Rewrote the entire codebase in Swift, optimized bundle size, and delivered versions 1.0 through 2.1.',
  },
  {
    role: 'iOS Mobile Developer — userADgents',
    period: '2012 — 2014',
    location: 'Paris, France',
    summary:
      'Delivered 5 major iPhone, iPad, and Windows Phone applications for French media and enterprise clients (Corse Matin, Le Trot, myPMU, Belles Demeures, FFB Déchets BTP).',
  },
];

export const workPageStats: StatItem[] = [
  { label: 'Track Record', value: '15+ Store Apps' },
  { label: 'Specialization', value: 'Swift, SwiftUI & UIKit' },
  { label: 'Scale', value: 'Millions of Users' },
  { label: 'Experience', value: 'Since 2011' },
];

export const flagshipProjects: FlagshipProject[] = [
  {
    title: 'Strong Workout Tracker',
    period: '2019 – Present',
    roleType: 'Freelance',
    icon: '/images/apps/strong.jpg',
    summary:
      'One of the world’s leading workout and strength-training apps on the App Store, trusted by millions of lifters worldwide. Long-term collaboration across major architectural milestones and core user-facing features.',
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
        title: 'Customizable Themes, Diagnostics & Privacy Compliance',
        description:
          'Developed customizable themes and alternate app icons, built local database diagnostic tools, and implemented GDPR and Apple Privacy Nutrition Label compliance.',
      },
    ],
    footerNote: 'App Store: 4.9 ★ (100k+ reviews)',
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
        title: 'Native iOS Phase (v1.32–1.37) — Build Time Cut from 70 min to 11 min (-84%)',
        description:
          'Modularized the codebase using CocoaPods, refactored the architecture to MVVM with Dependency Injection, and configured Continuous Delivery using Fastlane and Jenkins.',
      },
      {
        title: 'React Native Rewrite (v1.38+) — WebSocket Protocol & Core Features',
        description:
          'Defined and implemented the client/server WebSocket communication protocol, built the Multi Friend Selector (MFS) intelligent contact search and suggestion system, and built deep-link activated custom intro launch screens.',
      },
      {
        title: 'Native Objective-C Image Picker & Cross-Platform Flexbox UI',
        description:
          'Built a custom Objective-C native image picker module bridged to React Native for optimal performance, and implemented responsive Flexbox screen layouts across iOS and Android.',
      },
    ],
    footerNote: 'Shipped to iOS App Store & Google Play',
    appStoreUrl:
      'https://apps.apple.com/us/app/select-your-community/id1076478889',
    appStoreLabel: 'View on App Store →',
  },
];

export const spotlightProjects: SpotlightProject[] = [
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
    category: 'Lead iOS Developer • EduTech',
    period: '2015',
    icon: '/images/apps/talkmate.jpg',
    summary:
      'Language learning platform connecting students with native speakers for real-time conversation practice. Inherited a project in development for over a year and transformed it into a polished product (v1.0 to v2.1).',
    bullets: [
      'Led a team of 3–4 iOS developers, managing task allocation, architecture decisions, and release planning.',
      'Completely rewrote and re-architected the entire codebase in Swift and UIKit for scalability and maintainability.',
      'Reduced app bundle size through resource optimization and drove App Store Optimization (ASO) and product decisions.',
    ],
    company: 'Beijing 200H Education',
    locationOrLinkText: 'App Store →',
    appStoreUrl:
      'https://apps.apple.com/cn/app/quan-qiu-shuotalkmate-ti-gao/id959231176',
  },
];

export const agencyProjects: AgencyProject[] = [
  {
    title: 'Corse Matin per noï (v1.0–1.2)',
    subtitle: 'Digital Newspaper Reader (Universal iPhone & iPad)',
    icon: '/images/apps/corsematin.jpg',
    description:
      'Integrated MiLibris API v3 and v4 for enriched PDF viewing of daily and weekly publications and designed/developed the iPad version. Built for iOS 4.3+ with forward-thinking architecture that continued running on iOS 11 without major updates.',
    techOrLinkLabel: 'Objective-C / MiLibris',
  },
  {
    title: 'Le Trot — Cheval Français (v1.1)',
    subtitle: 'Horse Racing Information (iPhone & iPad)',
    icon: '/images/apps/letrot.jpg',
    description:
      "Completely rewrote the source code for both iPhone and iPad versions for France's harness racing authority, ensured iOS 5+ compatibility, and fixed critical Apple Push Notification service (APNs) issues.",
    techOrLinkLabel: 'Objective-C / APNs',
  },
  {
    title: 'myPMU (v1.0)',
    subtitle: 'Horse Racing Information App',
    icon: '/images/apps/mypmu.jpg',
    description:
      'Developed within a 3-developer iOS engineering team, responsible for custom UI implementation and Core Data local database support.',
    techOrLinkLabel: 'App Store ↗',
    appStoreUrl: 'https://apps.apple.com/fr/app/pmu-turf/id719630042',
  },
  {
    title: 'Belles Demeures (v1.0)',
    subtitle: 'Luxury Real Estate (iPhone & iPad)',
    icon: '/images/apps/belledemeures.jpg',
    description:
      'Worked in a 3-developer team delivering full universal iPhone and iPad development and custom UI integration for prestige property listings.',
    techOrLinkLabel: 'App Store ↗',
    appStoreUrl: 'https://apps.apple.com/fr/app/belles-demeures/id398333286',
  },
  {
    title: 'FFB — Déchets BTP',
    subtitle: 'Construction Waste Management (iOS 7 & Windows Phone 8)',
    icon: '/images/apps/ffb.jpg',
    description:
      'Developed both the iOS 7 and Windows Phone 8 clients, handling REST API integration, navigation and UI implementation, and Core Data cache management.',
    techOrLinkLabel: 'iOS 7 & WP8 / Core Data',
  },
];

export const earlyFoundations: EarlyFoundation[] = [
  {
    category: 'Android • C4M Prod (2011)',
    title: 'Qobuz Music Streaming',
    description:
      'Developed the Android music player interface, custom artist information section, and social sharing (Facebook, Twitter, SMS, Email) for tracks and playlists.',
    stack: 'Java / Android SDK / Social APIs',
  },
  {
    category: 'Android • C4M Prod (2011)',
    title: 'RATP Paris Transit',
    description:
      'Updated the internal Paris transit schedule database and integrated the AdMob mobile advertising framework.',
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
      'Upgraded Joomla 1.0 to 1.5 with DB migration for Association Pacamômes, hand-coded XHTML/CSS2 for Programme SIRS, and managed SPIP CMS for Faire du sport à Marseille.',
    stack: 'XHTML / CSS2 & CSS3 / JS / Joomla / SPIP',
  },
];

export const experiencePageStats: StatItem[] = [
  {
    label: 'Total Experience',
    value: 'Since 2011',
    sublabel: '15+ Years in Engineering',
  },
  {
    label: 'Shipped Apps',
    value: '15+ Releases',
    sublabel: 'Consumer & Enterprise',
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
];

export const experienceTimeline: ExperienceItem[] = [
  {
    role: 'Freelance iOS & Node.js Developer',
    companyAndLocation: 'Self-Employed • Taipei, Taiwan',
    period: 'Dec 2019 – Present',
    isCurrent: true,
    summary:
      'Collaborating with clients on native iOS and backend Node.js projects, including long-term engineering on Strong Workout Tracker, one of the most popular fitness tracking apps on the App Store.',
    highlightProject: 'Strong Workout Tracker',
    bullets: [
      'Contributed to the major codebase refactoring adopting SwiftUI and Combine, leading to the release of Strong 6.0.',
      'Implemented and shipped the Live Activity and Dynamic Island feature displaying active rest timers on the Lock Screen and Dynamic Island.',
      'Improved the xRM (x Repetition Maximum) estimation formula by adding support for both Brzycki and Epley formulas across Personal Records, Charts, and analytics.',
      'Enhanced Exercise List filters, sorting methods, and caching to improve loading performance, and helped develop fuzzy search with real-time character highlighting.',
      'Developed customizable themes, alternate app icons, local database diagnostic tools, and GDPR / Apple Privacy Nutrition Label compliance.',
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
    companyAndLocation: 'CuriosityChina (A Farfetch Company) • Beijing, China',
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
      'Led a team of 3–4 iOS developers for Talkmate, a language learning platform connecting students with native speakers worldwide. Inherited a project in development for over a year and delivered versions 1.0 through 2.1.',
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
      'myPMU (v1.0) & Belles Demeures (v1.0): Worked in 3-developer teams handling universal iPhone/iPad development, UI integration, and Core Data support.',
      'FFB - Déchets BTP: Developed both iOS 7 and Windows Phone 8 apps with REST API integration, UI/navigation, and Core Data cache management.',
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
      'Third-year multi-platform internship across Android, PHP Web Services, and Windows C#/.NET.',
    bullets: [
      'Android: Developed Qobuz music player UI, artist info views, and social sharing; updated RATP internal database and integrated AdMob.',
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
      'First-year internship focused on web frontend development and CMS migrations: upgraded Joomla 1.0 to 1.5 with database migration and CSS3/JS enhancements for Association Pacamômes, hand-coded XHTML/CSS2 for Programme SIRS, and managed SPIP CMS for Faire du sport à Marseille.',
    tags: ['HTML/XHTML', 'CSS2/CSS3', 'JavaScript', 'Joomla', 'SPIP', 'PHP'],
  },
];

export const educationList = [
  {
    institution: 'EPITECH Paris',
    period: '2008 – 2013',
    subtitle: 'European Institute of Technology',
    degree: "Master's in Computer Science",
    description:
      'Rigorous foundations in Unix environments, C99, systems architecture, algorithmic complexity, and OOP patterns.',
  },
  {
    institution: 'Beijing Jiaotong University',
    period: '2011 – 2012',
    subtitle: "Master's Academic Exchange",
    description:
      'Curriculum focused on software engineering methodologies, international collaboration, and Chinese language.',
  },
];

export const technicalFocusList = [
  {
    category: 'Primary Core',
    skills:
      'Swift, Objective-C, UIKit, SwiftUI, Combine, SwiftData, Core Data, SQLite, Typescript/Javascript, React Native, Rust',
  },
  {
    category: 'Architecture',
    skills: 'MVVM, MVC, Reactive, Modular Framework, Dependency Injection',
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
];

export const languagesList = [
  { language: 'English', proficiency: 'Fluent' },
  { language: 'French', proficiency: 'Native' },
  { language: 'Mandarin Chinese', proficiency: 'Conversational' },
];
