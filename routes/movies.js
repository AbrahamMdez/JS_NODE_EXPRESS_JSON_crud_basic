const { Router } = require('express');
const router = Router();

const Movies = require('../src/sample');

router.get('/movies', (req, res) => {
    res.json(Movies);
});

module.exports = router;