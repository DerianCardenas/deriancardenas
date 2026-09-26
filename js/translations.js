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
    "hero-btn-projects": "Ver proyectos <span class=\"material-symbols-outlined\" aria-hidden=\"true\">arrow_forward</span>",
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
    "tag-featured": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">star</span> Prioritario",
    "proj-private": "Proyecto privado",
    "proj-product-site": "Sitio del producto <span class=\"material-symbols-outlined\" aria-hidden=\"true\">arrow_forward</span>",
    "proj-developing": "En desarrollo",

    // 1. SEMOV
    "proj-semov-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">directions_car</span> SEMOV Edomex — Movilidad y Concesiones (2024–2025)",
    "proj-semov-summary": "<strong>Problema resuelto:</strong> Digitalización y gestión integral de trámites y expedientes de concesiones vehiculares para el gobierno del Estado de México.",
    "proj-semov-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Aportación Personal & Trabajo Realizado:</strong><br/>• Desarrollé vistas y formularios dinámicos para <strong>23 trámites distintos</strong>. Procedimientos almacenados determinaban dinámicamente qué secciones y requisitos documentales mostrar según el tipo de trámite, logrando una arquitectura de componentes altamente reutilizable.<br/>• Implementé los flujos completos desde la creación del expediente y atención en ventanilla hasta las revisiones en jefaturas y firmas digitales de directores o subdirectores.<br/>• Desarrollé los módulos de autenticación (login y registro), transferencias, modificación de datos de expedientes y bloqueos/desbloqueos operativos de concesiones.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Decisiones Técnicas:</strong> Aplicación de Clean Architecture en frontend con Vue 3, Quasar y TypeScript, integrando API backend en .NET 9 y PostgreSQL.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">groups</span> Delimitación de Equipo & Escala:</strong> Los módulos de procesamiento de pago, asignación de formas valoradas y generación de documentos finales fueron implementados por otro compañero de equipo. La cifra de <strong>+100,000 transacciones mensuales</strong> corresponde a la escala reportada por la empresa para la plataforma.",

    // 2. SEJ Control Escolar
    "proj-sej-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">school</span> SEJ Jalisco — Control Escolar y Gestión Académica (2023–2024)",
    "proj-sej-summary": "<strong>Problema resuelto:</strong> Sistema de gestión académica y administrativa para la Secretaría de Educación de Jalisco.",
    "proj-sej-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Aportación Personal & Trabajo Realizado:</strong><br/>• Implementé los módulos de autenticación (login y registro).<br/>• Desarrollé el módulo de asignación docente: vinculación de profesores a materias y grupos jerarquizada por municipio, zona escolar, centro de trabajo (CCT), salón y grupo.<br/>• Desarrollé las pantallas y flujos para captura de calificaciones, registro de asistencias y navegación dinámica del menú según roles de usuario.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Decisiones Técnicas:</strong> Construcción de componentes interactivos en Vue 3 consumiendo backend en Laravel y MySQL.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">groups</span> Clarificación de Ámbito:</strong> La población total de alumnos y docentes de la Secretaría de Educación corresponde a la escala institucional atendida y no a una métrica directa de usuarios activos medidos sobre mis módulos.",

    // 3. SICROP Agentes
    "proj-sicrop-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">memory</span> SICROP — Agentes de IA para Compras (2026)",
    "proj-sicrop-summary": "<strong>Problema resuelto:</strong> Automatización conversacional, asistencia de negociación y monitoreo continuo sobre un sistema de compras existente.",
    "proj-sicrop-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Aportación Personal (Agentes de IA Desarrollados):</strong><br/>• <strong>Agente Conversacional:</strong> Recibe pedidos por chat (ej. <em>\"quiero tres laptops para mañana\"</em>), propone opciones del catálogo, comprueba presupuesto, muestra vista previa, permite cambios por texto o interfaz y envía la solicitud al superior.<br/>• <strong>Agente de Negociación:</strong> Examina el historial de compras previas, productos, precios y vendedores para mostrar tendencias de mercado y sugerir alternativas de compra o estrategias de negociación.<br/>• <strong>Agente Monitor / Cron Configurable:</strong> Supervisa el sistema enviando alertas sobre solicitudes atascadas, presupuestos cerca del límite y compras acumuladas que superan umbrales en un periodo definido.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Decisiones Técnicas:</strong> Integración de Anthropic Claude API con flujos en Vue 3, .NET y PostgreSQL.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">warning</span> Nota de Auditoría:</strong> Las alertas generadas por el monitor identifican posibles anomalías operativas y desvíos para revisión humana, no fraudes comprobados.",

    // 4. COD
    "proj-cod-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">mail</span> COD — Comunicaciones Oficiales Digitales (2026)",
    "proj-cod-summary": "<strong>Problema resuelto:</strong> Migración de un sistema documental monolítico hacia una plataforma SaaS multitenant de firma y gestión de documentos oficiales.",
    "proj-cod-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Aportación Personal & Trabajo Realizado:</strong><br/>• Implementé el esquema de firma múltiple y la firma electrónica para usuarios externos a la plataforma.<br/>• Desarrollé la funcionalidad de compartición de documentos con verificación de segundo factor (2FA).<br/>• Integré la representación visual de firmas en documentos utilizando el editor WYSIWYG Jodit.<br/>• Desarrollé el backoffice administrativo, la gestión de borradores y las bandejas compartidas entre áreas.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Decisiones Técnicas:</strong> Frontend en Vue 3, backend en .NET 10 y PostgreSQL.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">language</span> Estado del Producto:</strong> En producción activa en <a href=\"https://cod.bepartners.mx/\" target=\"_blank\" rel=\"noopener\">https://cod.bepartners.mx/</a> (sitio del producto, requiere credenciales).",

    // 5. U3M
    "proj-u3m-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">school</span> U3M — ERP Universitario (2025–2026)",
    "proj-u3m-summary": "<strong>Problema resuelto:</strong> Gestión de flujos académicos y financieros críticos para una universidad privada.",
    "proj-u3m-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Aportación Personal & Optimización Demostrada:</strong><br/>• Implementé los flujos end-to-end para titulación de estudiantes y cobros.<br/>• <strong>Rendimiento Trazable:</strong> Reduje el tiempo de carga en pantallas clave de 6–8 segundos a cerca de 2 segundos mediante la refactorización de procedimientos almacenados y optimización de lógica de consultas en PostgreSQL.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Decisiones Técnicas:</strong> Arquitectura de componentes en Vue 3, backend .NET y optimización SQL en PostgreSQL.",

    // 6. SICSSE
    "proj-sicsse-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">account_balance</span> SICSSE — Compras y Almacenes SEJ (2023–2024)",
    "proj-sicsse-summary": "<strong>Problema resuelto:</strong> Control de flujo de adquisiciones, entradas y salidas de inventario en almacenes gubernamentales.",
    "proj-sicsse-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Aportación Personal & Trabajo Realizado:</strong><br/>• Diseñé e implementé el motor de aprobaciones multinivel.<br/>• Desarrollé las bandejas de trabajo adaptativas según el rol del usuario (compras, almacenes, jefaturas).<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Decisiones Técnicas & Capacidad:</strong> Desarrollado con Vue 3, Laravel y PostgreSQL, diseñado con capacidad para sostener al menos 500 operaciones diarias.",

    // 7. DSIGNR
    "proj-dsignr-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">palette</span> DSIGNR — SaaS para Impresión DTF (2026, en desarrollo)",
    "proj-dsignr-summary": "<strong>Problema resuelto:</strong> Módulos complementarios y backoffice para plataforma SaaS de impresión DTF.",
    "proj-dsignr-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Aportación Personal (Incorporación a Producto Existente):</strong><br/>• El producto ya contaba con gran parte de sus funciones principales; mi trabajo consistió en desarrollar módulos clave de gestión e infraestructura.<br/>• Implementé recuperación de contraseña y autenticación con Google OAuth.<br/>• Desarrollé el backoffice administrativo y la integración de almacenamiento de archivos en Cloudflare R2.<br/>• Implementé temas claro y oscuro y el control de visibilidad de módulos según el nivel de suscripción.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Decisiones Técnicas:</strong> Next.js, React, Fastify, Prisma y PostgreSQL (en desarrollo activo).",

    // 8. Control Ganadero
    "proj-ganado-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">work</span> Control Ganadero — Residencias Profesionales (Enero–Julio 2023)",
    "proj-ganado-summary": "<strong>Problema resuelto:</strong> Sistema operativo para el registro de pesaje, alimentación, trazabilidad y comercialización ganadera.",
    "proj-ganado-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Aportación Personal & Trabajo Realizado:</strong><br/>• Participé en el desarrollo de los módulos de captura operativa (pesaje, alimentación y ventas).<br/>• Desarrollé los tableros de control interactivos en Vue 3 para seguimiento gerencial.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Estado del Producto:</strong> Proyecto entregado, comercializado y en uso activo por clientes.",

    // 9. EFINANCE
    "proj-efinance-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">account_balance</span> EFINANCE — Dashboard de Finanzas Personales (Proyecto Personal)",
    "proj-efinance-summary": "<strong>Problema resuelto:</strong> Aplicación personal para control de movimientos financieros e importación de estados de cuenta bancarios en PDF.",
    "proj-efinance-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Aportación Personal (Creador & Desarrollador):</strong><br/>• Proyecto personal actualmente en desarrollo activo.<br/>• Implementé la gestión de movimientos financieros y el motor de parseo e importación de estados de cuenta PDF.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Decisiones Técnicas:</strong> Vue 3, TypeScript, .NET 9 y PostgreSQL (en desarrollo, sin enlace público activo).",

    // Experience Section
    "exp-label": "Trayectoria",
    "exp-title": "Experiencia Laboral",
    "exp-period-bepartners": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">work</span> Enero 2023 — Actualidad",
    "exp-role-bepartners": "Full Stack Developer",
    "exp-company-bepartners": "BePartners · Veracruz",
    "exp-desc-bepartners-1": "Desarrollo de módulos críticos en Vue 3, TypeScript, .NET 9/10, Laravel y PostgreSQL para plataformas gubernamentales y empresariales",
    "exp-desc-bepartners-2": "Diseño e implementación de agentes de IA autónomos (conversacionales, recomendadores de compras y monitores cron) usando Anthropic Claude API",
    "exp-desc-bepartners-3": "Optimización profunda de consultas y stored procedures en PostgreSQL, reduciendo tiempos de carga de 6–8s a ~2s",
    "exp-desc-bepartners-4": "Desarrollo de firmas digitales FIEL (iText7), arquitecturas SaaS multitenant (schema-per-tenant), 2FA y workflows complejos de aprobación",

    // Community & Education
    "comm-label": "Comunidad & Educación",
    "comm-period-codti": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">language</span> 2018 — 2023",
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
    "certs-cat-comp": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">trophy</span> Competencias & Plataformas",
    "certs-cat-capacitat": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">verified</span> CapacitaT — Fundación Carlos Slim",
    "certs-cat-udemy": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">school</span> Cursos Udemy & Especializaciones",
    "certs-cat-edu": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">school</span> Formación académica",
    "cert-view": "Ver certificado <span class=\"material-symbols-outlined\" aria-hidden=\"true\">arrow_forward</span>",
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
    "hero-btn-projects": "View projects <span class=\"material-symbols-outlined\" aria-hidden=\"true\">arrow_forward</span>",
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
    "tag-featured": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">star</span> Priority",
    "proj-private": "Private Project",
    "proj-product-site": "Product Site <span class=\"material-symbols-outlined\" aria-hidden=\"true\">arrow_forward</span>",
    "proj-developing": "In Development",

    // 1. SEMOV
    "proj-semov-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">directions_car</span> SEMOV Edomex — Mobility & Concessions (2024–2025)",
    "proj-semov-summary": "<strong>Problem Solved:</strong> Digitalization and end-to-end management of vehicle concessions and permits for the State of Mexico government.",
    "proj-semov-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Personal Contribution & Delivered Work:</strong><br/>• Developed dynamic views and forms for <strong>23 distinct procedures</strong>. Stored procedures dynamically determined required sections and documents per procedure type, achieving a highly reusable component architecture.<br/>• Implemented full procedure workflows from record creation and service counter stage to department head reviews and digital signatures by directors or subdirectors.<br/>• Developed authentication modules (login & registration), transfer requests, record data edits, and operational concession locks/unlocks.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Technical Decisions:</strong> Clean Architecture on frontend with Vue 3, Quasar, and TypeScript, integrating backend API in .NET 9 and PostgreSQL.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">groups</span> Team Boundaries & Scale:</strong> Payment processing, valued form assignment, and final document generation were implemented by another team developer. The <strong>+100,000 monthly transactions</strong> metric represents the company-reported system scale.",

    // 2. SEJ Control Escolar
    "proj-sej-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">school</span> SEJ Jalisco — School Control System (2023–2024)",
    "proj-sej-summary": "<strong>Problem Solved:</strong> Academic and administrative management system for the Ministry of Education of Jalisco.",
    "proj-sej-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Personal Contribution & Delivered Work:</strong><br/>• Implemented authentication modules (login and registration).<br/>• Developed the teacher assignment module: linking teachers to subjects and groups structured by municipality, school zone, work center (CCT), classroom, and group.<br/>• Developed screens and workflows for grade entry, attendance tracking, and role-based dynamic menu navigation.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Technical Decisions:</strong> Built interactive components in Vue 3 consuming a backend in Laravel and MySQL.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">groups</span> Scope Clarification:</strong> The total student and teacher population of the Ministry of Education represents the institution's overall served scale, not a direct active user metric of the specific modules I developed.",

    // 3. SICROP Agentes
    "proj-sicrop-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">memory</span> SICROP — AI Procurement Agents (2026)",
    "proj-sicrop-summary": "<strong>Problem Solved:</strong> Conversational automation, negotiation assistance, and continuous monitoring integrated into an existing procurement system.",
    "proj-sicrop-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Personal Contribution (Developed AI Agents):</strong><br/>• <strong>Conversational Agent:</strong> Receives chat requests (e.g. <em>\"I need 3 laptops for tomorrow\"</em>), suggests catalog items, verifies budget, displays preview, allows text/UI edits, and routes to approver.<br/>• <strong>Negotiation Agent:</strong> Analyzes historical purchases, prices, and vendors to highlight trends and suggest buying options or negotiation strategies.<br/>• <strong>Configurable Cron Monitor Agent:</strong> Monitors the system sending alerts on stuck requests, near-limit budgets, and cumulative purchases exceeding period thresholds.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Technical Decisions:</strong> Anthropic Claude API integration with workflows in Vue 3, .NET, and PostgreSQL.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">warning</span> Audit Note:</strong> Monitor alerts flag potential operational anomalies for human review, not proven fraud.",

    // 4. COD
    "proj-cod-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">mail</span> COD — Official Digital Communications (2026)",
    "proj-cod-summary": "<strong>Problem Solved:</strong> Migration of a monolithic document system into a multitenant SaaS platform for official document signing and management.",
    "proj-cod-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Personal Contribution & Delivered Work:</strong><br/>• Implemented multi-signing logic and electronic signatures for external platform users.<br/>• Developed document sharing workflows protected with two-factor authentication (2FA).<br/>• Integrated visual signature representations in documents using the Jodit WYSIWYG editor.<br/>• Built administrative backoffice, draft management, and shared departmental inboxes.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Technical Decisions:</strong> Frontend in Vue 3, backend in .NET 10 and PostgreSQL.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">language</span> Product Status:</strong> Live in production at <a href=\"https://cod.bepartners.mx/\" target=\"_blank\" rel=\"noopener\">https://cod.bepartners.mx/</a> (official product site, requires credentials).",

    // 5. U3M
    "proj-u3m-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">school</span> U3M — University ERP (2025–2026)",
    "proj-u3m-summary": "<strong>Problem Solved:</strong> Management of critical academic and financial workflows for a private university.",
    "proj-u3m-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Personal Contribution & Proven Performance:</strong><br/>• Implemented end-to-end graduation and billing workflows.<br/>• <strong>Traceable Performance:</strong> Reduced key screen load times from ~6–8 seconds down to ~2 seconds by refactoring stored procedures and query logic in PostgreSQL.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Technical Decisions:</strong> Component architecture in Vue 3, .NET backend, and SQL optimization in PostgreSQL.",

    // 6. SICSSE
    "proj-sicsse-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">account_balance</span> SICSSE — Procurement & Warehouse ERP (SEJ) (2023–2024)",
    "proj-sicsse-summary": "<strong>Problem Solved:</strong> Procurement lifecycle, entry, and exit inventory control in government warehouses.",
    "proj-sicsse-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Personal Contribution & Delivered Work:</strong><br/>• Designed and implemented the multilevel approval engine.<br/>• Developed adaptive work inboxes based on user roles (purchasing, warehouses, management).<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Technical Decisions & Capacity:</strong> Built with Vue 3, Laravel 10, and PostgreSQL, designed to sustain at least 500 daily operations.",

    // 7. DSIGNR
    "proj-dsignr-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">palette</span> DSIGNR — DTF Print SaaS Platform (2026, in dev)",
    "proj-dsignr-summary": "<strong>Problem Solved:</strong> Complementary modules and backoffice for a DTF printing SaaS platform.",
    "proj-dsignr-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Personal Contribution (Joining Existing Product):</strong><br/>• The product already contained most core features; my work focused on key management and infrastructure modules.<br/>• Implemented password recovery and Google OAuth authentication.<br/>• Built administrative backoffice and Cloudflare R2 file storage integration.<br/>• Added light/dark theme support and subscription tier module visibility control.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Technical Decisions:</strong> Next.js, React, Fastify, Prisma, and PostgreSQL (active development).",

    // 8. Control Ganadero
    "proj-ganado-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">work</span> Cattle Management — Internship Project (Jan–Jul 2023)",
    "proj-ganado-summary": "<strong>Problem Solved:</strong> Operational system for cattle weighing, feeding, traceability, and sales recording.",
    "proj-ganado-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Personal Contribution & Delivered Work:</strong><br/>• Developed operational data capture modules (weighing, feeding, and sales).<br/>• Built interactive Vue 3 dashboards for management monitoring.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Product Status:</strong> Project delivered, commercialized, and in active use by customers.",

    // 9. EFINANCE
    "proj-efinance-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">account_balance</span> EFINANCE — Personal Finance Dashboard (Personal Project)",
    "proj-efinance-summary": "<strong>Problem Solved:</strong> Personal app for transaction tracking and PDF bank statement parsing.",
    "proj-efinance-desc": "<strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">code</span> Personal Contribution (Creator & Developer):</strong><br/>• Personal project currently in active development.<br/>• Implemented transaction management and PDF bank statement parsing engine.<br/><br/><strong><span class=\"material-symbols-outlined\" aria-hidden=\"true\">settings</span> Technical Decisions:</strong> Vue 3, TypeScript, .NET 9, and PostgreSQL (in active dev, no active public demo).",

    // Experience Section
    "exp-label": "Trajectory",
    "exp-title": "Work Experience",
    "exp-period-bepartners": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">work</span> January 2023 — Present",
    "exp-role-bepartners": "Full Stack Developer",
    "exp-company-bepartners": "BePartners · Veracruz",
    "exp-desc-bepartners-1": "Development of critical modules in Vue 3, TypeScript, .NET 9/10, Laravel, and PostgreSQL for government and enterprise platforms",
    "exp-desc-bepartners-2": "Design and implementation of autonomous AI agents (conversational, procurement recommenders, and cron monitors) using Anthropic Claude API",
    "exp-desc-bepartners-3": "Deep query and stored procedure optimization in PostgreSQL, cutting page load times from 6–8s down to ~2s",
    "exp-desc-bepartners-4": "Development of FIEL digital signatures (iText7), multitenant SaaS architectures (schema-per-tenant), 2FA, and complex approval workflows",

    // Community & Education
    "comm-label": "Community & Education",
    "comm-period-codti": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">language</span> 2018 — 2023",
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
    "certs-cat-comp": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">trophy</span> Competitions & Platforms",
    "certs-cat-capacitat": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">verified</span> CapacitaT — Carlos Slim Foundation",
    "certs-cat-udemy": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">school</span> Udemy Courses & Specializations",
    "certs-cat-edu": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">school</span> Academic Background",
    "cert-view": "View certificate <span class=\"material-symbols-outlined\" aria-hidden=\"true\">arrow_forward</span>",
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

