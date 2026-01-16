// Importaciones:
import { Router } from "express";
import { createAccount } from "./handlers";

// Variables:
const router = Router();

// Enrutamientos:
// Autenticacion y registro:
router.post('/auth/register', createAccount);

// Exportacion a otros archivos
export default router
