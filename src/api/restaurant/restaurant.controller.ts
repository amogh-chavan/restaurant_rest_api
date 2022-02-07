import { Body, Delete, Get, Patch, Post, Query, Route, Tags } from "tsoa";
import { autoInjectable } from "tsyringe";
import RestaurantService from "./restaurant.service";
import { CreateRestaurantDto } from "./dto/create-restaurant.dto";
import { RestaurantFiltersDto } from "./dto/restaurant-filter.dto";
import { CostType } from "../../enums/cost-type.enum";
import { UpdateRestaurantDto } from "./dto/update-restaurant.dto";

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
        return await this.restaurantService.findOneById(+id);
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
        return await this.restaurantService.deleteRestaurant(+id);
    }

    @Patch("/update/:id")
    public async updateRestaurant(id: string, @Body() updateRestaurantDto: UpdateRestaurantDto) {
        return await this.restaurantService.updateRestaurant(+id, updateRestaurantDto);
    }



}