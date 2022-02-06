import ApiResponse from "../../dto/api-response.dto";
import restaurant from "../../models/restaurant";

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

    async filterRestaurant(restaurantFiltersDto: any) {
        console.log(restaurantFiltersDto)
        return new ApiResponse(200, true, null, 'success')
    }

    async createRestaurant(createRestaurantDto: any) {
        //since mysql can not store arrays we need to convert them to string
        createRestaurantDto.cusine_types = createRestaurantDto.cusine_types.toString();
        await restaurant.create(createRestaurantDto)
        return new ApiResponse(200, true, null, 'success')
    }

    async deleteRestaurant(id: any) {
        const data = await restaurant.findOne({ where: { restaurant_id: id } })
        if (!data) return ApiResponse.BadRequestException('could not find any restaurant')
        await restaurant.destroy({ where: { restaurant_id: id } });
        return new ApiResponse(200, true, null, 'success')
    }

}