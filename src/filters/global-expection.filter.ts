import { Request, Response } from "express";
import { responseErrors } from "../constants/message.constant";
import ApiResponse from "../dto/api-response.dto";


export function globalExceptionFilter(err: any, req: Request, res: Response, next: any) {

    if (err instanceof ApiResponse) {
        return res.status(err.code).json(err)
    }

    if (err.type === 'entity.parse.failed') {
        const messages = new ApiResponse(442, false, null, responseErrors.INVALID_BODY)
        return res.status(422).json(messages)
    }
    const messages = new ApiResponse(442, false, null, 'Something went wrong')
    return res.status(500).json(messages)
}