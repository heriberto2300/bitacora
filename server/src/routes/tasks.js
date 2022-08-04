const router = require('express').Router();
const JSON = require('express').json();
const databaseManager = require('../lib/dataBase');

router.use(JSON);

router.post('/tasks', async (req, res) => {
    const idHeading = req.body.idHeading;
    const name = req.body.name;
    const des = req.body.des;
    const comments = req.body.comm;

    const { insertId } = await databaseManager.insertTask(name, des, comments);

    //variables de prueba
    const idUser = 1;

    await databaseManager.insertHeadingTask(idHeading, insertId);
    await databaseManager.insertUserTask(idUser, insertId);

    res.send("ok");
});

module.exports = router;