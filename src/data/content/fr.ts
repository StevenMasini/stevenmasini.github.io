import type { PortfolioData } from '../portfolio';
import { localeConfigs } from '../locales';
import { baseMetadata } from './shared';

export const fr: PortfolioData = {
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
  sectionLabels: {
    overview: 'Aperçu',
    'apps-and-work': 'Applications & Projets',
    experience: 'Expérience',
    contact: 'Contact',
  },
  ui: {
    notFound: {
      metaTitle: '404 — Page introuvable | Steven Masini',
      metaDescription: 'La page que vous recherchez est introuvable.',
      eyebrow: 'Erreur 404',
      title: 'Page introuvable.',
      description:
        'La page que vous recherchez n’existe pas ou a été déplacée. Utilisez les liens ci-dessous pour revenir au portfolio.',
      homeLink: 'Retour à l’aperçu',
      appsLink: 'Applications & Projets',
      contactLink: 'Contact',
    },
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
      allAppsLink: 'Toutes les applications',
      backgroundTitle: 'Parcours',
      backgroundDescription:
        'Master en Technologies de l’Information (EPITECH). Une rigueur issue des fondations UNIX et C99 appliquée aux architectures Swift modernes.',
      languagesSummary: 'Langues : Français, Anglais, Mandarin, Japonais',
      locationPrefix: 'Localisation :',
      fullResumeLink: 'CV complet & Chronologie',
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
      ctaPrimaryBtn: 'Me contacter',
      ctaSecondaryBtn: 'Voir le parcours complet',
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
      contactFormLink: 'Formulaire de contact',
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
      inquiriesLink: 'Me contacter via le formulaire',
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
      href: '/fr/curio-eye',
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
      appStoreLabel: 'Voir sur l’App Store',
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
      appStoreLabel: 'Voir sur l’App Store',
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
      locationOrLinkText: 'Voir la présentation',
      appStoreUrl: '/fr/curio-eye',
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
      locationOrLinkText: 'Voir sur l’App Store',
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
      appStoreLabel: 'Voir sur l’App Store',
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
      appStoreLabel: 'Voir sur l’App Store',
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
