---
title: Rediseño gestor de tareas
description: Rediseño completo de un gestor de tareas interno — nueva arquitectura, nueva interfaz, nueva navegación.
slug: task-manager
order: 3
status: in-progress
---

## El problema

La versión existente del sistema de gestión de tareas presentaba problemas que afectaban tanto la experiencia del usuario como el mantenimiento del código. Las interfaces eran lentas — páginas que mostraban la misma información realizaban consultas individuales por cada presentación en lugar de una consulta global. La navegación estaba mal distribuida y la experiencia no resistía la comparativa con herramientas similares del mercado. Retroalimentación de clientes potenciales y usuarios internos confirmó lo que el código ya mostraba: era necesario reconstruir, no parchear.

## Lo que estoy construyendo

Tras un proceso de diagnóstico con el área de diseño — que incluyó sesiones de retroalimentación, uso interno y análisis comparativo con aplicaciones similares — se tomó la decisión de hacer un rediseño completo: nueva interfaz, nueva navegación y nueva arquitectura.

En el lado técnico experimenté con múltiples enfoques antes de tomar una decisión. Evalué arquitecturas desde las más simples hasta Atomic Design y Clean Architecture. El resultado fue una arquitectura propia — una mezcla de Screaming Architecture y Vertical Slices — centrada en features como unidad principal de organización. Cada feature es autónoma, coherente y fácil de localizar. Los principios SOLID, DRY y YAGNI guían cada decisión de implementación.

Esta misma arquitectura se convirtió en el estándar interno de la empresa para proyectos React — la diseño y mantengo, y hoy la adopta todo el equipo frontend.

## Estado actual

En desarrollo activo. Estimado de lanzamiento: 2 meses. El proceso de construcción — incluyendo las decisiones de arquitectura, los experimentos descartados y los aprendizajes — será documentado como contenido técnico en el blog.
