# DESIGN.md — uicabdev.dev

Fuente única de la identidad visual. Origen: `contexto/rediseno-uicabdev-definicion.md`
(secciones 2 y 3), que reemplaza por completo la dirección dark de `plan-maestro.md`.
Si algo aquí choca con otro documento, **este archivo gana**. Cualquier cambio de
diseño se registra aquí, no en `CLAUDE.md`.

**Cómo se mantiene:** las decisiones (paleta, fuentes, light-only, IA) vienen de la
especificación. Los detalles de tamaños, layout, componentes y movimiento se derivaron
del código terminado con `impeccable-documenter` y se reconciliaron contra la
especificación. Donde difirieron, se eligió por mérito (ver "Reconciliación").

---

## Paleta (definida en `src/styles/global.css`)

| Token | Hex | Uso |
|---|---|---|
| `--color-background` | `#F8FAF6` | Fondo de página |
| `--color-surface` | `#E6EDE4` | Navbar, tarjetas de proyecto, bandas alternas (Approach, About); texto sobre bandas `primary-dark` |
| `--color-surface-muted` | `#CBD5C6` | Divisores y subrayado del email en Contact. No para bordes de controles |
| `--color-accent-soft` | `#7A987F` | Reservado para acentos decorativos discretos; hoy sin uso. Nunca texto pequeño ni fondo de botón con texto blanco |
| `--color-primary` | `#3F6B56` | Acciones, enlaces, bordes de controles, etiquetas de evidencia |
| `--color-primary-dark` | `#2F4E3D` | Tinta: títulos y texto de lectura; fondo de Contact y Footer; hover del botón primario |
| `--color-white` | `#FFFFFF` | Texto sobre el botón primario y titulares sobre `primary-dark` |
| `--color-text-muted` | `#52655A` | Texto secundario y metadatos (derivado, ver Contraste) |

No introducir colores fuera de esta tabla sin registrarlo aquí primero. El texto es
verde-tinta (`primary-dark`), nunca negro ni gris neutro.

### Contraste

Mínimo WCAG AA (4.5:1 texto normal, 3:1 para bordes de controles y gráficos).

| Par | Ratio | Resultado |
|---|---|---|
| `primary-dark` / background | 8.78 | ✓ |
| `primary-dark` / surface | 7.73 | ✓ |
| `primary` / background | 5.80 | ✓ |
| `primary` / surface | 5.10 | ✓ |
| `white` / `primary` (botón primario) | 6.09 | ✓ |
| `white` / `primary-dark` (Contact, Footer) | 9.22 | ✓ |
| `surface` / `primary-dark` (texto secundario en bandas oscuras) | 7.73 | ✓ |
| `surface-muted` / `primary-dark` (subrayado del email) | 6.09 | ✓ |
| `text-muted` / background | 5.94 | ✓ |
| `text-muted` / surface | 5.23 | ✓ |
| `text-muted` / `surface-muted` | 4.12 | ✗ no usar |
| `accent-soft` / background | 3.02 | ✗ solo gráfico |
| `white` / `accent-soft` | 3.17 | ✗ no usar en botón |
| `surface-muted` / background | 1.44 | solo divisor decorativo |
| `white` / background | 1.05 | ✗ por eso las tarjetas van en `surface`, no en blanco |

**Token derivado:** `--color-text-muted: #52655A` no estaba en la tabla original. Mismo
matiz verde que `primary-dark`, más claro y menos saturado, para distinguirlo de los
enlaces (`primary`). Usar solo sobre `background`, `surface` o `white`.

### Botones
- **Primario:** fondo `primary`, texto blanco 14px/500, padding 10×20px; hover `primary-dark`.
- **Secundario:** transparente, borde 1px `primary`, texto `primary-dark`; hover fondo `surface`.
- **CV (navbar):** contorno `primary`, texto `primary`, 12px/500; hover relleno `primary` con texto blanco.
- Nunca dos primarios juntos. No existe variante terciaria/ghost todavía.
- Los bordes de controles interactivos usan `primary` (5.80:1, cumple 3:1); `surface-muted` queda para divisores.

### Foco
Un solo tratamiento global: contorno 2px `primary`, desplazamiento 3px
(`:focus-visible`). Dentro de las bandas oscuras (`data-surface="dark"`) el contorno es
blanco.

---

## Theming: light-only, toggle oculto (no eliminado)

- El sitio se publica **solo en modo claro**.
- El toggle de tema **no se elimina del código**: se oculta tras `THEME_TOGGLE_ENABLED`
  en `src/consts.ts` (`false`). Con el flag en `true` se reactiva el toggle y el script
  deja de forzar light.
- El script inline anti-FOUC de `BaseLayout.astro` se mantiene, pero fuerza `light`
  sin importar `localStorage` ni `prefers-color-scheme` mientras el flag esté apagado.
- No se definen tokens dark en esta etapa; se definen cuando se reactive.

---

## Tipografía (Google Fonts)

| Rol | Fuente | Peso | Respaldo |
|---|---|---|---|
| Títulos, cita del Hero, wordmark, email de Contact | **Fraunces** | 600–700 | Georgia, serif |
| Cuerpo y UI | **Inter** | 400 texto, 500 énfasis | system-ui |
| Evidencia y fechas | **JetBrains Mono** | 400 | ui-monospace, Consolas |

