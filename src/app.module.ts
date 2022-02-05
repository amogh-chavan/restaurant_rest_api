import express from "express";
import AppController from "./app.controller";

import { container } from "tsyringe";

const AppRouterModule = express.Router();
const controller = container.resolve(AppController);

AppRouterModule.get("/app/healthcheck", async (_req, res) => res.send(await controller.healthCheck()));

AppRouterModule.post("/app/login", async (_req, res) => res.status(201).send(await controller.login(_req.body)));

export default AppRouterModule;