// Concise overview; full project contributions remain available in each disclosure.
Object.assign(i18nData.es, {
  'skip': 'Saltar al contenido',
  'hero-heading': 'Desarrollo software.<br/><em>Resuelvo complejidad.</em>',
  'hero-bio': 'Construyo plataformas empresariales, productos SaaS y agentes de IA. Conecto interfaces claras con la lógica que hace funcionar tu negocio.',
  'hero-badge': '<span class="dot"></span> Full Stack Developer · BePartners',
  'profile-label': 'ACTUALMENTE EN BEPARTNERS',
  'profile-title': 'De la lógica de negocio<br/>a software en producción.',
  'profile-years': 'años de experiencia', 'profile-projects': 'proyectos trabajados',
  'profile-link': 'Conoce mi trayectoria <span><span class=\"material-symbols-outlined\" aria-hidden=\"true\">arrow_forward</span></span>',
  'project-details': 'Mi aportación y detalles técnicos',
  'projects-label': '01 / TRABAJO SELECCIONADO', 'projects-title': 'Proyectos con impacto real.',
  'exp-label': '02 / TRAYECTORIA', 'skills-label': '03 / HERRAMIENTAS',
  'about-label': '04 / SOBRE MÍ', 'certs-label': '05 / FORMACIÓN',
  'tag-featured': 'Destacado'
});
Object.assign(i18nData.en, {
  'skip': 'Skip to content',
  'hero-heading': 'I build software.<br/><em>I solve complexity.</em>',
  'hero-bio': 'I build enterprise platforms, SaaS products and AI agents. Connecting clear interfaces with the logic that makes your business work.',
  'hero-badge': '<span class="dot"></span> Full Stack Developer · BePartners',
  'profile-label': 'CURRENTLY AT BEPARTNERS',
  'profile-title': 'From business logic<br/>to software in production.',
  'profile-years': 'years of experience', 'profile-projects': 'projects worked on',
  'profile-link': 'Explore my experience <span><span class=\"material-symbols-outlined\" aria-hidden=\"true\">arrow_forward</span></span>',
  'project-details': 'My contribution & technical details',
  'projects-label': '01 / SELECTED WORK', 'projects-title': 'Projects with real impact.',
  'exp-label': '02 / EXPERIENCE', 'skills-label': '03 / TOOLKIT',
  'about-label': '04 / ABOUT ME', 'certs-label': '05 / EDUCATION',
  'tag-featured': 'Featured'
});

