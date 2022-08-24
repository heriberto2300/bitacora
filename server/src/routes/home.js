const router = require('express').Router();
const JSON = require('express').json();
const databaseManager = require('../lib/dataBase');

router.use(JSON);

router.post('/home', async (req, res) => {
    const queryIdUser = `SELECT * FROM Usuarios WHERE Nombre='${req.body.user}'`; 
    const userData = await databaseManager.query(queryIdUser);
    const { ID_Usuario } = userData[0];
    
    const query = `SELECT * FROM Usuario_Tarea WHERE ID_Usuario=${ID_Usuario}`;
    const tableData = await databaseManager.query(query);

    let taskList = [];

    for (const data of tableData) {
        const query = `SELECT * FROM Tareas WHERE ID_Tarea='${data.ID_Tarea}'`;
        const task = await databaseManager.query(query);
        taskList.push(task[0]);
    }  

    tableData.length === 0 ? res.json({empty: true, percentage: 0, tasks: taskList}) : 
        res.json({empty: false, percentage: getPercentage(taskList), tasks: taskList});
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