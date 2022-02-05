import { Get, Route, Tags } from "tsoa";
import { autoInjectable } from "tsyringe";
import RestaurantService from "./restaurant.service";
import ApiResponse from "../../dto/api-response.dto";

@autoInjectable()
@Route("/restaurant")
@Tags("Restaurant")
export default class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) { }

    @Get("/details")
    public async getDetails() {
        const data = await this.restaurantService.details();
        return new ApiResponse(true, data, 'success');
    }

}