// Importaciones:
import { Router } from "express";

// Variables:
const router = Router();

// Enrutamientos:
// Autenticacion y registro:
router.post('/auth/register', (req, res) => { 
    
    // Retorno:
    console.log(req.body);
});

// Exportacion a otros archivos
export default router
