const router = require('express').Router();
const JSON = require('express').json();
const bcryptjs = require('bcryptjs');
const databaseManager = require('../lib/dataBase');

router.use(JSON);

router.post("/register", (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    
    bcryptjs.hash(password, 10)
        .then(hashPassword => {
            databaseManager.insertUser(name, hashPassword);
            res.send({user: name, password: hashPassword,});
        });
});

router.get('/register', (req, res) => {
    res.send("Pantalla de bienvenida");
}); 

module.exports = router;