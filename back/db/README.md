# db · PostgreSQL

Responsable: equipo de Backend.

- `init/`: scripts que se ejecutan **solo la primera vez** que se crea el contenedor (`docker compose up -d` desde `back/`). Se corren en orden alfabético: `001_esquema.sql`, `002_datos_prueba.sql`…
- Para volver a correrlos: `docker compose down -v` (borra los datos locales) y luego `docker compose up -d`.

Conexión local: `postgresql://skinmed:skinmed@localhost:5432/skinmed`
