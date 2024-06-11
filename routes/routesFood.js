import express from 'express';
import { createFood, deleteFood, getAllFoods,getFoodUser,getAddFood, getFood, updateFood } from '../controllers/FoodController.js';
const routerFood = express.Router();
//Definimos nuestras rutas a nuestras funciones
routerFood.get('/', getAllFoods);
routerFood.get('/:id', getFood);
//prueba
routerFood.get('/userDish/:id_usuario', getFoodUser);
routerFood.get('/addDishMode/:id_usuario', getAddFood);
routerFood.post('/', createFood);
routerFood.put('/:id', updateFood);
routerFood.delete('/:id', deleteFood);
export default routerFood;