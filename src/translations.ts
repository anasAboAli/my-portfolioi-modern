/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, TimelineItem, ServiceItem, BlogPost, FAQItem, Testimonial, CertificateItem } from './types';

export const TRANSLATIONS = {
  en: {
    // Nav
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navServices: "Services",
    navProjects: "Projects",
    navTimeline: "Timeline",
    navFaq: "FAQ",
    navBlog: "Blog",
    navContact: "Contact",
    navLetsTalk: "Let's Talk",

    // Hero
    heroGreeting: "Hey There,",
    heroName: "I'm Anas",
    heroIntro: "Hello, I’m Anas, a Full Stack Web Developer with 5 years of experience, specializing in building modern web applications using Vue.js, Node.js, Express.js, MySQL, and MongoDB. I develop complete web solutions that combine modern, user-friendly UI/UX with robust, secure, and scalable backend systems.",
    heroHireBtn: "Hire Me Now",
    heroResumeBtn: "View Resume",

    // About
    aboutTitle: "About Me",
    aboutSubtitle: "Creating digital experiences that live on the internet",
    aboutText1: "Hello! My name is Anas and I enjoy creating things that live on the internet. I am a Full-Stack Web Developer with five years of experience building modern, responsive, and scalable user interfaces using modern frontend tools.",
    aboutText2: "I believe clean code and thoughtful design are the foundation of successful digital products. My focus is always on delivering high-performance web applications with an excellent user experience. Currently, I am a Student, constantly learning and improving my skills.",
    aboutAttributesTitle: "Core Philosophy",

    // Key Attributes
    attrCleanCode: "Clean Code",
    attrCleanCodeDesc: "Writing clean, readable, self-documenting code with SOLID and DRY principles.",
    attrResponsive: "Responsive Design",
    attrResponsiveDesc: "Ensuring flawless user experience across all devices, from mobiles to ultra-wide displays.",
    attrProblemSolving: "Problem Solving",
    attrProblemSolvingDesc: "Analyzing complex challenges and implementing optimal, performant algorithms.",
    attrOptimization: "Performance Optimization",
    attrOptimizationDesc: "Maximizing load speed, rendering, accessibility, and high core vitals.",
    attrCollaboration: "Team Collaboration",
    attrCollaborationDesc: "Working seamlessly with cross-functional teams, designers, and stakeholders.",
    attrIndependent: "Independent Work",
    attrIndependentDesc: "Self-driven, managing projects from discovery to deployment with full ownership.",
    attrCreative: "Creative Thinking",
    attrCreativeDesc: "Blending technical engineering precision with creative interface animations.",
    attrDetail: "Attention to Detail",
    attrDetailDesc: "Crafting pixel-perfect layouts down to micro-interactions and spacing rhythms.",

    // Skills
    skillsTitle: "Technical Skills",
    skillsSubtitle: "The tools, frameworks, and languages I specialize in",
    skillsCategoryWeb: "Web Core",
    skillsCategoryVue: "Libraries & Frameworks",
    skillsCategoryOther: "Other Skills",
    skillsProgress: "Proficiency Level",

    // Services
    servicesTitle: "Services Offered",
    servicesSubtitle: "Professional solutions tailored to bring your ideas to life",

    // Why Hire Me
    whyHireTitle: "Why Work With Me",
    whyHireSubtitle: "Driving growth through user-centric frontend experiences",
    statExperience: "Years Experience",
    statProjects: "Projects Completed",
    statClients: "Satisfied Clients",
    statRetention: "Code Quality Rating",

    // Projects
    projectsTitle: "Featured Work",
    projectsSubtitle: "A selection of recent applications and interactive products",
    projectSearchPlaceholder: "Search projects by title or technology...",
    projectAll: "All Projects",
    projectLiveDemo: "Live Demo",
    projectSourceCode: "GitHub Source",
    projectDetailsTitle: "Project Case Details",
    projectTechUsed: "Technologies Used",

    // Dev Process
    processTitle: "Development Process",
    processSubtitle: "How I transform complex concepts into polished production code",
    step1Title: "Discovery & Analysis",
    step1Desc: "Understanding client objectives, user personas, and mapping out the technical specifications.",
    step2Title: "Architecture & Wireframes",
    step2Desc: "Structuring clean state management (Pinia/Context), data flows, and defining visual structures.",
    step3Title: "Premium Frontend Coding",
    step3Desc: "Writing modular, type-safe components using Tailwind, responsive interfaces, and GSAP/motion animations.",
    step4Title: "Performance Optimization",
    step4Desc: "Aggressive optimization of images, code-splitting, tree-shaking, and securing accessibility compliance.",
    step5Title: "Launch & Delivery",
    step5Desc: "Deploying with CI/CD, running end-to-end tests, and ensuring seamless hand-off with technical docs.",

    // Experience & Education
    timelineTitle: "Journey & Milestones",
    timelineSubtitle: "My academic path and professional accomplishments",
    timelineWork: "Professional Experience",
    timelineEdu: "Academic Timeline",

    // Achievements
    achieveTitle: "Achievements & Recognition",
    achieveSubtitle: "Highlights of my technical and design milestones",

    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Got questions? Find direct, clean answers here",

    // Blog
    blogTitle: "Blog & Insights",
    blogSubtitle: "Articles and thoughts on frontend engineering and UI patterns",
    blogReadMore: "Read Article",

    // Contact
    contactTitle: "Get In Touch",
    contactSubtitle: "Let's collaborate on your next digital masterpiece",
    contactFormName: "Your Name",
    contactFormEmail: "Your Email Address",
    contactFormSubject: "Subject",
    contactFormMessage: "Write your message here...",
    contactBtnSend: "Send Message",
    contactBtnSending: "Sending Message...",
    contactSuccessTitle: "Message Sent Successfully!",
    contactSuccessMsg: "Thank you for reaching out, Anas! Your message has been received and I will get back to you within 24 hours.",
    contactInfoTitle: "Contact Coordinates",
    contactInfoDesc: "Feel free to reach out via direct channels or through the form. Let's create something extraordinary.",

    // Footer
    footerRights: "All Rights Reserved.",
    footerBackToTop: "Back to Top",
    footerMadeBy: "Designed & Engineered by Anas",
  },
  ar: {
    // Nav
    navHome: "الرئيسية",
    navAbout: "من أنا",
    navSkills: "المهارات",
    navServices: "الخدمات",
    navProjects: "مشاريعي",
    navTimeline: "مسيرتي",
    navFaq: "الأسئلة الشائعة",
    navBlog: "المدونة",
    navContact: "اتصل بي",
    navLetsTalk: "لنبدأ العمل",

    // Hero
    heroGreeting: "أهلاً بك،",
    heroName: "أنا أنس",
    heroIntro: "مرحبًا، أنا أنس، مطور Full Stack Web Developer مع 5 سنوات خبرة متخصص في بناء تطبيقات الويب الحديثة باستخدام Vue.js، Node.js، Express.js، MySQL، وMongoDB، أعمل على تطوير حلول ويب متكاملة تجمع بين واجهات استخدام عصرية وسهلة الاستخدام (UI/UX) وأنظمة خلفية قوية وآمنة وقابلة للتوسع.",
    heroHireBtn: "وظفني الآن",
    heroResumeBtn: "عرض السيرة الذاتية",

    // About
    aboutTitle: "نبذة عني",
    aboutSubtitle: "ابتكار تجارب رقمية تنبض بالحياة على شبكة الإنترنت",
    aboutText1: "مرحباً! اسمي أنس وأنا شغوف بابتكار وتطوير برمجيات وتطبيقات الويب. أنا مطور واجهات ويب متكاملة بخبرة خمس سنوات في بناء واجهات مستخدم حديثة، متجاوبة وقابلة للتطوير باستخدام أحدث التقنيات.",
    aboutText2: "أؤمن بأن الكود النظيف والتصميم المدروس هما الركيزتان الأساسيتان لنجاح أي منتج رقمي. ينصب تركيزي دائماً على تقديم تطبيقات ويب عالية الأداء مع تجربة مستخدم ممتازة. حالياً، أنا طالب، أسعى باستمرار للتعلم وتطوير مهاراتي.",
    aboutAttributesTitle: "فلسفتي الأساسية",

    // Key Attributes
    attrCleanCode: "الكود النظيف",
    attrCleanCodeDesc: "كتابة كود نظيف، مقروء، وذاتي التوثيق مع تطبيق مبادئ SOLID و DRY.",
    attrResponsive: "التصميم المتجاوب",
    attrResponsiveDesc: "ضمان تجربة مستخدم مثالية على كافة الشاشات، من الهواتف إلى الشاشات فائقة العرض.",
    attrProblemSolving: "حل المشكلات",
    attrProblemSolvingDesc: "تحليل التحديات المعقدة وابتكار خوارزميات برمجية مثالية وعالية الأداء.",
    attrOptimization: "تحسين الأداء",
    attrOptimizationDesc: "تسريع وقت التحميل، الاستجابة السريعة للواجهة، وتصدر مؤشرات الويب الحيوية.",
    attrCollaboration: "العمل الجماعي",
    attrCollaborationDesc: "العمل بانسجام مع الفرق متعددة التخصصات، المصممين، وأصحاب المشاريع.",
    attrIndependent: "العمل المستقل",
    attrIndependentDesc: "التوجيه الذاتي وإدارة المشاريع من مرحلة الاكتشاف والتحليل إلى الإطلاق النهائي.",
    attrCreative: "التفكير الإبداعي",
    attrCreativeDesc: "مزج الدقة الهندسية للبرمجيات مع لمسات إبداعية في حركات وتفاعلات الواجهة.",
    attrDetail: "الاهتمام بالتفاصيل",
    attrDetailDesc: "تصميم واجهات مثالية البكسل مع إعطاء عناية فائقة للتفاعلات الدقيقة وتناسق الأبعاد.",

    // Skills
    skillsTitle: "المهارات التقنية",
    skillsSubtitle: "الأدوات والإطارات ولغات البرمجة التي أتميز بها",
    skillsCategoryWeb: "أساسيات الويب",
    skillsCategoryVue: "المكتبات وأطر العمل",
    skillsCategoryOther: "مهارات أخرى",
    skillsProgress: "مستوى الإتقان",

    // Services
    servicesTitle: "الخدمات المقدمة",
    servicesSubtitle: "حلول برمجية احترافية مصممة خصيصاً لإحياء أفكارك",

    // Why Hire Me
    whyHireTitle: "لماذا تختارني؟",
    whyHireSubtitle: "قيادة النمو الرقمي من خلال واجهات تفاعلية تركز على المستخدم",
    statExperience: "سنوات الخبرة",
    statProjects: "المشاريع المنجزة",
    statClients: "العملاء الراضون",
    statRetention: "تقييم جودة الكود",

    // Projects
    projectsTitle: "أبرز أعمالي",
    projectsSubtitle: "مجموعة مختارة من التطبيقات الحديثة والمنتجات التفاعلية",
    projectSearchPlaceholder: "ابحث عن المشاريع بالاسم أو التقنية المستخدمة...",
    projectAll: "كل المشاريع",
    projectLiveDemo: "معاينة مباشرة",
    projectSourceCode: "كود المصدر على GitHub",
    projectDetailsTitle: "تفاصيل المشروع",
    projectTechUsed: "التقنيات المستخدمة",

    // Dev Process
    processTitle: "منهجية العمل والإنتاج",
    processSubtitle: "كيف أحول الأفكار المعقدة إلى كود برمجي متقن وجاهز للنشر والتشغيل",
    step1Title: "الاكتشاف والتحليل",
    step1Desc: "فهم أهداف العميل وتحديد متطلبات الجمهور المستهدف وصياغة المواصفات التقنية.",
    step2Title: "الهندسة وتدفق البيانات",
    step2Desc: "هيكلة إدارة الحالة النظيفة (Pinia/Context) وتدفق البيانات وبناء التخطيطات الأولية.",
    step3Title: "تطوير الواجهات الفاخرة",
    step3Desc: "كتابة مكونات معيارية وآمنة برمجياً باستخدام Tailwind وإضافة الحركات التفاعلية الراقية.",
    step4Title: "تحسين الأداء وضغط الموارد",
    step4Desc: "تحسين الصور، تقسيم الأكواد لتسريع التحميل، والتأكد من مطابقة شروط سهولة الوصول والـ SEO.",
    step5Title: "الإطلاق والتسليم المتقن",
    step5Desc: "نشر المشروع على السيرفرات مع أتمتة العمليات، وإجراء الفحوصات اللازمة وتسليم وثائق العمل.",

    // Experience & Education
    timelineTitle: "مسيرتي التعليمية والمهنية",
    timelineSubtitle: "مراحل رحلتي الأكاديمية وإنجازاتي المهنية المتتالية",
    timelineWork: "الخبرة المهنية",
    timelineEdu: "المسيرة الأكاديمية",

    // Achievements
    achieveTitle: "الإنجازات والجوائز المتميزة",
    achieveSubtitle: "محطات بارزة من مسيرتي التقنية والتصميمية المتميزة",

    // FAQ
    faqTitle: "الأسئلة الشائعة",
    faqSubtitle: "هل لديك أي استفسار؟ ابحث عن الإجابة المباشرة والنظيفة هنا",

    // Blog
    blogTitle: "المدونة والتحليلات التقنية",
    blogSubtitle: "مقالات وأفكار في هندسة الواجهات الأمامية وأنماط التصميم التفاعلي",
    blogReadMore: "اقرأ المقال بالكامل",

    // Contact
    contactTitle: "اتصل بي الآن",
    contactSubtitle: "دعنا نتعاون معاً لبناء تحفتك الرقمية القادمة",
    contactFormName: "الاسم الكامل",
    contactFormEmail: "البريد الإلكتروني",
    contactFormSubject: "موضوع الرسالة",
    contactFormMessage: "اكتب رسالتك بالتفصيل هنا...",
    contactBtnSend: "إرسال الرسالة",
    contactBtnSending: "جاري الإرسال...",
    contactSuccessTitle: "تم إرسال رسالتك بنجاح!",
    contactSuccessMsg: "شكراً لتواصلك معي يا أنس! تم استلام رسالتك بنجاح وسأقوم بالرد عليك خلال الـ 24 ساعة القادمة.",
    contactInfoTitle: "إحداثيات التواصل المباشر",
    contactInfoDesc: "لا تتردد في الاتصال بي عبر القنوات المباشرة أو من خلال تعبئة هذا النموذج السريع. دعنا نصنع شيئاً رائعاً.",

    // Footer
    footerRights: "جميع الحقوق محفوظة.",
    footerBackToTop: "الرجوع لأعلى الصفحة",
    footerMadeBy: "تم التصميم والتطوير بلمسة إبداع من أنس",
  }
};

