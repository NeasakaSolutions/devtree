// Importaciones:
import express from "express";
import "dotenv/config";
import router from "./router";
import { connectDB } from "./config/db";

// Conexion a la DB:
connectDB();

// App de express:
const app = express();

// Leer datos de formularios:
app.use(express.json());

// Cargar rutas
app.use("/", router);

// Exportacion para usar en otros archivos
export default app
