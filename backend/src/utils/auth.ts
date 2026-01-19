/*
 Utilidades de autenticación.
 Este módulo contiene funciones para:
 - Generar hashes seguros de contraseñas.
 - Comparar contraseñas ingresadas con los hashes almacenados.
 Se utiliza bcrypt para garantizar seguridad en el manejo de passwords.
*/

// Importaciones:
import bcrypt from "bcrypt";

// Funcion para el hash:
export const hashPassword = async (password : string) => {

    // Generar cadenas aleatorias para que el hash sea unico:
    const salt = await bcrypt.genSalt(10);

    // Devolver password con hash
    return await bcrypt.hash(password, salt);
};

// Funcion para validar el password:
export const checkPassword = async(enteredPassword: string, hash: string) => {
    
    // Comparar password:
    const result = await bcrypt.compare(enteredPassword, hash);

    // Retorno:
    return result;

};

