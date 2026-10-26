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
  siteUrl: 'https://stevenmasini.github.io',
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
      'Implemented custom theme engine, alternate app icons, and in-depth diagnostics. Resolved core database edge cases and brought the app into full compliance with GDPR and App Store nutrition labels.',
  },
  {
    title: 'SELECT',
    subtitle: 'Super Effective',
    period: '2017 — 2019',
    icon: '/images/apps/select.jpg',
    href: 'https://apps.apple.com/us/app/select-your-community/id1076478889',
    description:
      'Bridged Swift and React Native for a high-traffic community platform. Reduced CI build times from 70 to 11 minutes and wrote a native Objective-C media engine with real-time WebSocket sync.',
  },
  {
    title: 'CURIO EYE',
    subtitle: 'Farfetch & CuriosityChina',
    period: '2016 — 2017',
    icon: '/images/apps/curioeye.jpg',
    description:
      'Built the client iOS architecture for CURIO EYE, an enterprise social analytics and intelligence platform. Standardized bi-weekly release cycles, ASO, and real-time analytics REST integrations.',
  },
  {
    title: 'Talkmate',
    subtitle: 'Beijing 200H Education',
    period: '2015 — 2016',
    icon: '/images/apps/talkmate.jpg',
    href: 'https://apps.apple.com/cn/app/quan-qiu-shuotalkmate-ti-gao/id959231176',
    description:
      'Led an iOS team of 3–4 engineers for Talkmate, a high-traffic language education platform. Complete codebase rewrite, audio playback engine optimization, and peer code review workflows.',
  },
];

export const overviewExperience: OverviewExperienceSummary[] = [
  {
    role: 'Independent Consultant',
    period: '2019 — Present',
    location: 'Taipei City, Taiwan',
    summary:
      'High-impact mobile client contracts, performance auditing, and full-stack iOS and backend architecture.',
  },
  {
    role: 'Senior iOS Developer — Super Effective',
    period: '2017 — 2019',
    location: 'Beijing, China',
    summary:
      'Core client architecture for SELECT. Fastlane automated release pipelines and native bridge infrastructure.',
  },
  {
    role: 'Lead iOS Developer — CuriosityChina / Farfetch',
    period: '2015 — 2017',
    location: 'Beijing, China',
    summary:
      'Managed iOS team across Beijing & Paris. Code reviews, App Store releases, and memory management.',
  },
  {
    role: 'iOS Engineer — userADgents',
    period: '2011 — 2014',
    location: 'Paris, France',
    summary:
      'Engineered landmark French media and enterprise applications (Corse Matin, Le Trot, myPMU).',
  },
];

export const workPageStats: StatItem[] = [
  { label: 'Track Record', value: '15+ Store Apps' },
  { label: 'Specialization', value: 'Swift & Core Data' },
  { label: 'Scale', value: 'Millions of Users' },
  { label: 'Status', value: 'Available for Contract' },
];

