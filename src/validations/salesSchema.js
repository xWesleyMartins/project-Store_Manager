const joi = require('joi');

const item = joi.object({
  productId: joi.number().required().messages({
    'any.required': '"productId" is required',
  }),

  quantity: joi.number().min(1).required().messages({
    'any.required': '"quantity" is required',
    'number.min': '"quantity" must be greater than or equal to 1',
  }),
});

const salesSchema = joi.array().items(item);

module.exports = salesSchema;