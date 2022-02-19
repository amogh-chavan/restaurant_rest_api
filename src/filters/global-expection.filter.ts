import { Request, Response } from "express";
import { responseErrors } from "../constants/message.constant";
import ApiResponse from "../dto/api-response.dto";


export function globalExceptionFilter(error: any, req: Request, res: Response, next: any) {

    console.log(error)

    res.status(error.status || 500).send({
        status: error.status || 500,
        success: error.success || false,
        data: error.data || null,
        message: error.message || 'Internal Server Error',
    });
}