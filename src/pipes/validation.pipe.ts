import { response } from "express";

export function validateRequest(req: Request, next: any, schema: any) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        return response.send(400)
    } else {
        // req.body = value;
        next();
    }
}