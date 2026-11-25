import type { PortfolioData } from '../portfolio';
import { localeConfigs } from '../locales';
import { baseMetadata } from './shared';

export const zhTw: PortfolioData = {
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
  sectionLabels: {
    overview: '總覽',
    'apps-and-work': '作品與專案',
    experience: '經歷與背景',
    contact: '聯絡方式',
  },
  ui: {
    notFound: {
      metaTitle: '404 — 找不到此頁面 | Steven Masini',
      metaDescription: '找不到您所尋找的頁面。',
      eyebrow: '錯誤 404',
      title: '找不到此頁面。',
      description:
        '您所尋找的頁面不存在或已移至其他位置，請透過下方連結返回作品集。',
      homeLink: '返回總覽首頁',
      appsLink: '作品與專案',
      contactLink: '聯絡方式',
    },
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
      allAppsLink: '查看所有作品',
      backgroundTitle: '專業背景',
      backgroundDescription:
        '法國 EPITECH 資訊科技碩士。將深厚的 UNIX 與 C99 系統底層嚴謹思維，融入現代 Swift 軟體架構設計。',
      languagesSummary: '語言能力：法文、英文、中文、日文',
      locationPrefix: '所在地：',
      fullResumeLink: '完整履歷與職涯時程',
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
      ctaPrimaryBtn: '立即聯絡',
      ctaSecondaryBtn: '查看完整經歷',
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
      contactFormLink: '聯絡表單',
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
      inquiriesLink: '透過聯絡表單洽詢',
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
      href: '/zh-tw/curio-eye',
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
      appStoreLabel: '於 App Store 查看',
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
      appStoreLabel: '於 App Store 查看',
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
      locationOrLinkText: '查看產品專頁',
      appStoreUrl: '/zh-tw/curio-eye',
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
      locationOrLinkText: '於 App Store 查看',
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
      appStoreLabel: '於 App Store 查看',
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
      appStoreLabel: '於 App Store 查看',
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
