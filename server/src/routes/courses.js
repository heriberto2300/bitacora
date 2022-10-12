const router = require('express').Router();
const JSON = require('express').json();
const databaseManager = require('../lib/dataBase');

router.use(JSON);

/*router.get('/courses', async (req, res) => {
   const courses = await databaseManager.getTableData("Materias");

   res.send(courses);
});*/

/*router.post('/courses', async (req, res) => {
    const name = req.body.name;
    const hours = req.body.hours;
    const des = req.body.des;
    const days = req.body.days;
    const teacher = req.body.teacher;

    //Datos de prueba
    const idUser = 1;

    const { insertId } = await databaseManager.insertCourse(name, hours, des, days, teacher);

    await databaseManager.insertUserCourse(idUser, insertId);

    //const headings = req.body.headings;
    const headings = [
        {
            name: 'tareas',
            valor: '25',
        },
        {
            name: 'exposicion',
            valor: '25',
        },
        {
            name: 'examenes',
            valor: '50',
        }
    ];
    headings.map(async (heading) => {
        let query = await databaseManager.insertHeading(heading.name, heading.valor);
        let idHeading = query.insertId;
        await databaseManager.insertCourseHeading(insertId, idHeading);
    });


    res.send("ok");
    
});*/

router.get('/courses', async (req, res) => {
    //const user = req.body.user;
    const query = `SELECT * FROM Materias`;
    const result = await databaseManager.query(query);
    res.json({result: result});
});

router.get('/courses/:courses', (req, res) => {
    res.send(req.params); 
});

module.exports = router;