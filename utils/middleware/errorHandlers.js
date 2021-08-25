const boom = require('@hapi/boom');
const { config } = require('../../config');

function witchErrorStack(error, stack) {
  if (config.dev) {
    return {...error, stack};
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

function wrapErrors(err, req, res, next) {// eslint-disable-line
  if(!err.isBoom){
    next(boom.badImplementation(err));
  }
  next(err);
}

//Convierte la respuesta en JSON
function errorHandler(err, req, res, next) { // eslint-disable-line
  const { output: { statusCode, payload }} = err;
  res.status(statusCode);
  res.json(witchErrorStack(payload, err.stack));
}

module.exports = {
    logErrors,
    wrapErrors,
    errorHandler
};