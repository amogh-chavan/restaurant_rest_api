import express from "express";
import { container } from "tsyringe";
import RestaurantController from "./restaurant.controller";

const RestaurantRouterModule = express.Router();
const controller = container.resolve(RestaurantController);

RestaurantRouterModule.get('/restaurant/details', async (_req, res) => res.send(await controller.getDetails()))

export default RestaurantRouterModule;