import { NavLink, Outlet } from 'react-router'

const menu = [
  { to: '/', label: 'Inicio' },
  { to: '/pacientes', label: 'Pacientes' },
  { to: '/citas', label: 'Citas' },
  { to: '/bitacora', label: 'Bitácora' },
]

export function Layout() {
  return (
    <div className="app">
      <nav className="riel" aria-label="Menú principal">
        <div className="riel__logo">SKINMED</div>
        {menu.map((m) => (
          <NavLink key={m.to} to={m.to} end={m.to === '/'}>
            {m.label}
          </NavLink>
        ))}
      </nav>
      <main className="contenido">
        <Outlet />
      </main>
    </div>
  )
}