Object.assign(i18nData.es, {
  "proj-semov-summary": "Digitalización de trámites y expedientes de concesiones vehiculares para el Estado de México. El reto era atender 23 tipos de trámite con requisitos distintos y conectar la captura en ventanilla con las revisiones internas y la firma de responsables.",
  "proj-semov-highlights": "<li>Formularios dinámicos para 23 trámites</li><li>Flujos de revisión y firma digital</li><li>Autenticación y operación de concesiones</li>",
  "proj-semov-context": "La complejidad estaba en adaptar cada formulario al trámite sin duplicar pantallas. Los procedimientos almacenados determinaban las secciones y documentos requeridos; los componentes reutilizables del frontend presentaban esa configuración y acompañaban el expediente a lo largo del proceso.",
  "proj-sej-summary": "Sistema académico y administrativo para la Secretaría de Educación de Jalisco. Mi trabajo conectó la organización territorial y escolar con la asignación docente, la captura de calificaciones y el registro de asistencias, mediante interfaces adaptadas al rol del usuario.",
  "proj-sej-highlights": "<li>Asignación docente por municipio, zona y CCT</li><li>Captura de calificaciones y asistencias</li><li>Acceso y navegación según el rol</li>",
  "proj-sej-context": "Asignar un docente requería recorrer una jerarquía de municipio, zona escolar, centro de trabajo, salón y grupo. Desarrollé las interfaces para vincular profesores con materias y grupos dentro de esa estructura, junto con los flujos cotidianos de evaluación y asistencia.",
  "proj-sicrop-summary": "Integración de agentes de IA en un sistema de compras existente. Desarrollé tres flujos complementarios: solicitudes por conversación, asistencia para negociar con proveedores y monitoreo programado de situaciones que requieren revisión humana.",
  "proj-sicrop-highlights": "<li>Solicitudes por chat con validación de presupuesto</li><li>Recomendaciones a partir del historial de compras</li><li>Alertas configurables sobre la operación</li>",
  "proj-sicrop-context": "Una petición como «quiero tres laptops para mañana» se convierte en una propuesta basada en el catálogo. El usuario puede revisar y modificar la solicitud antes de enviarla a su superior. El asistente de negociación consulta compras previas, mientras que el monitor identifica solicitudes atascadas y umbrales presupuestales para su revisión.",
  "proj-cod-summary": "Plataforma de comunicaciones oficiales y firma documental, en evolución de sistema monolítico a SaaS multitenant. Mi aportación se centró en ampliar los flujos de firma, compartir documentos con segundo factor y desarrollar herramientas de operación administrativa.",
  "proj-cod-highlights": "<li>Firma múltiple y firma de usuarios externos</li><li>Documentos compartidos con verificación 2FA</li><li>Backoffice, borradores y bandejas compartidas</li>",
  "proj-cod-context": "Los documentos necesitan circular entre áreas y también llegar a firmantes externos. Implementé esas variantes del flujo, la representación visual de firmas mediante Jodit y herramientas para gestionar borradores y bandejas compartidas. El producto está en producción y su acceso requiere credenciales.",
  "proj-u3m-summary": "ERP para una universidad privada, con procesos académicos y financieros relacionados entre sí. Implementé flujos completos de titulación y cobros, y trabajé en el rendimiento de pantallas clave optimizando su acceso a datos en PostgreSQL.",
  "proj-u3m-highlights": "<li>Titulación y cobros de principio a fin</li><li>Tiempos de carga de 6–8 s a cerca de 2 s</li><li>Refactorización de procedimientos almacenados</li>",
  "proj-u3m-context": "La mejora de rendimiento se concentró en las consultas y procedimientos almacenados que alimentaban pantallas clave. Al refactorizar esa lógica en PostgreSQL, reduje la carga de 6–8 segundos a aproximadamente 2 segundos. Este resultado corresponde a esas pantallas, no a una medición global de toda la plataforma.",
  "proj-sicsse-summary": "Sistema de compras y almacenes para el sector público. Diseñé el motor de aprobaciones multinivel y las bandejas de trabajo que permiten a compras, almacenes y jefaturas atender las tareas correspondientes a su papel dentro del proceso.",
  "proj-sicsse-highlights": "<li>Motor de aprobaciones multinivel</li><li>Bandejas adaptadas a compras, almacenes y jefaturas</li><li>Vue 3, Laravel y PostgreSQL</li>",
  "proj-sicsse-context": "El flujo de adquisiciones involucra responsabilidades distintas antes de completar una operación. Mi aportación fue modelar las aprobaciones y presentar a cada rol una bandeja de trabajo acorde con su intervención. La capacidad de al menos 500 operaciones diarias corresponde al diseño del sistema, no a un volumen observado que se atribuya a mis módulos.",
  "proj-dsignr-summary": "Plataforma SaaS de impresión DTF a la que me incorporé con el producto ya avanzado. Desarrollé módulos de acceso, administración y almacenamiento, además de adaptar la interfaz y la visibilidad de funcionalidades a los niveles de suscripción.",
  "proj-dsignr-highlights": "<li>Google OAuth y recuperación de contraseña</li><li>Backoffice y almacenamiento en Cloudflare R2</li><li>Temas e interfaces según la suscripción</li>",
  "proj-dsignr-context": "Mi trabajo se centró en los módulos complementarios del producto existente: autenticación con Google, recuperación de acceso, administración y archivos en la nube. También implementé los temas claro y oscuro y la visibilidad de módulos según la suscripción. El producto continúa en desarrollo.",
  "proj-ganado-summary": "Sistema de gestión ganadera desarrollado durante mis residencias profesionales. Participé en los módulos de captura de pesaje, alimentación y ventas, y construí tableros en Vue 3 para facilitar el seguimiento de la operación por parte de la gerencia.",
  "proj-ganado-highlights": "<li>Captura operativa de pesaje, alimentación y ventas</li><li>Tableros interactivos para seguimiento gerencial</li><li>Producto entregado y en uso por clientes</li>",
  "proj-ganado-context": "La aplicación reúne registros de la operación ganadera para apoyar su seguimiento. Mi participación se concentró en los módulos de captura y en los tableros gerenciales, conectando el registro cotidiano con una vista de consulta para responsables del negocio. El proyecto fue entregado, comercializado y está en uso activo.",
  "proj-efinance-summary": "Proyecto personal de gestión financiera que desarrollo como creador y programador. Permite registrar movimientos e importar estados de cuenta bancarios en PDF, con una interfaz en Vue 3 y TypeScript conectada a un backend .NET 9 y PostgreSQL.",
  "proj-efinance-highlights": "<li>Gestión de movimientos financieros</li><li>Parseo e importación de estados de cuenta PDF</li><li>Desarrollo propio de frontend y backend</li>",
  "proj-efinance-context": "El trabajo se concentra en conectar la gestión de movimientos con la importación de información bancaria desde PDF. Implementé el motor de parseo e importación y la funcionalidad de movimientos. Es un proyecto personal en desarrollo activo y todavía no cuenta con un enlace público disponible.",
  "contribution-label": "Mi aportación",
  "context-label": "El reto y cómo lo abordé",
  "project-details": "Leer el caso completo",
  "case-label": "PROYECTO / CASO COMPLETO",
  "case-close": "Cerrar proyecto",
  "case-tech": "Tecnologías utilizadas",
  "hero-role": "Full Stack Developer <span> / </span> SaaS & IA"
});

