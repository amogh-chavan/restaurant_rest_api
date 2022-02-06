import Joi from "joi";

export const restaurantFilterValidation = Joi.object({
    veg_only: Joi.boolean().default(false),
    cost: Joi.array().items(Joi.string().uppercase().trim().valid('HIGH', 'MEDIUM', 'LOW').default('LOW')),
    cusine_types: Joi.array(),
    isOpen: Joi.boolean().default(true),
})