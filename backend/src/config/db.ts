// Importaciones:
import colors from "colors";
import mongoose from "mongoose";

// Exportacion en otros archivos:
export const connectDB = async() => {
    try{
        const { connection } = await mongoose.connect(process.env.MONGO_URI);
        const url = `${connection.host}:${connection.port}`;

        console.log(colors.cyan.bold(`Conectado correctamente a MongoDB en: ${url}`));
    } catch(error){
        console.log(colors.bgRed.white.bold(error.message));

        // Terminar ejecucion del programa:
        process.exit(1);
    };
};
