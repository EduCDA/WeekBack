//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";
//Definimos la tablasemanal
const WeekModel = db.define('tablasemanals', {
    l1: { type: DataTypes.NUMBER },
    l2: { type: DataTypes.NUMBER },
    m1: { type: DataTypes.NUMBER },
    m2: { type: DataTypes.NUMBER },
    x1: { type: DataTypes.NUMBER },
    x2: { type: DataTypes.NUMBER },
    j1: { type: DataTypes.NUMBER },
    j2: { type: DataTypes.NUMBER },
    v1: { type: DataTypes.NUMBER },
    v2: { type: DataTypes.NUMBER },
    s1: { type: DataTypes.NUMBER },
    s2: { type: DataTypes.NUMBER },
    d1: { type: DataTypes.NUMBER },
    d2: { type: DataTypes.NUMBER },
    id_usuario: { type: DataTypes.NUMBER },

})
export default WeekModel