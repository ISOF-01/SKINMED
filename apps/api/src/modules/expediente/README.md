# Módulo `expediente`

Historia clínica (NOM-004) y notas de evolución. Las notas no se editan: una corrección es una nota nueva.

## Endpoints propuestos

Borrador para el contrato del 26 de noviembre. Backend lo confirma y lo documenta en `docs/api/`.

- `GET /api/pacientes/{id}/historia-clinica`
- `PUT /api/pacientes/{id}/historia-clinica`
- `GET /api/pacientes/{id}/notas`
- `POST /api/pacientes/{id}/notas`
