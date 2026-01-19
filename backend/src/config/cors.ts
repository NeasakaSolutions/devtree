// Importaciones:
import { CorsOptions } from "cors";

// Variables de entorno:
const apiUrlFront = process.env.VITE_FRONTEND_URL;

export const corsConfig : CorsOptions= {
    origin: function(origin, callback){
        
        if(origin === apiUrlFront){

            // Permitir conexion:
            callback(null, true);
        } else {
            callback(new Error("Error de CORS"));
        };
    }
};
