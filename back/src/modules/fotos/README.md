# Módulo `fotos`

Sesiones de fotos con 3 ángulos (frente, perfil derecho, perfil izquierdo). No se guardan sin autorización firmada. Solo uso clínico.

## Endpoints propuestos

Borrador para el contrato del 26 de noviembre. Backend lo confirma y lo documenta en `docs/api/`.

- `GET /api/pacientes/{id}/sesiones-fotos?angulo=`
- `POST /api/pacientes/{id}/sesiones-fotos`: 3 fotos con su ángulo (multipart)
- `GET /api/fotos/{id}`: requiere sesión iniciada
