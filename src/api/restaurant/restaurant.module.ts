import express from "express";
import { validateRequest } from "../../pipes/validation.pipe";
import { container } from "tsyringe";
import RestaurantController from "./restaurant.controller";
import { createRestaurantValidation } from "./validation/create-restauraant.validation";
import { restaurantFilterValidation } from "./validation/restaurant-filter.validation";
import { updateRestaurantValidation } from "./validation/update-restaurant.validation";

const RestaurantRouterModule = express.Router();
const controller = container.resolve(RestaurantController);

RestaurantRouterModule.get('/restaurant/details', async (_req, res, next) => next(await controller.getDetails()));

RestaurantRouterModule.get('/restaurant/details/:id', async (_req, res, next) => next(await controller.findOneById(_req.params.id)))

RestaurantRouterModule.post('/restaurant/filter', validateRequest(restaurantFilterValidation), async (_req, res, next) => next(await controller.filterRestaurant(_req.body)))

RestaurantRouterModule.post('/restaurant/create', validateRequest(createRestaurantValidation), async (_req, res, next) => next(await controller.createRestaurant(_req.body)))

RestaurantRouterModule.delete('/restaurant/delete/:id', async (_req, res, next) => next(await controller.deleteRestaurant(_req.params.id)))

RestaurantRouterModule.patch('/restaurant/update/:id', validateRequest(updateRestaurantValidation), async (_req, res, next) => next(await controller.updateRestaurant(_req.params.id, _req.body)))

export default RestaurantRouterModule;

