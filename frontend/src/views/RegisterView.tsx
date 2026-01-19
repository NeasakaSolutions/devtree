// Importaciones:
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";

export default function RegisterView() {

    // Inicializar los valores de los input del formulario:
    const initialValues = {
        name: "",
        email: "",
        handle: "",
        password: "",
        password_confirmation: ""
    }

    /**
     * Hook de React Hook Form para manejar el formulario de registro.
     *
     * register: Vincula los inputs al formulario.
     * watch: Observa valores de campos en tiempo real.
     * handleSubmit: Maneja el envío del formulario.
     * errors: Contiene los errores de validacion de cada campo.
     */
    const { register, watch, handleSubmit, formState: { errors } } = useForm({defaultValues : initialValues})

    // Funcion de handle register:
    const handleRegister = () => {
        console.log("handle register");
    };

    return (
        <>

            <h1 className="text-4xl text-white font-bold mt-10">Crear cuenta</h1>

            <form onSubmit={handleSubmit(handleRegister)} className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10">

                <div className="grid grid-cols-1 space-y-3">

                    <label htmlFor="name" className="text-2xl text-slate-500">Nombre</label>
                    <input id="name" type="text" placeholder="Tu Nombre"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400 text-black"
                        {...register("name", { // Validaciones:
                            required: "El nombre es obligatorio."
                        })}
                    />
                    
                    {/* Muestra el mensaje de error si la validacion de "name" falla */}
                    {errors.name && <ErrorMessage>{errors.name!.message}</ErrorMessage>}

                </div>

                <div className="grid grid-cols-1 space-y-3">
                    
                    <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
                    <input id="email" type="email" placeholder="Email de Registro"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400 text-black"
                        {...register("email", { // Validaciones:
                            required: "El correo es obligatorio."
                        })}
                        />
                    
                    {/* Muestra el mensaje de error si la validacion de "email" falla */}
                    {errors.name && <ErrorMessage>{errors.email!.message}</ErrorMessage>}
                
                </div>

                <div className="grid grid-cols-1 space-y-3">
                    
                    <label htmlFor="handle" className="text-2xl text-slate-500">Handle</label>
                    <input id="handle" type="text" placeholder="Nombre de usuario: sin espacios"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400 text-black"
                        {...register("handle", { // Validaciones:
                            required: "El handle es obligatorio."
                        })}
                        />
                    
                    {/* Muestra el mensaje de error si la validacion de "handle" falla */}
                    {errors.handle && <ErrorMessage>{errors.handle!.message}</ErrorMessage>}
                
                </div>

                <div className="grid grid-cols-1 space-y-3">
                    
                    <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
                    <input id="password" type="password" placeholder="Password de Registro"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400 text-black"
                        {...register("password", { // Validaciones:
                            required: "La contraseña es obligatoria."
                        })}
                        />

                    {/* Muestra el mensaje de error si la validacion de "password" falla */}
                    {errors.password && <ErrorMessage>{errors.password!.message}</ErrorMessage>}
                
                </div>

                <div className="grid grid-cols-1 space-y-3">
                    
                    <label htmlFor="password_confirmation" className="text-2xl text-slate-500">Repetir Password</label>
                    <input id="password" type="password" placeholder="Repetir Password"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400 text-black"
                        {...register("password_confirmation", { // Validaciones:
                            required: "La contraseña no coincide."
                        })}
                        />

                    {/* Muestra el mensaje de error si la validacion de "password_confirmation" falla */}
                    {errors.password_confirmation && <ErrorMessage>{errors.password_confirmation!.message}</ErrorMessage>}
                
                </div>

                <input type="submit" value='Crear Cuenta'
                    className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"/>
            
            </form>

            <nav className="mt-10">
                <Link className="text-center text-white text-lg block" to="/auth/login">
                    ¿Ya tienes cuenta? Inicia sesión.
                </Link>
            </nav>
        </>
    )
}