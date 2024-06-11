//importamos el modelo de mi tabla platos
import FoodModel from "../models/FoodModel.js";
import MenuUser from "../models/TablaMenuModel.js";


//** Métodos para el CRUD **/

//Mostrar todos los usuarios
export const getAllFoods = async (req, res) => {
    try {
        const foods = await FoodModel.findAll();
        res.json(foods);
    } catch (error) {
        res, json({ message: error.message });
    }
}
//Mostrar los platos del usuario logueado 
export const getFoodUser = async (req, res) => {
    try {
        const dishUser = await MenuUser.findAll({
            where: { id_usuario: req.params.id_usuario }
        })
        const userDish = dishUser.map(dish => dish.id_plato);
        const food = await FoodModel.findAll({
            where: { id: userDish}
        })
        res.json(food);
    } catch (error) {
        res, json({ message: error.message });
    }
}
//Mostrar los platos que no tiene el usuario 

export const getAddFood = async (req, res) => {
    try {
        //Obtener los platos que el usuario tiene
        const dishUser = await MenuUser.findAll({
            where: { id_usuario: req.params.id_usuario }
        })
        const userDish = dishUser.map(dish => dish.id_plato);
        //Obtener todos los platos
        const allFood = await FoodModel.findAll();

        //Filtrar los platos que el usuario no tiene
        const foodNotOwned = allFood.filter(food => !userDish.includes(food.id));
        res.json(foodNotOwned);
    } catch (error) {
        res, json({ message: error.message });
    }
}

//Mostrar solo un plato
export const getFood = async (req, res) => {
    try {
        const food = await FoodModel.findAll({
            where: { id: req.params.id }
        })
        res.json(food[0]);
    } catch (error) {
        res, json({ message: error.message });
    }
}
//Crear un plato
export const createFood = async (req, res) => {
    try {
        await FoodModel.create(req.body)
        res.json({
            "message": "¡Plato creado correctamente!"
        })
    } catch (error) {
        res, json({ message: error.message });
    }
}
//Actualizar un plato
export const updateFood = async (req, res) => {
    try {
        await FoodModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message": "¡Plato actualizado correctamente!"
        })
    } catch (error) {
        res, json({ message: error.message });
    }
}
//Eliminar un plato
export const deleteFood = async (req, res) => {
    try {
        await FoodModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message": "¡Plato eliminado correctamente!"
        })
    } catch (error) {
        res, json({ message: error.message });
    }
}
