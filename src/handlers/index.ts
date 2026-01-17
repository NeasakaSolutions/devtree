// Importaciones:
import type { Request, Response } from "express";
import User from "../models/User";
import { hashPassword } from "../utils/auth";

// Funcion para crear usuario:
export const createAccount = async(req: Request, res: Response) => { 

    // Validaciones:
    const { email, password } = req.body
    const userExists = await User.findOne({email}); // Buscar usuario con el email dado

    if(userExists){
        const error = new Error("El usuario ya esta registrado.");

        // Retorno
        return res.status(409).json({
            error : error.message
        });
    }

    // Creacion del usuario:
    const user = new User(req.body);
    user.password = await hashPassword(password); // Mandamos el password a la funcion de hash

    // Guardar usuario:
    await user.save();

    // Retorno:
    res.json({
        status: "success",
        mensaje: "Usuario creado exitosamente."
    });
}

