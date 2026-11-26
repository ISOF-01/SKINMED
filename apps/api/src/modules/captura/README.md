# Módulo `captura`

Modo captura: el paciente llena su ficha en la tablet sin acceso al resto del sistema.

## Endpoints propuestos

Borrador para el contrato del 26 de noviembre. Backend lo confirma y lo documenta en `docs/api/`.

- `POST /api/captura/sesiones/{pacienteId}/iniciar`
- `PUT /api/captura/sesiones/{id}/ficha`
- `POST /api/captura/sesiones/{id}/finalizar`: pide la contraseña del médico
