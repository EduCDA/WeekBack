import express from 'express';
import {getAllWeeks, getWeek,getWeekFood, createWeek, updateWeek, deleteWeek} from '../controllers/WeekController.js';
const router = express.Router();
//Definimos nuestras rutas a nuestras funciones
router.get('/', getAllWeeks);
router.get('/:id_usuario', getWeek);
router.get('/convert/:id_usuario',getWeekFood);
router.post('/', createWeek);
router.put('/:id', updateWeek);
router.delete('/:id_usuario', deleteWeek);
export default router;