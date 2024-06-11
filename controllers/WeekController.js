//importamos el modelo de mi tabla usuarios
import WeekModel from "../models/WeekModel.js";
import FoodModel from "../models/FoodModel.js";
//** Métodos para el CRUD**/

//Mostrar todas las semanas
export const getAllWeeks = async (req, res) => {
    try {
        const week = await WeekModel.findAll();
        res.json(week);
    } catch (error) {
        res, json({ message: error.message });
    }
}
// Obtener los registros de la tabla semanal para el usuario dado
export const getWeekFood = async (req, res) => {
    try {
        const weeklyMenu = await WeekModel.findOne({
            where: { id_usuario: req.params.id_usuario }
        });

        if (!weeklyMenu) {
            return res.status(404).json({ message: "No se encontró el menú semanal para el usuario dado." });
        }

        // Extraer los IDs de los platos de los campos l1, l2, m1, m2, x1, x2, j1, j2, v1, v2, s1, s2, d1, d2
        const userDish = [
            weeklyMenu.l1, weeklyMenu.l2, weeklyMenu.m1, weeklyMenu.m2, 
            weeklyMenu.x1, weeklyMenu.x2, weeklyMenu.j1, weeklyMenu.j2, 
            weeklyMenu.v1, weeklyMenu.v2, weeklyMenu.s1, weeklyMenu.s2, 
            weeklyMenu.d1, weeklyMenu.d2
        ];

        // Filtrar para remover valores nulos o indefinidos
        const validUserDish = userDish.filter(id => id !== null && id !== undefined);

        // Buscar los platos en FoodModel cuyos IDs estén en validUserDish
        const food = await FoodModel.findAll({
            where: {
                id: validUserDish
            }
        });

        // Crear un mapa para obtener los detalles del plato por ID
        const foodMap = {};
        food.forEach(dish => {
            foodMap[dish.id] = dish;
        });

        // Construir la respuesta con los detalles del plato correspondientes a cada campo
        const response = {
            l1: foodMap[weeklyMenu.l1] || null,
            l2: foodMap[weeklyMenu.l2] || null,
            m1: foodMap[weeklyMenu.m1] || null,
            m2: foodMap[weeklyMenu.m2] || null,
            x1: foodMap[weeklyMenu.x1] || null,
            x2: foodMap[weeklyMenu.x2] || null,
            j1: foodMap[weeklyMenu.j1] || null,
            j2: foodMap[weeklyMenu.j2] || null,
            v1: foodMap[weeklyMenu.v1] || null,
            v2: foodMap[weeklyMenu.v2] || null,
            s1: foodMap[weeklyMenu.s1] || null,
            s2: foodMap[weeklyMenu.s2] || null,
            d1: foodMap[weeklyMenu.d1] || null,
            d2: foodMap[weeklyMenu.d2] || null
        };

        // Enviar la respuesta
        res.json(response);
    } catch (error) {
        res.json({ message: error.message });
    }
};
//Mostrar solo una semana
export const getWeek = async (req, res) => {
    try {
        const week = await WeekModel.findAll({
            where: { id_usuario: req.params.id_usuario }
        })
        res.json(week[0]);
    } catch (error) {
        res, json({ message: error.message });
    }
}

//Crear una semana
export const createWeek = async (req, res) => {
    try {
        await WeekModel.create(req.body)
        res.json({
            "message": "Semana creada correctamente!"
        })
    } catch (error) {
        res, json({ message: error.message });
    }
}
//Actualizar un registro
export const updateWeek = async (req, res) => {
    try {
        await WeekModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message": "Semana actualizada correctamente!"
        })
    } catch (error) {
        res, json({ message: error.message });
    }
}
//Eliminar un registro
export const deleteWeek = async (req, res) => {
    try {
        await WeekModel.destroy({
            where: { id_usuario: req.params.id_usuario }
        })
        res.json({
            "message": "Semana eliminada correctamente!"
        })
    } catch (error) {
        res, json({ message: error.message });
    }
}