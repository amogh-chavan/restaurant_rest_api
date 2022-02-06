import { Body, Get, Post, Request, Route, Tags } from "tsoa";
import { autoInjectable } from "tsyringe";
import AppService from "./app.service";
import ApiResponse from "./dto/api-response.dto";

@autoInjectable()
@Route("/app")
@Tags("Health Check Api")
export default class AppController {
    constructor(private readonly appService: AppService) { }

    @Get("/healthcheck")
    public async healthCheck() {
        return await this.appService.healthCheck()
    }

}