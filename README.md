# SKINMED

Sistema de gestión de expedientes clínicos y evidencia fotográfica para el consultorio del Dr. Zaulo Emmanuel Alcaraz Hernández.
Proyecto de la materia SOA. Arquitectura: **monolito modular**, con frontend y backend en un solo repositorio y el backend dividido en módulos.

## Estructura

```
SKINMED/
├── apps/
│   ├── web/          # Frontend: React + Vite + TypeScript (Diseño y Frontend)
│   └── api/          # Backend: monolito modular, stack por definir (Backend)
│       └── src/modules/   # un módulo por área: pacientes, expediente, fotos…
├── db/               # PostgreSQL: scripts de creación y datos de prueba (Backend)
├── docs/             # Contratos de API y documentación técnica (Pruebas y Apoyo)
├── docker-compose.yml  # PostgreSQL local
└── package.json      # npm workspaces
```

| Carpeta | Equipo responsable |
|---|---|
| `apps/web` | Diseño y Frontend |
| `apps/api`, `db` | Backend |
| `docs` | Pruebas y Apoyo General |
| Raíz (configuración, README) | Project Managers |

## Requisitos

- Node.js 20 o superior (`node -v`)
- Docker Desktop, o PostgreSQL 16 instalado localmente

## Cómo correrlo

```bash
# 1. Instalar dependencias (desde la raíz)
npm install

# 2. Levantar la base de datos
npm run db:up

# 3. Variables de entorno
cp apps/web/.env.example apps/web/.env
cp apps/api/.env.example apps/api/.env

# 4. Frontend en http://localhost:5173
npm run dev:web
```

El backend se agrega a los workspaces de `package.json` cuando el equipo defina su stack (ver `apps/api/README.md`).

## Cómo trabajamos

**Ramas**
- `main`: lo que se entrega. Solo se actualiza desde `develop` con aprobación de los PM.
- `develop`: integración del día a día.
- Ramas de trabajo desde `develop`: `feature/<modulo>-<descripcion>`, por ejemplo `feature/fotos-galeria` o `feature/pacientes-alta`. Para correcciones: `fix/<modulo>-<descripcion>`.

**Commits** (en español, con prefijo)
- `feat(fotos): pantalla de galería`
- `fix(pacientes): búsqueda por folio`
- `docs(api): contrato de /pacientes`

**Pull requests**
- Siempre hacia `develop`, nunca directo a `main`.
- Deben revisarlos el líder del equipo y un PM (Definición de terminado en Notion).
- Una pantalla o un módulo por PR, para que sea fácil de revisar.

**Contratos de API**
Los endpoints se acuerdan antes de programar (26 nov) y se documentan en `docs/api/`. Si un contrato cambia, se avisa al otro equipo antes de hacer el merge.

## Enlaces

- Notion del proyecto: tablero, pantallas, servicios y APIs
- Figma: SKINMED – Guía de estilos
- Documento del proyecto: requerimientos y reglas de negocio
