const router = require('express').Router();
const JSON = require('express').json();
const databaseManager = require('../lib/dataBase');

router.use(JSON);

router.post('/tasks', async (req, res) => {
    const idUser = '2';
    const name = req.body.name;
    const des = req.body.des;
    const comments = req.body.comm;
    const date = req.body.date;

    console.log(req);

    const { insertId } = await databaseManager.insertTask(name, des, comments, date);

    await databaseManager.insertUserTask(idUser, insertId);

    res.send("ok");
});

module.exports = router;