import Joi from "joi";

export const updateRestaurantValidation = Joi.object({
    restaurant_name: Joi.string(),
    address: Joi.string(),
    veg_only: Joi.boolean(),
    cost: Joi.string().uppercase().trim().valid('HIGH', 'MEDIUM', 'LOW'),
    cusine_types: Joi.array(),
    isOpen: Joi.boolean()
})