import { Request, Response, NextFunction } from 'express';
import boom from '@hapi/boom';
import { Schema } from 'joi';

export function validatorHandler(schema: Schema, property: 'body' | 'query' | 'params') {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error.message));
    } else {
      next();
    }
  };
}
