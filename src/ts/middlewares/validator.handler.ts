import { Request, Response, NextFunction } from 'express';
import boom from '@hapi/boom';
import { Schema } from 'joi';

export function validatorHandler(schema: Schema, property: 'body' | 'query' | 'params') {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[property];
    // Adding abortEarly: false so Joi returns all errors at once
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      // Important to use return or an else block to avoid calling next() twice
      next(boom.badRequest(error.message));
    } else {
      next();
    }
  };
}
