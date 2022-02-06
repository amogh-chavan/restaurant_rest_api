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

    let query;
    if ([...costArr, ...cusineArr].length > 0) {
        query = { where: { ...filterQuery, [Op.or]: [...costArr, ...cusineArr] } };
    }
    else {
        query = { where: { ...filterQuery } };
    }

    console.log("query", query)
    return query
}



// const query = { where: { ...filterQuery, [Op.or]: [{ cost: { [Op.like]: '%MEDIUM%' } }, { cost: { [Op.like]: '%LOW%' } }] } };

//mysql

// SELECT restaurant_id,cusine_types FROM restaurant_database.restaurant WHERE cusine_types LIKE '%item1%' OR cusine_types LIKE '%item2%';

const obj = [
    {
        "restaurant_name": "priti hotel",
        "address": "dombivli west char rasta near gopi mall 421202",
        "veg_only": false,
        "cost": "LOW",
        "cusine_types": ["south indian", "italian", "french", "north indian"],
        "isOpen": true
    },
    {
        "restaurant_name": "pure veg priti hotel",
        "address": "dombivli west char rasta near gopi mall 421202",
        "veg_only": true,
        "cost": "LOW",
        "cusine_types": ["south indian", "italian", "french", "north indian"],
        "isOpen": true
    },
    {
        "restaurant_name": "alfresco",
        "address": "dombivli east near patkar school",
        "veg_only": false,
        "cost": "high",
        "cusine_types": ["italian", "french"],
        "isOpen": true
    },
    {
        "restaurant_name": "red chilly",
        "address": "dombivli west near bagshala ground",
        "veg_only": false,
        "cost": "Medium",
        "cusine_types": ["chinese"],
        "isOpen": true
    },
    {
        "restaurant_name": "morden cafe",
        "address": "dombivli east fadke road",
        "veg_only": true,
        "cost": "Medium",
        "cusine_types": ["south indian", "italian", "french", "north indian", "chinese"],
        "isOpen": true
    },
    {
        "restaurant_name": "youth cafe",
        "address": "ghatkopar",
        "veg_only": true,
        "cost": "Medium",
        "cusine_types": ["south indian", "north indian", "chinese"],
        "isOpen": false
    },
]