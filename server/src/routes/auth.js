const router = require('express').Router();

router.get("/auth", (req, res) => {
    res.send("Pagina de autenticacion");
});

module.exports = router;