const { Router } = require('express');
const router = Router();

const Movies = require('../src/sample');

router.get('/movies', (req, res) => {
    res.json(Movies);
});

router.post('/movies', (req, res) => {
    //De esta forma almacenamos cada propiedad en una constante, para poder tenerlas individualmente
    const { title, amounth, price } = req.body;
    //Aqui le decimos que si alguno de los datos no es introducido lance un aviso y si esta bien, muestre datos.
    if ( title && amounth && price ) {
        res.json('saved');
    } else {
        res.send('Datos erroneos');
    }
    res.send('Received');
});

module.exports = router;  
