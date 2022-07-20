const router = require('express').Router();
const JSON = require('express').json();
const databaseManager = require('../database');

router.use(JSON);

router.get('/home', (req, res) => {
    res.send("Pagina principal");
});

router.post('/home', (req, res) => {
    const id = req.body.id;
    const apellido = req.body.apellido;
    const nombre = req.body.nombre;
    const direccion = req.body.direccion;
    const ciudad = req.body.ciudad;

    if(id === undefined || apellido === undefined || nombre === undefined || direccion === undefined || ciudad === undefined) {
        console.error("ERROR: SOME UNDEFINED ELEMENT");
        res.send("ERROR: SOME UNDEFINED ELEMENT");
        return;
    }

    console.log(id + ", " + apellido + ", " + nombre + ", " + direccion + ", " + ciudad);
    
    databaseManager.insert(id, apellido, nombre, direccion, ciudad);

    //databaseManager.insert(5, 'Flores', 'Alicia', 'Villa', 'Puebla');


    res.send(req.body);
});


module.exports = router;