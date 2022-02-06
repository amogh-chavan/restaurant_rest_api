import Joi from "joi";
import { responseErrors } from "../../../constants/message.constant";

export const createRestaurantValidation = Joi.object({
    restaurant_id: Joi.number(),
    restaurant_name: Joi.string().required().messages({
        'any.required': responseErrors.RES_NAME_REQUIRED,
        'string.empty': responseErrors.RES_NAME_REQUIRED,
        'string.base': responseErrors.RES_NAME_REQUIRED,
    }),
    address: Joi.string(),
    veg_only: Joi.boolean(),
    cost: Joi.string(),
    cusine_types: Joi.string(),
    isOpen: Joi.boolean(),
})