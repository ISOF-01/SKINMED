-- Esquema de SKINMED. Lo define el equipo de Backend (24-27 nov).
-- Cada módulo es dueño de sus tablas; usen un prefijo o un esquema por módulo
-- (por ejemplo: pacientes.paciente, fotos.sesion_foto).

CREATE SCHEMA IF NOT EXISTS pacientes;
CREATE SCHEMA IF NOT EXISTS expediente;
CREATE SCHEMA IF NOT EXISTS consultas;
CREATE SCHEMA IF NOT EXISTS consentimientos;
CREATE SCHEMA IF NOT EXISTS fotos;
CREATE SCHEMA IF NOT EXISTS citas;
CREATE SCHEMA IF NOT EXISTS bitacora;
CREATE SCHEMA IF NOT EXISTS usuarios;
