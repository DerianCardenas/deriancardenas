# Contexto para asistentes de código

## Proyecto y objetivo

Este repositorio contiene el portfolio de Derian Alexis Cárdenas Mortera, Full Stack Developer en BePartners, Veracruz, México. El objetivo es ayudar a reclutadores a comprender su experiencia y aportaciones reales. El portfolio complementa el CV: los casos de proyectos deben explicar el trabajo con suficiente profundidad.

## Arquitectura y ejecución

- HTML, CSS y JavaScript puro, sin framework, bundler, backend ni dependencias npm.
- Abrir `index.html` directamente funciona. Alternativas: Live Server o `python3 -m http.server 8000 --bind 127.0.0.1`.
- El usuario pidió retirar la configuración npm/Vite que se había propuesto. No reintroducirla sin una solicitud nueva.
- `package-lock.json` es un remanente anterior; no indica que exista un flujo npm.
- Mantener rutas relativas y compatibilidad con apertura mediante `file://`.

## Preferencias explícitas del usuario

- Dar prioridad a perfil, experiencia y proyectos para reclutadores.
- Aprovechar el ancho de pantalla, conservando separación y espacio de lectura.
- Tipografía grande y legible. El diseño inicial se rechazó por tener texto demasiado pequeño; las descripciones de proyectos ahora usan 18 px.
- Explicar los proyectos ampliamente. No sustituir los casos completos por tarjetas escuetas ni recortar las aportaciones para ahorrar espacio.
- Los popups están autorizados: existe un diálogo nativo compartido para leer cada caso.
- Respetar temas claro y oscuro y comportamiento móvil.
- Usar iconos Material Design, sin emojis decorativos. Los logotipos SVG de GitHub y LinkedIn son marcas, no emojis.
- Mantener español e inglés coherentes.

## Mapa de archivos y comportamiento

- `index.html`: contenido base, tarjetas, secciones, certificados y `#project-dialog`.
- `css/style.css`: variables de color, layout, breakpoints, tipografía y estilos del diálogo.
- `js/translations.js`: `i18nData.es` y `.en`. Hay bloques `Object.assign` al final que sobrescriben valores anteriores; editar la definición efectiva.
- `js/main.js`: persistencia de tema/idioma, filtros, navegación, carruseles opcionales y casos completos.
- `assets/fonts/material-symbols-outlined.ttf`: subconjunto local de Material Symbols. Solo contiene los iconos descargados; añadir un nombre de icono nuevo exige ampliar la fuente.
- `assets/fonts/LICENSE-material-icons.txt`: licencia Apache 2.0; conservarla al redistribuir los iconos.

Las tarjetas contienen resumen, aportaciones visibles y un `<details>` con descripción y contexto completos. `initProjectCases()` oculta el disclosure y añade un botón cuando `<dialog>` está disponible. `openProjectCase()` construye la ventana con el contenido traducido de la tarjeta y convierte la descripción en títulos, párrafos y listas. El texto de descripción utiliza `<strong>`, `<br/>` y viñetas `•`: si se cambia ese formato, revisar también el conversor.

El diálogo debe mantener título accesible, foco dentro de la ventana, cierre con Escape/botón y retorno del foco al disparador. Sin JavaScript, el contenido debe seguir disponible mediante `<details>`. No esconder el contenido base para implementar animaciones.

`PROJECT_IMAGES` mantiene listas vacías: no inventar capturas ni presentar mockups como evidencia de trabajo real.

## Contenido profesional y exactitud

El contenido actual del sitio tiene aclaraciones más específicas que algunos borradores locales antiguos. No sobrescribirlo automáticamente con archivos privados como `portfolio-data.md` o `ASSETS-README.md`, que están ignorados y pueden contener cifras, fechas o atribuciones distintas.

Mantener estas distinciones:

