import { filterQueryBuilder } from "../../utils/query-builder";
import ApiResponse from "../../dto/api-response.dto";
import restaurant from "../../models/restaurant";
import { RestaurantFiltersDto } from "./dto/restaurant-filter.dto";
import { responseMessage } from "../../constants/message.constant";
import { responseErrors } from "../../constants/message.constant";

export default class RestaurantService {

    async details() {
        const data = await restaurant.findAll();
        return new ApiResponse(200, true, data, 'success');
    }

    async findOneById(id: any) {
        if (isNaN(id)) {
            return ApiResponse.BadRequestException(responseErrors.INVALID_ID);
        }
        const data = await restaurant.findOne({ where: { restaurant_id: id } })
        if (!data) return ApiResponse.BadRequestException(responseErrors.RES_NOT_FOUND)
        else return new ApiResponse(200, true, data, 'success')
    }

    async filterRestaurant(restaurantFiltersDto: RestaurantFiltersDto) {
        const filterQuery = await filterQueryBuilder(restaurantFiltersDto)

        const data = await restaurant.findAll(filterQuery)
        if (!data) return ApiResponse.BadRequestException('could not find any restaurant')
        return new ApiResponse(200, true, data, 'success')
    }

    async createRestaurant(createRestaurantDto: any) {
        const data = await restaurant.findOne({ where: { restaurant_name: createRestaurantDto.restaurant_name } })
        if (data) return ApiResponse.BadRequestException(responseErrors.RES_NAME_EXISTS)
        createRestaurantDto.cost = createRestaurantDto.cost.toUpperCase()
        const response = await restaurant.create(createRestaurantDto)
        return new ApiResponse(200, true, response, responseMessage.SUCC_CREATED)
    }

    async deleteRestaurant(id: any) {
        if (isNaN(id)) {
            return ApiResponse.BadRequestException(responseErrors.INVALID_ID);
        }
        const data = await restaurant.findOne({ where: { restaurant_id: id } })
        if (!data) return ApiResponse.BadRequestException(responseErrors.RES_NOT_FOUND)
        else {
            await restaurant.destroy({ where: { restaurant_id: id } });
            return new ApiResponse(200, true, null, 'success');
        }
    }

    async updateRestaurant(id: any, updateRestaurantDto: any) {
        if (isNaN(id)) {
            return ApiResponse.BadRequestException(responseErrors.INVALID_ID);
        }
        if (Object.keys(updateRestaurantDto).length === 0) {
            return new ApiResponse(200, true, null, responseMessage.SUCC_UPDTAED);
        }
        else {
            if (updateRestaurantDto.restaurant_name) {
                const data = await restaurant.findOne({ where: { restaurant_name: updateRestaurantDto.restaurant_name } })
                if (data) {
                    return ApiResponse.BadRequestException(responseErrors.RES_NAME_EXISTS)
                }
            }
            updateRestaurantDto.cost = updateRestaurantDto?.cost?.toUpperCase()
            const response = await restaurant.update(updateRestaurantDto, { where: { restaurant_id: id } });
            if (response) {
                return new ApiResponse(200, true, updateRestaurantDto, responseMessage.SUCC_UPDTAED);
            }
            else { return ApiResponse.InternalServerException(); }
        }
    }



}