import express from "express";
import { container } from "tsyringe";
import RestaurantController from "./restaurant.controller";

const RestaurantRouterModule = express.Router();
const controller = container.resolve(RestaurantController);

RestaurantRouterModule.get('/restaurant/details', async (_req, res, next) => next(await controller.getDetails()))

RestaurantRouterModule.get('/restaurant/details/:id', async (_req, res, next) => next(await controller.findOneById(_req.params.id)))

RestaurantRouterModule.post('/restaurant/create', async (_req, res, next) => next(await controller.createRestaurant(_req.body)))

export default RestaurantRouterModule;