const router = require('express').Router();

router.get('/profile', (req, res) => {
    res.send("Pagina de perfil");
});

module.exports = router;