Object.assign(i18nData.en, {
  "proj-semov-summary": "Digitalization of vehicle concession procedures for the State of Mexico. The challenge was supporting 23 procedure types with different requirements, connecting front-desk intake with internal reviews and signatures.",
  "proj-semov-highlights": "<li>Dynamic forms for 23 procedure types</li><li>Review and digital signature workflows</li><li>Authentication and concession operations</li>",
  "proj-semov-context": "The challenge was adapting each form without duplicating screens. Stored procedures determined the required sections and documents; reusable frontend components presented that configuration throughout the application workflow.",
  "proj-sej-summary": "Academic and administrative software for the Jalisco Ministry of Education. My work connected regional and school structures with teacher assignments, grading and attendance through role-specific interfaces.",
  "proj-sej-highlights": "<li>Teacher assignments by municipality, school zone and school</li><li>Grading and attendance workflows</li><li>Role-based access and navigation</li>",
  "proj-sej-context": "Teacher assignments depended on municipality, school zone, school, classroom and group. I developed interfaces to connect teachers with subjects and groups within that hierarchy, alongside everyday grading and attendance workflows.",
  "proj-sicrop-summary": "AI agents integrated into an existing procurement system. I developed three complementary workflows: conversational requests, supplier negotiation assistance and scheduled monitoring of situations requiring human review.",
  "proj-sicrop-highlights": "<li>Chat-based requests with budget validation</li><li>Recommendations grounded in purchase history</li><li>Configurable operational alerts</li>",
  "proj-sicrop-context": "A request such as “I need three laptops for tomorrow” becomes a catalog-based proposal. The user can review and edit it before submitting it to a supervisor. The negotiation assistant examines previous purchases, while the monitor flags stalled requests and budget thresholds for review.",
  "proj-cod-summary": "Official communications and document-signing platform evolving from a monolith into a multitenant SaaS. My contributions focused on signing workflows, document sharing with two-factor verification and administrative tools.",
  "proj-cod-highlights": "<li>Multiple signatures and external signers</li><li>Document sharing with 2FA verification</li><li>Backoffice, drafts and shared inboxes</li>",
  "proj-cod-context": "Documents move between departments and also reach external signers. I implemented these workflow variants, visual signature representation through Jodit, and tools for drafts and shared inboxes. The product is in production and requires credentials.",
  "proj-u3m-summary": "ERP for a private university with connected academic and financial processes. I implemented end-to-end graduation and collection workflows and improved key screens by optimizing PostgreSQL data access.",
  "proj-u3m-highlights": "<li>End-to-end graduation and collection workflows</li><li>Load times reduced from 6–8 s to about 2 s</li><li>Stored procedure refactoring</li>",
  "proj-u3m-context": "The performance work focused on the queries and stored procedures behind key screens. Refactoring PostgreSQL logic reduced their load times from 6–8 seconds to about 2 seconds. This result applies to those screens rather than a platform-wide measurement.",
  "proj-sicsse-summary": "Public-sector procurement and warehouse system. I designed the multilevel approval engine and role-specific work queues for procurement staff, warehouse operators and department managers.",
  "proj-sicsse-highlights": "<li>Multilevel approval engine</li><li>Work queues for procurement, warehouses and managers</li><li>Vue 3, Laravel and PostgreSQL</li>",
  "proj-sicsse-context": "Procurement requires different responsibilities before an operation can be completed. I modeled approvals and built work queues for each role. The capacity of at least 500 daily operations is a design target, not an observed traffic figure attributed to my modules.",
  "proj-dsignr-summary": "A DTF printing SaaS platform that already had much of its core functionality when I joined. I developed access, administration and storage modules and adapted the interface and module visibility to subscription tiers.",
  "proj-dsignr-highlights": "<li>Google OAuth and password recovery</li><li>Backoffice and Cloudflare R2 storage</li><li>Themes and subscription-based module visibility</li>",
  "proj-dsignr-context": "My work focused on supporting modules of the existing product: Google authentication, account recovery, administration and cloud files. I also implemented light and dark themes and subscription-based module visibility. The product remains in development.",
  "proj-ganado-summary": "Cattle management software developed during my professional internship. I contributed to weight, feeding and sales entry modules and built Vue 3 dashboards to help managers follow operations.",
  "proj-ganado-highlights": "<li>Weight, feeding and sales data entry</li><li>Interactive management dashboards</li><li>Delivered product in active customer use</li>",
  "proj-ganado-context": "The application gathers cattle operation records for monitoring. My contributions centered on data entry modules and management dashboards, connecting everyday records with business oversight. The project was delivered, commercialized and is in active use.",
  "proj-efinance-summary": "A personal finance project that I develop as its creator and programmer. It supports transaction management and PDF bank statement imports, with Vue 3 and TypeScript connected to a .NET 9 and PostgreSQL backend.",
  "proj-efinance-highlights": "<li>Financial transaction management</li><li>PDF bank statement parsing and import</li><li>Own frontend and backend development</li>",
  "proj-efinance-context": "The work connects transaction management with importing banking information from PDFs. I implemented the parsing and import engine and transaction functionality. This personal project is in active development and does not yet have a public link.",
  "contribution-label": "My contribution",
  "context-label": "The challenge and my approach",
  "project-details": "Read the full case study",
  "case-label": "PROJECT / FULL CASE STUDY",
  "case-close": "Close project",
  "case-tech": "Technology stack",
  "hero-role": "Full Stack Developer <span> / </span> SaaS & AI"
});

// Dates live in the footer; project titles stay concise in both languages.
for (const dictionary of Object.values(i18nData)) {
  for (const key of Object.keys(dictionary)) {
    if (/^proj-.*-title$/.test(key)) dictionary[key] = dictionary[key].replace(/<span[^>]*>.*?<\/span>\s*/, '').replace(/ \([^)]*\)$/, '');
  }
}
