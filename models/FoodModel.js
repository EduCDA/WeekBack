//importamos la conexion a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";
//Definimos la tabla platos
const FoodModel = db.define('platos', {
    nombrePlato: { type: DataTypes.STRING },
    ingredientes: { type: DataTypes.STRING },
    enlace: { type: DataTypes.STRING },
    imagen: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.STRING },
    detallada: { type: DataTypes.STRING },
})
export default FoodModel