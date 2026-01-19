/*
 Middleware para manejar errores de validación.
 Revisa los resultados de express-validator y, si existen errores,
 responde al cliente con un código 400 y no permite continuar la petición.
 Si no hay errores, pasa al siguiente middleware o handler.
*/

// Importaciones:
import type { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

// Funcion para el manejo de campos vacios:
export const handleInputErrors = (req : Request, res : Response, next: NextFunction) => {
    
    // Manejo de errores:
    let errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }

    // Pasa a siguiente funcion:
    next();
};
