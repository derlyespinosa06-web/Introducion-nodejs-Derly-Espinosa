import express from 'express';
import {configDotenv} from "dotenv";
import cors from "cors";

// Const bodyParser = require(`body-Parser`);//importacion commonjs
import bodyParser from "body-parser"; //Importacion ES "module"
configDotenv()

const app = express();  
const port = process.env.PORT || 3000; // Cambiado a 3030 por tu requerimiento previo ya que antes estada en 3000

// Middlewares para procesar datos JSON y formularios
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const Saludo = "Hola, estamos aprendiendo express con la ficha 3407184";

app.get("/", (req, res) => {
    res.send(Saludo);
});

app.get("/productos", (req, res) => {
    const orden = req.query.orden || "Sin orden"
    const pagina = req.query.pagina || "Sin pagina"
    res.send(` <h1> Listado de Productos en orden ${orden} en la pagina ${pagina} </h1>
        <ul>
            <li>Televisor</li>
            <li>Celular</li>
            <li>Impresora</li>
        </ul>
    `);
});

app.get("/productos/:nombre/:id/:precio", (req, res) => {

    const nombre = req.params.nombre;
    const id = req.params.id;
    const precio = req.params.precio;

    res.send(`
    <h1>Información del Producto</h1>

    <ol>
        <li>Producto: ${nombre}</li>
        <li>ID: ${id}</li>
        <li>Precio: ${precio}</li>
    </ol>

    `);

});

app.get("/saludo/:nombre", (req, res) => {

    res.send(`Hola ${req.params.nombre}, Bienvenido`);

});

app.get("/categoria/:categoria/:id", (req, res) => {

    res.send(`
    <h1>Categoría</h1>

    <ol>
        <li>Categoría: ${req.params.categoria}</li>
        <li>ID: ${req.params.id}</li>
    </ol>

    `);

});

app.get("/", (_, res) => { 
res.send("Hola , estamos aprendiendo express con la ficha 3407184"); 
});  
app.listen(port, () => { 
console.log( `Servidor en funcionamiento en el puerto ${port}  `); 
});

/*
http://localhost:3030
*/