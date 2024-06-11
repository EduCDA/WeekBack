//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";
//Definimos la tabla usuarios
const UserModel = db.define('usuarios', {
    nombre: { type: DataTypes.STRING },
    apellidos: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    contraseña: { type: DataTypes.STRING },
    permisos: { type: DataTypes.NUMBER },
})
export default UserModel