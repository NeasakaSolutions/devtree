/*
 Configuración principal del servidor Express.
 Este archivo se encarga de:
 - Cargar variables de entorno.
 - Conectar la base de datos.
 - Configurar middlewares globales.
 - Registrar las rutas de la API.
 - Exportar la aplicación lista para ser iniciada.
*/

// Importaciones:
import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./router";
import { connectDB } from "./config/db";
import { corsConfig } from "./config/cors";

// Conexion a la DB:
connectDB();

// App de express:
const app = express();

// Implementacion de cors:
app.use(cors(corsConfig));

// Leer datos de formularios:
app.use(express.json());

// Cargar rutas
app.use("/", router);

// Exportacion para usar en otros archivos
export default app
