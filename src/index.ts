import 'reflect-metadata';
import express, { Application } from 'express';
import morgan from "morgan";
import setupSwagger from './config/swagger.config';
import SetUpRoutes from './config/routes.config';
import bodyParser from 'body-parser';
import envConfig from './config/env.config';
import { SetUpMiddlewares } from './config/middlewares.config';


const app: Application = express();

SetUpMiddlewares(app)
SetUpRoutes(app)
setupSwagger(app)

app.listen(envConfig.port, envConfig.server_address, () => {
    console.log(`Server is running on ${envConfig.protocol}://${envConfig.server_address}:${envConfig.port}/docs`)
});


