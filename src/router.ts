// Importaciones:
import { Router } from "express";
import { body } from  "express-validator";
import { createAccount, login } from "./handlers";
import { handleInputErrors } from "./middleware/validation";

// Variables:
const router = Router();

// Enrutamientos:
// Registro:
router.post('/auth/register', 

    // Validaciones:
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
    // Manejo de errores:
    handleInputErrors,
    // Funcion para crear cuenta:
    createAccount
);

// Login:
router.post("/auth/login",
    
    // Validaciones:
    body("email")
        .isEmail()
        .withMessage("Correo no valido."),
    body("password")
        .notEmpty()
        .withMessage("La contraseña es obligatoria."),
    // Manejo de errores:
    handleInputErrors,
    // Funcion:
    login
);

// Exportacion a otros archivos
export default router
