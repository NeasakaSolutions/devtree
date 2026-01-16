// Importaciones:
import express from "express";

// App de express:
const app = express();

// Enrutamientos:
app.get('/', (req, res) => {
    // Retorno:
    res.send("Hola mundo en Express / TypeScript");
});

// Exportacion para usar en otros archivos
export default app
