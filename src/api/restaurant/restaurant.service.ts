import ApiResponse from "../../dto/api-response.dto";
import restaurant from "../../models/restaurant";
import { CreateRestaurantDto } from "./dto/create-restaurant.dto";

export default class RestaurantService {

    async details() {

        const data = await restaurant.findAll();
        return new ApiResponse(200, true, data, 'success');
    }

    async findOneById(id: string) {
        const data = await restaurant.findOne({ where: { restaurant_id: id } })
        if (!data) return ApiResponse.BadRequestException('could not find any restaurant')
        return new ApiResponse(200, true, data, 'success')
    }

    async createRestaurant(createRestaurantDto: any) {
        await restaurant.create(createRestaurantDto)
        return new ApiResponse(200, true, null, 'success')
    }

}