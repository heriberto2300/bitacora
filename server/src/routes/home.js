const router = require('express').Router();
const JSON = require('express').json();
const databaseManager = require('../lib/dataBase');

router.use(JSON);

router.get('/home', async (req, res) => {
    const toDos = await databaseManager.getTableData("Tareas");
    const status = getPercentage(toDos);
    res.json({percentage: status, toDos});
});

const getPercentage = (toDos) => {
    let completes = 0;
    const totalTasks = toDos.length;

    toDos.map(toDo => {
        if(toDo.Status === 1) completes++;
    });

    return (completes * 100) / totalTasks;
}


module.exports = router;