import Joi from "joi";
import { CostType } from "../../../enums/cost-type.enum";
import { responseErrors } from "../../../constants/message.constant";

export const createRestaurantValidation = Joi.object({
    restaurant_name: Joi.string().required().messages({
        'any.required': responseErrors.RES_NAME_REQUIRED,
        'string.empty': responseErrors.RES_NAME_REQUIRED,
        'string.base': responseErrors.RES_NAME_REQUIRED,
    }),
    address: Joi.string().required().messages({
        'any.required': responseErrors.RES_ADD_REQUIRED,
        'string.empty': responseErrors.RES_ADD_REQUIRED,
        'string.base': responseErrors.RES_ADD_REQUIRED,
    }),
    veg_only: Joi.boolean().required().messages({
        'any.required': responseErrors.RES_VEG_REQUIRED,
        'boolean.empty': responseErrors.RES_VEG_REQUIRED,
        'boolean.base': responseErrors.RES_VEG_REQUIRED,
    }),
    cost: Joi.string().uppercase().trim().valid('HIGH', 'MEDIUM', 'LOW').required().messages({
        'any.required': responseErrors.RES_COST_TYPE_REQUIRED,
        'string.empty': responseErrors.RES_COST_TYPE_REQUIRED,
        'string.base': responseErrors.RES_COST_TYPE_REQUIRED,

    }),
    cusine_types: Joi.array().required().messages({
        'any.required': responseErrors.RES_CUSINE_REQUIRED,
        // 'array.empty': responseErrors.RES_CUSINE_REQUIRED,
        // 'array.base': responseErrors.RES_CUSINE_REQUIRED,
    }),
    isOpen: Joi.boolean().required().messages({
        'any.required': responseErrors.RES_IS_OPEN_REQUIRED,
        'boolean.empty': responseErrors.RES_IS_OPEN_REQUIRED,
        'boolean.base': responseErrors.RES_IS_OPEN_REQUIRED,
    }),
})