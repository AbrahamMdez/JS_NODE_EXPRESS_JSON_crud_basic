const express = require('express');
const app = express();
const morgan = require("morgan");

//Settings
//Aqui le decimos que si hay un puerto en la nube que lo coja y sino hay, que se conecte a nuestro puerto 3000.
app.set('port', process.env.PORT || 3000);

//Routes
//Aqui requerimos el archivo donde estan las rutas, que esta dentro de carpeta routes y archivo films.js
app.use(require('../routes/index'));
app.use(require('../routes/movies'));

//Middelwares
app.use(morgan('dev'));
//Este es un metodo que nos permite recibir y que el programa entienda el formato JSON.
app.use(express.json());
//Con esto decimos que los datos que recibamos solo sean datos Json, evitar imagenes o o otro tipo de datos
//que sean innecesarios y pesados
app.use(express.urlencoded({extended: false}));

//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});