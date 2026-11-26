import { createBrowserRouter } from 'react-router'
import { Layout } from './Layout'
import { LoginPage, RegistroPage } from '@/features/acceso/AccesoPages'
import { PanelPage } from '@/features/inicio/PanelPage'
import { AltaPacientePage, ListaPacientesPage } from '@/features/pacientes/PacientesPages'
import {
  ExpedientePage,
  HistoriaClinicaPage,
  NuevaConsultaPage,
} from '@/features/expediente/ExpedientePages'
import { ModoCapturaPage } from '@/features/captura/ModoCapturaPage'
import { ConsentimientosPage } from '@/features/consentimientos/ConsentimientosPages'
import { CapturaFotosPage, ComparacionPage, GaleriaPage } from '@/features/fotos/FotosPages'
import { AgendaPage } from '@/features/citas/AgendaPage'
import { BitacoraPage } from '@/features/bitacora/BitacoraPage'
import { PerfilPage } from '@/features/perfil/PerfilPage'

export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/registro', element: <RegistroPage /> },
  // Modo captura: pantalla completa, sin menú del sistema
  { path: '/captura/:pacienteId', element: <ModoCapturaPage /> },
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <PanelPage /> },
      { path: 'pacientes', element: <ListaPacientesPage /> },
      { path: 'pacientes/nuevo', element: <AltaPacientePage /> },
      { path: 'pacientes/:id', element: <ExpedientePage /> },
      { path: 'pacientes/:id/historia-clinica', element: <HistoriaClinicaPage /> },
      { path: 'pacientes/:id/consultas/nueva', element: <NuevaConsultaPage /> },
      { path: 'pacientes/:id/consentimientos', element: <ConsentimientosPage /> },
      { path: 'pacientes/:id/fotos', element: <GaleriaPage /> },
      { path: 'pacientes/:id/fotos/captura', element: <CapturaFotosPage /> },
      { path: 'pacientes/:id/fotos/comparar', element: <ComparacionPage /> },
      { path: 'citas', element: <AgendaPage /> },
      { path: 'bitacora', element: <BitacoraPage /> },
      { path: 'perfil', element: <PerfilPage /> },
    ],
  },
])
