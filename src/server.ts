// Importaciones:
import express from "express";
import router from "./router";

// App de express:
const app = express();

// Cargar rutas
app.use("/", router);

// Exportacion para usar en otros archivos
export default app
