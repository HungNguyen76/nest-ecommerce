import * as Joi from 'joi';

export const databaseSchema = Joi.object({
  PG_HOST: Joi.string().required(),
  PG_PORT: Joi.number().required(),
  PG_DB_NAME: Joi.string().required(),
  PG_USERNAME: Joi.string().required(),
  PG_PASSWORD: Joi.string().required(),
});
