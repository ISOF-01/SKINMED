# SKINMED

Sistema de gestión de expedientes clínicos y evidencia fotográfica para el consultorio del Dr. Zaulo Emmanuel Alcaraz Hernández.
Proyecto de la materia SOA. Arquitectura: **monolito modular**, con frontend y backend en un solo repositorio y el backend dividido en módulos.

## Estructura

```
SKINMED/
├── front/   # Frontend: React + Vite + TypeScript  → equipo de Diseño y Frontend
└── back/    # Backend: monolito modular + PostgreSQL → equipo de Backend
```

Cada carpeta tiene su propio README con cómo correrla y qué lleva adentro.

| Carpeta | Qué lleva | Responsable |
|---|---|---|
| `front/` | Pantallas, componentes, estilos de la guía de Figma, cliente de la API, manual de usuario | Diseño y Frontend |
| `back/` | Módulos del backend, base de datos (`db/`), `docker-compose.yml`, contratos de API (`docs/api/`) | Backend |

## Inicio rápido

```bash
# Base de datos (desde back/)
cd back
docker compose up -d

# Frontend (desde front/), en http://localhost:5173
cd ../front
cp .env.example .env
npm install
npm run dev
```

Requisitos: Node.js 20 o superior y Docker Desktop (o PostgreSQL 16 instalado).

## Cómo trabajamos

**Ramas**
- `main`: lo que se entrega. Solo se actualiza desde `develop` con aprobación de los PM.
- `develop`: integración del día a día.
- Ramas de trabajo desde `develop`: `feature/<modulo>-<descripcion>`, por ejemplo `feature/fotos-galeria` o `feature/pacientes-alta`. Correcciones: `fix/<modulo>-<descripcion>`.

**Commits** (en español, con prefijo)
- `feat(fotos): pantalla de galería`
- `fix(pacientes): búsqueda por folio`
- `docs(api): contrato de /pacientes`

**Pull requests**
- Siempre hacia `develop`, nunca directo a `main`.
- Los revisan el líder del equipo y un PM (Definición de terminado en Notion).
- Una pantalla o un módulo por PR.

**Contratos de API**
Los endpoints se acuerdan antes de programar (26 nov) y se documentan en `back/docs/api/`. Si un contrato cambia, se avisa al otro equipo antes de hacer el merge.
