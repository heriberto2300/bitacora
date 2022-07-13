const express = require('express');
const router = express.Router();

router.get('/ruta1', (req, res) => {
    res.send("ruta 1 accedida");
});

router.get('/ruta2', (req, res) => {
    res.send("ruta 2 accedida");
});

router.get('/ruta3', (req, res) => {
    res.send("ruta 3 ingresada");
});

module.exports = router;