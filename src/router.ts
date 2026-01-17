// Importaciones:
import { Router } from "express";
import { body } from  "express-validator";
import { createAccount } from "./handlers";

// Variables:
const router = Router();

// Enrutamientos:
// Autenticacion y registro:
router.post('/auth/register', 
    body("handle")
        .notEmpty()
        .withMessage("El handle no puede estar vacio."),
    body("name")
        .notEmpty()
        .withMessage("El nombre no puede estar vacio."),
    body("email")
        .isEmail()
        .withMessage("Correo no valido."),
    body("password")
        .isLength({min: 8})
        .withMessage("La contraseña debe de ser minimo de 8 caracteres."),
    createAccount);

// Exportacion a otros archivos
export default router
