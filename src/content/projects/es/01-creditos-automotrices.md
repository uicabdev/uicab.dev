---
title: Sistema de créditos automotrices
description: Plataforma integral de gestión de créditos automotrices con flujos multi-actor y firma digital.
order: 1
status: done
---

### El problema

Una empresa automotriz gestionaba sus líneas de crédito para agencias de forma manual y fragmentada. El proceso involucraba múltiples actores — operadores, representantes legales, asesores, administrativos y validadores — sin un sistema centralizado que controlara los estados, validara las reglas de negocio ni garantizara la trazabilidad del proceso completo.

### Lo que construí

Desarrollé el frontend de un sistema integral de gestión de créditos que unifica todo el flujo — desde la requisición inicial hasta la firma digital del contrato. Cuatro decisiones técnicas definieron el proyecto:

*Control de estados y actores* — Diseñé un sistema de permisos y estados que determina qué puede ver y hacer cada actor en cada momento del proceso. Un operador de agencia nunca ve lo que ve un validador interno, y viceversa. El flujo no avanza si los estados no están resueltos correctamente.

*Reglas de negocio diferenciadas* — Las lógicas de validación, aprobación y generación de solicitudes son distintas para créditos de unidades nuevas, seminuevas y refinanciamientos. Cada tipo tiene su propio conjunto de reglas implementadas de forma que el sistema las aplica automáticamente según el contexto.

*Firma digital con servicio externo* — La firma ocurre en el portal del proveedor externo. De nuestro lado implementé la generación y regeneración de documentos, el envío al servicio, la recepción de documentos firmados vía webhooks y la asignación automática al crédito correspondiente.

*Integración con CRM* — El sistema está conectado en todo momento al CRM de la empresa, sincronizando información de agencias, líneas de crédito y estados de las solicitudes.

### El resultado

Un proceso que antes era manual, propenso a errores y sin trazabilidad, se convirtió en un flujo digital controlado de extremo a extremo — con validaciones automáticas, auditoría de estados y firma legal integrada.
