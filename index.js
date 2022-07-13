const express = require('express');
const app = express();
const rutas = require('./rutas');


app.use('/rutas', rutas);

app.get('/', (req, res) => {
    res.send("Hola Mundo");
});



app.listen(8000, () => {
    console.log("Listening on port 8000");
});