### Escala (tal como está construida)
| Uso | Tamaño | Peso |
|---|---|---|
| Nombre del Hero | 2.25rem, 3rem en `md` | 700 |
| Propuesta de valor (cita del Hero) | 1.5rem, balanceada | 600 |
| Título de sección (h2) | 1.875rem | 700 |
| Título de Contact | 2.25rem, 3rem en `md` | 700 |
| Email de Contact | 1.875rem, 3rem en `md` | 700 |
| Título de tarjeta y de categoría (h3) | 1.125–1.25rem | 700 |
| Título del caso de estudio (h1) | 1.875rem, 2.25rem en `md` | 700 |
| Texto de lectura | 1rem, interlineado 1.625 | 400 |
| Etiquetas, enlaces, botones | 0.875rem | 400–500 |
| Selector de idioma | 0.75rem mayúsculas, tracking | 500 |
| Mono (evidencia, períodos) | 0.8125rem / 0.875rem | 400 |

### Reglas
- **Solo Fraunces pone títulos.** El rol y otros metadatos van en Inter.
- **Mono significa evidencia o dato** (líneas "Respaldado por", períodos). Nunca decorativo.
- Solo se cargan los pesos 600/700 de Fraunces: no usar `font-medium` con `font-heading`.
- Comillas tipográficas (“ ” ’): la cita del Hero las convierte al renderizar; el texto
  fuente conserva las comillas rectas tal como el autor lo escribió.

---

## Layout y ritmo

- Columna centrada de `max-w-5xl` (1024px) con gutters `px-6`. Lectura de casos y copy
  de Contact: 768px.
- Patrón de sección: `grid md:grid-cols-[1fr_2fr]` con título sticky (`top-24`) a la
  izquierda (Proyectos, Experience, About). En Experience esa columna lleva además
  empresa, rol y período, para no repetir un título solo. Approach: 3 columnas en `md`.
  Hero: 2 columnas con foto cuadrada (224px, 288px en `md`) y altura de su contenido (sin
  pantalla completa ni scroll-hint), de modo que la primera tarjeta asoma bajo el pliegue.
- Un solo breakpoint de layout: `md` (768px). Por debajo, todo en una columna y menú
  hamburguesa.
- **Ritmo deliberadamente desigual** (no una escala uniforme): Hero `pt-24 pb-16`
  (`pt-16 pb-12` en móvil), Proyectos `pt-20 pb-32`, Approach `py-24`, Experience `py-16`,
  About `py-24`, Contact `pt-28`.
- Bandas alternas: `background` → `surface` (Approach) → `background` → `surface`
  (About) → `primary-dark` (Contact + Footer). Entre secciones del mismo fondo, un
  divisor `surface-muted` de 1px.
- Zonas táctiles: mínimo 44px en móvil y 24px en escritorio (WCAG 2.2 AA).

## Formas y elevación

- **Esquinas rectas:** radio 0 en botones, tarjetas, etiquetas y foto. Única excepción: el
  punto de disponibilidad (8px, redondo).
- **Plano:** sin sombras y sin gradientes (incluye máscaras sobre la foto). La profundidad
  es tonal: `surface` sobre `background`, bordes de 1px y bandas.
- Bordes: 1px `surface-muted` (neutro) o `primary` (control/énfasis).

---

## Componentes

- **Tarjeta de proyecto:** fondo `surface`, sin radio ni sombra; padding 24px (32px en
  `md`). Título Fraunces, descripción 14px apagada y, debajo, la primera frase literal de la
  sección "El problema" del caso (tomada del markdown, con su encabezado, limitada a 3
  líneas), y el enlace "Ver caso de estudio →" en `primary` con la flecha que se desplaza
  4px al hover. Entrada escalonada 90ms. No se escribe texto nuevo para la tarjeta.
- **Etiqueta de estado ("En desarrollo"):** borde 1px `primary`, texto `primary` 12px,
  sin relleno. Es informativa, no clicable.
- **Navbar:** fija, fondo `surface`, borde inferior `surface-muted`. Enlaces en 14px
  `text-muted`, hover `primary-dark`; la sección visible (vía `IntersectionObserver` y
  `aria-current`) va en `primary-dark` con subrayado. Móvil: menú que se cierra con Escape
  (devuelve el foco al botón), al tocar fuera o al pulsar un enlace. En móvil, un enlace
  "Contacto" visible junto al hamburguesa evita tener que abrir el menú. Selector de
  idioma `ES | EN` en escritorio, con el idioma actual en `primary-dark` y sin enlace; el
  otro idioma conserva la ruta actual.
- **Indicador de disponibilidad (Hero):** punto `primary` de 8px con halo `animate-ping`
  solo si el usuario permite movimiento.
- **Banda de cierre (Contact + Footer):** fondo `primary-dark`, titular blanco, texto en
  `surface`, email como elemento más grande (Fraunces 700, subrayado 2px `surface-muted`,
  `break-all`), disponibilidad en una línea separada por " · " y enlaces sociales en
  versión inversa.
