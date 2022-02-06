import { Request, Response, response } from "express";
import Joi, { Schema } from "joi";
import { responseErrors } from "../constants/message.constant";
import ApiResponse from "../dto/api-response.dto";

export const validateRequest = (schema: Schema) => {
    return async (req: Request, res: Response, next: any) => {
        const { error } = schema.validate(req.body);
        const valid = error == null;
        if (valid) {
            next();
        } else {
            const messages = new ApiResponse(442, false, null, "" + error || responseErrors.INVALID_BODY)
            res.status(422).json({ ...messages })

        }
    }
}
