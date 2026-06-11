# Arquitectura base Astro (uicabdev)

Contexto para Claude Code. Este documento define el stack, la estructura y las
reglas del proyecto. Léelo antes de crear o modificar archivos.

> Filosofía: **`.astro` por defecto, React solo donde hay interacción real.**
> La arquitectura sigue Screaming Architecture + Vertical Slices: las `features/`
> son la unidad de organización; las páginas solo **componen**, no contienen lógica.

---

## Stack

| Capa | Tecnología | Nota |
|---|---|---|
| Framework | Astro 6 (≥6.4) | Última estable 6.4.x. Verificar `package.json` antes de asumir API |
| Runtime | Node 22+ | Node 20 EOL abril 2026 — no fijar Node 20 |
| Estilos | Tailwind 4 | Plugin `@tailwindcss/vite` — **NO** `@astrojs/tailwind` (deprecado) |
| Islands | Ninguna por defecto | React (`@astrojs/react`) se añade solo si una feature lo exige |
| Componentes UI | shadcn/ui | Opt-in. Solo dentro de islands React. No hay versión `.astro` |
| i18n | Routing nativo de Astro + diccionarios TS propios | El nativo resuelve URLs/`hreflang`, NO traduce strings de UI |
| Contenido | Content Layer API + Zod | Blog y proyectos. La API legacy de Collections fue eliminada en Astro 6 |
| Estado | nanostores (cross-island) / Zustand (intra-island) | Ver sección Estado |
| SEO | `@astrojs/sitemap` + componente de metadata propio | |
| Analítica | Umami | |

---

## Estructura de carpetas

```
src/
├── components/
│   ├── ui/                 # primitivos shadcn (SOLO si se usa React)
│   └── common/             # Navbar, Footer, ThemeToggle, LangSwitch, SEO
├── features/               # secciones opcionales — vertical slices
│   ├── hero/
│   ├── about/
│   ├── projects/
│   ├── services/
│   └── blog/
├── layouts/
│   ├── BaseLayout.astro    # head, theme script inline, SEO base
│   └── BlogLayout.astro
├── pages/
│   ├── index.astro         # redirect → /es/
│   ├── es/index.astro      # compone features
│   └── en/index.astro
├── content/                # Content Layer API
│   ├── config.ts           # defineCollection + glob loader + schemas Zod
│   ├── blog/{es,en}/
│   └── projects/{es,en}/
├── i18n/
│   ├── ui.ts               # diccionarios ES/EN
│   └── utils.ts            # getLangFromUrl, useTranslations
├── styles/
│   └── global.css          # @theme, @custom-variant dark
├── consts.ts               # config del sitio (nombre, social, nav)
└── assets/
```

### Capa estable vs. capa variable
- **Estable (base template, se reutiliza entre proyectos):** `components/common`,
  `layouts`, `i18n`, `styles`, `consts.ts`.
- **Variable (se activa según el proyecto):** `features/`, `content/`.

### Cada feature es autónoma
Una carpeta en `features/` contiene sus propios componentes, tipos y datos.
Debe poder localizarse y entenderse sin saltar a otras carpetas. Si una feature
necesita algo de otra, ese algo probablemente pertenece a `components/common`.

---

## Reglas de implementación

### Cuándo usar `.astro` vs. React island
- **Default: `.astro`.** Todo lo visual y estático va en `.astro`.
- **React island SOLO si hay estado real:** filtro interactivo, formulario con
  validación en vivo, componente shadcn con interacción.
- Si añades una island, usa la directiva `client:*` mínima necesaria
  (`client:visible` > `client:idle` > `client:load`). Nunca `client:load` por defecto.
- No introduzcas un segundo framework de islands (Svelte/Vue) sin justificación:
  cada runtime añade peso al bundle.

### i18n
- Rutas vía routing nativo (`defaultLocale: 'es'`, prefijos `/es/` `/en/`).
- Strings de UI vía `src/i18n/ui.ts` (diccionarios) + helpers en `utils.ts`.
- NO instalar astro-i18next ni Paraglide: sobreingeniería a esta escala.
- Todo texto visible pasa por el diccionario. Nada hardcodeado en componentes.

### Temas (light / dark / system)
- Script **inline en `<head>`** de `BaseLayout.astro`: lee `localStorage` +
  `prefers-color-scheme` y aplica la clase ANTES del paint.
