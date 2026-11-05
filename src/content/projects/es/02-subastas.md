---
title: Sistema de subastas
description: Sistema multi-audiencia que unifica panel administrativo y portal de participantes en una sola plataforma.
slug: auction-system
order: 2
status: done
---

### El problema

Una empresa necesitaba digitalizar su proceso de subastas de activos — vehículos, inmuebles y bienes varios — en una sola plataforma que sirviera a audiencias completamente distintas: el equipo administrativo que gestiona los activos y los participantes externos que pujan en las subastas.

### Lo que construí

Desarrollé el frontend de un sistema multi-audiencia que unifica la landing pública, el panel administrativo y el portal de participantes bajo una misma base. Dos decisiones técnicas definieron el proyecto:

*Gestión de audiencias* — En lugar de construir aplicaciones separadas, implementé un sistema de sesión con tipado de usuario y validadores que determina qué portal renderizar según el rol. Simple por dentro, invisible para el usuario.

*UI de alta complejidad con estado compartido* — La vista principal de subastas fue el reto más exigente: un layout de dos columnas donde la columna izquierda muestra una tabla de activos con un control en el footer para cambiar entre subastas activas — reemplazando el contenido completo de la tabla — y la columna derecha muestra el detalle del activo seleccionado. Ese detalle es completamente dinámico: su estructura cambia según si el activo es un vehículo, un inmueble o un bien general. Diseñé la arquitectura de componentes para que el estado compartido entre columnas fuera predecible y el cambio de tipo de activo no generara inconsistencias visuales ni de datos.

### El resultado

Un sistema que unifica dos audiencias con necesidades opuestas en una sola plataforma, con una interfaz administrativa capaz de manejar múltiples tipos de activos y subastas simultáneas sin perder coherencia visual ni funcional.
