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
        const data = await this.appService.healthCheck()
        return new ApiResponse(true, data, 'Hello request, Server is working fine^_^');
    }

    @Post("/login")
    public async login(@Body() body: any) {
        const { username, password } = body;
        const data = await this.appService.login({ username, password })
        return new ApiResponse(true, data, 'logged in successfully');
    }
}