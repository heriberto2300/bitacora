const router = require('express').Router();

router.get('/login', (req, res) => {
    res.send('PAntalla de login');
});


module.exports = router;