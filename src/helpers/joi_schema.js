import Joi from "joi";

// joi validation 
export const email = Joi.string().pattern(new RegExp('gmail.com$')).required();
export const password = Joi.string().min(6).required()

export const title = Joi.string().alphanum().required()
export const price = Joi.number().required()
export const available = Joi.number().required()
export const category_code = Joi.string().uppercase().alphanum().required()
export const image = Joi.string().required()
export const bid = Joi.string().required()
export const bids = Joi.array().required()
export const filename = Joi.array().required()
export const stars = Joi.number().required()





