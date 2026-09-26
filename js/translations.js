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
    "proj-semov-desc": "<strong>Cómo funciona el proyecto</strong><br/>SEMOV digitaliza la atención de trámites relacionados con concesiones vehiculares del Estado de México. El trabajo comienza en ventanilla con la creación de un expediente. La información que se captura y los documentos que se solicitan dependen del tipo de trámite: el sistema contempla 23 variantes, cada una con requisitos propios.<br/>El expediente continúa por las revisiones internas de las jefaturas y los flujos de firma de directores o subdirectores. Por eso, las pantallas de captura forman parte de un proceso más amplio: deben acompañar el expediente desde su registro hasta la intervención de los responsables de revisión y firma.<br/><br/><strong>Qué hice y cómo lo implementé</strong><br/>• Desarrollé las vistas y los formularios dinámicos para los 23 trámites. En lugar de construir una pantalla independiente para cada variante, trabajé con componentes reutilizables que presentan las secciones y requisitos documentales determinados por procedimientos almacenados.<br/>• Implementé los flujos de creación de expedientes y atención en ventanilla, así como las interfaces que conectan esa captura con las revisiones de jefaturas y las firmas digitales de directores y subdirectores.<br/>• Desarrollé el inicio de sesión y el registro de usuarios. También implementé las funciones de transferencias, modificación de datos de expedientes y bloqueo o desbloqueo operativo de concesiones.<br/><br/><strong>Implementación técnica</strong><br/>Trabajé con Vue 3, Quasar y TypeScript, aplicando Clean Architecture en el frontend e integrando la API de .NET 9 con PostgreSQL. La configuración de los formularios desde procedimientos almacenados permitió reutilizar componentes para requisitos distintos, manteniendo una estructura común de interacción.<br/><br/><strong>Alcance de mi participación</strong><br/>Los pagos, la asignación de formas valoradas y la generación de documentos finales fueron implementados por otro compañero. La cifra de más de 100,000 transacciones mensuales es la escala reportada por la empresa para la plataforma completa; no representa una métrica individual de mi trabajo.",

    // 2. SEJ Control Escolar
    "proj-sej-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">school</span> SEJ Jalisco — Control Escolar y Gestión Académica (2023–2024)",
    "proj-sej-summary": "<strong>Problema resuelto:</strong> Sistema de gestión académica y administrativa para la Secretaría de Educación de Jalisco.",
    "proj-sej-desc": "<strong>Cómo funciona el proyecto</strong><br/>El sistema de control escolar de la Secretaría de Educación de Jalisco reúne procesos académicos y administrativos. La asignación docente se organiza a partir de una jerarquía: municipio, zona escolar, centro de trabajo identificado por su CCT, salón y grupo. Dentro de esa estructura se vincula a los profesores con las materias y los grupos que les corresponden.<br/>La operación cotidiana también incluye la captura de calificaciones y el registro de asistencias. El acceso y la navegación se adaptan al rol del usuario, de modo que la interfaz presenta las opciones correspondientes a su participación en el sistema.<br/><br/><strong>Qué hice y cómo lo implementé</strong><br/>• Implementé los módulos de inicio de sesión y registro, que forman parte del acceso de los usuarios a la plataforma.<br/>• Desarrollé el módulo de asignación docente y las interfaces para recorrer la estructura territorial y escolar antes de vincular a un profesor con materias y grupos. Mi trabajo abarcó esa relación entre la selección de la escuela y la asignación académica.<br/>• Construí las pantallas y los flujos para capturar calificaciones y registrar asistencias, cubriendo tareas recurrentes de la operación escolar.<br/>• Desarrollé la navegación dinámica del menú según los roles, adaptando las opciones visibles al tipo de usuario.<br/><br/><strong>Implementación técnica y alcance</strong><br/>Construí componentes interactivos en Vue 3 que consumen un backend en Laravel con MySQL. Mi participación se concentró en los módulos descritos, no en la totalidad de los procesos de la Secretaría. La población institucional de alumnos y docentes describe el contexto del proyecto; no equivale a usuarios activos medidos en mis módulos.",

    // 3. SICROP Agentes
    "proj-sicrop-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">memory</span> SICROP — Agentes de IA para Compras (2026)",
    "proj-sicrop-summary": "<strong>Problema resuelto:</strong> Automatización conversacional, asistencia de negociación y monitoreo continuo sobre un sistema de compras existente.",
    "proj-sicrop-desc": "<strong>Cómo funciona el proyecto</strong><br/>SICROP incorpora tres agentes de IA a un sistema de compras existente. Cada agente atiende una parte diferente del trabajo: preparar solicitudes, apoyar la negociación con proveedores o monitorear la operación. La integración utiliza información del propio sistema, como el catálogo, el presupuesto y el historial de compras.<br/>Una solicitud como «quiero tres laptops para mañana» inicia un flujo conversacional: se proponen opciones del catálogo, se comprueba el presupuesto y se presenta una vista previa. El usuario puede modificar la solicitud por texto o desde la interfaz antes de enviarla a su superior.<br/><br/><strong>Qué hice y cómo lo implementé</strong><br/>• Desarrollé el agente conversacional que conecta la petición en lenguaje natural con la preparación de una solicitud de compra. Implementé el recorrido de propuesta, validación presupuestal, revisión, cambios y envío al superior.<br/>• Desarrollé el agente de negociación, que consulta compras anteriores, productos, precios y vendedores para presentar tendencias observadas en ese historial y sugerir alternativas de compra o estrategias de negociación. Su función es aportar contexto para la decisión del usuario.<br/>• Desarrollé el agente monitor con ejecución programada mediante un cron configurable. Revisa solicitudes atascadas, presupuestos cercanos al límite y compras acumuladas que superan un umbral dentro de un periodo definido, y genera alertas para su revisión.<br/><br/><strong>Implementación técnica y revisión humana</strong><br/>Integré Anthropic Claude API con flujos en Vue 3, .NET y PostgreSQL. Mi trabajo fue incorporar estos agentes al sistema de compras existente. Las recomendaciones apoyan al usuario, y las alertas identifican posibles anomalías operativas o desvíos que requieren análisis humano; no constituyen fraudes comprobados.",

    // 4. COD
    "proj-cod-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">mail</span> COD — Comunicaciones Oficiales Digitales (2026)",
    "proj-cod-summary": "<strong>Problema resuelto:</strong> Migración de un sistema documental monolítico hacia una plataforma SaaS multitenant de firma y gestión de documentos oficiales.",
    "proj-cod-desc": "<strong>Cómo funciona el proyecto</strong><br/>COD es una plataforma de comunicaciones oficiales y gestión de documentos que está evolucionando de un sistema monolítico hacia un SaaS multitenant. Su operación combina la preparación de documentos, su circulación entre áreas y la firma de los participantes. Un mismo documento puede necesitar varias firmas o la intervención de personas externas a la plataforma.<br/>Los borradores permiten trabajar con documentos aún en preparación; las bandejas compartidas apoyan el trabajo entre áreas. La compartición con verificación de segundo factor incorpora un paso de verificación al acceso al documento compartido.<br/><br/><strong>Qué hice y cómo lo implementé</strong><br/>• Implementé el esquema de firma múltiple para contemplar documentos que requieren la participación de más de un firmante, y el flujo de firma electrónica para usuarios externos.<br/>• Desarrollé la compartición de documentos con verificación 2FA, incorporando el segundo factor como parte del flujo de acceso al contenido compartido.<br/>• Integré la representación visual de las firmas en los documentos mediante Jodit, el editor WYSIWYG utilizado en la plataforma. Esta aportación corresponde a cómo se presentan las firmas dentro del documento.<br/>• Desarrollé el backoffice administrativo, la gestión de borradores y las bandejas compartidas entre áreas, cubriendo herramientas de administración y de operación documental.<br/><br/><strong>Implementación técnica y estado</strong><br/>Trabajé con un frontend en Vue 3, un backend en .NET 10 y PostgreSQL. Mi aportación se centró en los módulos descritos dentro de la evolución del producto. COD está en producción activa: el enlace al sitio del producto requiere credenciales y no es una demostración de acceso libre.<br/><a href=\"https://cod.bepartners.mx/\" target=\"_blank\" rel=\"noopener\">Visitar el sitio de COD</a>.",

    // 5. U3M
    "proj-u3m-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">school</span> U3M — ERP Universitario (2025–2026)",
    "proj-u3m-summary": "<strong>Problema resuelto:</strong> Gestión de flujos académicos y financieros críticos para una universidad privada.",
    "proj-u3m-desc": "<strong>Cómo funciona el proyecto</strong><br/>U3M es un ERP para una universidad privada que reúne procesos académicos y financieros. Dentro de ese entorno, los módulos de titulación y cobros permiten atender dos áreas distintas de la operación universitaria: el proceso de titulación de estudiantes y la gestión de cobros.<br/>Las pantallas consultan información del backend y de PostgreSQL. Por ello, el tiempo necesario para obtener los datos influye directamente en la espera del usuario al trabajar con los módulos.<br/><br/><strong>Qué hice y cómo lo implementé</strong><br/>• Implementé los flujos de titulación de estudiantes de principio a fin, trabajando en las interfaces y su integración dentro del ERP para dar continuidad al proceso.<br/>• Implementé los flujos completos de cobros, como parte de la operación financiera de la universidad. Mi trabajo cubrió el recorrido funcional del módulo y no únicamente una vista aislada.<br/>• Refactoricé procedimientos almacenados y optimicé la lógica de consultas en PostgreSQL que alimentaba pantallas clave. La intervención se concentró en el acceso a datos utilizado por esas pantallas.<br/><br/><strong>Resultado y contexto técnico</strong><br/>En las pantallas optimizadas, el tiempo de carga pasó de 6–8 segundos a aproximadamente 2 segundos. El resultado corresponde a esas pantallas concretas; no es una medición del rendimiento de todo el ERP.<br/>Trabajé con componentes en Vue 3, un backend .NET y PostgreSQL. Mi participación combinó la implementación de funcionalidades académicas y financieras con la mejora de la lógica de datos que las interfaces necesitan consultar.",

    // 6. SICSSE
    "proj-sicsse-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">account_balance</span> SICSSE — Compras y Almacenes SEJ (2023–2024)",
    "proj-sicsse-summary": "<strong>Problema resuelto:</strong> Control de flujo de adquisiciones, entradas y salidas de inventario en almacenes gubernamentales.",
    "proj-sicsse-desc": "<strong>Cómo funciona el proyecto</strong><br/>SICSSE es un sistema de compras y almacenes para el sector público. El alcance del producto incluye el flujo de adquisiciones y el control de entradas y salidas de inventario. En estos procesos intervienen personas con responsabilidades distintas, como el personal de compras, los operadores de almacén y las jefaturas.<br/>Las aprobaciones multinivel organizan la intervención de los responsables dentro del proceso. Las bandejas de trabajo presentan las tareas según el rol, para que cada usuario consulte y atienda la parte de la operación que le corresponde.<br/><br/><strong>Qué hice y cómo lo implementé</strong><br/>• Diseñé e implementé el motor de aprobaciones multinivel. Mi trabajo consistió en modelar el flujo de autorizaciones y trasladarlo al comportamiento del sistema, contemplando la intervención de distintos niveles de responsabilidad.<br/>• Desarrollé las bandejas de trabajo adaptadas a compras, almacenes y jefaturas. La interfaz cambia en función del rol para presentar el trabajo asociado a la participación de cada usuario.<br/>• Conecté la presentación de tareas por rol con el proceso de aprobaciones, de manera que la organización del trabajo en las pantallas correspondiera a las responsabilidades definidas en el flujo.<br/><br/><strong>Implementación técnica y capacidad</strong><br/>El proyecto utiliza Vue 3, Laravel y PostgreSQL. Mi participación se centró en las aprobaciones y las bandejas adaptativas, dentro de un producto con un alcance más amplio de compras y almacenes.<br/>El sistema fue diseñado con capacidad para sostener al menos 500 operaciones diarias. Esa cifra describe una capacidad de diseño, no un volumen de tráfico observado ni un resultado medido exclusivamente sobre mis módulos.",

    // 7. DSIGNR
    "proj-dsignr-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">palette</span> DSIGNR — SaaS para Impresión DTF (2026, en desarrollo)",
    "proj-dsignr-summary": "<strong>Problema resuelto:</strong> Módulos complementarios y backoffice para plataforma SaaS de impresión DTF.",
    "proj-dsignr-desc": "<strong>Cómo funciona el proyecto</strong><br/>DSIGNR es una plataforma SaaS para impresión DTF. Cuando me incorporé, el producto ya tenía gran parte de sus funcionalidades principales. Mi trabajo se centró en las funciones que acompañan su uso: acceder a una cuenta, recuperar el acceso, administrar la plataforma y almacenar archivos en la nube.<br/>La interfaz también contempla distintos niveles de suscripción. La visibilidad de los módulos se ajusta al nivel correspondiente, y el usuario dispone de temas claro y oscuro para utilizar la aplicación.<br/><br/><strong>Qué hice y cómo lo implementé</strong><br/>• Implementé la autenticación mediante Google OAuth, integrando el acceso con una cuenta de Google dentro del producto existente.<br/>• Desarrollé la recuperación de contraseña como parte de los flujos para restablecer el acceso a la cuenta.<br/>• Construí el backoffice administrativo, incorporando herramientas de gestión al entorno del producto.<br/>• Integré Cloudflare R2 para el almacenamiento de archivos en la nube, dentro de la infraestructura utilizada por la plataforma.<br/>• Implementé los temas claro y oscuro y el control de visibilidad de módulos según el nivel de suscripción, adaptando la presentación de la interfaz a esas condiciones.<br/><br/><strong>Implementación técnica y alcance</strong><br/>Trabajé en un entorno con Next.js, React, Fastify, Prisma y PostgreSQL. La incorporación exigió desarrollar estas funciones sobre una base existente, manteniéndolas integradas con el resto del producto.<br/>DSIGNR continúa en desarrollo. Mi participación corresponde a los módulos de acceso, administración, almacenamiento e interfaz descritos; no a la creación de toda la plataforma ni de todas sus funciones de impresión.",

    // 8. Control Ganadero
    "proj-ganado-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">work</span> Control Ganadero — Residencias Profesionales (Enero–Julio 2023)",
    "proj-ganado-summary": "<strong>Problema resuelto:</strong> Sistema operativo para el registro de pesaje, alimentación, trazabilidad y comercialización ganadera.",
    "proj-ganado-desc": "<strong>Cómo funciona el proyecto</strong><br/>Control Ganadero reúne registros de la operación ganadera, como pesaje, alimentación y ventas, para apoyar el seguimiento del negocio. La captura operativa permite registrar esa actividad, mientras que los tableros ofrecen una vista de consulta para la gerencia.<br/>El proyecto conecta dos necesidades: que el personal registre información de la operación y que los responsables del negocio puedan consultarla mediante una presentación orientada al seguimiento. El alcance del producto incluye trazabilidad y comercialización ganadera.<br/><br/><strong>Qué hice y cómo lo implementé</strong><br/>• Durante mis residencias profesionales participé en el desarrollo de los módulos de captura de pesaje, alimentación y ventas. Mi contribución estuvo en las interfaces y funciones de registro de estas actividades operativas.<br/>• Desarrollé tableros de control interactivos en Vue 3 para el seguimiento gerencial, trabajando en la presentación de la información para su consulta dentro de la aplicación.<br/>• Mi participación abarcó tanto la captura operativa como la consulta mediante dashboards, dos partes complementarias del uso del sistema: registrar la actividad y facilitar su seguimiento.<br/><br/><strong>Contexto técnico y estado del producto</strong><br/>El proyecto utiliza Vue 3, Laravel y MySQL. Mi trabajo se realizó dentro del equipo durante las residencias profesionales; las aportaciones descritas no implican la autoría de toda la plataforma.<br/>El producto fue entregado y comercializado, y está en uso activo por clientes. Este estado corresponde al producto del equipo, mientras que mi aportación concreta se concentra en los módulos de captura y los tableros gerenciales.",

    // 9. EFINANCE
    "proj-efinance-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">account_balance</span> EFINANCE — Dashboard de Finanzas Personales (Proyecto Personal)",
    "proj-efinance-summary": "<strong>Problema resuelto:</strong> Aplicación personal para control de movimientos financieros e importación de estados de cuenta bancarios en PDF.",
    "proj-efinance-desc": "<strong>Cómo funciona el proyecto</strong><br/>EFINANCE es mi proyecto personal de gestión financiera. Su funcionamiento se centra en el registro de movimientos y en la incorporación de información bancaria desde estados de cuenta en PDF. Ambas funciones forman parte del mismo objetivo: trabajar con los movimientos financieros dentro de la aplicación.<br/>La importación requiere interpretar el contenido del PDF para convertir la información bancaria en datos que la aplicación pueda gestionar. Por ello, el motor de parseo e importación es una pieza central del proyecto, junto con las funciones de movimientos.<br/><br/><strong>Qué hice y cómo lo implementé</strong><br/>• Soy el creador y desarrollador del proyecto. Trabajo tanto en la interfaz como en el backend y en su integración con la base de datos.<br/>• Implementé la gestión de movimientos financieros, construyendo la funcionalidad con la que el usuario registra y trabaja con sus movimientos dentro de la aplicación.<br/>• Desarrollé el motor de parseo e importación de estados de cuenta PDF. Esta parte interpreta la información del documento para incorporarla al flujo de datos de la aplicación.<br/>• Conecté la interfaz en Vue 3 y TypeScript con un backend en .NET 9 y PostgreSQL, trabajando en las capas necesarias para que la gestión de movimientos y la importación formen parte del mismo producto.<br/><br/><strong>Estado y alcance actual</strong><br/>EFINANCE continúa en desarrollo activo. Las funciones documentadas son la gestión de movimientos y el parseo e importación de estados de cuenta; no se presenta como un producto terminado ni se afirma compatibilidad universal con todos los bancos o formatos PDF.<br/>Actualmente no tiene un enlace público disponible. Su condición de proyecto personal me permite abordar el desarrollo del frontend y el backend dentro de una misma aplicación.",

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
    "proj-semov-desc": "<strong>How the project works</strong><br/>SEMOV digitizes vehicle concession procedures for the State of Mexico. The process starts at the service desk with the creation of a case file. The information and supporting documents required depend on the procedure: the system supports 23 types with different requirements.<br/>The case then moves through internal departmental reviews and signature workflows for directors or deputy directors. Data entry screens therefore belong to a broader process that connects the initial application with the people responsible for reviewing and signing it.<br/><br/><strong>What I built and how</strong><br/>• I developed dynamic views and forms for all 23 procedure types. Instead of building a separate screen for each variant, I used reusable components to display the sections and document requirements determined by stored procedures.<br/>• I implemented case creation and service-desk workflows, along with interfaces connecting intake to departmental reviews and digital signatures by directors and deputy directors.<br/>• I developed login and registration, as well as concession transfers, case data updates and operational blocking and unblocking of concessions.<br/><br/><strong>Technical implementation</strong><br/>I used Vue 3, Quasar and TypeScript with Clean Architecture in the frontend, integrating a .NET 9 API backed by PostgreSQL. Stored-procedure-driven form configuration allowed components to support different requirements while retaining a shared interaction structure.<br/><br/><strong>Scope of my contribution</strong><br/>Another teammate implemented payment processing, controlled official forms and final document generation. More than 100,000 monthly transactions is the company-reported scale of the overall platform, not an individual performance metric.",

    // 2. SEJ Control Escolar
    "proj-sej-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">school</span> SEJ Jalisco — School Control System (2023–2024)",
    "proj-sej-summary": "<strong>Problem Solved:</strong> Academic and administrative management system for the Ministry of Education of Jalisco.",
    "proj-sej-desc": "<strong>How the project works</strong><br/>The Jalisco Ministry of Education's school management system supports academic and administrative processes. Teacher assignments follow a hierarchy: municipality, school zone, school identified by its CCT code, classroom and group. Teachers are linked to subjects and groups within that structure.<br/>Everyday operations also include grade entry and attendance records. Access and navigation vary by user role, presenting the options relevant to each person's participation in the system.<br/><br/><strong>What I built and how</strong><br/>• I implemented login and registration modules as part of user access to the platform.<br/>• I developed the teacher assignment module and interfaces for navigating the regional and school hierarchy before linking teachers to subjects and groups. My work connected school selection with the academic assignment itself.<br/>• I built screens and workflows for entering grades and recording attendance, covering recurring school administration tasks.<br/>• I implemented dynamic role-based menus to adapt visible navigation options to the type of user.<br/><br/><strong>Technical implementation and scope</strong><br/>I built interactive Vue 3 components consuming a Laravel backend with MySQL. My contribution covered these modules, rather than every process managed by the Ministry. The institution's student and teacher population describes the project's context; it is not a measurement of active users in my modules.",

    // 3. SICROP Agentes
    "proj-sicrop-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">memory</span> SICROP — AI Procurement Agents (2026)",
    "proj-sicrop-summary": "<strong>Problem Solved:</strong> Conversational automation, negotiation assistance, and continuous monitoring integrated into an existing procurement system.",
    "proj-sicrop-desc": "<strong>How the project works</strong><br/>SICROP adds three AI agents to an existing procurement system. Each supports a different task: preparing requests, assisting supplier negotiations or monitoring operations. They use information from the system, including its catalog, budgets and purchase history.<br/>A message such as “I need three laptops for tomorrow” starts a conversational workflow: the agent proposes catalog options, checks the budget and presents a preview. The user can modify the request through text or the interface before submitting it to a supervisor.<br/><br/><strong>What I built and how</strong><br/>• I developed the conversational agent that connects a natural-language request to a purchase request. I implemented the proposal, budget validation, review, editing and supervisor submission workflow.<br/>• I developed the negotiation agent, which examines previous purchases, products, prices and vendors to show trends in that history and suggest purchasing alternatives or negotiation strategies. It provides context for the user's decision.<br/>• I developed the monitoring agent with scheduled execution through a configurable cron. It checks stalled requests, budgets approaching their limits and accumulated purchases exceeding a threshold within a defined period, then generates alerts for review.<br/><br/><strong>Technical implementation and human review</strong><br/>I integrated the Anthropic Claude API with Vue 3, .NET and PostgreSQL workflows. My contribution was adding these agents to the existing procurement system. Recommendations assist users, while alerts identify potential operational anomalies or deviations for human analysis; they are not findings of proven fraud.",

    // 4. COD
    "proj-cod-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">mail</span> COD — Official Digital Communications (2026)",
    "proj-cod-summary": "<strong>Problem Solved:</strong> Migration of a monolithic document system into a multitenant SaaS platform for official document signing and management.",
    "proj-cod-desc": "<strong>How the project works</strong><br/>COD manages official communications and documents and is evolving from a monolithic system into a multitenant SaaS. Its operation combines document preparation, circulation between departments and participant signatures. One document may require several signatures or participation from people outside the platform.<br/>Drafts support documents still being prepared, while shared inboxes support work between departments. Sharing with two-factor verification adds a verification step when accessing a shared document.<br/><br/><strong>What I built and how</strong><br/>• I implemented multiple-signature workflows for documents requiring more than one signer, and electronic signature workflows for external users.<br/>• I developed document sharing with 2FA, making second-factor verification part of the shared-content access flow.<br/>• I integrated the visual representation of signatures into documents through Jodit, the platform's WYSIWYG editor. This contribution concerns how signatures appear within the document.<br/>• I developed the administrative backoffice, draft management and shared departmental inboxes, covering both administration and document operations.<br/><br/><strong>Technical implementation and status</strong><br/>I worked with a Vue 3 frontend, a .NET 10 backend and PostgreSQL. My contribution focused on these modules within the product's evolution. COD is in active production. Its product website requires credentials and is not an unrestricted public demo.<br/><a href=\"https://cod.bepartners.mx/\" target=\"_blank\" rel=\"noopener\">Visit the COD product website</a>.",

    // 5. U3M
    "proj-u3m-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">school</span> U3M — University ERP (2025–2026)",
    "proj-u3m-summary": "<strong>Problem Solved:</strong> Management of critical academic and financial workflows for a private university.",
    "proj-u3m-desc": "<strong>How the project works</strong><br/>U3M is an ERP for a private university that brings together academic and financial processes. Within this environment, graduation and collection modules support two different areas of university operations: student graduation procedures and payment collection.<br/>Screens retrieve information from the backend and PostgreSQL. The time required to obtain that data therefore affects how long users wait while working with the modules.<br/><br/><strong>What I built and how</strong><br/>• I implemented end-to-end student graduation workflows, working on interfaces and their integration within the ERP to support the process throughout.<br/>• I implemented complete collection workflows as part of the university's financial operations. My work covered the module's functional flow rather than an isolated screen.<br/>• I refactored stored procedures and optimized PostgreSQL query logic supplying key screens. The intervention focused on the data access used by those screens.<br/><br/><strong>Results and technical context</strong><br/>Load times on the optimized screens fell from 6–8 seconds to approximately 2 seconds. This result applies to those specific screens; it is not a performance measurement for the entire ERP.<br/>I worked with Vue 3 components, a .NET backend and PostgreSQL. My contribution combined academic and financial functionality with improvements to the data logic queried by the interfaces.",

    // 6. SICSSE
    "proj-sicsse-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">account_balance</span> SICSSE — Procurement & Warehouse ERP (SEJ) (2023–2024)",
    "proj-sicsse-summary": "<strong>Problem Solved:</strong> Procurement lifecycle, entry, and exit inventory control in government warehouses.",
    "proj-sicsse-desc": "<strong>How the project works</strong><br/>SICSSE is a public-sector procurement and warehouse system. The product covers acquisition workflows and inventory receipts and issues. These processes involve people with different responsibilities, including procurement staff, warehouse operators and department managers.<br/>Multilevel approvals organize each responsible person's participation. Role-specific work queues present tasks so users can review and handle the part of the operation relevant to them.<br/><br/><strong>What I built and how</strong><br/>• I designed and implemented the multilevel approval engine. I modeled the authorization workflow and translated it into system behavior, accounting for different levels of responsibility.<br/>• I developed work queues tailored to procurement staff, warehouse operators and managers. The interface adapts to the user's role to present the work associated with their participation.<br/>• I connected role-based task presentation with the approval process so that the organization of work on screen reflected the responsibilities defined in the workflow.<br/><br/><strong>Technical implementation and capacity</strong><br/>The project uses Vue 3, Laravel and PostgreSQL. My contribution centered on approvals and adaptive work queues within a product covering broader procurement and warehouse operations.<br/>The system was designed to support at least 500 daily operations. This is a design capacity, not observed traffic or a result measured exclusively on my modules.",

    // 7. DSIGNR
    "proj-dsignr-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">palette</span> DSIGNR — DTF Print SaaS Platform (2026, in dev)",
    "proj-dsignr-summary": "<strong>Problem Solved:</strong> Complementary modules and backoffice for a DTF printing SaaS platform.",
    "proj-dsignr-desc": "<strong>How the project works</strong><br/>DSIGNR is a SaaS platform for DTF printing. Much of its core functionality already existed when I joined. My work focused on supporting its use: account access, account recovery, platform administration and cloud file storage.<br/>The interface also accounts for different subscription tiers. Module visibility varies by tier, and users can work with light or dark themes.<br/><br/><strong>What I built and how</strong><br/>• I implemented Google OAuth authentication, integrating Google account sign-in into the existing product.<br/>• I developed password recovery as part of the workflows for restoring account access.<br/>• I built the administrative backoffice, adding management tools to the product environment.<br/>• I integrated Cloudflare R2 for cloud file storage within the platform's infrastructure.<br/>• I implemented light and dark themes and subscription-based module visibility, adapting the interface presentation to those conditions.<br/><br/><strong>Technical implementation and scope</strong><br/>I worked in an environment using Next.js, React, Fastify, Prisma and PostgreSQL. Joining an existing product meant building these features on its established foundation and integrating them with the rest of the application.<br/>DSIGNR remains in development. My contribution covers the access, administration, storage and interface modules described here, rather than the creation of the entire platform or all of its printing functionality.",

    // 8. Control Ganadero
    "proj-ganado-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">work</span> Cattle Management — Internship Project (Jan–Jul 2023)",
    "proj-ganado-summary": "<strong>Problem Solved:</strong> Operational system for cattle weighing, feeding, traceability, and sales recording.",
    "proj-ganado-desc": "<strong>How the project works</strong><br/>Cattle Management brings together operational records such as weight, feeding and sales to support business monitoring. Data entry modules record that activity, while dashboards provide a management-oriented view of the information.<br/>The project connects two needs: staff must record operational information, and business managers must be able to review it in a format suited to monitoring. The product's broader scope includes cattle traceability and commercialization.<br/><br/><strong>What I built and how</strong><br/>• During my professional internship, I contributed to weight, feeding and sales entry modules. My work covered interfaces and functionality for recording these operational activities.<br/>• I developed interactive Vue 3 dashboards for management monitoring, working on how information is presented for consultation within the application.<br/>• My participation covered both operational data entry and dashboard consultation, complementary parts of using the system: recording activity and supporting its review.<br/><br/><strong>Technical context and product status</strong><br/>The project uses Vue 3, Laravel and MySQL. I worked as part of the team during my internship; these contributions do not imply authorship of the entire platform.<br/>The product was delivered and commercialized and is in active customer use. That status belongs to the team's product, while my specific contribution centers on data entry modules and management dashboards.",

    // 9. EFINANCE
    "proj-efinance-title": "<span class=\"material-symbols-outlined\" aria-hidden=\"true\">account_balance</span> EFINANCE — Personal Finance Dashboard (Personal Project)",
    "proj-efinance-summary": "<strong>Problem Solved:</strong> Personal app for transaction tracking and PDF bank statement parsing.",
    "proj-efinance-desc": "<strong>How the project works</strong><br/>EFINANCE is my personal finance management project. It centers on recording transactions and importing banking information from PDF statements. Both functions support the same goal: working with financial transactions within the application.<br/>Importing requires interpreting PDF content and turning banking information into data the application can manage. The parsing and import engine is therefore a central part of the project alongside transaction functionality.<br/><br/><strong>What I built and how</strong><br/>• I am the project's creator and developer. I work on the interface, backend and database integration.<br/>• I implemented financial transaction management, building the functionality users need to record and work with their transactions in the application.<br/>• I developed the PDF bank statement parsing and import engine. It interprets document information for incorporation into the application's data flow.<br/>• I connected a Vue 3 and TypeScript interface to a .NET 9 backend and PostgreSQL, working across the layers needed to bring transaction management and imports into the same product.<br/><br/><strong>Current status and scope</strong><br/>EFINANCE is in active development. Its documented features are transaction management and bank statement parsing and import. It is not presented as a finished product or as universally compatible with every bank or PDF format.<br/>There is currently no public link. As a personal project, it allows me to work on both frontend and backend development within a single application.",

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
