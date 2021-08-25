const { config } = require('../../config');

function witchErrorStack(error, stack) {
  if (config.dev) {
    return error, stack;
  }
  return error;
}

function logErrors(err, req, res, next) {// eslint-disable-line
  console.log(err);
  //en errorHandlers.js
  console.log(process.env.NODE_ENV === 'production') //false
  console.log(process.env.NODE_ENV.trim() === 'production') //true
  next(err);
}

//Convierte la respuesta en JSON
function errorHandler(err, req, res, next) { // eslint-disable-line
  res.status(err.status || 500);
  res.json(witchErrorStack(err.message, err.stack));
}

module.exports = {
    logErrors,
    errorHandler
};