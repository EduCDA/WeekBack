import express from 'express';
import {getAllMenu,getMenuUser,addDish,updateFood,deleteFood} from '../controllers/TablaMenuController.js'
const routerMenu = express.Router();
//Definimos nuestras rutas a nuestras funciones
routerMenu.get('/', getAllMenu);
routerMenu.get('/:id_usuario', getMenuUser);
routerMenu.post('/', addDish);
routerMenu.put('/:id', updateFood);
routerMenu.delete('/:id', deleteFood);
export default routerMenu;