- BePartners se presenta desde enero de 2023; no cambiar a agosto basándose en borradores antiguos.
- SEMOV: 23 trámites organizados en seis variantes de flujo y más de 35 estados operativos. Derian trabajó en el motor de formularios dinámicos, validaciones, reglas por rol y estado, expedientes, transferencias y operación de concesiones en Vue 3 y .NET 9. Pagos, formas valoradas y la implementación inicial de documentos finales fueron realizados por otro compañero. Más de 100,000 transacciones mensuales es escala reportada por la empresa para la plataforma, no una métrica personal.
- SEJ: asignación docente, autenticación, calificaciones y asistencias. La población institucional no equivale a usuarios activos medidos en los módulos.
- SICROP: tres capacidades de IA —intake conversacional, negociación y monitor— integradas mediante un orquestador Hono/TypeScript y herramientas MCP con el sistema existente en Vue, Laravel y MySQL. Las consultas y reglas verificables permanecen en endpoints deterministas; el LLM enruta o explica evidencia. Las escrituras requieren confirmación humana. Las alertas señalan posibles anomalías para revisión, no fraudes comprobados.
- COD: SaaS multitenant con aislamiento por esquema de PostgreSQL y `search_path`. Derian trabajó en resolución de tenants, firmas múltiples y externas por slots, OTP, FIEL, representación de firmas, compartición con 2FA, backoffice, borradores y bandejas. Una revisión de seguridad derivó la identidad operativa del JWT y endureció trece endpoints. El enlace es al producto con credenciales, no una demo abierta.
- U3M: trabajo en flujos completos de titulación y cobranza, con reglas de becas, descuentos, parcialidades y pagos. La reducción de 6–8 segundos a aproximadamente 2 segundos corresponde únicamente a pantallas clave optimizadas mediante consultas y procedimientos de PostgreSQL; no generalizarla al rendimiento de todo el sistema.
- SICSSE: aprobaciones y bandejas condicionadas por roles y estados, incluidos usuarios con varios roles, rechazos justificados y operaciones de almacén, transferencias y activos fijos. La capacidad de al menos 500 operaciones diarias es de diseño; no convertirla en tráfico observado.
- DSIGNR: incorporación a un producto existente; no atribuir toda la plataforma a Derian. Sus aportaciones confirmadas incluyen autenticación propia, Stripe y permisos por plan, biblioteca privada en Cloudflare R2, búsqueda y paginación, Pliego Studio, Clean Studio, Halftone Studio, notificaciones SSE y webhooks idempotentes. La mejora aproximada de 22 cm a 19.5 cm pertenece a un caso de prueba del algoritmo de acomodo, no a todos los trabajos. Continúa en desarrollo.
- Control Ganadero: participación en captura operativa y dashboards; producto entregado y comercializado.
- EFINANCE: proyecto personal desarrollado de extremo a extremo con Vue 3, TypeScript, .NET 10, CQRS/MediatR, EF Core y PostgreSQL. Incluye movimientos, transferencias con integridad de saldos, presupuestos, metas, TOTP, Stripe e importadores PDF de Nu y Plata, además de CSV, OFX, QIF, XML y JSON. Sin enlace público activo; no recuperar demos antiguas sin verificar. Las cantidades de pruebas son una fotografía de la documentación local y deben volver a comprobarse antes de presentarlas como estado actual.

No inventar resultados, clientes, métricas, responsabilidades ni enlaces públicos. Si una ampliación requiere hechos nuevos, pedirlos al usuario. Conservar la información ya documentada al mejorar su redacción.

## Fuentes locales para investigar proyectos

Antes de ampliar un caso, revisar el código, historial Git, especificaciones y documentación del repositorio correspondiente. Los repositorios disponibles durante la revisión del 27 de septiembre de 2026 fueron:

- SEMOV: `/home/derian/Documentos/Proyectos/BePartners/SEMOV`, con `semov_frontend`, `semov_backend`, `docs` y `specs`.
- SICROP: `/home/derian/Documentos/Proyectos/BePartners/SICROP`, con `Agentes-SICROP`, `ComexComprasFront` y `ComexComprasBack`.
- COD: `/home/derian/Documentos/Proyectos/BePartners/COD`, con frontend Vue, backend .NET, contratos, documentación y especificaciones.
- U3M: `/home/derian/Documentos/Proyectos/BePartners/U3M`, con frontend, backend, SQL, contratos, decisiones y especificaciones.
- SICSSE: `/home/derian/Documentos/Proyectos/BePartners/SICSSE`, con frontend, backend, API y almacenamiento.
- DSIGNR: `/home/derian/Documentos/Proyectos/BePartners/DSIGNR`, con `DSIGNR-Front`, `DSIGNR-Back` y `designer-project`.
- EFINANCE: `/home/derian/Documentos/Proyectos/Derian/EFINANCE`. Leer primero su propio `AGENTS.md`, `LLM_REFERENCE.md` y los documentos referenciados allí.

No se localizaron repositorios de SEJ ni Control Ganadero en la ruta de BePartners durante esa revisión. Para esos dos casos, conservar el alcance ya documentado en el portfolio y solicitar datos al usuario antes de añadir detalles técnicos o resultados nuevos.

Los historiales y documentos de estos repositorios sirven como evidencia, pero pueden contener trabajo de otras personas o estados posteriores del producto. Confirmar la autoría mediante commits, documentos de alcance y coincidencia entre frontend y backend antes de redactar en primera persona. No copiar secretos, credenciales, nombres internos sensibles ni información privada al portfolio.

## Validación y entrega

Para cambios de JavaScript: `node --check js/main.js` y `node --check js/translations.js`. Antes de cerrar cambios: `git diff --check`.

Para cambios visuales o interactivos, revisar en navegador ambos temas e idiomas, móvil y escritorio, desbordamientos, filtros, menú móvil y casos de proyecto. Verificar teclado, Escape y retorno de foco en los diálogos. Respetar `prefers-reduced-motion`.

Se realizó una revisión temporal con Playwright/Chromium en seis anchos (360, 390, 768, 1024, 1440, 1920), los nueve casos en ES/EN, fuente local, filtros y foco. No hay suite de pruebas ni dependencia Playwright en el repositorio. No afirmar que esas pruebas se ejecutaron de nuevo si no se hicieron.

Mantener el README actualizado si cambia la ejecución, estructura o edición de contenido. Distinguir entre commit/push completado y despliegue web verificado. No publicar documentos privados ignorados ni ampliar el alcance de una subida a archivos ajenos a la tarea.
