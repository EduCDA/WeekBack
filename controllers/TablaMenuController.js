//importamos el modelo de mi tabla usuarios
import menuUser from "../models/TablaMenuModel.js";
//** Métodos para el CRUD**/

//Mostrar todos los platos de todos los usuarios
export const getAllMenu = async (req, res) => {
    try {
        const menuUsers = await menuUser.findAll();
        res.json(menuUsers);
    } catch (error) {
        res, json({ message: error.message });
    }
}
//Mostrar solo los platos de un usuario
export const getMenuUser = async (req, res) => {
    try {
        const dishUser = await menuUser.findAll({
            where: { id_usuario: req.params.id_usuario }
        })
        res.json(dishUser);
    } catch (error) {
        res, json({ message: error.message });
    }
}
//Añadir un plato al menu
export const addDish = async (req, res) => {
    try {
        await menuUser.create(req.body)
        res.json({
            "message": "¡Plato del usuario añadido!"
        })
    } catch (error) {
        res, json({ message: error.message });
    }
}
//Actualizar un plato del menu
export const updateFood = async (req, res) => {
    try {
        await menuUser.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message": "¡Dato actualizado!"
        })
    } catch (error) {
        res, json({ message: error.message });
    }
}
//Eliminar un plato del menu
export const deleteFood = async (req, res) => {
    try {
        await menuUser.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message": "¡Plato del usuario eliminado correctamente!"
        })
    } catch (error) {
        res, json({ message: error.message });
    }
}
