# Rediseño uicab.dev — Definición para implementación

Documento de referencia para Claude Code en el proyecto del portafolio. Consolida las decisiones tomadas sobre estructura e identidad visual. No sustituye a `plan-maestro-uicabdev.md`, `arquitectura-astro.md`, `estrategia-redes-uicabdev.md` ni `blog-uicabdev.md` — los complementa y, donde hay conflicto, este documento tiene prioridad.

---

## 1. Alcance

**Cambia:** estructura de la información, jerarquía, navegación, identidad visual completa (paleta y tipografía).

**No cambia en esta etapa:** el contenido redactado de proyectos, experiencia y perfil (el texto ya definido en `plan-maestro-uicabdev.md` sección 5 se mantiene palabra por palabra salvo reorganización de dónde y cómo se presenta). Proyectos personales que reemplacen los actuales de Innovaforce quedan fuera de alcance — se abordan en una fase posterior.

---

## 2. Identidad visual — reemplazo completo

La dirección dark mode definida en `plan-maestro-uicabdev.md` (sección 2) queda **reemplazada**, no complementada. Esta es la única paleta y tipografía activas.

### 2.1 Paleta

| Token | Hex | Uso |
|---|---|---|
| `--color-background` | `#F8FAF6` | Fondo principal |
| `--color-surface` | `#E6EDE4` | Bloques alternos, paneles |
| `--color-surface-muted` | `#CBD5C6` | Bordes, divisores |
| `--color-accent-soft` | `#7A987F` | Acentos decorativos discretos — nunca texto pequeño ni fondo de botón con texto blanco (contraste insuficiente) |
| `--color-primary` | `#3F6B56` | Acciones, enlaces |
| `--color-primary-dark` | `#2F4E3D` | Texto fuerte, fondos oscuros (ej. footer de Contact) |
| `--color-white` | `#FFFFFF` | Tarjetas, texto sobre fondo oscuro |

Botones: primario (`#3F6B56` / hover `#2F4E3D`), secundario (borde `#3F6B56`, hover `#E6EDE4`), terciario/ghost (texto `#3F6B56`, hover `#E6EDE4`). Nunca dos primarios juntos.

Contraste mínimo WCAG AA (4.5:1 texto normal). `#7A987F` sobre `#F8FAF6` da 3.0:1 — no usar en texto normal, solo detalles gráficos.

### 2.2 Theming: light-only, toggle oculto (no eliminado)

- El sitio se publica **solo en modo claro**. El toggle de tema **no se elimina del código**: se oculta de la navegación (feature flag o comentado en `consts.ts` / componente `ThemeToggle`) para poder reactivarlo cuando se defina una paleta dark futura.
- El script inline anti-FOUC en `BaseLayout.astro` (ver `arquitectura-astro.md`, sección Temas) se mantiene en el código pero se fuerza el resultado a `light` independientemente de `localStorage` o `prefers-color-scheme`, hasta que exista un tema dark que valga la pena mostrar.
- No se definen tokens dark en esta etapa. Cuando se reactive, se definen entonces.

### 2.3 Tipografía

| Rol | Fuente | Peso |
|---|---|---|
| Headings | **Fraunces** | 600–700 |
| Cuerpo y UI | **Inter** | 400 texto, 500 énfasis |
| Código y datos técnicos | **JetBrains Mono** | 400 |

Reemplaza la combinación Space Grotesk / DM Sans del plan maestro. Las tres disponibles en Google Fonts, cargadas vía `@tailwindcss/vite` según las reglas de `arquitectura-astro.md`.

Fraunces (serif editorial) da carácter a la nueva arquitectura híbrida sin caer en el look genérico de portafolio dev; Inter sostiene legibilidad en ambos idiomas; JetBrains Mono se mantiene por ser estándar reconocible en contexto técnico.

---

## 3. Arquitectura de información (definitiva)

Arquitectura híbrida confirmada — combina Editorial + Project-first + Technical Profile (ver `resumen-estructura-portafolio.md`, sección 7).

```
HEADER: UICAB | WORK | APPROACH | ABOUT | CONTACT
1. Introduction      — nombre, especialidad, propuesta de valor, CTA
2. Selected Work     — proyectos destacados, cada uno enlaza a su caso de estudio
3. Technical Approach — capacidades y criterio técnico (ver sección 5)
4. Experience        — Innovaforce, 2018—actualidad
5. About             — perspectiva personal y profesional
6. Contact           — email, LinkedIn, GitHub, CV
```

Protagonismo: **equilibrio entre perfil y proyectos** (ni proyectos ocupando toda la página, ni perfil por delante de la evidencia).

Navegación: **híbrida** — página principal con recorrido narrativo continuo (Introduction → Technical Approach → Experience → About → Contact en una sola página), y **cada proyecto de Selected Work con su propia página** (caso de estudio independiente, con navegación contextual de regreso).

Mapeo a `arquitectura-astro.md`: la página principal compone las features `hero`, `approach` (nueva, reemplaza/extiende a `services` como placeholder), `experience` y `about` en `pages/es/index.astro` y `pages/en/index.astro`. Los casos de estudio usan `content/projects/{es,en}` vía Content Layer API, con rutas propias (`pages/es/work/[slug].astro`).

---

## 4. Selected Work — estructura de cada caso de estudio

Estructura de la opción Project-first (`resumen-estructura-portafolio.md`, sección 5.B):

1. Contexto y problema
2. Complejidad funcional y técnica
3. Responsabilidad y contribución individual
4. Solución: arquitectura, interfaces, integraciones, decisiones
5. Resultado, aprendizajes o estado actual

No todos los proyectos requieren los cinco apartados completos. El contenido ya redactado en `plan-maestro-uicabdev.md` (créditos automotrices, subastas, gestor de tareas) se reutiliza tal cual — se reorganiza bajo esta estructura, no se reescribe ni se profundiza más de lo ya documentado. No inventar métricas no existentes.

---

## 5. Technical Approach — categorías

Reorganización del contenido ya existente en Technical Skills y Experience, agrupado por capacidad en lugar de por tecnología:

| Categoría | Qué comunica | Respaldada por |
|---|---|---|
| **Frontend Architecture** | Diseño de componentes, patrones reutilizables, arquitecturas escalables | Stratum, rediseño del gestor de tareas, React/TypeScript/Astro |
| **Complex Systems & Integrations** | Manejo de multi-actor, permisos, estados, APIs externas | Sistema de créditos automotrices, sistema de subastas |
| **Quality & Reliability** | Testing, refactorización, mantenibilidad | Vitest, Playwright, refactor de legacy en Innovaforce |

Cada categoría va acompañada de 2–3 líneas de criterio (no lista de tecnologías como argumento principal) y, si aporta, referencia al proyecto que la evidencia.

---

## 6. Fuera de alcance de este documento

- Reemplazo de los proyectos de Innovaforce por proyectos personales.
- Definición de paleta/tokens para un tema dark futuro.
- Wireframes de alta fidelidad desktop/mobile (siguiente paso una vez implementada esta definición).
