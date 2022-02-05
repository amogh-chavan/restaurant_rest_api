import { Application } from "express";
import RestaurantRouterModule from "../api/restaurant/restaurant.module";
import AppRouterModule from "../app.module"

const SetUpRoutes = function InitializeRoutes(app: Application) {
    app.use(
        AppRouterModule,
        RestaurantRouterModule

    )
}

export default SetUpRoutes