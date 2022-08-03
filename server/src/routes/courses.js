const router = require('express').Router();
const JSON = require('express').json();
const databaseManager = require('../lib/dataBase');

router.use(JSON);

router.get('/courses', async (req, res) => {
   const courses = await databaseManager.getTableData("Materias");

   res.send(courses);
});

router.post('/courses', (req, res) => {
    const name = req.body.name;
    const hours = req.body.hours;
    const des = req.body.des;
    const days = req.body.days;
    const teacher = req.body.teacher;

    databaseManager.insertCourse(name, hours, des, days, teacher);

    res.send(req.body);
});

module.exports = router;