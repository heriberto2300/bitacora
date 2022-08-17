const router = require('express').Router();
const JSON = require('express').json();
const bcryptjs = require('bcryptjs');
const databaseManager = require('../lib/dataBase');

router.use(JSON);

router.post('/login', async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const table = 'Usuarios';
    
    const user = [...await databaseManager.searchByName(name, table)];
    
    //mejorar validacion, ahorita es provisional
    
    if(user.length !== 0) {
        const passUser = user[0].Password;
        if(await bcryptjs.compare(password, passUser)) {
            res.send(true);
        } else {
            res.send(false);
        }
    }else{
        res.send(false);
    }
});

module.exports = router;