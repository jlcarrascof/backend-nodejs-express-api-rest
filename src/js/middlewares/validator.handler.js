const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    // Adding abortEarly: false so Joi returns all errors at once
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      // Important to use return or an else block to avoid calling next() twice
      next(boom.badRequest(error));
    } else {
      next();
    }
  }
}

module.exports = validatorHandler;
