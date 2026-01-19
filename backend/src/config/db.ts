/*
 Configuración de la conexión a MongoDB.
 Este módulo se encarga de conectarse a la base de datos usando Mongoose,
 mostrar mensajes de estado en consola y detener la app si ocurre un error.
*/

// Importaciones:
import colors from "colors"; // Libreria para configurar los colores en la consola.
import mongoose from "mongoose";

// Función asíncrona para iniciar conexión a MongoDB
export const connectDB = async() => {
    try{
        // Se conecta usando la URI almacenada en variables de entorno
        const { connection } = await mongoose.connect(process.env.MONGO_URI);
        // Obtiene host y puerto de la conexión para mostrar en consolas
        const url = `${connection.host}:${connection.port}`;
        // Confirmacion de la conexion:
        console.log(colors.cyan.bold(`Conectado correctamente a MongoDB en: ${url}`));
        
    } catch(error){

        // En caso de fallar la conexion mostrar el error:
        console.log(colors.bgRed.white.bold(error.message));
        // Terminar ejecucion del programa:
        process.exit(1);
    };
};
