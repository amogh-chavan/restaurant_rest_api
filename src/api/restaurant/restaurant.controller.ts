import { Body, Delete, Get, Post, Query, Route, Tags } from "tsoa";
import { autoInjectable } from "tsyringe";
import RestaurantService from "./restaurant.service";
import { CreateRestaurantDto } from "./dto/create-restaurant.dto";
import { RestaurantFiltersDto } from "./dto/restaurant-filter.dto";
import { CostType } from "../../enums/cost-type.enum";

@autoInjectable()
@Route("/restaurant")
@Tags("Restaurant")
export default class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) { }

    @Get("/details")
    public async getDetails() {
        // console.log("query params: ", veg_only, cost, cusine_types, isOpen);
        return await this.restaurantService.details();
    }

    @Get("/details/:id")
    public async findOneById(id: string) {
        return await this.restaurantService.findOneById(id);
    }

    @Post("/filter")
    public async filterRestaurant(@Body() restaurantFiltersDto: RestaurantFiltersDto) {
        return await this.restaurantService.filterRestaurant(restaurantFiltersDto);
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