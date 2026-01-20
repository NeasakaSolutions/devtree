// Punto de entrada principal de la aplicación React.
// Aquí se crea el root de React y se renderiza la app.
// Se envuelve en StrictMode para detectar errores en desarrollo.
// El componente Router contiene toda la navegación del frontend.

// Importaciones:
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
