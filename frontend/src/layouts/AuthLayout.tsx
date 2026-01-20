// Layout principal para las páginas de autenticación.
// Define la estructura visual común (fondo, logo y centrado).
// Utiliza <Outlet /> de React Router para renderizar
// las rutas hijas como login, registro, etc.

// Importaciones:
import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <>
        <div className=" bg-slate-800 min-h-screen">
            <div className=" max-w-lg mx-auto pt-10 px-5">

                <img src="/logo.svg" alt="Logotipo Devtree" />

                <div className=" text-white">
                    <Outlet />
                </div>
            </div>
        </div>
    </>
  )
}



