# back · Backend

Responsable: equipo de Backend. **Stack por definir** (llenar en Notion a más tardar el 26 de noviembre).

Cuando se defina, el código va en `src/` respetando la carpeta de cada módulo, y la configuración del proyecto (por ejemplo `package.json`) va aquí en `back/`.

## Qué hay en esta carpeta

```
back/
├── src/modules/        # un módulo por área (ver tabla abajo)
├── db/init/            # scripts SQL que crean el esquema
├── docs/api/           # contratos de los endpoints
├── docker-compose.yml  # PostgreSQL 16 local
└── .env.example        # variables de entorno
```

## Base de datos local

```bash
docker compose up -d      # levanta PostgreSQL en localhost:5432
docker compose down       # la detiene
docker compose down -v    # la borra para volver a correr los scripts de db/init
```

Conexión: `postgresql://skinmed:skinmed@localhost:5432/skinmed`

## Monolito modular: reglas

1. **Un módulo por área.** Cada carpeta de `src/modules/` tiene sus rutas, su lógica y su acceso a datos.
2. **Cada módulo es dueño de sus tablas.** Un módulo no consulta directamente las tablas de otro: le pide los datos a su servicio. Por ejemplo, `fotos` le pregunta a `consentimientos` si el paciente firmó la autorización.
3. **Rutas con el prefijo del módulo:** `/api/<modulo>/...`.
4. **La bitácora se alimenta de todos los módulos.** Cada vez que se consulta, agrega o modifica información, se registra quién lo hizo y cuándo.
5. **Las notas clínicas no se borran ni se editan.** Una corrección se guarda como una nota nueva (regla de negocio, NOM-004).

## Módulos

| Módulo | Qué hace |
|---|---|
| `auth` | Inicio de sesión del médico y tokens de sesión |
| `usuarios` | Datos del médico: nombre, cédula profesional, contraseña |
| `pacientes` | Alta y búsqueda de pacientes; folio de expediente automático |
| `expediente` | Historia clínica y notas de evolución |
| `consultas` | Consultas y sus procedimientos (zona, producto, cantidad) |
| `captura` | Sesiones del modo captura en la tablet |
| `consentimientos` | Consentimiento por tratamiento y autorización de fotos, con firma |
| `fotos` | Sesiones de fotos (3 ángulos), almacenamiento y consulta |
| `citas` | Citas, revaloraciones y recordatorios |
| `bitacora` | Registro de cambios |

## Estructura sugerida por módulo

```
src/modules/pacientes/
├── pacientes.routes     # endpoints
├── pacientes.service    # reglas de negocio
├── pacientes.repository # consultas a la base de datos
└── README.md            # endpoints del módulo (contrato)
```
