const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    // Se añade abortEarly: false para que Joi envíe todos los errores a la vez
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      // Importante usar return o un bloque else para que no llame a next() dos veces
      next(boom.badRequest(error));
    } else {
      next();
    }
  }
}

module.exports = validatorHandler;
