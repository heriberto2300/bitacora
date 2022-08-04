const router = require('express').Router();
const JSON = require('express').json();
const databaseManager = require('../lib/dataBase');

router.use(JSON);

router.get('/', (req, res) => {
    res.send('DEBUGGING ZONE :)');
});

router.post('/addUser', (req, res) => {
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

router.post('/delete', (req, res) => {
    const id = req.body.id;
    const table = req.body.table;
    const idName = req.body.idName;

    if(id === undefined || table === undefined || idName === undefined) {
        res.send("SOME ELEMENT UNDEFINED");
        console.log("SOME ELEMENT UNDEFINED");
        return;
    }

    databaseManager.delete(id, table, idName);
    res.send("USER WITH ID " + id + " FROM TABLE " + table +" DELETED");
});

router.post('/add', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const schedule = req.body.schedule;
    const description = req.body.des;
    


    if(id === undefined || name === undefined || description === undefined) {
        res.send("ERROR: SOME UNDEFINED ELEMENT");
        console.log("ERROR: SOME UNDEFINED ELEMENT");
        return;
    }

    databaseManager.insertTask(id, name, description);
    res.send(req.body);
});

router.post('/testJSON', (req, res) => {
    const data = [
        {
            name: 'lala',
            token: '1',
        },
        {
            name: 'lalo',
            token: '2',
        },
        {
            name: 'lelo',
            token: '3',
        }
    ];

    res.send(req.body.headings);
});

module.exports = router;