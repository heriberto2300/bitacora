const router = require('express').Router();
const JSON = require('express').json();
const bcryptjs = require('bcryptjs');
const databaseManager = require('../lib/dataBase');

router.use(JSON);

router.post('/login', async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const table = req.body.table;
    
    const user = [...await databaseManager.searchByName(name, table)];
    const passUser = user[0].Password;

    /*if(name === undefined || password === undefined || table === undefined || passUser === undefined) {
        res.send("SOME UNDEFINED ELEMENT");
        return;
    }*/
    
    if(user.length !== 0 && (await bcryptjs.compare(password, passUser))) {
        res.send("Se ha encontrado al usuario");
    }else{
        res.send("No se ha encontrado al usuario");
    }
    //res.send(user);
});



module.exports = router;