export const flagshipProjects: FlagshipProject[] = [
  {
    title: 'Strong Workout Tracker',
    period: '2019 – Present',
    roleType: 'Freelance',
    icon: '/images/apps/strong.jpg',
    summary:
      'Worldwide staple gym logging application used by millions of active strength lifters. Long-term direct collaboration on core client infrastructure.',
    tags: ['Swift', 'Core Data', 'HealthKit', 'Diagnostics'],
    highlights: [
      {
        title: 'Customizable Theme Engine & Dynamic Icons',
        description:
          'Architected an extensible color abstraction layer allowing dynamic light, dark, and high-contrast themes without triggering disruptive view hierarchy restarts.',
      },
      {
        title: 'On-The-Fly Diagnostic Inspector',
        description:
          'Engineered internal QA tooling enabling developers to generate synthetic gym regimens, inspect local SQLite indices directly on device, and trace race conditions in real time.',
      },
      {
        title: 'GDPR & Privacy Architecture',
        description:
          'Engineered Apple Privacy Nutrition Label compliance pipelines and GDPR erasure flows, validated with end-to-end unit test suites.',
      },
      {
        title: 'Production Stability & Storage Optimization',
        description:
          'Continuous triage of complex concurrency crashes, background sync race conditions, and Apple HealthKit write-synchronization.',
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
      'High-throughput social commerce and realtime messaging platform. Stepped into a monolithic stalled codebase to restructure pipelines and bridge native subsystems.',
    tags: ['Swift 3', 'React Native', 'Objective-C', 'Fastlane'],
    highlights: [
      {
        title: 'CI/CD Build Time Cut from 70 min to 11 min (-84%)',
        description:
          'Decomposed the monolithic target into decoupled private CocoaPods frameworks and automated Jenkins builds with Fastlane, unlocking multiple releases per week.',
      },
      {
        title: 'High-Performance Native Photo Picker',
        description:
          'Replaced slow hybrid bridge libraries with a dedicated asynchronous Objective-C asset manager capable of steady 60fps scrolling across 50,000+ local photos.',
      },
      {
        title: 'Resilient Realtime WebSocket Subsystem',
        description:
          'Designed exponential backoff reconnection strategies and offline queue persistence for uninterrupted live bidding and instant messaging.',
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
    category: 'Enterprise • Farfetch Group',
    period: '2016 – 2017',
    icon: '/images/apps/curioeye.jpg',
    summary:
      'Enterprise WeChat official account management utility for luxury fashion houses. Greenfield build of the entire mobile client from specification to App Store deployment.',
    bullets: [
      'Greenfield Objective-C architecture with internal CRM REST interfaces.',
      'Strict bi-weekly release rhythm with zero App Store review rejections.',
      'Asset cache optimization reducing heavy marketing network overhead.',
    ],
    company: 'CuriosityChina',
    locationOrLinkText: 'Beijing',
  },
  {
    title: 'Talkmate',
    category: 'Team Lead • EduTech',
    period: '2015',
    icon: '/images/apps/talkmate.jpg',
    summary:
      'UNESCO-partnered multi-language learning platform. Led a squad of 4 developers through an urgent ground-up codebase refactoring to stabilize core interactive audio lessons.',
    bullets: [
      'Complete rewrite of fragile audio playback engine using AVFoundation.',
      'Eliminated critical memory leaks and UI freeze cycles on older devices.',
      'Coordinated sprint rituals, PR guidelines, and engineering handoffs.',
    ],
    company: '200H Education • Beijing',
    locationOrLinkText: 'App Store →',
    appStoreUrl:
      'https://apps.apple.com/cn/app/quan-qiu-shuotalkmate-ti-gao/id959231176',
  },
];

export const agencyProjects: AgencyProject[] = [
  {
    title: 'Corse Matin per noï',
    subtitle: 'Daily Newspaper Reader (iPad & iPhone)',
    icon: '/images/apps/corsematin.jpg',
    description:
      "Integrated the MiLibris PDF rendering framework, kiosk offline issue downloads, and in-app subscription renewals for France's regional daily press.",
    techOrLinkLabel: 'StoreKit / PDF',
  },
  {
    title: 'Le Trot / Cheval Français',
    subtitle: 'Official Trotting Horse Racing',
    icon: '/images/apps/letrot.jpg',
    description:
      'Engineered race finish video replays, real-time live odds tracking, jockey rankings, and targeted push notification infrastructure.',
    techOrLinkLabel: 'AVKit / APNs',
  },
  {
    title: 'myPMU',
    subtitle: 'Equine Wagering Client',
    icon: '/images/apps/mypmu.jpg',
    description:
      'Engineered Core Data SQLite caching layer capable of processing volatile racecourse betting odds with sub-second table reloads.',
    techOrLinkLabel: 'App Store ↗',
    appStoreUrl: 'https://apps.apple.com/fr/app/pmu-turf/id719630042',
  },
  {
    title: 'Belles Demeures',
    subtitle: 'Prestige Real Estate Search',
    icon: '/images/apps/belledemeures.jpg',
    description:
      'Full-screen high-res photo gallery with custom gesture handling, spatial radius search, and interactive MapKit annotation clustering.',
    techOrLinkLabel: 'App Store ↗',
    appStoreUrl: 'https://apps.apple.com/fr/app/belles-demeures/id398333286',
  },
  {
    title: 'FFB Déchets BTP',
    subtitle: 'Industrial Waste Logistics',
    icon: '/images/apps/ffb.jpg',
    description:
      'Geolocation directory connecting construction job foremen with compliant recycling and hazardous waste handling stations.',
    techOrLinkLabel: 'CoreLocation',
  },
];

export const earlyFoundations: EarlyFoundation[] = [
  {
    category: 'Android Client',
    title: 'Qobuz Hi-Fi',
    description: 'Lossless 24-bit FLAC playback and offline caching algorithms.',
    stack: 'Java / AudioTrack',
  },
  {
    category: 'Open Data',
    title: 'RATP Transit',
    description: 'Paris Metro schedule queries and disruption alert parsing.',
    stack: 'REST / XML',
  },
  {
    category: 'Backend',
    title: 'Zend Framework',
    description:
      'Structured JSON APIs and relational schema design for mobile endpoints.',
    stack: 'PHP / MySQL',
  },
  {
    category: 'APNs Daemon',
    title: 'Pushmii',
    description:
      'High-concurrency push dispatch service handling persistent TLS sockets.',
    stack: 'Node.js / APNs',
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
    sublabel: 'Systems & Backend',
  },
  {
    label: 'Current Status',
    value: 'Freelance',
    sublabel: 'Taipei (UTC+8) • Worldwide',
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    role: 'Freelance iOS and Backend Developer',
    companyAndLocation: 'Independent Practice • Taipei, Taiwan (Remote)',
    period: 'Dec 2019 – Present',
    isCurrent: true,
    summary:
      'Maintaining, profiling, and scaling production client applications including the top-rated Strong Workout Tracker. Driving native performance, local data synchronization, and privacy compliance.',
    highlightProject: 'Strong Workout Tracker',
    bullets: [
      'Engineered multi-theme dynamic tinting architecture and alternative app icon assets system.',
      'Developed in-app debugging dashboards to monitor edge-case concurrency failures and memory allocations in production.',
      'Audited data governance models for Apple Privacy Nutrition Labels and GDPR standards.',
      'Implemented lightweight Node.js microservices for sync APIs and automated webhooks.',
    ],
    tags: ['Swift', 'Core Data', 'Node.js', 'Instruments', 'Architecture'],
  },
  {
    role: 'iOS & React Native Developer',
    companyAndLocation: 'Super Effective • Beijing, China',
    period: 'Jul 2017 – Nov 2019',
    summary:
      'Led client mobile engineering for SELECT - Your Community. Architected migration across Swift versions, streamlined CI automation, and maintained native Objective-C bridge layers for cross-platform components.',
    highlightProject: 'SELECT - Your Community',
    bullets: [
      'Overhauled Jenkins and Fastlane continuous integration pipeline, reducing build cycle times by 84% (from 70 minutes down to 11 minutes).',
      'Designed modular CocoaPods libraries including custom multi-asset native image pickers.',
      'Integrated native Swift/Obj-C modules with React Native views for seamless user performance.',
    ],
    tags: ['Swift', 'React Native', 'Fastlane', 'Objective-C', 'CI/CD'],
  },
  {
    role: 'iOS Mobile Developer',
    companyAndLocation: 'CuriosityChina / Farfetch • Beijing, China',
    period: 'Jan 2016 – Apr 2017',
    summary:
      'Constructed client architecture for CURIO EYE, an enterprise social analytics and intelligence platform.',
    highlightProject: 'CURIO EYE',
    bullets: [
      'Designed scalable MVVM patterns interfacing with real-time analytics REST endpoints.',
      'Handled App Store releases, provisioning profiles, asset pipelines, and ASO optimization.',
    ],
    tags: ['Swift', 'iOS Architecture', 'REST APIs'],
  },
  {
    role: 'Lead iOS Developer',
    companyAndLocation: 'Beijing 200H Education • Beijing, China',
    period: 'Mar 2015 – Dec 2015',
    summary:
      'Managed iOS team of 3–4 engineers for Talkmate, a high-traffic language education platform. Led a complete from-scratch codebase overhaul and standardized peer code review processes.',
    highlightProject: 'Talkmate',
    tags: ['Team Leadership', 'Codebase Rewrite', 'Objective-C'],
  },
  {
    role: 'iOS Mobile Developer',
    companyAndLocation: 'userADgents • Paris, France',
    period: 'Sep 2012 – Nov 2014',
    summary:
      'Delivered 5 major enterprise and consumer iOS applications for prominent French brands (Corse Matin, Le Trot, myPMU, Belles Demeures, FFB Déchets BTP). Focused on custom animations, stability, and offline data persistence.',
    tags: ['Objective-C', 'UIKit', 'Core Data', 'Client Delivery'],
  },
  {
    role: 'Developer Intern',
    companyAndLocation: 'C4M Prod & Technivore • Marseille, France',
    period: '2009 – 2011',
    isCompact: true,
    summary:
      'Early mobile development projects: Android applications, backend web services, Pushmii notification server architecture in PHP, and internal .NET tooling.',
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
      'Xcode Instruments, XCode Cloud, Git, Github Actions, REST APIs, Command Line tools',
  },
  {
    category: 'Asset & Design Craft',
    skills: 'Photoshop, Sketch, Figma, Affinity, Remotion',
  },
  {
    category: 'AI Models & Workflows',
    skills:
      'Claude Code, Google Gemini, Google Stitch, Nano Banana, Black Forest Flux3',
  },
];

export const languagesList = [
  { language: 'English', proficiency: 'Native / Fluent' },
  { language: 'French', proficiency: 'Native / Fluent' },
  { language: 'Mandarin Chinese', proficiency: 'Professional Working' },
];
