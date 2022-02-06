import { Body, Get, Post, Route, Tags } from "tsoa";
import { autoInjectable } from "tsyringe";
import RestaurantService from "./restaurant.service";
import ApiResponse from "../../dto/api-response.dto";
import { CreateRestaurantDto } from "./dto/create-restaurant.dto";

import { createRestaurantValidation } from "./validation/create-restauraant.validation";

// import restaurant from "src/models/restaurant";

@autoInjectable()
@Route("/restaurant")
@Tags("Restaurant")
export default class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) { }

    @Get("/details")
    public async getDetails() {
        return await this.restaurantService.details();
    }

    @Get("/details/:id")
    public async findOneById(id: string) {
        return await this.restaurantService.findOneById(id);
    }

    @Post("/create")
    public async createRestaurant(@Body() createRestaurantDto: CreateRestaurantDto) {

        return await this.restaurantService.createRestaurant(createRestaurantDto);
    }

}