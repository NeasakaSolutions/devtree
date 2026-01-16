// Importaciones:
import express from "express";

// Variables:
const port = process.env.PORT || 4000;

// App de express:
const app = express();

// Enrutamientos:
app.get('/', (req, res) => {
    // Retorno:
    res.send("Hola mundo en Express / TypeScript");
});

// Crear servidor:
app.listen(port, () => {
    console.log("Servidor funcionando en el puerto: " , port);
});
