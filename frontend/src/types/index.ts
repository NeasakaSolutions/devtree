// Definición de tipos globales de la aplicación.
// User representa la estructura básica de un usuario.
// RegisterForm reutiliza campos de User y añade
// los campos necesarios para el formulario de registro.
// Esto garantiza tipado seguro y evita duplicar estructuras.

// Importaciones:

// Interfaz de usuario:
export type User = {
    handle: string
    name: string
    email: string
};

// Extender el tipo de User:
export type RegisterForm = Pick<User, "handle" | "email" | "name"> & {
    password: string
    password_confirmation: string
}
