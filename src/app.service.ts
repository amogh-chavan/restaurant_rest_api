// import { SQLconnection } from "./config/mysql.config"

import { NextFunction } from "express";
import ApiResponse from "./dto/api-response.dto";

export default class AppService {
    constructor() { }

    async healthCheck() {

        let result = true;
        if (!result) {
            return ApiResponse.BadRequestException('custom bad request')
        }
    }

}