- **Página de caso:** columna de 768px, enlace de regreso, h1, descripción y cuerpo del
  markdown (secciones en h2 Fraunces 1.25rem, párrafos en `primary-dark`). Al final: tarjeta
  "Siguiente proyecto" (por orden; el último vuelve al primero) y la misma banda oscura de
  Contact de la home, para que el cierre conserve su peso.

## Movimiento

- **Reveal on scroll:** `data-reveal="up"` (opacidad 0 y 16px) o `"fade"`, 0.6s con
  `cubic-bezier(0.16, 1, 0.3, 1)`, escalonado con `--reveal-delay`; se dispara al 15% de
  visibilidad. Requiere `html.js`.
- Fundido global de 0.25s en color, fondo y borde; scroll suave a anclas.
- Todo condicionado a `prefers-reduced-motion: no-preference`. Sin JS el contenido es
  visible desde el inicio. Sin levantamientos ni sombras en hover.

---

## Arquitectura de información

```
HEADER: UICAB | WORK | APPROACH | EXPERIENCE | ABOUT | CONTACT
1. Introduction       — nombre, especialidad, propuesta de valor, CTA
2. Selected Work      — proyectos destacados, cada uno enlaza a su caso de estudio
3. Technical Approach — Frontend Architecture / Complex Systems & Integrations / Quality & Reliability
4. Experience         — Innovaforce, 2018—actualidad
5. About              — perspectiva personal y profesional
6. Contact            — email, LinkedIn, GitHub, CV
```

Experience se añadió al header por decisión posterior al documento del rediseño (la crítica
de impeccable señaló que el reclutador no llegaba a la evidencia). Orden del header = orden de la home.

Navegación híbrida: la home es un recorrido continuo; cada proyecto de Selected Work
tiene su propia página (`pages/{es,en}/work/[slug].astro`, Content Layer).

---

## Principios visuales

Heredados de `CLAUDE.md` y no derogados por el rediseño. Ya no aplica "dark mode como base".

**Sí:** esquinas rectas y superficies planas; tinta verde para el texto; tipografía como
jerarquía principal; espaciado generoso; mono solo para evidencia; movimiento condicionado
a `prefers-reduced-motion`.

**No:** colores o fuentes fuera de este documento; sombras, gradientes o esquinas
redondeadas; negro puro o gris neutro en texto; bordes de controles en `surface-muted`.

---

## Reconciliación (especificación vs. código)

Decidido por mérito, no por precedencia:

| Punto | Resultado |
|---|---|
| Botón secundario con borde `surface-muted` (1.44:1) | Se corrigió el código a la especificación: borde `primary` |
| Tarjetas en blanco (especificación) vs. `surface` (código) | Gana el código: el blanco sobre el fondo da 1.05:1; la especificación se actualizó |
| Rol de Experience en Fraunces 500 (peso no cargado) | Ni una ni otra: pasó a Inter 500, porque el rol es metadato |
| Sin estilo de foco propio | Se añadió un foco global (ver Foco) |
| Etiquetas de accesibilidad con texto fijo en dos idiomas | Se movieron a `ui.ts`, en el idioma de la página |
| Hero de pantalla completa con scroll-hint | Se quitaron: añadían ~300px vacíos y una acción sin función |
| Encabezados de caso en h3 (salto desde h1) | Pasaron a h2 en los markdown (cambio de marcado, no de prosa) |

## Deuda conocida

- `accent-soft` está definido y no se usa.
- Quedan restos de dark mode sin tokens: `@custom-variant dark`, las clases `dark:` de los
  íconos del toggle y el manejador de `localStorage`.
- Flechas y flechas de descarga (→ ← ↓) usadas como íconos junto a SVG en línea.
- Marcado duplicado de enlaces de navegación y toggle entre escritorio y móvil.
- Los botones del Hero repiten clases en línea en lugar de ser un componente.
- Valores sueltos fuera de escala: `text-[0.8125rem]`, `z-[100]`.
- Palabras largas sin espacios desbordan en títulos (no ocurre con el contenido actual);
  el Hero desborda ~80px a 195px de ancho, por debajo del mínimo de 320px de WCAG.
- Títulos de Approach en inglés dentro de la página en español y "líneas de criterio" por
  categoría sin redactar: contenido del autor, pendiente.
- Dos pesos de Fraunces casi iguales (700 y 600) en la primera vista del Hero.
- Las páginas de caso no marcan sección activa en la navegación.
- Evidencia visual del trabajo (diagramas o capturas) en tarjetas y casos: pendiente, depende
  de qué puede mostrar el autor. Sin métricas inventadas.
- A 195px de ancho (bajo el mínimo de 320px de WCAG) la página de caso desborda ~44px.
- `BlogLayout` es un envoltorio sin uso hasta la Fase 3.

---

## Uso de skills de diseño

`impeccable`, `design-taste-frontend` y las skills de animación sugieren estilo propio.
Al invocarlas: respetar este archivo (paleta, fuentes, principios) y limitar sus
propuestas a layout, jerarquía, espaciado, accesibilidad y movimiento.
