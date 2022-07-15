const router = require('express').Router();

router.get('/courses', (req, res) => {
    res.send("Pagina de materias");
});

module.exports = router;