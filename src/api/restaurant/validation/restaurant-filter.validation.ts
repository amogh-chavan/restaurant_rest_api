import Joi from "joi";
import { CostType } from "../../../enums/cost-type.enum";
import { responseErrors } from "../../../constants/message.constant";

export const restaurantFilterValidation = Joi.object({
    veg_only: Joi.boolean().default(false),
    cost: Joi.array().items(Joi.string().trim().valid('HIGH', 'MEDIUM', 'LOW').default('LOW')),
    cusine_types: Joi.array(),
    isOpen: Joi.boolean().default(true),
})