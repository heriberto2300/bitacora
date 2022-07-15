const router = require('express').Router();
const JSON = require('express').json();

router.use(JSON);

router.get('/home', (req, res) => {
    res.send("Pagina principal");
});

router.post('/home', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});


module.exports = router;