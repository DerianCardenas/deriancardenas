const i18nData = {
  es: {
    // Navigation
    "nav-about": "Sobre mí",
    "nav-skills": "Skills",
    "nav-projects": "Proyectos",
    "nav-experience": "Experiencia",
    "nav-certifications": "Certificados",
    "nav-contact": "Contacto",

    // Hero
    "hero-badge": "Disponible para proyectos freelance y consultoría",
    "hero-bio": "Full Stack Developer con más de 3 años de experiencia diseñando y escalando sistemas empresariales y gubernamentales de alta concurrencia (+100,000 transacciones mensuales). Especializado en <strong>Vue.js 3, .NET Core 10, Laravel y PostgreSQL</strong>. Historial de reducir tiempos de carga hasta un 60 % mediante optimización de stored procedures y arquitectura de componentes. Aplica <strong>IA generativa y agentes autónomos</strong> en producción.",
    "hero-btn-projects": "Ver proyectos →",
    "hero-btn-contact": "Contáctame",
    "hero-social-find": "Encuéntrame en",

    // About
    "about-label": "Sobre mí",
    "about-title": "Full Stack Developer<br/>con enfoque en escalabilidad e IA",
    "about-p1": "Soy <strong>Derian Alexis Cárdenas Mortera</strong>, desarrollador Full Stack con base en Veracruz, México. Graduado en <strong>Ingeniería en Sistemas Computacionales</strong> por el Instituto Tecnológico de Veracruz (2018–2023).",
    "about-p2": "Especializado en <strong>.NET Core 10, Fastify 5 y Laravel</strong> en el backend, y <strong>Vue 3, Quasar, React 19 y Next.js 16</strong> en el frontend. Cuento con una sólida trayectoria construyendo plataformas SaaS multitenant, ERPs gubernamentales/académicos y sistemas con firma electrónica FIEL.",
    "about-p3": "Pionero en la integración de <strong>IA Generativa y Agentes Autónomos</strong> (Human-in-the-Loop, supervisores cron automatizados, asistentes de negociación) como multiplicadores de productividad en proyectos reales en producción.",
    "vibe-title": "Desarrollo Agéntico & IA Generativa",
    "vibe-p1": "Diseño e implemento agentes de IA autónomos (Anthropic Claude API, OpenAI, Gemini) y workflows conversacionales con Human-in-the-Loop para automatizar procesos complejos de compras, análisis de fraudes y recomendaciones estratégicas.",
    "vibe-p2": "Utilizo herramientas avanzadas de IA (Claude Code, Antigravity, OpenCode, GitHub Copilot) como multiplicadores de productividad, manteniendo un absoluto rigor técnico en arquitectura Clean, testing y optimización SQL.",
    "stat-exp": "Años de experiencia",
    "stat-proj": "+100k trans/mes",
    "stat-be": "Backend (.NET 10 / Laravel / Fastify)",
    "stat-fe": "Frontend (Vue 3 / Next.js / React)",

    // Skills
    "skills-label": "Tech Stack",
    "skills-title": "Habilidades & Herramientas",
    "skills-desc": "Tecnologías empresariales y agénticas que utilizo en producción.",
    "skills-cat-be": "Backend",
    "skills-cat-fe": "Frontend",
    "skills-cat-db": "Datos & Arquitectura",
    "skills-cat-devops": "Cloud & Storage",
    "skills-cat-languages": "Lenguajes",
    "skills-cat-ai": "IA & Desarrollo Agéntico",

    // Projects
    "projects-label": "Proyectos",
    "projects-title": "Sistemas en Producción & Proyectos Destacados",
    "filter-all": "Todos",
    "filter-personal": "Personales",
    "filter-work": "Profesionales",
    "tag-personal": "Personal",
    "tag-work": "Profesional",
    "proj-private": "Proyecto privado",
    "proj-developing": "En desarrollo",

    // Projects - DSIGNR
    "proj-dsignr-title": "🎨 DSIGNR — Plataforma SaaS para Diseños e Impresión DTF",
    "proj-dsignr-desc": "Plataforma SaaS por suscripción con +5,000 diseños para impresión DTF, almacenamiento en la nube y suite de studios web: mockups sobre prendas, semitono, limpiador de colores, calculadora de márgenes y armado de pliegos. Integración con Stripe (planes múltiples, webhooks), Cloudflare R2 y BackOffice sin despliegues adicionales.",

    // Projects - SICROP Agentes
    "proj-sicrop-title": "🤖 SICROP Agentes — Sistema de Compras con IA",
    "proj-sicrop-desc": "Agente conversacional con Human-in-the-Loop para creación de solicitudes de compra vía chat con validación en puntos críticos. Agente cron para detección de solicitudes atascadas, fraudes por compras segmentadas y dominancia de proveedores. Asistente de negociación de precios basado en historial.",

    // Projects - COD
    "proj-cod-title": "✉️ COD — Comunicaciones Oficiales Digitales",
    "proj-cod-desc": "Plataforma multitenant de gestión de documentos oficiales con firma digital FIEL (iText7), flujo de invitación por token y auditoría completa. Arquitectura schema-per-tenant en PostgreSQL 17 con cookie JWT HttpOnly e integración de IA (Claude / ChatGPT) con límite mensual de consumo.",

    // Projects - U3M
    "proj-u3m-title": "🎓 U3M — ERP Universitario Integral",
    "proj-u3m-desc": "ERP académico completo para universidad privada: inscripciones, titulación y pagos. Reducción de tiempos de carga de 5 s a 2 s (60 %) mediante composables reutilizables y optimización profunda de stored procedures en PostgreSQL.",

    // Projects - SEMOV
    "proj-semov-title": "🚗 SEMOV — Concesiones Vehiculares (Estado de México)",
    "proj-semov-desc": "Plataforma de trámites vehiculares para +100,000 transacciones mensuales con flujos anti-corrupción, lógica asíncrona y trazabilidad 100 % en expedientes. Resolución de cuellos de botella en periodos pico de recaudación con stored procedures y Clean Architecture (Quasar).",

    // Projects - SICSSE
    "proj-sicsse-title": "🏛️ SICSSE — ERP Compras y Almacenes (SEJ Jalisco)",
    "proj-sicsse-desc": "Flujos de aprobación multinivel y bandejas adaptativas por rol para +3,000 transacciones diarias entre 5 departamentos. Control de inventarios, órdenes de compra y movimientos de bienes públicos con validaciones de consistencia extremo a extremo.",

    // Projects - SEJ Control Escolar
    "proj-control-escolar-title": "📚 SEJ Control Escolar — Sistema Académico",
    "proj-control-escolar-desc": "Módulos escalables para +250,000 alumnos y 15,000 docentes: inscripciones, calificaciones, pagos y asignación de plazas. Validaciones masivas automatizadas garantizando cero tiempos de inactividad durante periodos críticos.",

    // Projects - Control Ganadero
    "proj-ganado-title": "🐄 Control Ganadero — Gestión Operativa",
    "proj-ganado-desc": "Plataforma de gestión ganadera con trazabilidad operativa (pesaje, alimentación, ventas) y dashboards interactivos en Vue para monitoreo gerencial en tiempo real.",

    // Projects - MiFinanza
    "proj-mifinanza-title": "💰 MiFinanza — Dashboard Financiero",
    "proj-mifinanza-desc": "App de finanzas personales completa con frontend en Vue 3 y backend .NET 9. Multi-currency (USD/MXN/EUR/GBP), tarjetas de crédito, MSI, presupuestos, metas de ahorro y dashboard analítico con gráficas por período.",

    // Projects - AI-Agents
    "proj-aiagents-title": "🤖 AI-Agents — Framework de Desarrollo con IA",
    "proj-aiagents-desc": "Framework para orquestar un equipo completo de agentes IA especializados: PO, Scrum Master, DBA, Backend, Frontend, Tester y Docs. Cada agente tiene rol, herramientas, contratos y memoria compartida entre proyectos.",

    // Projects - Solitario
    "proj-solitario-title": "🃏 Solitario Klondike — Linux Desktop",
    "proj-solitario-desc": "Juego completo de Solitario Klondike para Linux empaquetado como <code>.deb</code>. 5 niveles de dificultad, 3 temas visuales, drag & drop, undo y autosave en JSON.",

    // Projects - MangaReader
    "proj-mangareader-title": "📖 MangaReader — Lector Web",
    "proj-mangareader-desc": "Plataforma de lectura de manga minimalista y rápida, optimizada para dispositivos móviles y alojada en Cloudflare Pages.",

    // Projects - GameSir
    "proj-gamesir-title": "🎮 Driver Linux para GameSir-K1",
    "proj-gamesir-desc": "Módulo de kernel Linux en C para soporte de controlador USB no reconocido nativamente. Protocolo GIP (Xbox), handshake completo, ACK de mensajes y mapeo de botones desde paquetes raw.",

    // Experience
    "exp-label": "Trayectoria",
    "exp-title": "Experiencia Laboral",
    "exp-period-bepartners": "🏢 Agosto 2023 — Actualidad",
    "exp-role-bepartners": "Full Stack Developer",
    "exp-company-bepartners": "BePartners · Veracruz",
    "exp-desc-bepartners-1": "Diseñé y desarrollé agentes de IA autónomos (Human-in-the-Loop, supervisores cron, recomendación de proveedores) integrando Anthropic Claude API",
    "exp-desc-bepartners-2": "Optimicé consultas críticas en ERPs (+100k trans/mes), reduciendo tiempos de 6–8 s a 2 s (60 %) mediante refactor de stored procedures, indexación y profiling SQL",
    "exp-desc-bepartners-3": "Lideré la conversión de plataformas monolíticas a modelos SaaS multitenant (schema-per-tenant, JWT HttpOnly, Stripe, Cloudflare R2)",
    "exp-desc-bepartners-4": "Desarrollo y mantenimiento end-to-end de 4+ proyectos de gran escala en producción con .NET Core 10, Vue 3, Quasar, Next.js 16 y Fastify 5",

    // Community & Education
    "comm-label": "Comunidad & Educación",
    "comm-period-codti": "🌐 2018 — 2023",
    "comm-role-codti": "Cofundador & Líder de Desarrollo Web",
    "comm-company-codti": "CodTI-Web · Instituto Tecnológico de Veracruz",
    "comm-desc-codti-1": "Cofundé y lideré la comunidad universitaria de desarrollo web, impulsando a +100 estudiantes en programación y arquitectura de software",
    "comm-desc-codti-2": "Participación destacada en programación competitiva en la Copa de Programación TECNM a nivel nacional",

    // Education
    "edu-label": "Educación",
    "edu-degree": "Ingeniería en Sistemas Computacionales",
    "edu-school": "Instituto Tecnológico de Veracruz",
    "edu-year": "2018 — 2023",

    // Certifications
    "certs-label": "Logros & Formación",
    "certs-title": "Certificados & Reconocimientos",
    "certs-desc": "Certificaciones activas, competencias y formación profesional continua.",
    "certs-cat-comp": "🏆 Competencias & Plataformas",
    "certs-cat-capacitat": "📜 CapacitaT — Fundación Carlos Slim",
    "certs-cat-udemy": "🎓 Cursos Udemy & Especializaciones",
    "certs-cat-edu": "🎓 Formación académica",
    "cert-view": "Ver certificado ↗",
    "cert-contest-place": "Lugar #20",
    "cert-contest-participation": "Participación",
    "cert-contest-desc": "Torneo por equipos de programación competitiva",

    // Contact
    "contact-label": "Contacto",
    "contact-title": "¿Hablamos?",
    "contact-desc": "Estoy disponible para proyectos freelance, consultoría o vacantes Full Stack / IA. ¡Envíame un mensaje!",

    // Footer
    "footer-text": "Diseñado y construido por <span>Derian Alexis Cárdenas Mortera</span> · Full Stack Developer · 2026",

    // Roles for Typing Animation
    "role-1": "Full Stack Developer",
    "role-2": "AI Agents & GenAI Specialist",
    "role-3": "Vue.js 3 & .NET Core 10 Engineer",
    "role-4": "SaaS & Multitenancy Architect",
    "role-5": "Product & Optimization Mindset"
  },
  en: {
    // Navigation
    "nav-about": "About me",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-experience": "Experience",
    "nav-certifications": "Certifications",
    "nav-contact": "Contact",

    // Hero
    "hero-badge": "Available for freelance projects & consulting",
    "hero-bio": "Full Stack Developer with 3+ years of experience designing and scaling high-concurrency enterprise and government systems (+100,000 monthly transactions). Specialized in <strong>Vue.js 3, .NET Core 10, Laravel, and PostgreSQL</strong>. Proven record of cutting load times by up to 60% via stored procedure optimization and component architecture. Deploys <strong>generative AI & autonomous agents</strong> in production.",
    "hero-btn-projects": "View projects →",
    "hero-btn-contact": "Contact me",
    "hero-social-find": "Find me on",

    // About
    "about-label": "About me",
    "about-title": "Full Stack Developer<br/>focused on scalability & AI",
    "about-p1": "I am <strong>Derian Alexis Cárdenas Mortera</strong>, a Full Stack Developer based in Veracruz, Mexico. Graduated with a degree in <strong>Computer Systems Engineering</strong> from Instituto Tecnológico de Veracruz (2018–2023).",
    "about-p2": "Specialized in <strong>.NET Core 10, Fastify 5, and Laravel</strong> on the backend, and <strong>Vue 3, Quasar, React 19, and Next.js 16</strong> on the frontend. Solid track record building multitenant SaaS platforms, government/academic ERPs, and FIEL digital signature systems.",
    "about-p3": "Pioneer in integrating <strong>Generative AI & Autonomous Agents</strong> (Human-in-the-Loop, automated cron supervisors, negotiation assistants) as productivity multipliers in real production systems.",
    "vibe-title": "Agentic Development & Generative AI",
    "vibe-p1": "I design and build autonomous AI agents (Anthropic Claude API, OpenAI, Gemini) and Human-in-the-Loop workflows to automate complex business processes like procurement, fraud detection, and strategic recommendations.",
    "vibe-p2": "I leverage advanced AI tooling (Claude Code, Antigravity, OpenCode, GitHub Copilot) as productivity multipliers, maintaining strict technical rigor in Clean Architecture, testing, and SQL optimization.",
    "stat-exp": "Years of experience",
    "stat-proj": "+100k trans/month",
    "stat-be": "Backend (.NET 10 / Laravel / Fastify)",
    "stat-fe": "Frontend (Vue 3 / Next.js / React)",

    // Skills
    "skills-label": "Tech Stack",
    "skills-title": "Skills & Tools",
    "skills-desc": "Enterprise and agentic technologies I use in production.",
    "skills-cat-be": "Backend",
    "skills-cat-fe": "Frontend",
    "skills-cat-db": "Data & Architecture",
    "skills-cat-devops": "Cloud & Storage",
    "skills-cat-languages": "Languages",
    "skills-cat-ai": "AI & Agentic Development",

    // Projects
    "projects-label": "Projects",
    "projects-title": "Production Systems & Featured Projects",
    "filter-all": "All",
    "filter-personal": "Personal",
    "filter-work": "Professional",
    "tag-personal": "Personal",
    "tag-work": "Professional",
    "proj-private": "Private project",
    "proj-developing": "In development",

    // Projects - DSIGNR
    "proj-dsignr-title": "🎨 DSIGNR — DTF Print SaaS Platform",
    "proj-dsignr-desc": "Subscription SaaS platform featuring +5,000 designs for DTF printing, cloud storage, and web studio suite: garment mockups, halftone, color cleaner, margin calculator, and sheet layout builder. Integrated Stripe (multiple plans, webhooks), Cloudflare R2, and live BackOffice.",

    // Projects - SICROP Agentes
    "proj-sicrop-title": "🤖 SICROP Agents — AI Procurement System",
    "proj-sicrop-desc": "Human-in-the-Loop conversational agent for creating purchase requests via chat with critical step validation. Cron agent for detecting stuck requests, segmented purchase fraud, and supplier dominance. Price negotiation assistant.",

    // Projects - COD
    "proj-cod-title": "✉️ COD — Official Digital Communications",
    "proj-cod-desc": "Multitenant platform for official document management with FIEL digital signature (iText7), token invitation flow, and full audit trail. Schema-per-tenant architecture in PostgreSQL 17 with HttpOnly JWT cookies and configurable AI (Claude / ChatGPT) integration.",

    // Projects - U3M
    "proj-u3m-title": "🎓 U3M — Comprehensive University ERP",
    "proj-u3m-desc": "Full academic ERP for a private university: enrollments, graduation, and payments. Reduced key page load times from 5s to 2s (60%) via reusable composables and deep stored procedure optimization in PostgreSQL.",

    // Projects - SEMOV
    "proj-semov-title": "🚗 SEMOV — Vehicle Concessions (State of Mexico)",
    "proj-semov-desc": "Vehicle permit platform processing +100,000 monthly transactions with anti-corruption workflows, async logic, and 100% record auditability. Resolved peak collection period bottlenecks with stored procedures and Clean Architecture (Quasar).",

    // Projects - SICSSE
    "proj-sicsse-title": "🏛️ SICSSE — Procurement & Warehouse ERP (SEJ)",
    "proj-sicsse-desc": "Multilevel approval workflows and adaptive role inboxes processing +3,000 daily transactions across 5 departments. Full consistency validation for public inventory, purchase orders, and asset movements.",

    // Projects - SEJ Control Escolar
    "proj-control-escolar-title": "📚 SEJ Academic & Administrative System",
    "proj-control-escolar-desc": "Scalable modules for +250,000 students and 15,000 teachers: enrollment, grades, payments, and position allocation. Automated bulk validations ensuring zero downtime during peak enrollment periods.",

    // Projects - Control Ganadero
    "proj-ganado-title": "🐄 Cattle Management — Operational System",
    "proj-ganado-desc": "Livestock management platform featuring operational traceability (weighing, feeding, sales) and real-time interactive Vue dashboards for executive monitoring.",

    // Projects - MiFinanza
    "proj-mifinanza-title": "💰 MiFinanza — Financial Dashboard",
    "proj-mifinanza-desc": "Complete personal finance app with Vue 3 frontend and .NET 9 backend. Multi-currency (USD/MXN/EUR/GBP), credit cards, installments (MSI), budgets, savings goals, and period chart analytics.",

    // Projects - AI-Agents
    "proj-aiagents-title": "🤖 AI-Agents — AI Development Framework",
    "proj-aiagents-desc": "Framework to orchestrate a full team of specialized AI agents: PO, Scrum Master, DBA, Backend, Frontend, Tester, and Docs. Each agent has a role, tools, contracts, and shared memory across projects.",

    // Projects - Solitario
    "proj-solitario-title": "🃏 Solitaire Klondike — Linux Desktop",
    "proj-solitario-desc": "Full Klondike Solitaire game for Linux, packaged as <code>.deb</code>. 5 difficulty levels, 3 visual themes, drag & drop, undo, and JSON autosave.",

    // Projects - MangaReader
    "proj-mangareader-title": "📖 MangaReader — Web Reader",
    "proj-mangareader-desc": "Minimalist and fast manga reading platform, optimized for mobile devices and hosted on Cloudflare Pages.",

    // Projects - GameSir
    "proj-gamesir-title": "🎮 Linux Driver for GameSir-K1",
    "proj-gamesir-desc": "Linux kernel module in C for USB controller support not recognized natively. GIP protocol (Xbox), full handshake, message ACK, and raw packet button mapping.",

    // Experience
    "exp-label": "Trajectory",
    "exp-title": "Work Experience",
    "exp-period-bepartners": "🏢 August 2023 — Present",
    "exp-role-bepartners": "Full Stack Developer",
    "exp-company-bepartners": "BePartners · Veracruz",
    "exp-desc-bepartners-1": "Designed and built autonomous AI agents (Human-in-the-Loop, cron supervisors, supplier recommenders) integrating Anthropic Claude API",
    "exp-desc-bepartners-2": "Optimized critical ERP database queries (+100k trans/month), cutting load times from 6–8s to 2s (60%) via stored procedures, indexing, and SQL profiling",
    "exp-desc-bepartners-3": "Led migration of monolithic platforms to multitenant SaaS models (schema-per-tenant, HttpOnly JWT, Stripe, Cloudflare R2)",
    "exp-desc-bepartners-4": "End-to-end development & maintenance of 4+ large-scale production projects using .NET Core 10, Vue 3, Quasar, Next.js 16, and Fastify 5",

    // Community & Education
    "comm-label": "Community & Education",
    "comm-period-codti": "🌐 2018 — 2023",
    "comm-role-codti": "Co-founder & Web Development Leader",
    "comm-company-codti": "CodTI-Web · Instituto Tecnológico de Veracruz",
    "comm-desc-codti-1": "Co-founded and led the university web development community, training +100 students in programming and software architecture",
    "comm-desc-codti-2": "Outstanding participation in competitive programming at TECNM National Coding Cup",

    // Education
    "edu-label": "Education",
    "edu-degree": "Computer Systems Engineering",
    "edu-school": "Instituto Tecnológico de Veracruz",
    "edu-year": "2018 — 2023",

    // Certifications
    "certs-label": "Achievements & Training",
    "certs-title": "Certificates & Recognitions",
    "certs-desc": "Active certifications, competitions, and ongoing professional development.",
    "certs-cat-comp": "🏆 Competitions & Platforms",
    "certs-cat-capacitat": "📜 CapacitaT — Carlos Slim Foundation",
    "certs-cat-udemy": "🎓 Udemy Courses & Specializations",
    "certs-cat-edu": "🎓 Academic Background",
    "cert-view": "View certificate ↗",
    "cert-contest-place": "Place #20",
    "cert-contest-participation": "Participation",
    "cert-contest-desc": "Competitive programming team tournament",

    // Contact
    "contact-label": "Contact",
    "contact-title": "Let's talk?",
    "contact-desc": "I am available for freelance projects, consulting, or Full Stack / AI opportunities. Drop me a message!",

    // Footer
    "footer-text": "Designed and built by <span>Derian Alexis Cárdenas Mortera</span> · Full Stack Developer · 2026",

    // Roles for Typing Animation
    "role-1": "Full Stack Developer",
    "role-2": "AI Agents & GenAI Specialist",
    "role-3": "Vue.js 3 & .NET Core 10 Engineer",
    "role-4": "SaaS & Multitenancy Architect",
    "role-5": "Product & Optimization Mindset"
  }
};
