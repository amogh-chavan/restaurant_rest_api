import { Request, Response } from "express";
import ApiResponse from "../dto/api-response.dto";


export function globalExceptionFilter(err: any, req: Request, res: Response, next: any) {

    if (err instanceof ApiResponse) {
        return res.status(err.code).json(err)
    }
    res.status(500).json('Something went wrong')
}