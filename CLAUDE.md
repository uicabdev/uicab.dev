# CLAUDE.md — uicabdev.dev

Contexto operativo para construir el portafolio. **Lee primero `arquitectura-astro.md`**
(stack, estructura, reglas técnicas) y `plan-maestro.md` (contenido e identidad).
Este archivo NO los repite: fija lo no negociable y resuelve lo que ellos dejan abierto.

**Prioridad:** `contexto/rediseno-uicabdev-definicion.md` (estructura e identidad del
rediseño) y `DESIGN.md` prevalecen sobre `plan-maestro.md` donde haya conflicto. El
contexto de producto para las skills de diseño está en `PRODUCT.md`.

---

## Regla de oro

Las decisiones de stack, estructura de carpetas, i18n y patrones ya están cerradas en
`arquitectura-astro.md`. **No re-decidas nada de eso.** Si algo parece faltar, pregunta
antes de improvisar una alternativa.

---

## No negociables

### Package manager
`pnpm`. No alternes con npm/yarn en los comandos.

### Diseño
Paleta, tipografía, theming (light-only) y principios visuales viven en **`DESIGN.md`**
(fuente única; reemplaza la dirección dark original). No los dupliques aquí.

---

## Contenido — regla crítica

**El texto ES/EN sale LITERAL de `plan-maestro.md`. No reinterpretes, no reescribas,
no "mejores" la prosa.** Si un texto te parece mejorable, déjalo como está y coméntalo
aparte; la voz ya está decidida.

Separación de contenido (resuelve la ambigüedad de i18n del doc de arquitectura):
- **UI chrome** (labels de nav, CTAs, títulos de sección, badges, disponibilidad)
  → `src/i18n/ui.ts`.
- **Prose editorial larga** NO va en `ui.ts`:
  - **Proyectos** → Content Layer, `content/projects/{es,en}/` (markdown + schema Zod).
    Los 3 casos de estudio del plan. Estructura: problema / lo que construí / resultado.
  - **Sobre mí** y **Experiencia** → constantes por idioma; la página de cada locale
    las pasa a la feature. (Más simple que una colección para dos bloques de texto.)

---

## Mapa sección → feature (6 secciones en la home, TODAS `.astro` puro)

Cero islands React en el MVP. Switch de idioma, menú móvil y sección activa del header =
JS vanilla, no islands. Ninguna sección tiene estado real (sin filtros interactivos ni
formularios con validación).

Orden de la home (y del header, salvo Hero): Hero → Proyectos → Approach → Experiencia
→ Sobre mí → Contacto.

| Sección | Feature | Componentes |
|---|---|---|
| Hero | `features/hero/` | `Hero.astro`, badge disponibilidad, 2 CTAs, scroll hint |
| Proyectos | `features/projects/` | `Projects.astro`, `ProjectCard.astro` (enlaza al caso), `CaseStudy.astro` (página `work/[slug]`) |
| Approach | `features/approach/` | `Approach.astro` (3 categorías + nota de adaptación; reemplazó a Stack) |
| Experiencia | `features/experience/` | `Experience.astro` |
| Sobre mí | `features/about/` | `About.astro` |
| Contacto | `features/contact/` | `Contact.astro` |

`features/services/` y `features/blog/` se crean VACÍAS en el scaffold pero **no se
activan en el MVP** (son Fase 3).

### A `components/common/` (no pertenecen a una feature)
`Navbar.astro` (incluye `LangSwitch` + botón CV; el `ThemeToggle` vanilla existe pero está
oculto tras `THEME_TOGGLE_ENABLED` en `consts.ts`), `Footer.astro`,
`SocialLinks.astro` (GitHub/LinkedIn/CV — usado en Hero y Contacto),
`SEO.astro` (metadata + hreflang).

---

## Orden de ejecución — una sesión por bloque, valida antes de seguir

Los bloques 1–8 son el historial del MVP ya construido; el rediseño (rama
`rediseno/arquitectura-hibrida`) los reemplazó en paleta, tipografía y estructura, que
ahora se rigen por `DESIGN.md`. Quedan vigentes como referencia de alcance, no de estilo.

1. **Scaffold** — Astro 6.4.x, Node 22, Tailwind 4 vía `@tailwindcss/vite`. Estructura
   completa (features vacías incl.). i18n nativo `/es/` `/en/`, `defaultLocale: 'es'`,
   redirect de raíz. `ui.ts`/`utils.ts` esqueleto. `consts.ts`. `global.css` con `@theme`
   (tokens de `DESIGN.md`). Fuentes Google.
   ✓ `pnpm dev` levanta, `/es/` y `/en/` resuelven, tokens y fuentes cargan.
2. **Layout + navbar** — `BaseLayout.astro` con **script de tema INLINE en `<head>`**
   (localStorage + prefers-color-scheme, aplica clase antes del paint → evita FOUC).
   Navbar + LangSwitch + ThemeToggle (vanilla) + botón CV. Footer. SEO base.
   ✓ Sin parpadeo de tema (hoy fuerza light), switch ES/EN preserva ruta, navbar responsive.
3–8. **Las 6 secciones**, una por sesión, en el orden de la home (ver mapa arriba).
   Contenido literal del plan (ES+EN).
   ✓ Cada una fiel al plan en ambos idiomas, light-only OK, sin layout roto.
9. **SEO** — llenar `SEO.astro`: meta únicos por página, OG, hreflang desde rutas i18n,
   JSON-LD. Activar `@astrojs/sitemap`.
   ✓ `pnpm build` genera sitemap, hreflang correcto.
10. **Deploy** — Vercel/Netlify, dominio `uicab.dev`, verificar redirect raíz→`/es/`.
   ✓ Build sin errores, ambos idiomas en vivo.

---

## Qué NO hacer

- No activar el blog en estas sesiones (carpeta vacía en scaffold; contenido = Fase 3).
- No usar islands React en el MVP. No `@astrojs/tailwind` (Tailwind 4 lo reemplaza).
- No hardcodear UI chrome: pasa por `i18n/ui.ts`.
- No meter prose larga en `ui.ts`.
- No poner lógica en las páginas: las páginas componen features.
- No reescribir el contenido ES/EN del plan.
- No introducir colores ni fuentes fuera de los definidos en `DESIGN.md`.
- No `client:load` por defecto si en algún momento se justifica una island: empezar por
  `client:visible`.
