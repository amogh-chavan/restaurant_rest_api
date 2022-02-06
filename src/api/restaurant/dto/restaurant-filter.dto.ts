import { CostType } from "../../../enums/cost-type.enum";

export class RestaurantFiltersDto {
    veg_only: boolean
    cost: Array<CostType>
    cusine_types: Array<string>
    isOpen: boolean
}