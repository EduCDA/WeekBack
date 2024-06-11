import express from 'express';
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/UserController.js';
const router = express.Router();
//Definimos nuestras rutas a nuestras funciones
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
export default router;