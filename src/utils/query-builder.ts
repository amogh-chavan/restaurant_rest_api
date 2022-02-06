import { Sequelize } from "sequelize/dist";
import { RestaurantFiltersDto } from "../api/restaurant/dto/restaurant-filter.dto";
import { Op } from "sequelize";
export async function filterQueryBuilder(restaurantFiltersDto: RestaurantFiltersDto) {
    let filterQuery: any = {}
    let costArr: any = [];
    let cusineArr: any = [];
    if (restaurantFiltersDto.cost !== undefined) {
        restaurantFiltersDto.cost.forEach((element) => {
            costArr.push(
                {
                    cost: { [Op.like]: `%${element}%` }
                })
        })
    }
    if (restaurantFiltersDto.cusine_types !== undefined) {
        restaurantFiltersDto.cusine_types.forEach((element) => {
            cusineArr.push(
                {
                    cusine_types: { [Op.like]: `%${element}%` }
                })
        })
    }
    if (restaurantFiltersDto.isOpen !== undefined) {
        filterQuery.isOpen = restaurantFiltersDto.isOpen
    }
    if (restaurantFiltersDto.veg_only !== undefined) {
        filterQuery.veg_only = restaurantFiltersDto.veg_only
    }

    const query = { where: { ...filterQuery, [Op.or]: [...costArr, ...cusineArr] } };

    return query
}



// const query = { where: { ...filterQuery, [Op.or]: [{ cost: { [Op.like]: '%MEDIUM%' } }, { cost: { [Op.like]: '%LOW%' } }] } };