// Raw static data formatted for bilingual maps
export const KEY_ATTRIBUTES = [
  {
    id: 1,
    titleKey: "attrCleanCode",
    descKey: "attrCleanCodeDesc",
    iconName: "Code2",
    color: "from-blue-500/20 to-indigo-500/20 text-blue-400"
  },
  {
    id: 2,
    titleKey: "attrResponsive",
    descKey: "attrResponsiveDesc",
    iconName: "MonitorSmartphone",
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-400"
  },
  {
    id: 3,
    titleKey: "attrProblemSolving",
    descKey: "attrProblemSolvingDesc",
    iconName: "BrainCircuit",
    color: "from-purple-500/20 to-pink-500/20 text-purple-400"
  },
  {
    id: 4,
    titleKey: "attrOptimization",
    descKey: "attrOptimizationDesc",
    iconName: "Zap",
    color: "from-amber-500/20 to-orange-500/20 text-amber-400"
  },
  {
    id: 5,
    titleKey: "attrCollaboration",
    descKey: "attrCollaborationDesc",
    iconName: "Users2",
    color: "from-cyan-500/20 to-blue-500/20 text-cyan-400"
  },
  {
    id: 6,
    titleKey: "attrIndependent",
    descKey: "attrIndependentDesc",
    iconName: "FileCode",
    color: "from-fuchsia-500/20 to-rose-500/20 text-fuchsia-400"
  },
  {
    id: 7,
    titleKey: "attrCreative",
    descKey: "attrCreativeDesc",
    iconName: "Palette",
    color: "from-violet-500/20 to-purple-500/20 text-violet-400"
  },
  {
    id: 8,
    titleKey: "attrDetail",
    descKey: "attrDetailDesc",
    iconName: "Sparkles",
    color: "from-rose-500/20 to-amber-500/20 text-rose-400"
  }
];

