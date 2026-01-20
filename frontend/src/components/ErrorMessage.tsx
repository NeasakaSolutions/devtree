// Componente reutilizable para mostrar mensajes de error.
// Recibe contenido mediante `children` y lo renderiza
// dentro de un párrafo con estilos predefinidos.
// Se usa para mantener un formato visual consistente
// en todos los mensajes de error de la aplicación.

// Importaciones:

// Anexar el tipo que sera el children
type ErrorMessageProps = {
    children: React.ReactNode
}

// Funcion principal:
export default function ErrorMessage({children} : ErrorMessageProps) {
  return (
    <p className="bg-red-50 text-red-600 p-3 uppercase text-sm font-bold text-center">
      {children}
    </p>
  )
}


