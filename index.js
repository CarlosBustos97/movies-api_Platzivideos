const express = require('express');
const app = express();
const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

//body parser
app.use(express.json());

//Ruta
moviesApi(app);

// captura error 404
app.use(notFoundHandler);

//middleware de errores --> deben ir al final de las rutas
app.use(errorHandler);
app.use(wrapErrors);
app.use(logErrors);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
