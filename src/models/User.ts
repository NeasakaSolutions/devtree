// Importaciones:
import mongoose, { Schema } from "mongoose";

// Interfaz de usuario:
export interface IUser {
    name: string
    email: string
    password: string
};

// Esquema que describe los campos de un usuario:
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true // No repetir el email
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

// Creacion del modelo:
const User = mongoose.model<IUser>("User", userSchema);

// Exporta el modelo de usuarios:
export default User;
