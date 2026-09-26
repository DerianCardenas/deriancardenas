# Derian Alexis Cárdenas Mortera · Portfolio

Portfolio profesional de un Full Stack Developer en BePartners, Veracruz, México. Presenta experiencia en plataformas empresariales y gubernamentales, productos SaaS y agentes de IA con Vue 3, TypeScript, .NET, Laravel y PostgreSQL.

[LinkedIn](https://www.linkedin.com/in/derian-alexis-cardenas-mortera-329674171/) · [GitHub](https://github.com/DerianCardenas) · [Contacto](mailto:cardenasmorteraderian@gmail.com)

## Ver el proyecto localmente

El sitio utiliza **HTML, CSS y JavaScript puro**. No requiere instalación de dependencias, npm, framework ni compilación.

Abre `index.html` directamente en el navegador. También puedes usar Live Server desde tu editor o ejecutar desde la raíz:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Con el servidor activo, visita `http://127.0.0.1:8000`. Para detenerlo, usa `Ctrl + C`. Si el navegador conserva una versión anterior del CSS, recarga con `Ctrl + Shift + R`.

## Diseño y contenido

El recorrido prioriza la información que necesita un reclutador: perfil y tecnologías principales, proyectos, experiencia, herramientas, presentación personal, formación y contacto.

- Diseño adaptable con espacios amplios, dos columnas de proyectos en escritorio y una en móvil.
- Descripciones de proyectos a 18 px, aportaciones visibles y botones para consultar los casos completos.
- Ventanas de detalle con contexto, implementación, decisiones técnicas, alcance y tecnologías. Permiten cerrar con Escape y devuelven el foco al botón de origen.
- Temas claro y oscuro: preferencia del sistema inicialmente y selección persistente en el navegador.
- Español e inglés, con selector y preferencia persistente.
- Filtros para proyectos profesionales y personales.
- Iconos de Material Design alojados localmente y transiciones que respetan la preferencia de movimiento reducido.

### Proyectos incluidos

| Proyecto | Aportación presentada |
| --- | --- |
| SEMOV Edomex | Formularios para 23 trámites, expedientes, revisiones y firmas |
| SEJ Jalisco | Asignación docente, calificaciones, asistencias y acceso por rol |
| SICROP | Agentes conversacionales, negociación y monitoreo de compras |
| COD | Firma múltiple, usuarios externos, documentos con 2FA y backoffice |
| U3M | Titulación, cobros y optimización de consultas PostgreSQL |
| SICSSE | Aprobaciones multinivel y bandejas adaptadas por rol |
| DSIGNR | Google OAuth, recuperación de acceso, Cloudflare R2 y administración |
| Control Ganadero | Captura operativa y tableros gerenciales |
| EFINANCE | Gestión financiera e importación de estados de cuenta PDF |

Los casos distinguen las contribuciones personales del alcance del equipo. Los proyectos privados no ofrecen demos públicas; COD enlaza al sitio del producto, que requiere credenciales. DSIGNR y EFINANCE se presentan en desarrollo.

## Estructura

```text
index.html                 Contenido, navegación y diálogo de proyectos
css/style.css              Diseño, temas, tipografía y adaptación móvil
js/translations.js         Textos en español e inglés
js/main.js                 Temas, idiomas, filtros, navegación y casos completos
assets/fonts/              Iconos Material Symbols y licencia
assets/certs/              Certificados PDF
cursos/                    Documentos académicos y reconocimientos
AGENTS.md                  Contexto y pautas para asistentes de código
```

El archivo `package-lock.json` es un remanente previo: no existe `package.json` ni se utiliza npm para este sitio.

## Editar el contenido

1. Modifica el contenido base en `index.html` para conservar una versión legible sin JavaScript.
2. Actualiza las claves correspondientes de `js/translations.js` en **ambos idiomas**. Los elementos con `data-i18n` reciben estos textos al iniciar; las asignaciones `Object.assign` posteriores prevalecen sobre las definiciones iniciales.
3. En proyectos, mantén sincronizados título, resumen, aportaciones, contexto y descripción completa. `main.js` construye el diálogo desde el contenido de cada tarjeta; no hay una segunda copia independiente del caso.
4. Ajusta el diseño en `css/style.css`, manteniendo contraste y legibilidad en ambos temas.

Los detalles originales permanecen como elementos `<details>` cuando no hay JavaScript. Cuando el navegador admite `<dialog>`, se habilita la ventana de lectura del caso completo.

Para añadir capturas, coloca las imágenes en `assets/projects/<slug>/` y registra sus rutas en `PROJECT_IMAGES`, dentro de `js/main.js`. Las listas vacías no muestran carrusel.

## Comprobaciones

Validación básica sin dependencias:

```bash
node --check js/main.js
node --check js/translations.js
git diff --check
```

Estos comandos verifican sintaxis y formato; no sustituyen una revisión en navegador. Comprueba:

- Móvil y escritorio, sin desplazamiento horizontal.
- Ambos temas y ambos idiomas.
- Filtros y apertura de los nueve casos completos.
- Cierre de ventanas con botón y Escape, y retorno del foco.
- Navegación por teclado, menú móvil y enlaces a certificados.

El rediseño se verificó con Chromium mediante Playwright en seis anchos entre 360 y 1920 px. El script de esa revisión fue temporal; Playwright no está instalado ni configurado como dependencia del repositorio.

## Publicación y recursos

El sitio puede alojarse en cualquier servicio estático. Publica `index.html` junto con `css/`, `js/`, `assets/` y `cursos/`, conservando las rutas relativas. No hay paso de build. Subir un commit al repositorio no confirma por sí solo que un proveedor de hosting lo haya desplegado.

Inter se carga desde Google Fonts; sin conexión se usa la fuente sans-serif del sistema. Los iconos Material Symbols se incluyen como una fuente local reducida a los símbolos utilizados. Para añadir iconos nuevos, también debes actualizar ese subconjunto.

Material Symbols pertenece a Google y se distribuye bajo Apache 2.0. Su licencia está en [assets/fonts/LICENSE-material-icons.txt](assets/fonts/LICENSE-material-icons.txt).
