import { CostType } from "../../../enums/cost-type.enum";

export class CreateRestaurantDto {
    restaurant_name: string;
    address: string;
    veg_only: boolean
    cost: CostType
    cusine_types: Array<string>
    isOpen: boolean
}