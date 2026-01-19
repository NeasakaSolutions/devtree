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
