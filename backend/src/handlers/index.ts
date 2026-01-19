/*
 Handlers de autenticación.
 Contienen la lógica para crear cuentas de usuario y permitir el inicio de sesión.
 Aquí se valida que no existan usuarios duplicados y que las contraseñas sean correctas.
*/

// Importaciones:
import type { Request, Response } from "express";
import { validationResult } from "express-validator";
import slug from "slug";
import User from "../models/User";
import { checkPassword, hashPassword } from "../utils/auth";
import { hash } from "bcrypt";

// Funcion para crear usuario:
export const createAccount = async(req: Request, res: Response) => { 

    // Validaciones:
    const { email, password } = req.body // Extraer email y password del cuerpo de la peticion
    const userExists = await User.findOne({email}); // Verificar si ya existe un usuario con ese email

    if(userExists){

        const error = new Error("El email ya esta registrado.");

        // Retorno
        return res.status(409).json({
            error : error.message
        });
    }

     // Generar handle (nombre de usuario) en formato URL-friendly
    const handle = slug(req.body.handle, "");

    // Verificar que el handle no esté en uso
    const handleExists = await User.findOne({handle});

    if(handleExists){

        const error = new Error("Nombre de usuario no disponible.");

        // Retorno
        return res.status(409).json({
            error : error.message
        });
    }

    // Crear instancia del nuevo usuario con los datos recibidos
    const user = new User(req.body);
    // Mandamos el password a la funcion de hash para encriptarla
    user.password = await hashPassword(password);
    user.handle = handle;

    // Guardar usuario:
    await user.save();

    // Retorno:
    res.send("Usuario creado correctamente.");
}

// Funcion para login:
export const login = async(req: Request, res: Response) => {

    // Extraer credenciales del cuerpo de la petición
    const { email, password } = req.body
    const user = await User.findOne({email}); // Buscar usuario con el email dado

    if(!user){
        const error = new Error("El usuario no existe.");

        // Retorno
        return res.status(404).json({
            error : error.message
        });
    }

    // Comparar contraseña ingresada con el hash almacenado:
    const isPasswordCorrect = await checkPassword(password, user.password);

    if(!isPasswordCorrect){
        const error = new Error("Contraseña incorrecta.");

        // Retorno
        return res.status(401).json({
            error : error.message
        });
    }

    // Si todo es correcto, permitir inicio de sesión:
    res.status(200).json({
        status: "success",
        mensaje: "Sesion iniciada."
    });
};
