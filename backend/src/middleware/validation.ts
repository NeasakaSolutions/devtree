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
