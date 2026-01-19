/*
 Configuración de CORS.
 Permite definir qué dominio (frontend) puede comunicarse con el backend.
 Esto evita que otros sitios web hagan peticiones no autorizadas a la API.
*/

// Importaciones:
import { CorsOptions } from "cors";

// Variables de entorno:
const apiUrlFront = process.env.VITE_FRONTEND_URL;

// Configuración principal de CORS
export const corsConfig : CorsOptions = {
    // La función origin valida desde qué dominio llega la petició
    origin: function(origin, callback){
        
        if(origin === apiUrlFront){

            // Permitir conexion:
            callback(null, true);
        } else {
            callback(new Error("Error de CORS"));
        };
    }
};
