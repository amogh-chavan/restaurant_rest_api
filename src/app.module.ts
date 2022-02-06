import express from "express";
import AppController from "./app.controller";

import { container } from "tsyringe";

const AppRouterModule = express.Router();
const controller = container.resolve(AppController);

AppRouterModule.get("/app/healthcheck", async (_req, res, next) => next(await controller.healthCheck()));

export default AppRouterModule;