const router = require('express').Router();
const JSON = require('express').json();
const databaseManager = require('../lib/dataBase');

router.use(JSON);

router.get('/home', (req, res) => {
    res.send("Pagina principal");
});

router.post('/home', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const password = req.body.password;

    if(id === undefined || name === undefined || password === undefined) {
        console.error("ERROR: SOME UNDEFINED ELEMENT");
        res.send("ERROR: SOME UNDEFINED ELEMENT");
        return;
    }

    console.log(id + ", " + name + ", " + password);
    
    databaseManager.insertUser(id, name, password);

    //databaseManager.insert(5, 'Flores', 'Alicia', 'Villa', 'Puebla');


    res.send(req.body);
});


module.exports = router;