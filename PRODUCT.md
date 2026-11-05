# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos audiencias, a partes iguales: quien contrata un puesto (reclutadores y líderes
técnicos que evalúan una posición full-time) y quien contrata un proyecto o consultoría
(personas o equipos con un problema concreto). Mercado inicial: Latinoamérica, en
español; después, internacional, en inglés.

Si ambas necesidades entran en conflicto, se prioriza la que lleve a conseguir proyectos
o nuevas oportunidades de trabajo.

## Product Purpose

Portafolio y marca personal de Manuel Uicab (Frontend Developer, alias uicabdev,
dominio uicab.dev). Existe para que un visitante decida escribirle: por un puesto, un
proyecto freelance o una consultoría técnica. El éxito es ese contacto, no el tiempo en
el sitio. Aspiración profesional declarada: arquitecto de software / consultor técnico.

## Positioning

Entiende el problema antes de escribir código; eso le permite construir productos de
principio a fin. Propuesta de valor (literal del plan): "El código es la última parte.
No empiezo a escribir hasta entender qué problema estoy resolviendo."

## Capabilities and Constraints

- Sitio estático en Astro, bilingüe ES/EN (`/es/`, `/en/`), sin islands React en el MVP.
- La home recorre Introduction → Selected Work → Technical Approach → Experience →
  About → Contact. Cada proyecto tiene su propia página en `work/[slug]`.
- Light-only; el toggle de tema existe en el código pero está oculto.
- Disponibilidad ofrecida: empleo full-time, proyectos freelance, consultoría técnica.

## Brand Commitments

Voz y reglas de escritura del plan maestro (`contexto/plan-maestro-uicabdev.md`, sección
1): claro antes que técnico, honesto y directo, cercano pero profesional, mismo tono en
ES y EN. Identidad visual en `DESIGN.md`.

## Evidence on Hand

- Tres casos de estudio en `src/content/projects/{es,en}/`: créditos automotrices,
  sistema de subastas y rediseño de un gestor de tareas (en desarrollo).
- Experiencia en Innovaforce, 2018 a la actualidad.
- No hay métricas de resultado, testimonios ni logotipos de clientes. No inventarlos.

## Product Principles

1. Contexto antes que solución: cada sección responde "¿y eso qué significa para mí?".
2. Evidencia sobre afirmaciones: el criterio técnico se muestra con casos reales.
3. Nada que no se pueda defender: sin cifras, clientes ni logros inventados.
4. Un camino claro hacia el contacto desde cualquier punto del sitio.

## Accessibility & Inclusion

Cumplir WCAG AA (contraste mínimo 4.5:1 en texto normal). Los pares de color ya
verificados están en `DESIGN.md`.

## Open Decisions

- Los proyectos de Innovaforce son provisionales: se reemplazarán por proyectos
  personales en una fase posterior, fuera del alcance actual.