export const TECHNICAL_SKILLS = [
  { name: "HTML", proficiency: 98, category: "web", icon: "Html5" },
  { name: "CSS", proficiency: 95, category: "web", icon: "Css3" },
  { name: "SCSS", proficiency: 92, category: "web", icon: "Sass" },
  { name: "JavaScript", proficiency: 96, category: "web", icon: "Javascript" },
  { name: "TypeScript", proficiency: 90, category: "web", icon: "Typescript" },
  { name: "PHP", proficiency: 75, category: "web", icon: "Php" },

  //conver category to libraries & frameworks
  { name: "Vue.js", proficiency: 96, category: "frameworks", icon: "Vue" },
  { name: "Node.js", proficiency: 96, category: "frameworks", icon: "Node" },
  { name: "Laravel", proficiency: 96, category: "frameworks", icon: "Laravel" },

  
  
  { name: "Java", proficiency: 80, category: "other", icon: "Java" },
  { name: "Pinia", proficiency: 94, category: "other", icon: "Pinia" },
  { name: "REST API", proficiency: 92, category: "other", icon: "Api" },  
  { name: "MySQL", proficiency: 82, category: "other", icon: "Database" },
  { name: "Firebase", proficiency: 85, category: "other", icon: "Firebase" },
  { name: "Figma to Code", proficiency: 96, category: "other", icon: "Figma" },
  { name: "Responsive Web Design", proficiency: 98, category: "other", icon: "Monitor" },
  { name: "Git & GitHub", proficiency: 90, category: "other", icon: "Github" }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Frontend Development",
    titleAr: "تطوير الواجهات الأمامية",
    description: "Architecting high-performance client interfaces using React and Vue.js with absolute visual precision.",
    descriptionAr: "بناء واجهات برمجية عالية الأداء والسرعة باستخدام React و Vue.js مع دقة بصرية متناهية.",
    iconName: "Code2",
    colorClass: "from-blue-500 to-indigo-500"
  },
  {
    id: 2,
    title: "Responsive Design",
    titleAr: "تصاميم متجاوبة بالكامل",
    description: "Developing fully adaptive systems responsive on mobiles, tablets, and massive displays fluidly.",
    descriptionAr: "تطوير أنظمة متجاوبة تماماً لتلائم كافة الأجهزة الذكية، الأجهزة اللوحية، والشاشات العملاقة بسلاسة.",
    iconName: "Smartphone",
    colorClass: "from-emerald-500 to-teal-500"
  },
  {
    id: 3,
    title: "UI Development",
    titleAr: "تطوير واجهة المستخدم UI",
    description: "Transforming creative digital prototypes into clean structures with rich micro-animations.",
    descriptionAr: "تحويل التصاميم الرقمية الإبداعية إلى واجهات تفاعلية أنيقة غنية بالحركات التفاعلية الدقيقة.",
    iconName: "Layers",
    colorClass: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Backend Development",
    titleAr: "تطوير الواجهات الخلفية",
    description: "Backend Developer specializing in building and developing APIs and backend systems using **Laravel, PHP, Node.js, and Express.js**.",
    descriptionAr: "مطور Backend متخصص في بناء وتطوير APIs والأنظمة الخلفية باستخدام Laravel وPHP وNode.js وExpress.js",
    iconName: "Code2",
    colorClass: "from-cyan-500 to-emerald-500"
  },
  {
    id: 5,
    title: "Performance Optimization",
    titleAr: "تحسين وتسريع أداء المواقع",
    description: "Maximizing load rates, core web vitals, bundle optimization, lazy-loading, and static caching.",
    descriptionAr: "تحسين سرعة التحميل ومؤشرات الويب الحيوية للموقع عبر ضغط الموارد والتقسيم الذكي للأكواد.",
    iconName: "Zap",
    colorClass: "from-amber-500 to-orange-500"
  },
  {
    id: 6,
    title: "REST API Integration",
    titleAr: "ربط الخدمات السحابية وبوابات REST API",
    description: "Enforcing safe API calls, asynchronous parsing, error protection, and live synchronous state updates.",
    descriptionAr: "تكامل وبناء اتصالات آمنة مع الخدمات السحابية وجلب البيانات وتحديثها بشكل مباشر وآمن.",
    iconName: "Network",
    colorClass: "from-indigo-500 to-violet-500"
  },
  {
    id: 7,
    title: "Figma to Code",
    titleAr: "تحويل تصاميم Figma إلى أكواد",
    description: "Perfect 1:1 conversion of Figma vectors to highly interactive responsive Tailwind layouts.",
    descriptionAr: "تحويل متقن ومطابق بنسبة 100% لتصاميم Figma الرقمية إلى كود برمجى متجاوب باستخدام Tailwind.",
    iconName: "Figma",
    colorClass: "from-pink-500 to-rose-500"
  },
  {
    id: 8,
    title: "Website Redesign",
    titleAr: "إعادة تصميم وتحديث المواقع",
    description: "Refactoring legacy products into premium, accessible, responsive frontend components.",
    descriptionAr: "إعادة هيكلة وتطوير المواقع القديمة وتحويلها لنسخ عصرية فائقة السرعة وسهلة الاستخدام.",
    iconName: "RefreshCw",
    colorClass: "from-fuchsia-500 to-indigo-500"
  },
  {
    id: 9,
    title: "Landing Pages",
    titleAr: "صفحات الهبوط الاحترافية",
    description: "Developing hyper-optimized landing pages configured with solid funnels to boost conversions.",
    descriptionAr: "تطوير صفحات هبوط متقدمة ذات لمسات بصرية ساحرة لزيادة المبيعات وتحقيق أقصى درجات التحويل.",
    iconName: "Sparkles",
    colorClass: "from-rose-500 to-amber-500"
  },
  {
    id: 10,
    title: "Admin Dashboards",
    titleAr: "لوحات التحكم والبيانات الإحصائية",
    description: "Custom designing intuitive visual platforms detailing interactive charts and management operations.",
    descriptionAr: "بناء لوحات تحكم متكاملة مجهزة بمخططات تفاعلية وأدوات مرنة لإدارة المحتوى والبيانات وإعداد التقارير.",
    iconName: "LayoutDashboard",
    colorClass: "from-violet-500 to-fuchsia-500"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Admin Dashboard",
    titleAr: "لوحة التحكم الإدارية",
    description: "A responsive and attractive admin dashboard displaying analytics, reports, statistics and management features.",
    descriptionAr: "لوحة تحكم إدارية مذهلة ومتجاوبة بالكامل، تعرض تحليلات تفصيلية ورسوم إحصائية تفاعلية لإدارة الأنظمة والبيانات بكل سهولة.",
    image: "/images/adminDashboard.jpg",
    tech: ["Vue.js", "TypeScript", "Tailwind CSS", "Pinia", "Recharts"],
    live: "https://admindashboard-anas.netlify.app/",
    github: "https://github.com/anasAboAli",
    details: "This hyper-polished admin control panel showcases responsive grid systems, dynamic data streams, interactive charts, and modular widgets. Features integrated system status monitors, dark/light visual modes, customizable quick filters, and elegant analytics tables perfect for visual reports.",
    detailsAr: "تعرض لوحة التحكم الإدارية الفاخرة هذه شبكة متجاوبة من الأدوات وعرض الرسوم البيانية التفاعلية المباشرة، مع تحكم كامل بنظام العرض الليلي والنهاري. تحتوي على جداول بيانات ديناميكية وأدوات فلترة وتحليل متقدمة تناسب التقارير التنفيذية.",
    category: "Vue"
  },
  {
    id: 2,
    title: "Real Nest",
    titleAr: "منصة ريل نيست للعقارات",
    description: "A modern real estate platform with responsive UI and advanced property browsing.",
    descriptionAr: "منصة عقارية حديثة بواجهة مستخدم متقدمة، تتيح للمستخدمين استعراض وفلترة العقارات الفاخرة بسهولة بالغة وبحث متقدم.",
    image: "/images/aqaraatSell.jpg",
    tech: ["Vue.js", "TypeScript", "Tailwind CSS", "Pinia", "Motion"],
    live: "https://realnest-web.netlify.app/",
    github: "https://github.com/anasAboAli",
    details: "An architectural marvel in frontend development, featuring animated property sliders, intuitive radius and pricing search filters, responsive photo galleries, and real-time agency interaction forms. Built with extreme attention to visual contrast and luxury typography.",
    detailsAr: "تحفة معمارية في برمجة الواجهات العقارية، تتميز بسلايدر عقاري تفاعلي، ومحرك بحث متقدم عن الأسعار والمواقع الجغرافية، بالإضافة إلى نماذج تواصل سريعة ومباشرة. صُمم بأسلوب بصري راقي وخطوط طباعية أنيقة تبرز فخامة المنتج.",
    category: "Vue"
  },
  {
    id: 3,
    title: "Hospital Management",
    titleAr: "نظام إدارة المستشفيات",
    description: "A Hospital Management System for managing doctors, patients, appointments and medical records.",
    descriptionAr: "منظومة إلكترونية متكاملة لإدارة المستشفيات والعيادات الطبية، لتنظيم شؤون الأطباء، المرضى، المواعيد والسجلات الصحية.",
    image: "/images/clinicnest.jpg",
    tech: ["Vue.js", "TypeScript", "Tailwind CSS", "SCSS", "Vue Router"],
    live: "https://hospital-m-sys.netlify.app/",
    github: "https://github.com/anasAboAli",
    details: "Designed for high complexity, ClinicNest supports multiple roles, automated appointment slot generation, clinical history logs, interactive doctor directories, and custom-designed printable medical prescriptions. Built with robust clean architecture and type safety.",
    detailsAr: "مُصمم لتلبية الاحتياجات الطبية الأكثر تعقيداً، حيث يوفر إدارة مرنة لملفات الأطباء وحجز المواعيد الآلي، مع أرشيف طبي كامل وسجلات صحية مفصلة. تم بناؤه بهيكلية نوعية آمنة تضمن سلامة وسرعة انتقال البيانات الطبية الحساسة.",
    category: "TypeScript"
  },
  {// update details
    id: 4,
    title: "Employee Management System",
    titleAr: "نظام إدارة الموظفين",
    description: "Employee management platform for handling HR tasks and employee records.",
    descriptionAr: "منصة إدارة الموظفين لمعالجة مهام الموارد البشرية وسجلات الموظفين.",
    image: "/images/employee.png",
    tech: ["HTML", "CSS", "TypeScript", "vue.js", "json", "REST API","node.js"],
    live: "https://employees-tasks-ms.netlify.app/",
    github: "https://github.com/anasAboAli",
    details: "This employee management system is designed to streamline HR operations, featuring dynamic employee directories, role-based access controls, real-time task assignment, and comprehensive performance tracking. It integrates with REST APIs for data retrieval and updates, ensuring a seamless experience for HR managers and staff.",
    detailsAr: "تم تصميم نظام إدارة الموظفين هذا لتبسيط عمليات الموارد البشرية، ويتميز بدليل الموظفين الديناميكي، والتحكم في الوصول بناءً على الدور الوظيفي، وتعيين المهام في الوقت الفعلي، وتتبع الأداء بشكل شامل. يتكامل مع واجهات REST API لاسترجاع البيانات وتحديثها، مما يضمن تجربة سلسة لمديري الموارد البشرية والموظفين.",
    category: "Node.js"
  },
  {
    id: 5,
    title: "WanderLust",
    titleAr: "موقع واندرلاست للسياحة",
    description: "Luxury travel website showcasing premium destinations and travel packages.",
    descriptionAr: "موقع سياحي فاخر يستعرض أفخم الوجهات والرحلات السياحية حول العالم بأسلوب ملهم وجاذب بصرياً.",
    image: "/images/wanderlost.png",
    tech: ["Vue.js", "JavaScript", "Firebase", "SCSS", "HTML"],
    live: "https://wanderlust-company.netlify.app/",
    github: "https://github.com/anasAboAli",
    details: "Includes fluid parallax imagery scrolling, dynamic destination reviews, integrated online package bookings saved in Firebase, immersive video banners, and floating interactive travel maps that immediately capture attention.",
    detailsAr: "يشتمل الموقع على حركات التمرير ثنائي الأبعاد (Parallax)، وعرض تقييمات تفاعلية، مع ربط سحابي لتسجيل وحجز الرحلات وحفظها في Firebase بشكل فوري، بالإضافة إلى لقطات فيديو ساحرة وخرائط جغرافية تفاعلية تثير الرغبة في الاكتشاف.",
    category: "Firebase"
  },
  {
    id: 6,
    title: "Happiness Restaurant",
    titleAr: "موقع مطعم السعادة",
    description: "Restaurant website displaying delicious meals, offers and menus.",
    descriptionAr: "موقع ويب متميز لعرض قوائم الأطعمة الشهية، الوجبات اليومية، والخصومات الخاصة بأسلوب يسيل له اللعاب.",
    image: "/images/restaurant.png",
    tech: ["Vue.js", "Pinia", "SCSS", "Motion"],
    live: "https://happiness-restaurant-2004.netlify.app/",
    github: "https://github.com/anasAboAli",
    details: "Features an interactive shopping cart managed by Pinia, dynamic price modifiers based on selected meal sizes, recipe filter categorization, smooth floating order notifications, and eye-catching dish entry animations.",
    detailsAr: "يتميز بوجود عربة تسوق تفاعلية سريعة مبرمجة بمخازن Pinia، وإمكانية تعديل الأسعار الفوري بناءً على الحجم والإضافات، بالإضافة إلى قوائم طعام منسقة مع حركات دخول وخروج انسيابية تضفي طابع الحيوية والجاذبية.",
    category: "Vue"
  },
  {
    id: 7,
    title: "Movies Library",
    titleAr: "مكتبة سينما الأفلام",
    description: "Movies platform displaying latest movies and documentaries.",
    descriptionAr: "منصة سينمائية متطورة لعرض وتصنيف أحدث الأفلام والمسلسلات والأفلام الوثائقية مع مراجعات تقييمية.",
    image: "/images/movies.png",
    tech: ["HTML", "CSS", "JavaScript", "Firebase", "REST API"],
    live: "https://movies-library-project.netlify.app/",
    github: "https://github.com/anasAboAli",
    details: "Consumes external REST film databases, featuring direct movie searching, filter options by genre, detailed modal reviews, streaming trailer video frames, and personal custom list saving capabilities utilizing Firebase storage.",
    detailsAr: "تقوم المنصة بسحب وتحديث البيانات السينمائية من خوادم عالمية، وتتميز بمحرك بحث سريع وفلترة دقيقة حسب التصنيف والنوع، مع إمكانية حفظ أفلامك المفضلة في قائمة مخصصة مرتبطة بقاعدة بيانات Firebase السحابية.",
    category: "REST API"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 1,
    year: "2024 - Present",
    title: "Frontend Engineer",
    titleAr: "مطور الواجهات الأمامية",
    organization: "Creative Digital Studio",
    organizationAr: "استوديو الإبداع الرقمي",
    description: "Directing UI architectures for scalable SaaS web portals. Architecting modular reusable component structures, enforcing strict TypeScript models, and mentoring junior engineers.",
    descriptionAr: "توجيه وتصميم البنية البرمجية لواجهات أنظمة الـ SaaS السحابية، وبناء مكتبات المكونات البرمجية القابلة لإعادة الاستخدام، وتدريب المطورين الجدد.",
    type: "work"
  },
  {
    id: 2,
    year: "2022 - 2024",
    title: "Senior Node.js Developer",
    titleAr: "مطور Node.js أقدم",
    organization: "TechVibe Solutions",
    organizationAr: "حلول تيك فايب البرمجية",
    description: "Senior Node.js Developer specializing in scalable APIs, backend systems, and secure, high-performance applications.",
    descriptionAr: "مطور Node.js أول متخصص في تطوير واجهات برمجية قابلة للتوسع، وأنظمة خلفية، وتطبيقات آمنة وعالية الأداء.",
    type: "work"
  },
  {
    id: 3,
    year: "2021 - Present",
    title: "Computer Science & Engineering Student",
    titleAr: "طالب هندسة وعلوم الحاسوب",
    organization: "Islamic University of Gaza",
    organizationAr: "الجامعة الاسلامية بغزة",
    description: "Focusing deep academic research on algorithms, data structures, software engineering patterns, and responsive human-centered accessibility systems.",
    descriptionAr: "التركيز الأكاديمي العميق على دراسة الخوارزميات، هياكل البيانات، هندسة البرمجيات، وأنظمة سهولة الوصول الرقمي التي تتمحور حول تلبية احتياجات المستخدم.",
    type: "education"
  },
  {
    id: 4,
    year: "2020 - 2022",
    title: "Frontend & UI Developer",
    titleAr: "مطور واجهات ومطور تفاعلي",
    organization: "Freelance Agency",
    organizationAr: "العمل الحر والتعاقد البرمجي",
    description: "Created customized high-end portfolios, corporate landing pages, and ecommerce UI components using HTML, SCSS, JavaScript, and dynamic animation hooks.",
    descriptionAr: "تصميم وتطوير واجهات مواقع شخصية فاخرة، وصفحات هبوط للشركات الكبرى، وعناصر المتاجر الإلكترونية باستخدام لغات الويب الأساسية وتقنيات الحركة.",
    type: "work"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Do you build full-stack applications or only frontend development?",
    questionAr: "هل تقوم بتطوير تطبيقات الويب الكاملة (Full-Stack) أم تركز فقط على الواجهات الأمامية؟",
    answer: "While my deep specialization is Senior Frontend Engineering (delivering highly refined visual animations, high-performance rendering, and intuitive state logic), I also regularly build secure Node.js, Laravel backend pipelines, handle REST/GraphQL integrations, and design databases like Firebase, PostgreSQL, and MySQL.",
    answerAr: "بينما ينصب تخصصي الدقيق على هندسة الواجهات الأمامية (تقديم حركات بصرية راقية، سرعة معالجة عالية، وإدارة دقيقة للحالة البرمجية)، فإنني أيضاً أقوم ببناء خوادم برمجية متكاملة باستخدام Node.js, Laravel، ودمج بوابات الـ REST/GraphQL، وتصميم قواعد البيانات السحابية والمحلية مثل Firebase و PostgreSQL."
  },
  {
    id: 2,
    question: "Can you transform raw Figma or Adobe XD layouts into clean code?",
    questionAr: "هل يمكنك تحويل تصاميم Figma أو Adobe XD الأولية إلى كود برمجى متكامل؟",
    answer: "Absolutely! I specialize in pixel-perfect conversion of Figma/XD vectors to production-ready Tailwind HTML or React/Vue components. Every margin, padding, typographic scale, and interaction is aligned exactly to the original design, complete with micro-interactions.",
    answerAr: "بالتأكيد! أنا متميز في تحويل متطابق بنسبة 100% لبكسلات تصاميم Figma و XD إلى أكواد نظيفة جاهزة للتشغيل البرمجي باستخدام Tailwind CSS و React/Vue. أهتم بكل تفصيلة في الأبعاد، الهوامش، دقة الألوان وتدرج الخطوط مع إضافة الحركات التفاعلية اللطيفة."
  },
  {
    id: 3,
    question: "How do you guarantee high performance and fast load times?",
    questionAr: "كيف تضمن أعلى درجات السرعة والأداء الفائق للمواقع؟",
    answer: "I apply strict optimizations: advanced dynamic code splitting, image compressing to modern file formats (WebP/AVIF), server-side caching policies, removing redundant dependencies (tree shaking), lazy loading components, and maintaining a high PageSpeed score above 95.",
    answerAr: "أطبق معايير تحسين أداء صارمة للغاية: تقسيم الأكواد بشكل ديناميكي، ضغط وتحويل الصور إلى صيغ الويب الحديثة (WebP/AVIF)، تفعيل سياسات الكاش والذاكرة المؤقتة، إزالة التبعيات الزائدة عن الحاجة، وتأمين نقاط تقييم تتخطى الـ 95 في مقياس Google PageSpeed."
  },
  {
    id: 4,
    question: "What is your approach to teamwork and project management?",
    questionAr: "ما هو أسلوبك في العمل الجماعي وإدارة المشاريع البرمجية؟",
    answer: "I believe in clear documentation, clean commits, and robust Git flows. I work exceptionally well with Agile methodologies, communicate progress proactively, write descriptive comments, and take full ownership of my tasks to ensure milestones are met on schedule.",
    answerAr: "أؤمن بأهمية كتابة التوثيقات البرمجية الواضحة، التزام التعديلات النظيفة (Git Commits) والهيكلية المرنة للعمل. أتعامل بانسجام مع منهجيات الـ Agile، وأتواصل بشكل استباقي وواضح مع الجميع، مع الالتزام التام بالخط الزمني للمشروع."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Alex Rivera",
    nameAr: "أليكس ريفيرا",
    role: "Chief Technology Officer",
    roleAr: "الرئيس التنفيذي للتكنولوجيا",
    text: "Anas was instrumental in redesigning our core application. His attention to fine details, elegant animations, and clean React architectures turned our complex dashboard into an intuitive visual masterpiece. Our user retention instantly soared.",
    textAr: "كان أنس ركناً أساسياً في إنجاح إعادة تصميم منصتنا البرمجية. اهتمامه البالغ بأدق التفاصيل، وتطبيقه لأكواد نظيفة وحركات بالغة السلاسة حولت لوحة التحكم المعقدة إلى تحفة بصرية ممتعة. ارتفعت نسبة تفاعل العملاء معنا بشكل فوري.",
    company: "SaaSify Inc.",
    avatar: "https://picsum.photos/seed/alex/100/100"
  },
  {
    id: 2,
    name: "Amira Mansour",
    nameAr: "أميرة منصور",
    role: "Product Owner",
    roleAr: "مديرة تطوير المنتجات",
    text: "Working with Anas was a magnificent experience. He possesses a rare combination of pure creative UX styling and robust frontend engineering skills. Every component is meticulously optimized, accessibility-compliant, and perfectly modular.",
    textAr: "كان العمل مع أنس تجربة مذهلة بكل المقاييس. إنه يمتلك مزيجاً نادراً يجمع بين الرؤية الفنية الإبداعية للواجهات والخبرة الهندسية الصلبة لتطوير الويب. كل عنصر برمجي قام بتطويره مجهز وسريع للغاية ويسهل التعديل عليه.",
    company: "FutureFlow Studios",
    avatar: "https://picsum.photos/seed/amira/100/100"
  },
  {
    id: 3,
    name: "Marcus Sterling",
    nameAr: "ماركوس ستيرلينغ",
    role: "Digital Marketing Lead",
    roleAr: "رئيس قسم التسويق الرقمي",
    text: "The high-conversion landing pages Anas engineered boosted our sales campaigns by over 40%. The load speeds are virtually instant on mobile, and the interactive micro-experiences blew our leads away. Highly recommended frontend master!",
    textAr: "صفحات الهبوط المتقدمة التي طورها أنس ساعدت في تعزيز حملاتنا التسويقية بنسبة تتجاوز الـ 40%. سرعة فتح الموقع لحظية على الهواتف، والتفاعلات البصرية اللطيفة أثارت إعجاب العملاء بشدة. أنصح بالتعاون معه كخبير للواجهات!",
    company: "Horizon Agencies",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 1,
    title: "Optimizing State Management in Vue 3: Pinia vs. Reactive Refs",
    titleAr: "تحسين إدارة الحالة البرمجية في Vue 3: المقارنة الفعالة بين Pinia و Reactive Refs",
    excerpt: "Explore deep performance benchmarks and structural comparisons when mapping global state in massive single-page applications.",
    excerptAr: "استكشاف مؤشرات الأداء والمقارنات الهيكلية الدقيقة عند تمثيل وإدارة الحالات العامة للبيانات في التطبيقات الكبيرة.",
    date: "June 24, 2026",
    dateAr: "٢٤ يونيو ٢٠٢٦",
    readTime: "6 min read",
    readTimeAr: "قراءة في ٦ دقائق",
    image: "https://picsum.photos/seed/blog1/800/500",
    tags: ["Vue.js", "Pinia", "Performance"]
  },
  {
    id: 2,
    title: "Crafting Pixel-Perfect responsive systems using Tailwind CSS Grid layout",
    titleAr: "تصميم أنظمة متجاوبة متناهية الدقة بكسلياً باستخدام شبكة Tailwind Grid",
    excerpt: "Learn how to build modular, fluid, and robust multi-column dashboard structures that respond perfectly to container resizing.",
    excerptAr: "تعلم كيفية بناء هياكل وشبكات لوحات تحكم مرنة وقابلة للتكيف والاتساع التلقائي مع تغير أبعاد الشاشات والحاويات.",
    date: "May 12, 2026",
    dateAr: "١٢ مايو ٢٠٢٦",
    readTime: "8 min read",
    readTimeAr: "قراءة في ٨ دقائق",
    image: "https://picsum.photos/seed/blog2/800/500",
    tags: ["Tailwind", "Responsive", "UI/UX"]
  },
  {
    id: 3,
    title: "The Power of Micro-Animations: Keeping users engaged through subtle motion",
    titleAr: "سحر التفاعلات والحركات الدقيقة: إبقاء المستخدمين متفاعلين عبر لمسات الحركة الخفيفة",
    excerpt: "How adding subtle motion transitions to hover events and scroll points elevates user delight and interface luxury scores.",
    excerptAr: "كيف يؤدي دمج حركات الدخول والتمرير الخفيفة لتفاعلات المستخدم إلى زيادة متعة الاستخدام ورفع جودة المنتج بصرياً.",
    date: "April 08, 2026",
    dateAr: "٨ أبريل ٢٠٢٦",
    readTime: "5 min read",
    readTimeAr: "قراءة في ٥ دقائق",
    image: "https://picsum.photos/seed/blog3/800/500",
    tags: ["Animations", "UX Design", "Motion"]
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 1,
    title: "Advanced Vue.js & Nuxt Masterclass",
    titleAr: "شهادة إتقان Vue.js و Nuxt المتقدمة",
    issuer: "VueSchool Training",
    issuerAr: "أكاديمية VueSchool",
    date: "Jan 2025",
    dateAr: "يناير ٢٠٢٥"
  },
  {
    id: 2,
    title: "Professional Frontend Architect Certification",
    titleAr: "شهادة معمارية الواجهات الأمامية الاحترافية",
    issuer: "Frontend Masters",
    issuerAr: "منصة Frontend Masters الدولية",
    date: "Oct 2024",
    dateAr: "أكتوبر ٢٠٢٤"
  },
  {
    id: 3,
    title: "Advanced TypeScript & Type Safety Engineering",
    titleAr: "شهادة هندسة لغة TypeScript المتقدمة وأمن الأنواع",
    issuer: "TypeScript League",
    issuerAr: "اتحاد مبرمجي TypeScript",
    date: "May 2024",
    dateAr: "مايو ٢٠٢٤"
  }
];
