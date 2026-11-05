# DESIGN.md — uicabdev.dev

Fuente única de la identidad visual. Origen: `contexto/rediseno-uicabdev-definicion.md`
(secciones 2 y 3), que reemplaza por completo la dirección dark de `plan-maestro.md`.
Si algo aquí choca con otro documento, **este archivo gana**. Cualquier cambio de
diseño se registra aquí, no en `CLAUDE.md`.

---

## Paleta (definir en `styles/global.css`)

| Token | Hex | Uso |
|---|---|---|
| `--color-background` | `#F8FAF6` | Fondo principal |
| `--color-surface` | `#E6EDE4` | Bloques alternos, paneles |
| `--color-surface-muted` | `#CBD5C6` | Bordes, divisores |
| `--color-accent-soft` | `#7A987F` | Acentos decorativos discretos — nunca texto pequeño ni fondo de botón con texto blanco (contraste insuficiente) |
| `--color-primary` | `#3F6B56` | Acciones, enlaces |
| `--color-primary-dark` | `#2F4E3D` | Texto fuerte, fondos oscuros (ej. footer de Contact) |
| `--color-white` | `#FFFFFF` | Tarjetas, texto sobre fondo oscuro |

No introducir colores fuera de esta tabla sin registrarlo aquí primero.

### Contraste
Mínimo WCAG AA (4.5:1 texto normal). `#7A987F` sobre `#F8FAF6` da 3.0:1: solo
detalles gráficos, nunca texto normal.

### Botones
- Primario: `#3F6B56`, hover `#2F4E3D`.
- Secundario: borde `#3F6B56`, hover `#E6EDE4`.
- Terciario/ghost: texto `#3F6B56`, hover `#E6EDE4`.
- Nunca dos primarios juntos.

---

## Theming: light-only, toggle oculto (no eliminado)

- El sitio se publica **solo en modo claro**.
- El toggle de tema **no se elimina del código**: se oculta de la navegación
  (feature flag o comentado en `consts.ts` / componente `ThemeToggle`).
- El script inline anti-FOUC de `BaseLayout.astro` se mantiene, pero fuerza `light`
  sin importar `localStorage` ni `prefers-color-scheme`.
- No se definen tokens dark en esta etapa; se definen cuando se reactive.

---

## Tipografía (Google Fonts)

| Rol | Fuente | Peso |
|---|---|---|
| Headings | **Fraunces** | 600–700 |
| Cuerpo y UI | **Inter** | 400 texto, 500 énfasis |
| Código y datos técnicos | **JetBrains Mono** | 400 |

---

## Principios visuales

Heredados de `CLAUDE.md` y no derogados por el rediseño:

- Sin gradientes ni sombras decorativas.
- Espaciado generoso como elemento de diseño.
- La tipografía es la jerarquía principal, no el color.

Ya no aplica: "dark mode como base".

---

## Arquitectura de información

```
HEADER: UICAB | WORK | APPROACH | ABOUT | CONTACT
1. Introduction       — nombre, especialidad, propuesta de valor, CTA
2. Selected Work      — proyectos destacados, cada uno enlaza a su caso de estudio
3. Technical Approach — Frontend Architecture / Complex Systems & Integrations / Quality & Reliability
4. Experience         — Innovaforce, 2018—actualidad
5. About              — perspectiva personal y profesional
6. Contact            — email, LinkedIn, GitHub, CV
```

Navegación híbrida: la home es un recorrido continuo; cada proyecto de Selected Work
tiene su propia página (`pages/{es,en}/work/[slug].astro`, Content Layer).

---

## Uso de skills de diseño

`impeccable`, `design-taste-frontend` y las skills de animación sugieren estilo propio.
Al invocarlas: respetar este archivo (paleta, fuentes, principios) y limitar sus
propuestas a layout, jerarquía, espaciado, accesibilidad y movimiento.
