import { NextFunction } from "express";
import { Body, Get, Post, Request, Route, Tags } from "tsoa";
import { autoInjectable } from "tsyringe";
import AppService from "./app.service";
import ApiResponse from "./dto/api-response.dto";
import { returnError } from "./utils/return-error";

@autoInjectable()
@Route("/app")
@Tags("Health Check Api")
export default class AppController {
    constructor(private readonly appService: AppService) { }

    @Get("/healthcheck")
    public async healthCheck(next: NextFunction) {
        const data = await this.appService.healthCheck()
        returnError(next, data)
        return new ApiResponse(200, true, data, 'Hello request, Server is working fine ^ _ ^ ')
    }

}