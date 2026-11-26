# Módulo `pacientes`

Alta y búsqueda de pacientes. El folio (ej. EXP-2026-0142) y la fecha de registro son automáticos.

## Endpoints propuestos

Borrador para el contrato del 26 de noviembre. Backend lo confirma y lo documenta en `docs/api/`.

- `GET /api/pacientes?buscar=`: búsqueda por nombre o folio
- `POST /api/pacientes`
- `GET /api/pacientes/{id}`
