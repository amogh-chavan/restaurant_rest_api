import Joi from "joi";
import { responseErrors } from "../../../constants/message.constant";

export const createRestaurantValidation = Joi.object({
    restaurant_name: Joi.string().required().messages({
        'any.required': responseErrors.RES_NAME_REQUIRED,
        'string.empty': responseErrors.RES_NAME_REQUIRED,
        'string.base': responseErrors.RES_NAME_REQUIRED,
    }),
    address: Joi.string().required(),
    veg_only: Joi.boolean().required(),
    cost: Joi.string().required(),
    cusine_types: Joi.string().required(),
    isOpen: Joi.boolean().required(),
})