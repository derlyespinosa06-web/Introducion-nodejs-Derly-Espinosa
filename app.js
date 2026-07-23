const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hola, estamos aprendiendo Express con la ficha 3407180");
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto: ${port}`);
});