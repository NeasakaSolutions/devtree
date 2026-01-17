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
    const { email, password } = req.body
    const userExists = await User.findOne({email}); // Buscar usuario con el email dado

    if(userExists){
        const error = new Error("El email ya esta registrado.");

        // Retorno
        return res.status(409).json({
            error : error.message
        });
    }

    // Verificar que el handle no se repita:
    const handle = slug(req.body.handle, "");
    const handleExists = await User.findOne({handle}); // Buscar usuario con el handle dado

    if(handleExists){
        const error = new Error("Nombre de usuario no disponible.");

        // Retorno
        return res.status(409).json({
            error : error.message
        });
    }

    // Creacion del usuario:
    const user = new User(req.body);
    user.password = await hashPassword(password); // Mandamos el password a la funcion de hash
    user.handle = handle;

    // Guardar usuario:
    await user.save();

    // Retorno:
    res.json({
        status: "success",
        mensaje: "Usuario creado exitosamente."
    });
}

// Funcion para login:
export const login = async(req: Request, res: Response) => {

    // Validar email:
    const { email, password } = req.body
    const user = await User.findOne({email}); // Buscar usuario con el email dado

    if(!user){
        const error = new Error("El usuario no existe.");

        // Retorno
        return res.status(404).json({
            error : error.message
        });
    }

    // Validar password:
    const isPasswordCorrect = await checkPassword(password, user.password);

    if(!isPasswordCorrect){
        const error = new Error("Contraseña incorrecta.");

        // Retorno
        return res.status(401).json({
            error : error.message
        });
    }

    // Retorno:
    res.status(200).json({
        status: "success",
        mensaje: "Sesion iniciada."
    });
};
