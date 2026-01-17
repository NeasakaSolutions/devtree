// Importaciones:
import bcrypt from "bcrypt";

// Funcion para el hash:
export const hashPassword = async (password : string) => {

    // Generar cadenas aleatorias para que el hash sea unico:
    const salt = await bcrypt.genSalt(10);

    // Devolver password con hash
    return await bcrypt.hash(password, salt);
};

