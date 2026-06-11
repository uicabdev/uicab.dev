# Plan Maestro — uicabdev.dev
### Portafolio y marca personal de Manuel Uicab

---

## Índice

1. [Identidad de marca](#1-identidad-de-marca)
2. [Identidad visual](#2-identidad-visual)
3. [Inventario de contenido](#3-inventario-de-contenido)
4. [Estructura del sitio — MVP](#4-estructura-del-sitio--mvp)
5. [Contenido por sección](#5-contenido-por-sección)
6. [Estrategia de marca — Fase 3](#6-estrategia-de-marca--fase-3)
7. [Fases de desarrollo](#7-fases-de-desarrollo)

---

## 1. Identidad de marca

### Alias y dominio

| Elemento | Valor |
|---|---|
| Alias | uicabdev |
| Dominio principal | uicabdev.dev |
| Email | hola@uicabdev.dev |
| GitHub | @uicabdev |
| LinkedIn | /in/uicabdev |
| X / Twitter | @uicabdev |
| Instagram | @uicabdev |

### Propuesta de valor

**ES:**
> *"El código es la última parte. No empiezo a escribir hasta entender qué problema estoy resolviendo — eso es lo que me permite construir productos de principio a fin."*

**EN:**
> *"Code is the last step. I don't start writing until I understand what problem I'm solving — that's what allows me to build products from idea to launch."*

### Rol y título

**Frontend Developer**

### Tono de comunicación

- Claro antes que técnico — contexto antes de la solución
- Honesto y directo — sin inflar ni exagerar
- Cercano pero profesional — no frío, no informal en exceso
- Orientado al contexto — el marco antes de la respuesta

**Reglas de escritura:**
1. Contexto antes que conclusión
2. Oraciones cortas. Sin miedo al punto
3. Nada que no puedas defender
4. El visitante primero — cada sección responde implícitamente *"¿y eso qué significa para mí?"*
5. Mismo tono en ES y EN — no te vuelvas formal solo porque cambias de idioma

### Mercado objetivo

- **Corto plazo:** Latinoamérica — español como idioma principal
- **Largo plazo:** Internacional — inglés como segundo idioma
- **Aspiración profesional:** Arquitecto de software / Consultor técnico

---

## 2. Identidad visual

### Paleta de colores

| Rol | Color | Hex |
|---|---|---|
| Fondo base | Casi negro neutro | `#1E1E1E` |
| Superficie | Cards y navbar | `#2A2A2A` |
| Borde | Separadores | `#333333` |
| Acento principal | Menta vibrante | `#3DD9A8` |
| Acento hover | Menta oscuro | `#2aaa84` |
| Texto primario | Blanco cálido | `#F0EDE8` |
| Texto secundario | Gris neutro | `#8a8f8e` |

### Tipografía

| Rol | Fuente | Peso |
|---|---|---|
| Títulos y headings | Space Grotesk | 700 nombres, 500 subtítulos |
| Cuerpo y UI | DM Sans | 400 texto, 500 énfasis |
| Código y snippets | JetBrains Mono | 400 |

Ambas fuentes disponibles en Google Fonts.

### Principios visuales

- Dark mode como base
- Un solo color de acento usado con criterio — no decorativo
- Sin gradientes ni sombras decorativas
- Espaciado generoso como elemento de diseño
- Tipografía como jerarquía principal

---

## 3. Inventario de contenido

### Proyectos

| Proyecto | Estado | Tipo |
|---|---|---|
| Sistema de créditos automotrices | Terminado | Caso de estudio completo |
| Sistema de subastas | Terminado | Caso de estudio completo |
| Rediseño gestor de tareas | En desarrollo | Caso de estudio en progreso |
| Arquitectura base React | Publicado en GitHub | Contenido técnico / blog |

### Stack

**Frontend:** React (principal), Astro (en aprendizaje), TypeScript, JavaScript, Tailwind CSS

**Backend:** Node.js + Express, NestJS, Laravel / PHP, .NET / C# (adaptación, no decisiones técnicas)

**Bases de datos:** MySQL, PostgreSQL, SQL Server

**Herramientas:** Git / GitHub, Docker, Postman, Claude Code

**Nota de adaptación:**
> *"Como parte de mi trabajo he revisado, propuesto mejoras y corregido código en tecnologías fuera de mi stack principal — Angular, Vue y otros. No las domino, pero tampoco me detengo cuando las encuentro."*

### Experiencia

**Innovaforce** — Septiembre 2018 · Presente
Frontend Lead / Mid Developer
Incluye período de prácticas profesionales en modalidad de staffing externo — 2018.

---

## 4. Estructura del sitio — MVP

### Secciones

| # | Sección | Objetivo |
|---|---|---|
| 1 | Hero | Primera impresión — capturar atención en 5 segundos |
| 2 | Sobre mí | Historia y personalidad — conectar antes de los proyectos |
| 3 | Proyectos | Casos de estudio — demostrar criterio técnico |
| 4 | Stack | Herramientas con honestidad — sin zoológico de logos |
| 5 | Experiencia | Trayectoria — crecer desde adentro |
| 6 | Contacto | Sin fricción — máxima claridad |

### Páginas adicionales (Fase 3)

| Página | URL |
|---|---|
| Blog | /es/blog/ y /en/blog/ |
| Servicios | /es/servicios/ y /en/services/ |

### Estructura de URLs

```
uicabdev.dev              → redirige a /es/
uicabdev.dev/es/          → portafolio en español
uicabdev.dev/en/          → portafolio en inglés
uicabdev.dev/es/blog/     → blog en español
uicabdev.dev/en/blog/     → blog en inglés
uicabdev.dev/es/blog/[slug]  → artículo individual
```

---

## 5. Contenido por sección

### Hero

**Estructura visual:**
- Navbar: logo `uicabdev.dev` | links de navegación | switch ES/EN | botón CV
- Layout dos columnas: texto a la izquierda, foto a la derecha
- Indicador de disponibilidad activo
- Propuesta de valor con línea de acento verde
- Dos CTAs: *"Ver proyectos"* (primario) y *"Contáctame"* (secundario)
- Links sociales: GitHub, LinkedIn, CV
- Scroll hint al final

### Sobre mí

**ES:**
> Mi hermano fue la puerta. Aunque no se dedica al desarrollo, fue quien me mostró el mundo de la computación — y desde ahí supe que quería estudiar sistemas. En la universidad encontré maestros que hablaban de este oficio con una pasión que te hacía amarlo antes de entenderlo del todo.
>
> Llevo 7 años construyendo software, creciendo entre lo que me enseñaron y lo que aprendí por mi cuenta. Hoy lidero el área frontend en mi empresa, pero lo que realmente me mueve es algo más simple: saber que otras personas usan cosas que yo ayudé a construir. Esa es mi medida de que el trabajo valió la pena.
>
> Soy pragmático por naturaleza — entiendo el problema antes de escribir código, y eso es lo que me permite construir productos que duran. Sé que el camino es largo y lo recorro con intención. Mi norte es claro: seguir creciendo hasta formar parte de los productos y comunidades que hoy me inspiran.

**EN:**
> My brother opened the door. He's not a developer, but he was the one who introduced me to the world of computing — and from that moment, I knew I wanted to study systems engineering. At university, I found professors who talked about this craft with a passion that made you love it before fully understanding it.
>
> I've spent 7 years building software, growing through what I was taught and what I taught myself. Today I lead frontend development at my company, but what truly drives me is simpler than that: knowing that people use things I helped build. That's my measure of work well done.
>
> I'm pragmatic by nature — I understand the problem before writing code, and that's what allows me to build things that last. I know the road ahead is long, and I walk it with intention. My direction is clear: keep growing until I'm part of the products and communities that inspire me today.

### Proyectos

#### Caso de estudio 1 — Sistema de créditos automotrices

**ES:**
**El problema**
Una empresa automotriz gestionaba sus líneas de crédito para agencias de forma manual y fragmentada. El proceso involucraba múltiples actores — operadores, representantes legales, asesores, administrativos y validadores — sin un sistema centralizado que controlara los estados, validara las reglas de negocio ni garantizara la trazabilidad del proceso completo.

**Lo que construí**
Desarrollé el frontend de un sistema integral de gestión de créditos que unifica todo el flujo — desde la requisición inicial hasta la firma digital del contrato. Cuatro decisiones técnicas definieron el proyecto:

*Control de estados y actores* — Diseñé un sistema de permisos y estados que determina qué puede ver y hacer cada actor en cada momento del proceso. Un operador de agencia nunca ve lo que ve un validador interno, y viceversa. El flujo no avanza si los estados no están resueltos correctamente.

*Reglas de negocio diferenciadas* — Las lógicas de validación, aprobación y generación de solicitudes son distintas para créditos de unidades nuevas, seminuevas y refinanciamientos. Cada tipo tiene su propio conjunto de reglas implementadas de forma que el sistema las aplica automáticamente según el contexto.

*Firma digital con servicio externo* — La firma ocurre en el portal del proveedor externo. De nuestro lado implementé la generación y regeneración de documentos, el envío al servicio, la recepción de documentos firmados vía webhooks y la asignación automática al crédito correspondiente.

*Integración con CRM* — El sistema está conectado en todo momento al CRM de la empresa, sincronizando información de agencias, líneas de crédito y estados de las solicitudes.

**El resultado**
Un proceso que antes era manual, propenso a errores y sin trazabilidad, se convirtió en un flujo digital controlado de extremo a extremo — con validaciones automáticas, auditoría de estados y firma legal integrada.

---

#### Caso de estudio 2 — Sistema de subastas

**ES:**
**El problema**
Una empresa necesitaba digitalizar su proceso de subastas de activos — vehículos, inmuebles y bienes varios — en una sola plataforma que sirviera a audiencias completamente distintas: el equipo administrativo que gestiona los activos y los participantes externos que pujan en las subastas.

**Lo que construí**
Desarrollé el frontend de un sistema multi-audiencia que unifica la landing pública, el panel administrativo y el portal de participantes bajo una misma base. Dos decisiones técnicas definieron el proyecto:

*Gestión de audiencias* — En lugar de construir aplicaciones separadas, implementé un sistema de sesión con tipado de usuario y validadores que determina qué portal renderizar según el rol. Simple por dentro, invisible para el usuario.

*UI de alta complejidad con estado compartido* — La vista principal de subastas fue el reto más exigente: un layout de dos columnas donde la columna izquierda muestra una tabla de activos con un control en el footer para cambiar entre subastas activas — reemplazando el contenido completo de la tabla — y la columna derecha muestra el detalle del activo seleccionado. Ese detalle es completamente dinámico: su estructura cambia según si el activo es un vehículo, un inmueble o un bien general. Diseñé la arquitectura de componentes para que el estado compartido entre columnas fuera predecible y el cambio de tipo de activo no generara inconsistencias visuales ni de datos.

**El resultado**
Un sistema que unifica dos audiencias con necesidades opuestas en una sola plataforma, con una interfaz administrativa capaz de manejar múltiples tipos de activos y subastas simultáneas sin perder coherencia visual ni funcional.

---

#### Caso de estudio 3 — Rediseño gestor de tareas *(En desarrollo)*

**ES:**
**El problema**
La versión existente del sistema de gestión de tareas presentaba problemas que afectaban tanto la experiencia del usuario como el mantenimiento del código. Las interfaces eran lentas — páginas que mostraban la misma información realizaban consultas individuales por cada presentación en lugar de una consulta global. La navegación estaba mal distribuida y la experiencia no resistía la comparativa con herramientas similares del mercado. Retroalimentación de clientes potenciales y usuarios internos confirmó lo que el código ya mostraba: era necesario reconstruir, no parchear.

**Lo que estoy construyendo**
Tras un proceso de diagnóstico con el área de diseño — que incluyó sesiones de retroalimentación, uso interno y análisis comparativo con aplicaciones similares — se tomó la decisión de hacer un rediseño completo: nueva interfaz, nueva navegación y nueva arquitectura.

En el lado técnico experimenté con múltiples enfoques antes de tomar una decisión. Evalué arquitecturas desde las más simples hasta Atomic Design y Clean Architecture. El resultado fue una arquitectura propia — una mezcla de Screaming Architecture y Vertical Slices — centrada en features como unidad principal de organización. Cada feature es autónoma, coherente y fácil de localizar. Los principios SOLID, DRY y YAGNI guían cada decisión de implementación.

Esta misma arquitectura la publiqué como plantilla base para proyectos React — es la estructura que uso como punto de partida en cualquier proyecto nuevo.

**Estado actual**
En desarrollo activo. Estimado de lanzamiento: 2 meses. El proceso de construcción — incluyendo las decisiones de arquitectura, los experimentos descartados y los aprendizajes — será documentado como contenido técnico en el blog.

### Experiencia

**ES:**
**Innovaforce** — Septiembre 2018 · Presente
**Frontend Lead / Mid Developer**

Entré a Innovaforce antes de terminar la carrera, como junior. Seis años después soy el responsable del área frontend — no por título, sino por lo que el trabajo fue pidiendo con el tiempo.

En ese camino construí sistemas que hoy están en producción: una plataforma de gestión de créditos automotrices con múltiples actores y firma digital, un sistema de subastas multi-audiencia, y actualmente lidero el rediseño completo de un gestor de tareas interno. Cada proyecto me ha obligado a tomar decisiones que van más allá del código — arquitectura, estándares, criterio técnico.

También acompaño al equipo: cuando hay un problema complejo, soy el primero en sentarme a resolverlo con ellos.

*Incluye período de prácticas profesionales en modalidad de staffing externo — 2018.*

**EN:**
**Innovaforce** — September 2018 · Present
**Frontend Lead / Mid Developer**

I joined Innovaforce before finishing my degree, as a junior. Six years later I lead the frontend area — not because of a title, but because the work gradually asked for it.

Along the way I've built systems that are live in production: an automotive credit management platform with multiple actors and digital signing, a multi-audience asset auction system, and I'm currently leading a full rebuild of an internal task manager. Each project pushed me to make decisions beyond the code — architecture, standards, technical judgment.

I also support the team: when a complex problem shows up, I'm the first one sitting down to work through it with them.

*Includes internship period as external staffing — 2018.*

### Contacto

**Título ES:** ¿Construimos algo juntos?
**Título EN:** Shall we build something together?

**Descripción ES:**
Estoy abierto a nuevas oportunidades — ya sea un proyecto freelance, una posición en un equipo, o una conversación sobre arquitectura y consultoría. Si tienes algo en mente, escríbeme.

**Descripción EN:**
I'm open to new opportunities — whether it's a freelance project, a position on a team, or a conversation about architecture and consulting. If you have something in mind, write to me.

**Email:** hola@uicabdev.dev

**Disponibilidad:**
- Empleo full-time
- Proyectos freelance
- Consultoría técnica

**Links:** GitHub · LinkedIn · Descargar CV

---

## 6. Estrategia de marca — Fase 3

### Servicios

**Servicio 1 — Desarrollo frontend**
Para equipos que tienen una idea o un producto en construcción y necesitan a alguien que entienda el problema antes de escribir código. Incluye arquitectura de componentes, integración con APIs, flujos complejos e interfaces mantenibles.

**Servicio 2 — Consultoría técnica**
Para equipos que ya tienen código y quieren una mirada externa antes de que los problemas sean costosos. Incluye revisión de arquitectura, identificación de deuda técnica y acompañamiento en decisiones técnicas.

**Formato:** Flexible — por horas, por semanas o proyectos de mayor duración.

### Blog

10 artículos planificados con ángulo, palabras clave y puntos a cubrir.
Ver documento separado: `blog-uicabdev.md`

**Primer artículo al lanzar:** La arquitectura que uso en todos mis proyectos React

### SEO

**Palabras clave principales:**
- Manuel Uicab / uicabdev (por nombre)
- Frontend developer México
- Desarrollador React México
- Frontend developer Mérida
- Consultor frontend México *(a largo plazo)*

**Configuración técnica:**
- Sitemap automático con Astro
- Meta tags únicos por página
- Etiquetas hreflang para ES/EN
- Estructura de URLs con prefijo de idioma

### Analítica

**Herramienta:** Umami
**Plan inicial:** Cloud gratuito (umami.is)
**Plan a largo plazo:** Self-hosted con Docker

**Métricas a revisar:**
- Semanal: visitas y fuentes de tráfico
- Mensual: páginas más visitadas y rendimiento del blog
- Trimestral: evolución del SEO y patrones de tráfico

---

## 7. Fases de desarrollo

### Fase 1 — Fundamentos e identidad ✅
Propuesta de valor, tono, identidad visual, inventario de contenido.

### Fase 2 — MVP ✅
Estructura y contenido de las 6 secciones principales.

### Fase 3 — Capa de marca ✅
Blog, servicios, SEO, dominio, analítica.

### Fase 4 — Construcción técnica ⏭️
Estructura del proyecto en Astro, i18n, componentes base, orden de desarrollo y deploy.

---

### Orden de prioridades para el lanzamiento

| Prioridad | Acción |
|---|---|
| 1 | Registrar uicabdev.dev en Namecheap o Porkbun |
| 2 | Reclamar @uicabdev en todas las plataformas |
| 3 | Configurar hola@uicabdev.dev |
| 4 | Construir MVP en Astro con las 6 secciones |
| 5 | Deploy en Vercel o Netlify |
| 6 | Configurar Umami |
| 7 | Publicar primer artículo del blog |
| 8 | Página de servicios |
| 9 | Proyectos propios que alimenten el portafolio |

---

### Errores a evitar

- Esperar tener proyectos perfectos para lanzar — no existe ese momento
- Diseño sobre contenido — buen contenido con diseño simple gana siempre
- No actualizar el portafolio después del lanzamiento — es un organismo vivo
- Ignorar el SEO desde el inicio — es más difícil corregirlo después
- Publicar en el blog por publicar — un artículo sin valor hace más daño que no publicar

---

*Documento generado como plan de referencia completo*
*uicabdev.dev — Manuel Uicab*
*Versión 1.0*
