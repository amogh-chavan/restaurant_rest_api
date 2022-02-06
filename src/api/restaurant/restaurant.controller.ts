import { Body, Delete, Get, Post, Route, Tags } from "tsoa";
import { autoInjectable } from "tsyringe";
import RestaurantService from "./restaurant.service";
import { CreateRestaurantDto } from "./dto/create-restaurant.dto";

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

    @Delete("/delete/:id")
    public async deleteRestaurant(id: string) {
        return await this.restaurantService.deleteRestaurant(id);
    }

}