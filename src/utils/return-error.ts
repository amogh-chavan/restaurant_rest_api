import { NextFunction } from "express";
import ApiResponse from "../dto/api-response.dto";

export function returnError(next: NextFunction, data: any) {
    if (data instanceof ApiResponse) return next(data)
    else true
}