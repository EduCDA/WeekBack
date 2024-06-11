//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";
//Definimos la tabla menu_usuario
const TablaMenuModel = db.define('menuusuarios', {
    id_usuario: { type: DataTypes.NUMBER },
    id_plato: { type: DataTypes.NUMBER },
})
export default TablaMenuModel