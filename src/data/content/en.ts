import type { PortfolioData } from '../portfolio';
import { localeConfigs } from '../locales';
import { appRatingLabel, appStoreLink } from '../apps';
import { baseMetadata } from './shared';

export const en: PortfolioData = {
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
  sectionLabels: {
    overview: 'Overview',
    'apps-and-work': 'Apps & Work',
    experience: 'Experience',
    contact: 'Contact',
  },
  ui: {
    curioEye: {
      metaTitle:
        'CURIO EYE — Advanced WeChat Official Account Monitoring System | Steven Masini',
      metaDescription:
        'Historical product showcase of CURIO EYE by CuriosityChina (A Farfetch Company). Companion iOS application built from scratch in Swift for WeChat Official Account monitoring and analytics.',
      backLink: 'Back to Apps & Work',
      badge: 'Historical Product Showcase (2016–2017)',
      note: 'Sole iOS Developer at CuriosityChina (A Farfetch Company) • Swift v1.0 – v1.1.5',
      infographicAlt:
        'CURIO EYE — Advanced WeChat Official Account Monitoring System by CuriosityChina',
    },
    notFound: {
      metaTitle: '404 — Page Not Found | Steven Masini',
      metaDescription: 'The page you are looking for could not be found.',
      eyebrow: 'Error 404',
      title: 'Page not found.',
      description:
        'The page you are looking for doesn’t exist or may have been moved. Use the links below to return to the portfolio.',
      homeLink: 'Back to Overview',
      appsLink: 'Apps & Work',
      contactLink: 'Contact',
    },
    header: {
      getInTouch: 'Get in touch',
      languageLabel: 'Select language',
      toggleMenuLabel: 'Toggle navigation menu',
    },
    overview: {
      metaTitle: 'Steven Masini — iOS and Backend Developer in Taipei',
      metaDescription:
        '{years}+ years building native iOS apps and backend services since 2011. Focused on clean architecture, performance, and code that lasts.',
      heroBio:
        '{years}+ years building native iOS apps and backend services since 2011. Focused on clean architecture, performance, and code that lasts.',
      selectedWorkTitle: 'Selected Work',
      selectedWorkPeriod: '2015 — Present',
      allAppsLink: 'All Apps',
      backgroundTitle: 'Background',
      backgroundDescription:
        "Master's in Information Technology from EPITECH. Rigor derived from UNIX and C99 foundations applied to modern Swift architecture.",
      languagesSummary: 'Languages: French, English, Mandarin, Japanese',
      locationPrefix: 'Location:',
      fullResumeLink: 'Full Resume & Timeline',
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
      heroEyebrowRight: '{years}+ Years Shipped Native Software',
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
      ctaPrimaryBtn: 'Get in Touch',
      ctaSecondaryBtn: 'View Experience Bio',
    },
    experience: {
      metaTitle: 'Experience & Background — Steven Masini',
      metaDescription:
        'Developing software & native iOS applications since 2011. {years}+ years across Paris, Beijing, and Taipei.',
      eyebrow: 'Resume & Work History',
      title: 'Experience & Background',
      description:
        'Developing software & native iOS applications since 2011. {years}+ years across Paris, Beijing, and Taipei. From fundamental Unix and C systems to native iOS architecture, companion Node.js backend infrastructure, and modern AI workflows.',
      downloadPdfBtn: 'Download PDF Resume',
      contactFormLink: 'Contact Form',
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
      inquiriesLink: 'Get in touch via Contact Form',
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
      link: appStoreLink('strong'),
      description:
        'Workout tracker with ~5,000,000 registered users, ~580,000 monthly active users, and 4.9 ★ (185k+ global ratings). Contributed to the SwiftUI & Combine refactoring for Strong 6.0, implemented Live Activity and Dynamic Island rest timers, improved xRM estimation accuracy (Brzycki & Epley formulas), and enhanced Exercise List caching, filtering, and fuzzy search.',
    },
    {
      title: 'SELECT',
      subtitle: 'Super Effective',
      period: '2017 — 2019',
      icon: '/images/apps/select.jpg',
      link: appStoreLink('select'),
      description:
        'Contributed to both the native iOS app (cutting build times from 70 to 11 minutes via CocoaPods modularization and MVVM + DI) and the complete React Native rewrite (WebSocket protocol, Multi Friend Selector, custom deep-link intro screens, and an Objective-C native image picker bridge).',
    },
    {
      title: 'CURIO EYE',
      subtitle: 'CuriosityChina (A Farfetch Company)',
      period: '2016 — 2017',
      icon: '/images/apps/curioeye.jpg',
      link: { page: 'curio-eye' },
      description:
        'Sole iOS developer for CURIO EYE, a companion app for WeChat Official Account managers. Built the entire application from scratch in Swift (v1.0 to v1.1.5), managing bi-weekly releases, ASO, bundle optimization, and product direction.',
    },
    {
      title: 'Talkmate',
      subtitle: 'Beijing 200H Education • 10M+ Users',
      period: '2015',
      icon: '/images/apps/talkmate.jpg',
      link: appStoreLink('talkmate'),
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
      link: appStoreLink('strong'),
      appStoreLabel: 'View on App Store',
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
      link: appStoreLink('select'),
      appStoreLabel: 'View on App Store',
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
      locationOrLinkText: 'View Product Showcase',
      link: { page: 'curio-eye' },
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
      ratingLabel: appRatingLabel('talkmate', 'en'),
      locationOrLinkText: 'View on App Store',
      link: appStoreLink('talkmate'),
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
      ratingLabel: appRatingLabel('pmu', 'en'),
      icon: '/images/apps/mypmu.jpg',
      description:
        "Took over a project already in development within a 3-developer iOS engineering team for France's premier horse-racing platform, responsible for custom UI implementation and Core Data local database support.",
      techLabel: 'Objective-C / Core Data',
      link: appStoreLink('pmu'),
      appStoreLabel: 'View on App Store',
    },
    {
      title: 'Belles Demeures (v1.0)',
      subtitle: 'Luxury Real Estate (iPhone & iPad)',
      ratingLabel: appRatingLabel('belles-demeures', 'en'),
      icon: '/images/apps/belledemeures.jpg',
      description:
        'Worked in a 3-developer team delivering full universal iPhone and iPad development and custom UI integration for 30,000+ prestige property listings across 10+ countries.',
      techLabel: 'Objective-C / UIKit',
      link: appStoreLink('belles-demeures'),
      appStoreLabel: 'View on App Store',
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
      sublabel: '{years}+ Years in Engineering',
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
    { code: 'fr', language: 'French', proficiency: 'Native' },
    { code: 'en', language: 'English', proficiency: 'Bilingual' },
    { code: 'zh', language: 'Mandarin Chinese', proficiency: 'Working Proficiency' },
    { code: 'ja', language: 'Japanese', proficiency: 'Learning' },
  ],
};
