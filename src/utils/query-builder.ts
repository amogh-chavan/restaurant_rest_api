import { RestaurantFiltersDto } from "../api/restaurant/dto/restaurant-filter.dto";

export async function filterQueryBuilder(restaurantFiltersDto: RestaurantFiltersDto) {
    let filterQuery: any = {}

    if (restaurantFiltersDto.cost !== undefined) {

        filterQuery.cost = restaurantFiltersDto.cost;
    }
    if (restaurantFiltersDto.cusine_types !== undefined) {
        filterQuery.cusine_types = restaurantFiltersDto.cusine_types
    }
    if (restaurantFiltersDto.isOpen !== undefined) {
        filterQuery.isOpen = restaurantFiltersDto.isOpen
    }
    if (restaurantFiltersDto.veg_only !== undefined) {
        filterQuery.veg_only = restaurantFiltersDto.veg_only
    }

    console.log("only filters: ", filterQuery)
    console.log("filter query", { where: { ...filterQuery } })
    return filterQuery
}