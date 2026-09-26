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
- SEMOV: 23 trámites. Pagos, formas valoradas y documentos finales fueron implementados por otro compañero. Más de 100,000 transacciones mensuales es escala reportada por la empresa para la plataforma, no una métrica personal.
- SEJ: asignación docente, autenticación, calificaciones y asistencias. La población institucional no equivale a usuarios activos medidos en los módulos.
- SICROP: tres agentes (conversacional, negociación y monitor). Las alertas señalan posibles anomalías para revisión humana, no fraudes comprobados.
- COD: firmas múltiples y externas, compartición con 2FA, representación de firmas, backoffice, borradores y bandejas. El enlace es al producto con credenciales, no una demo abierta.
- U3M: reducción de 6–8 segundos a aproximadamente 2 segundos en pantallas clave. No generalizarla al rendimiento de todo el sistema.
- SICSSE: capacidad de diseño de al menos 500 operaciones diarias; no convertirla en tráfico observado.
- DSIGNR: incorporación a un producto existente; no atribuir toda la plataforma a Derian. Continúa en desarrollo.
- Control Ganadero: participación en captura operativa y dashboards; producto entregado y comercializado.
- EFINANCE: proyecto personal en desarrollo, con movimientos e importación PDF. Sin enlace público activo; no recuperar demos antiguas sin verificar.

No inventar resultados, clientes, métricas, responsabilidades ni enlaces públicos. Si una ampliación requiere hechos nuevos, pedirlos al usuario. Conservar la información ya documentada al mejorar su redacción.

## Validación y entrega

Para cambios de JavaScript: `node --check js/main.js` y `node --check js/translations.js`. Antes de cerrar cambios: `git diff --check`.

Para cambios visuales o interactivos, revisar en navegador ambos temas e idiomas, móvil y escritorio, desbordamientos, filtros, menú móvil y casos de proyecto. Verificar teclado, Escape y retorno de foco en los diálogos. Respetar `prefers-reduced-motion`.

Se realizó una revisión temporal con Playwright/Chromium en seis anchos (360, 390, 768, 1024, 1440, 1920), los nueve casos en ES/EN, fuente local, filtros y foco. No hay suite de pruebas ni dependencia Playwright en el repositorio. No afirmar que esas pruebas se ejecutaron de nuevo si no se hicieron.

Mantener el README actualizado si cambia la ejecución, estructura o edición de contenido. Distinguir entre commit/push completado y despliegue web verificado. No publicar documentos privados ignorados ni ampliar el alcance de una subida a archivos ajenos a la tarea.
