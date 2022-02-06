import { filterQueryBuilder } from "../../utils/query-builder";
import ApiResponse from "../../dto/api-response.dto";
import restaurant from "../../models/restaurant";
import { RestaurantFiltersDto } from "./dto/restaurant-filter.dto";


export default class RestaurantService {

    async details() {
        const data = await restaurant.findAll();
        return new ApiResponse(200, true, data, 'success');
    }

    async findOne(query: any, message: string) {
        const data = await restaurant.findOne(query)
        if (!data) return ApiResponse.BadRequestException(message)
        else return data
    }

    async findOneById(id: any) {
        if (isNaN(id)) {
            return ApiResponse.BadRequestException("Invalid Id");
        }
        const data = await this.findOne({ where: { restaurant_id: id } }, 'could not find any restaurant')
        return new ApiResponse(200, true, data, 'success')
    }

    async filterRestaurant(restaurantFiltersDto: RestaurantFiltersDto) {
        const filterQuery = await filterQueryBuilder(restaurantFiltersDto)

        const data = await restaurant.findAll(filterQuery)
        if (!data) return ApiResponse.BadRequestException('could not find any restaurant')
        return new ApiResponse(200, true, data, 'success')
    }

    async createRestaurant(createRestaurantDto: any) {
        const data = await restaurant.findOne({ where: { restaurant_name: createRestaurantDto.restaurant_name } })
        if (data) return ApiResponse.BadRequestException('restaurant with same name already existis')
        createRestaurantDto.cost = createRestaurantDto.cost.toUpperCase()
        const response = await restaurant.create(createRestaurantDto)
        return new ApiResponse(200, true, response, 'success')
    }

    async deleteRestaurant(id: any) {
        if (isNaN(id)) {
            return ApiResponse.BadRequestException("Invalid Id");
        }
        await this.findOne({ where: { restaurant_id: id } }, 'could not find any restaurant')
        await restaurant.destroy({ where: { restaurant_id: id } });
        return new ApiResponse(200, true, null, 'success');

    }



}