const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const listaaprendices = [{
        "nombre":"Juan",
        "edad": 17,
        "correo": "henao@gmail.com",
        "imgperfil":"url"
    },
    {
        "nombre":"Maday",
        "edad": 19,
        "correo": "maday@gmail.com",
        "imgperfil":"url"
    },
    {
        "nombre":"Samuel",
        "edad": 16,
        "correo": "Bravobernal@gmail.com",
        "imgperfil":"url"
    }]

app.get("/", (_,  res) => {
    res.send('Hola, estamos aprendiendo expreess con la ficha 3407184')
});
app.get("/aprendices", (req, res) =>{
    res.json(listaaprendices)
})
app.get('/aprendices/:nombre', (req, res) => {
  const nombreBuscado = req.params.nombre.toLowerCase();

  const aprendizencontrado = listaaprendices.find(
    (aprendiz) => aprendiz.nombre.toLowerCase() === nombreBuscado
  );

  res.json(aprendizencontrado);
});
app.post('/aprendicescreado', (req, res) => {
    const { nombre, edad, correo, imgperfil } = req.body;
    
    if (typeof nombre !== 'string' || nombre.trim().length < 3) {
        return res.status(400).json({ "error": "mínimo necesita 3 letras en el nombre " });
    }
    
    if (typeof correo !== 'string' || !correo.includes('@')) {
        return res.status(400).json({ "error": "El correo necesita @" });
    }
    
    const datosAprendiz = { nombre, edad, correo, imgperfil };
    listaaprendices.push(datosAprendiz);
    
    return res.status(201).json({ "mensaje": "Aprendiz creado", "Datos": datosAprendiz });
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto: http://localhost:${port}`)
});