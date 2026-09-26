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
    "hero-badge": "Full Stack Developer en BePartners",
    "hero-bio": "Full Stack Developer en <strong>BePartners</strong> (desde enero de 2023). Especializado en <strong>Vue 3, TypeScript, C# / .NET, Laravel y PostgreSQL</strong>. Enfocado en sistemas con reglas de negocio complejas, arquitecturas SaaS y desarrollo agéntico con IA.",
    "hero-btn-projects": "Ver proyectos →",
    "hero-btn-contact": "Contáctame",
    "hero-social-find": "Encuéntrame en",

    // About
    "about-label": "Perfil Profesional",
    "about-title": "Desarrollador Full Stack<br/>con enfoque en sistemas complejos & IA",
    "about-p1": "Soy <strong>Derian Alexis Cárdenas Mortera</strong>, desarrollador Full Stack en BePartners desde enero de 2023. Mi trabajo diario abarca la construcción de plataformas empresariales, SaaS multitenant y módulos agénticos con IA.",
    "about-p2": "Manejo un stack principal compuesto por <strong>Vue 3, TypeScript, C# / .NET, Laravel y PostgreSQL</strong>. Me apasionan los sistemas con lógica de negocio exigente, optimización profunda de consultas/stored procedures y flujos documentales con firma digital.",
    "about-p3": "Mi proyecto personal actual es <strong>EFINANCE</strong>, una aplicación para gestión de finanzas personales e importación de estados de cuenta PDF desarrollada con Vue 3, TypeScript, .NET 9 y PostgreSQL.",
    "vibe-title": "Desarrollo Agéntico & IA Generativa",
    "vibe-p1": "Diseño e implemento agentes de IA autónomos (conversacionales, asistentes de negociación y monitores cron) integrados a sistemas existentes mediante Anthropic Claude API.",
    "vibe-p2": "Uso herramientas avanzadas como multiplicadores de productividad, manteniendo absoluto rigor técnico en arquitectura Clean, componentes modulares y optimización SQL.",
    "stat-exp": "Años en BePartners",
    "stat-proj": "Proyectos en producción",
    "stat-be": "Backend (.NET / Laravel)",
    "stat-fe": "Frontend (Vue 3 / TS)",

    // Skills
    "skills-label": "Tech Stack",
    "skills-title": "Habilidades & Herramientas",
    "skills-desc": "Tecnologías empresariales y agénticas que utilizo en proyectos de producción.",
    "skills-cat-be": "Backend",
    "skills-cat-fe": "Frontend",
    "skills-cat-db": "Datos & Arquitectura",
    "skills-cat-devops": "Cloud & Tools",
    "skills-cat-languages": "Lenguajes",
    "skills-cat-ai": "IA & Agentes",

    // Projects Header & Filters
    "projects-label": "Proyectos",
    "projects-title": "Proyectos & Aportaciones Técnicas",
    "filter-all": "Todos",
    "filter-personal": "Personales",
    "filter-work": "Profesionales",
    "tag-personal": "Personal",
    "tag-work": "Profesional",
    "tag-featured": "⭐ Prioritario",
    "proj-private": "Proyecto privado",
    "proj-product-site": "Sitio del producto ↗",
    "proj-developing": "En desarrollo",

    // 1. SEMOV
    "proj-semov-title": "🚗 SEMOV Edomex — Movilidad y Concesiones (2024–2025)",
    "proj-semov-summary": "<strong>Problema resuelto:</strong> Digitalización y gestión integral de trámites y expedientes de concesiones vehiculares para el gobierno del Estado de México.",
    "proj-semov-desc": "<strong>⚡ Aportación Personal & Trabajo Realizado:</strong><br/>• Desarrollé vistas y formularios dinámicos para <strong>23 trámites distintos</strong>. Procedimientos almacenados determinaban dinámicamente qué secciones y requisitos documentales mostrar según el tipo de trámite, logrando una arquitectura de componentes altamente reutilizable.<br/>• Implementé los flujos completos desde la creación del expediente y atención en ventanilla hasta las revisiones en jefaturas y firmas digitales de directores o subdirectores.<br/>• Desarrollé los módulos de autenticación (login y registro), transferencias, modificación de datos de expedientes y bloqueos/desbloqueos operativos de concesiones.<br/><br/><strong>🛠️ Decisiones Técnicas:</strong> Aplicación de Clean Architecture en frontend con Vue 3, Quasar y TypeScript, integrando API backend en .NET 9 y PostgreSQL.<br/><br/><strong>👥 Delimitación de Equipo & Escala:</strong> Los módulos de procesamiento de pago, asignación de formas valoradas y generación de documentos finales fueron implementados por otro compañero de equipo. La cifra de <strong>+100,000 transacciones mensuales</strong> corresponde a la escala reportada por la empresa para la plataforma.",

    // 2. SEJ Control Escolar
    "proj-sej-title": "📚 SEJ Jalisco — Control Escolar y Gestión Académica (2023–2024)",
    "proj-sej-summary": "<strong>Problema resuelto:</strong> Sistema de gestión académica y administrativa para la Secretaría de Educación de Jalisco.",
    "proj-sej-desc": "<strong>⚡ Aportación Personal & Trabajo Realizado:</strong><br/>• Implementé los módulos de autenticación (login y registro).<br/>• Desarrollé el módulo de asignación docente: vinculación de profesores a materias y grupos jerarquizada por municipio, zona escolar, centro de trabajo (CCT), salón y grupo.<br/>• Desarrollé las pantallas y flujos para captura de calificaciones, registro de asistencias y navegación dinámica del menú según roles de usuario.<br/><br/><strong>🛠️ Decisiones Técnicas:</strong> Construcción de componentes interactivos en Vue 3 consumiendo backend en Laravel y MySQL.<br/><br/><strong>👥 Clarificación de Ámbito:</strong> La población total de alumnos y docentes de la Secretaría de Educación corresponde a la escala institucional atendida y no a una métrica directa de usuarios activos medidos sobre mis módulos.",

    // 3. SICROP Agentes
    "proj-sicrop-title": "🤖 SICROP — Agentes de IA para Compras (2026)",
    "proj-sicrop-summary": "<strong>Problema resuelto:</strong> Automatización conversacional, asistencia de negociación y monitoreo continuo sobre un sistema de compras existente.",
    "proj-sicrop-desc": "<strong>⚡ Aportación Personal (Agentes de IA Desarrollados):</strong><br/>• <strong>Agente Conversacional:</strong> Recibe pedidos por chat (ej. <em>\"quiero tres laptops para mañana\"</em>), propone opciones del catálogo, comprueba presupuesto, muestra vista previa, permite cambios por texto o interfaz y envía la solicitud al superior.<br/>• <strong>Agente de Negociación:</strong> Examina el historial de compras previas, productos, precios y vendedores para mostrar tendencias de mercado y sugerir alternativas de compra o estrategias de negociación.<br/>• <strong>Agente Monitor / Cron Configurable:</strong> Supervisa el sistema enviando alertas sobre solicitudes atascadas, presupuestos cerca del límite y compras acumuladas que superan umbrales en un periodo definido.<br/><br/><strong>🛠️ Decisiones Técnicas:</strong> Integración de Anthropic Claude API con flujos en Vue 3, .NET y PostgreSQL.<br/><br/><strong>⚠️ Nota de Auditoría:</strong> Las alertas generadas por el monitor identifican posibles anomalías operativas y desvíos para revisión humana, no fraudes comprobados.",

    // 4. COD
    "proj-cod-title": "✉️ COD — Comunicaciones Oficiales Digitales (2026)",
    "proj-cod-summary": "<strong>Problema resuelto:</strong> Migración de un sistema documental monolítico hacia una plataforma SaaS multitenant de firma y gestión de documentos oficiales.",
    "proj-cod-desc": "<strong>⚡ Aportación Personal & Trabajo Realizado:</strong><br/>• Implementé el esquema de firma múltiple y la firma electrónica para usuarios externos a la plataforma.<br/>• Desarrollé la funcionalidad de compartición de documentos con verificación de segundo factor (2FA).<br/>• Integré la representación visual de firmas en documentos utilizando el editor WYSIWYG Jodit.<br/>• Desarrollé el backoffice administrativo, la gestión de borradores y las bandejas compartidas entre áreas.<br/><br/><strong>🛠️ Decisiones Técnicas:</strong> Frontend en Vue 3, backend en .NET 10 y PostgreSQL.<br/><br/><strong>🌐 Estado del Producto:</strong> En producción activa en <a href=\"https://cod.bepartners.mx/\" target=\"_blank\" rel=\"noopener\">https://cod.bepartners.mx/</a> (sitio del producto, requiere credenciales).",

    // 5. U3M
    "proj-u3m-title": "🎓 U3M — ERP Universitario (2025–2026)",
    "proj-u3m-summary": "<strong>Problema resuelto:</strong> Gestión de flujos académicos y financieros críticos para una universidad privada.",
    "proj-u3m-desc": "<strong>⚡ Aportación Personal & Optimización Demostrada:</strong><br/>• Implementé los flujos end-to-end para titulación de estudiantes y cobros.<br/>• <strong>Rendimiento Trazable:</strong> Reduje el tiempo de carga en pantallas clave de 6–8 segundos a cerca de 2 segundos mediante la refactorización de procedimientos almacenados y optimización de lógica de consultas en PostgreSQL.<br/><br/><strong>🛠️ Decisiones Técnicas:</strong> Arquitectura de componentes en Vue 3, backend .NET y optimización SQL en PostgreSQL.",

    // 6. SICSSE
    "proj-sicsse-title": "🏛️ SICSSE — Compras y Almacenes SEJ (2023–2024)",
    "proj-sicsse-summary": "<strong>Problema resuelto:</strong> Control de flujo de adquisiciones, entradas y salidas de inventario en almacenes gubernamentales.",
    "proj-sicsse-desc": "<strong>⚡ Aportación Personal & Trabajo Realizado:</strong><br/>• Diseñé e implementé el motor de aprobaciones multinivel.<br/>• Desarrollé las bandejas de trabajo adaptativas según el rol del usuario (compras, almacenes, jefaturas).<br/><br/><strong>🛠️ Decisiones Técnicas & Capacidad:</strong> Desarrollado con Vue 3, Laravel y PostgreSQL, diseñado con capacidad para sostener al menos 500 operaciones diarias.",

    // 7. DSIGNR
    "proj-dsignr-title": "🎨 DSIGNR — SaaS para Impresión DTF (2026, en desarrollo)",
    "proj-dsignr-summary": "<strong>Problema resuelto:</strong> Módulos complementarios y backoffice para plataforma SaaS de impresión DTF.",
    "proj-dsignr-desc": "<strong>⚡ Aportación Personal (Incorporación a Producto Existente):</strong><br/>• El producto ya contaba con gran parte de sus funciones principales; mi trabajo consistió en desarrollar módulos clave de gestión e infraestructura.<br/>• Implementé recuperación de contraseña y autenticación con Google OAuth.<br/>• Desarrollé el backoffice administrativo y la integración de almacenamiento de archivos en Cloudflare R2.<br/>• Implementé temas claro y oscuro y el control de visibilidad de módulos según el nivel de suscripción.<br/><br/><strong>🛠️ Decisiones Técnicas:</strong> Next.js, React, Fastify, Prisma y PostgreSQL (en desarrollo activo).",

    // 8. Control Ganadero
    "proj-ganado-title": "🐄 Control Ganadero — Residencias Profesionales (Enero–Julio 2023)",
    "proj-ganado-summary": "<strong>Problema resuelto:</strong> Sistema operativo para el registro de pesaje, alimentación, trazabilidad y comercialización ganadera.",
    "proj-ganado-desc": "<strong>⚡ Aportación Personal & Trabajo Realizado:</strong><br/>• Participé en el desarrollo de los módulos de captura operativa (pesaje, alimentación y ventas).<br/>• Desarrollé los tableros de control interactivos en Vue 3 para seguimiento gerencial.<br/><br/><strong>🛠️ Estado del Producto:</strong> Proyecto entregado, comercializado y en uso activo por clientes.",

    // 9. EFINANCE
    "proj-efinance-title": "💰 EFINANCE — Dashboard de Finanzas Personales (Proyecto Personal)",
    "proj-efinance-summary": "<strong>Problema resuelto:</strong> Aplicación personal para control de movimientos financieros e importación de estados de cuenta bancarios en PDF.",
    "proj-efinance-desc": "<strong>⚡ Aportación Personal (Creador & Desarrollador):</strong><br/>• Proyecto personal actualmente en desarrollo activo.<br/>• Implementé la gestión de movimientos financieros y el motor de parseo e importación de estados de cuenta PDF.<br/><br/><strong>🛠️ Decisiones Técnicas:</strong> Vue 3, TypeScript, .NET 9 y PostgreSQL (en desarrollo, sin enlace público activo).",

    // Experience Section
    "exp-label": "Trayectoria",
    "exp-title": "Experiencia Laboral",
    "exp-period-bepartners": "🏢 Enero 2023 — Actualidad",
    "exp-role-bepartners": "Full Stack Developer",
    "exp-company-bepartners": "BePartners · Veracruz",
    "exp-desc-bepartners-1": "Desarrollo de módulos críticos en Vue 3, TypeScript, .NET 9/10, Laravel y PostgreSQL para plataformas gubernamentales y empresariales",
    "exp-desc-bepartners-2": "Diseño e implementación de agentes de IA autónomos (conversacionales, recomendadores de compras y monitores cron) usando Anthropic Claude API",
    "exp-desc-bepartners-3": "Optimización profunda de consultas y stored procedures en PostgreSQL, reduciendo tiempos de carga de 6–8s a ~2s",
    "exp-desc-bepartners-4": "Desarrollo de firmas digitales FIEL (iText7), arquitecturas SaaS multitenant (schema-per-tenant), 2FA y workflows complejos de aprobación",

    // Community & Education
    "comm-label": "Comunidad & Educación",
    "comm-period-codti": "🌐 2018 — 2023",
    "comm-role-codti": "Cofundador & Tutor de Desarrollo Web",
    "comm-company-codti": "CodTI-Web · Instituto Tecnológico de Veracruz",
    "comm-desc-codti-1": "Cofundé y lideré la comunidad de desarrollo web del ITV, impartiendo talleres y mentorías a +100 estudiantes",
    "comm-desc-codti-2": "Participación en programación competitiva en la Copa de Programación TECNM a nivel nacional",

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
    "role-2": "Vue 3 & TypeScript Specialist",
    "role-3": "C# / .NET & Laravel Engineer",
    "role-4": "AI Agents & SaaS Builder",
    "role-5": "Database & Query Performance Mindset"
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
    "hero-badge": "Full Stack Developer at BePartners",
    "hero-bio": "Full Stack Developer at <strong>BePartners</strong> (since Jan 2023). Specialized in <strong>Vue 3, TypeScript, C# / .NET, Laravel, and PostgreSQL</strong>. Focused on complex business rule systems, SaaS architectures, and AI agent development.",
    "hero-btn-projects": "View projects →",
    "hero-btn-contact": "Contact me",
    "hero-social-find": "Find me on",

    // About
    "about-label": "Professional Profile",
    "about-title": "Full Stack Developer<br/>focused on complex systems & AI",
    "about-p1": "I am <strong>Derian Alexis Cárdenas Mortera</strong>, Full Stack Developer at BePartners since January 2023. My daily work involves building enterprise platforms, multitenant SaaS, and AI agent modules.",
    "about-p2": "My core stack includes <strong>Vue 3, TypeScript, C# / .NET, Laravel, and PostgreSQL</strong>. I am passionate about complex business logic, database query performance tuning, and digital signature workflows.",
    "about-p3": "My current personal project is <strong>EFINANCE</strong>, a personal finance management app with PDF bank statement parsing built with Vue 3, TypeScript, .NET 9, and PostgreSQL.",
    "vibe-title": "Agentic Development & Generative AI",
    "vibe-p1": "I design and build autonomous AI agents (conversational, negotiation assistants, and cron monitors) integrated into existing systems using Anthropic Claude API.",
    "vibe-p2": "I leverage advanced tools as productivity multipliers, maintaining strict technical rigor in Clean Architecture, modular components, and SQL optimization.",
    "stat-exp": "Years at BePartners",
    "stat-proj": "Production Projects",
    "stat-be": "Backend (.NET / Laravel)",
    "stat-fe": "Frontend (Vue 3 / TS)",

    // Skills
    "skills-label": "Tech Stack",
    "skills-title": "Skills & Tools",
    "skills-desc": "Enterprise and agentic technologies I use in production projects.",
    "skills-cat-be": "Backend",
    "skills-cat-fe": "Frontend",
    "skills-cat-db": "Data & Architecture",
    "skills-cat-devops": "Cloud & Tools",
    "skills-cat-languages": "Languages",
    "skills-cat-ai": "AI & Agents",

    // Projects Header & Filters
    "projects-label": "Projects",
    "projects-title": "Projects & Technical Contributions",
    "filter-all": "All",
    "filter-personal": "Personal",
    "filter-work": "Professional",
    "tag-personal": "Personal",
    "tag-work": "Professional",
    "tag-featured": "⭐ Priority",
    "proj-private": "Private Project",
    "proj-product-site": "Product Site ↗",
    "proj-developing": "In Development",

    // 1. SEMOV
    "proj-semov-title": "🚗 SEMOV Edomex — Mobility & Concessions (2024–2025)",
    "proj-semov-summary": "<strong>Problem Solved:</strong> Digitalization and end-to-end management of vehicle concessions and permits for the State of Mexico government.",
    "proj-semov-desc": "<strong>⚡ Personal Contribution & Delivered Work:</strong><br/>• Developed dynamic views and forms for <strong>23 distinct procedures</strong>. Stored procedures dynamically determined required sections and documents per procedure type, achieving a highly reusable component architecture.<br/>• Implemented full procedure workflows from record creation and service counter stage to department head reviews and digital signatures by directors or subdirectors.<br/>• Developed authentication modules (login & registration), transfer requests, record data edits, and operational concession locks/unlocks.<br/><br/><strong>🛠️ Technical Decisions:</strong> Clean Architecture on frontend with Vue 3, Quasar, and TypeScript, integrating backend API in .NET 9 and PostgreSQL.<br/><br/><strong>👥 Team Boundaries & Scale:</strong> Payment processing, valued form assignment, and final document generation were implemented by another team developer. The <strong>+100,000 monthly transactions</strong> metric represents the company-reported system scale.",

    // 2. SEJ Control Escolar
    "proj-sej-title": "📚 SEJ Jalisco — School Control System (2023–2024)",
    "proj-sej-summary": "<strong>Problem Solved:</strong> Academic and administrative management system for the Ministry of Education of Jalisco.",
    "proj-sej-desc": "<strong>⚡ Personal Contribution & Delivered Work:</strong><br/>• Implemented authentication modules (login and registration).<br/>• Developed the teacher assignment module: linking teachers to subjects and groups structured by municipality, school zone, work center (CCT), classroom, and group.<br/>• Developed screens and workflows for grade entry, attendance tracking, and role-based dynamic menu navigation.<br/><br/><strong>🛠️ Technical Decisions:</strong> Built interactive components in Vue 3 consuming a backend in Laravel and MySQL.<br/><br/><strong>👥 Scope Clarification:</strong> The total student and teacher population of the Ministry of Education represents the institution's overall served scale, not a direct active user metric of the specific modules I developed.",

    // 3. SICROP Agentes
    "proj-sicrop-title": "🤖 SICROP — AI Procurement Agents (2026)",
    "proj-sicrop-summary": "<strong>Problem Solved:</strong> Conversational automation, negotiation assistance, and continuous monitoring integrated into an existing procurement system.",
    "proj-sicrop-desc": "<strong>⚡ Personal Contribution (Developed AI Agents):</strong><br/>• <strong>Conversational Agent:</strong> Receives chat requests (e.g. <em>\"I need 3 laptops for tomorrow\"</em>), suggests catalog items, verifies budget, displays preview, allows text/UI edits, and routes to approver.<br/>• <strong>Negotiation Agent:</strong> Analyzes historical purchases, prices, and vendors to highlight trends and suggest buying options or negotiation strategies.<br/>• <strong>Configurable Cron Monitor Agent:</strong> Monitors the system sending alerts on stuck requests, near-limit budgets, and cumulative purchases exceeding period thresholds.<br/><br/><strong>🛠️ Technical Decisions:</strong> Anthropic Claude API integration with workflows in Vue 3, .NET, and PostgreSQL.<br/><br/><strong>⚠️ Audit Note:</strong> Monitor alerts flag potential operational anomalies for human review, not proven fraud.",

    // 4. COD
    "proj-cod-title": "✉️ COD — Official Digital Communications (2026)",
    "proj-cod-summary": "<strong>Problem Solved:</strong> Migration of a monolithic document system into a multitenant SaaS platform for official document signing and management.",
    "proj-cod-desc": "<strong>⚡ Personal Contribution & Delivered Work:</strong><br/>• Implemented multi-signing logic and electronic signatures for external platform users.<br/>• Developed document sharing workflows protected with two-factor authentication (2FA).<br/>• Integrated visual signature representations in documents using the Jodit WYSIWYG editor.<br/>• Built administrative backoffice, draft management, and shared departmental inboxes.<br/><br/><strong>🛠️ Technical Decisions:</strong> Frontend in Vue 3, backend in .NET 10 and PostgreSQL.<br/><br/><strong>🌐 Product Status:</strong> Live in production at <a href=\"https://cod.bepartners.mx/\" target=\"_blank\" rel=\"noopener\">https://cod.bepartners.mx/</a> (official product site, requires credentials).",

    // 5. U3M
    "proj-u3m-title": "🎓 U3M — University ERP (2025–2026)",
    "proj-u3m-summary": "<strong>Problem Solved:</strong> Management of critical academic and financial workflows for a private university.",
    "proj-u3m-desc": "<strong>⚡ Personal Contribution & Proven Performance:</strong><br/>• Implemented end-to-end graduation and billing workflows.<br/>• <strong>Traceable Performance:</strong> Reduced key screen load times from ~6–8 seconds down to ~2 seconds by refactoring stored procedures and query logic in PostgreSQL.<br/><br/><strong>🛠️ Technical Decisions:</strong> Component architecture in Vue 3, .NET backend, and SQL optimization in PostgreSQL.",

    // 6. SICSSE
    "proj-sicsse-title": "🏛️ SICSSE — Procurement & Warehouse ERP (SEJ) (2023–2024)",
    "proj-sicsse-summary": "<strong>Problem Solved:</strong> Procurement lifecycle, entry, and exit inventory control in government warehouses.",
    "proj-sicsse-desc": "<strong>⚡ Personal Contribution & Delivered Work:</strong><br/>• Designed and implemented the multilevel approval engine.<br/>• Developed adaptive work inboxes based on user roles (purchasing, warehouses, management).<br/><br/><strong>🛠️ Technical Decisions & Capacity:</strong> Built with Vue 3, Laravel 10, and PostgreSQL, designed to sustain at least 500 daily operations.",

    // 7. DSIGNR
    "proj-dsignr-title": "🎨 DSIGNR — DTF Print SaaS Platform (2026, in dev)",
    "proj-dsignr-summary": "<strong>Problem Solved:</strong> Complementary modules and backoffice for a DTF printing SaaS platform.",
    "proj-dsignr-desc": "<strong>⚡ Personal Contribution (Joining Existing Product):</strong><br/>• The product already contained most core features; my work focused on key management and infrastructure modules.<br/>• Implemented password recovery and Google OAuth authentication.<br/>• Built administrative backoffice and Cloudflare R2 file storage integration.<br/>• Added light/dark theme support and subscription tier module visibility control.<br/><br/><strong>🛠️ Technical Decisions:</strong> Next.js, React, Fastify, Prisma, and PostgreSQL (active development).",

    // 8. Control Ganadero
    "proj-ganado-title": "🐄 Cattle Management — Internship Project (Jan–Jul 2023)",
    "proj-ganado-summary": "<strong>Problem Solved:</strong> Operational system for cattle weighing, feeding, traceability, and sales recording.",
    "proj-ganado-desc": "<strong>⚡ Personal Contribution & Delivered Work:</strong><br/>• Developed operational data capture modules (weighing, feeding, and sales).<br/>• Built interactive Vue 3 dashboards for management monitoring.<br/><br/><strong>🛠️ Product Status:</strong> Project delivered, commercialized, and in active use by customers.",

    // 9. EFINANCE
    "proj-efinance-title": "💰 EFINANCE — Personal Finance Dashboard (Personal Project)",
    "proj-efinance-summary": "<strong>Problem Solved:</strong> Personal app for transaction tracking and PDF bank statement parsing.",
    "proj-efinance-desc": "<strong>⚡ Personal Contribution (Creator & Developer):</strong><br/>• Personal project currently in active development.<br/>• Implemented transaction management and PDF bank statement parsing engine.<br/><br/><strong>🛠️ Technical Decisions:</strong> Vue 3, TypeScript, .NET 9, and PostgreSQL (in active dev, no active public demo).",

    // Experience Section
    "exp-label": "Trajectory",
    "exp-title": "Work Experience",
    "exp-period-bepartners": "🏢 January 2023 — Present",
    "exp-role-bepartners": "Full Stack Developer",
    "exp-company-bepartners": "BePartners · Veracruz",
    "exp-desc-bepartners-1": "Development of critical modules in Vue 3, TypeScript, .NET 9/10, Laravel, and PostgreSQL for government and enterprise platforms",
    "exp-desc-bepartners-2": "Design and implementation of autonomous AI agents (conversational, procurement recommenders, and cron monitors) using Anthropic Claude API",
    "exp-desc-bepartners-3": "Deep query and stored procedure optimization in PostgreSQL, cutting page load times from 6–8s down to ~2s",
    "exp-desc-bepartners-4": "Development of FIEL digital signatures (iText7), multitenant SaaS architectures (schema-per-tenant), 2FA, and complex approval workflows",

    // Community & Education
    "comm-label": "Community & Education",
    "comm-period-codti": "🌐 2018 — 2023",
    "comm-role-codti": "Co-founder & Web Development Tutor",
    "comm-company-codti": "CodTI-Web · Instituto Tecnológico de Veracruz",
    "comm-desc-codti-1": "Co-founded and led the university web development community, mentoring +100 students in software development",
    "comm-desc-codti-2": "Participation in competitive programming at the TECNM National Coding Cup",

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
    "role-2": "Vue 3 & TypeScript Specialist",
    "role-3": "C# / .NET & Laravel Engineer",
    "role-4": "AI Agents & SaaS Builder",
    "role-5": "Database & Query Performance Mindset"
  }
};
