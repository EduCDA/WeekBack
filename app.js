import express from "express";
import cors from 'cors';
//importamos la conexion a la DB
import db from "./database/db.js";
//importamos nuestro enrutador
import userRoutes from "./routes/routes.js";
import foodRoutes from "./routes/routesFood.js";
import menuRouter from "./routes/routersMenu.js";
import weekRouter from "./routes/routesWeek.js";
const app = express();
app.use(cors());
app.use(express.json());
//Se encuentran las dos rutas de mis tablas
app.use('/users', userRoutes);
app.use('/foods', foodRoutes);
app.use('/userMenu', menuRouter);
app.use('/week', weekRouter);

try {
    db.authenticate();
    console.log('Conexion exitosa a la DB');
} catch (error) {
    console.log(`El error de la conexión es : ${error}`);
}
app.get('/', (req, res)=>{
    
    res.send('Hola Mundo');
    
 })

app.listen(8000, ()=>{
    console.log('Server Up running in http://localhost:8000/')
})
