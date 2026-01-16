// Importaciones:
import User from "../models/User";

// Funcion para crear usuario:
export const createAccount = async(req, res) => { 

    // Creacion del usuario:
    const user = new User(req.body);

    // Guardar usuario:
    await user.save();

    // Retorno:
    res.json({
        status: "success",
        mensaje: "Usuario creado exitosamente."
    });
}