- Riesgo: sin script inline hay **FOUC** (parpadeo de tema). No usar `<script>`
  diferido para esto.
- El toggle es JS vanilla, no una island React.
- Dark variant en CSS con `@custom-variant dark` (Tailwind 4).

### Estado
- **Intra-island (todo el estado en una sola island React):** Zustand está bien.
- **Cross-island o cross-framework:** usar **nanostores**. Cada island es un root
  de React independiente, así que un store de Zustand NO se comparte entre islands.
- Para un portafolio/blog la mayoría de páginas no necesitan estado global.

### Estilos
- Tailwind 4 vía `@tailwindcss/vite`. Configuración en CSS (`@theme`), no en JS.
- Si un tutorial usa `@astrojs/tailwind`, está desactualizado: ignorar.
- Tokens de color (incl. variables HSL de shadcn si aplica) se definen en
  `styles/global.css` y se conectan al dark variant.

### Contenido (Content Layer API)
- Todo blog/proyecto se modela con `defineCollection` + un loader (`glob`) y schema
  Zod en `content/config.ts`. La API legacy de Content Collections fue eliminada
  en Astro 6: no usar `type: 'content'` ni la flag `legacy.collections`.
- Separar por idioma: `blog/es/`, `blog/en/`.
- No crear contenido fuera de Collections si pertenece a una colección.

### SEO
- Componente único de metadata (Open Graph + JSON-LD) en `components/common`.
- `hreflang` derivado de las rutas i18n.
- `@astrojs/sitemap` activo. Meta tags únicos por página.

### Accesibilidad
- HTML semántico, skip-link en `BaseLayout`.
- Usar el audit de a11y del dev toolbar de Astro.
- En islands React: `eslint-plugin-jsx-a11y`.

---

## Ensamblaje por tipo de proyecto

La página de cada idioma importa solo las features necesarias. Mismo esqueleto,
distinto ensamblaje:

| Proyecto | Features activas | `content/` |
|---|---|---|
| Landing | `hero` + `services` + CTA | No |
| Portafolio | `hero` + `about` + `projects` + `experience` + contacto | Opcional |
| Blog | `blog` + `BlogLayout` | Sí (`blog`) |

---

## Comandos

```bash
pnpm dev          # servidor de desarrollo
pnpm build        # build de producción
pnpm preview      # preview del build
pnpm astro check  # type-check de archivos .astro
```

> Ajustar el package manager (`pnpm`/`npm`/`yarn`) al que use el repo.

---

## Qué NO hacer

- No meter shadcn/React en componentes que no tienen interacción.
- No hardcodear strings: todo va por el diccionario i18n.
- No usar `@astrojs/tailwind` (Tailwind 4 lo reemplaza).
- No poner lógica en las páginas: las páginas componen features.
- No compartir estado entre islands con Zustand (usar nanostores).
- No mezclar frameworks de islands sin razón explícita.
- No usar `client:load` por defecto: empezar por `client:visible`.

---

## Referencias (verificadas jun. 2026)

Estudiar el patrón, no copiar el código. Ninguna es la base directa del proyecto.

| Repo | Para qué sirve de referencia |
|---|---|
| `onwidget/astrowind` | SEO, `consts.ts` central, componente de metadata, scope landing+blog+portafolio |
| `satnaing/astro-paper` | Blog minimalista, dark mode sin FOUC, búsqueda con Fuse.js, sitemap |
| `withastro/docs` | i18n real en producción con diccionarios propios — el patrón a seguir aquí |
| `withastro/starlight` | i18n y theming a escala. Estudiar, no usar |
| Cactus | Alternativa actualizada a Astro 5/6 + Tailwind 4 + Pagefind |

Recetas oficiales clave de Astro docs:
- Compartir estado entre islands (nanostores): `docs.astro.build/en/recipes/sharing-state-islands/`
- i18n nativo: `docs.astro.build/en/guides/internationalization/`
- shadcn/ui en Astro: `ui.shadcn.com/docs/installation/astro`

---

*Las versiones cambian rápido. A junio 2026 la estable es Astro 6.4.x y Tailwind 4.
Verificar `package.json` y docs oficiales antes de fijar dependencias o asumir API.
Astro 6 eliminó la API legacy de Content Collections — usar siempre Content Layer.*
