# apps/web · Frontend

React + Vite + TypeScript. Responsable: equipo de Diseño y Frontend.

## Estructura

```
src/
├── app/            # rutas y layout general (menú lateral)
├── components/     # componentes compartidos (Botón, Campo, Alerta…), igual que en Figma
├── features/       # una carpeta por módulo, con sus pantallas
├── lib/api.ts      # cliente para llamar al backend
└── styles/         # tokens de la guía de estilos y estilos globales
```

## Reglas

- Cada pantalla vive en la carpeta de su módulo, dentro de `features/`. Ejemplo: `features/fotos/GaleriaPage.tsx`.
- Los colores, espacios y radios salen de `styles/tokens.css`, que copia las variables de Figma. No se escriben colores sueltos en el código.
- Las llamadas al backend se hacen con `lib/api.ts`, no con `fetch` directo.
- Se diseña primero para tablet (1024×768 horizontal y 768×1024 vertical).

## Pantallas por módulo

| Módulo | Pantallas | Diseño |
|---|---|---|
| acceso | Inicio de sesión, Registro | Irasema, Jesús |
| inicio | Panel principal | Irasema |
| pacientes | Lista de pacientes, Alta de paciente | Jesús |
| expediente | Vista del expediente, Historia clínica, Nueva consulta y procedimientos | Said |
| captura | Entrega de tablet, Ficha por pasos, Salida del modo captura | Carlos |
| consentimientos | Consentimiento informado, Autorización de fotos, Consentimientos firmados | Yuriana |
| fotos | Captura de fotografías, Galería de fotos | Evelyn |
| fotos | Comparación antes y después | Mirtha |
| citas | Agenda de citas y recordatorios | Irasema |
| bitacora | Bitácora de cambios | Mirtha |
| perfil | Perfil del médico | Mirtha |
