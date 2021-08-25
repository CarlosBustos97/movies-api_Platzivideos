const express = require('express');
const app = express();
const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');

//body parser
app.use(express.json());

//Ruta
moviesApi(app);

//middleware de errores --> deben ir al final de las rutas
app.use(errorHandler);
app.use(logErrors);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
