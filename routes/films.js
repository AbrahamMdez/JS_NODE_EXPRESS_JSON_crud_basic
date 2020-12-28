//Vamos a llamar a express y el metodo Router, para poder crear nuevas rutas
const { Router } = require('express');
//Aqui la funcion de router y la almacenamos en una constante para poder llamarla despues
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Abraham",
        "surname": "Menendez"
    };
    res.json(data);
});

module.exports = router;