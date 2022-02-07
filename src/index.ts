import 'reflect-metadata';
import express, { Application } from 'express';
import setupSwagger from './config/swagger.config';
import SetUpRoutes from './config/routes.config';
import envConfig from './config/env.config';
import { SetUpMiddlewares } from './config/middlewares.config';
import sequelizeConnection from './config/db.config';
import restaurant from './models/restaurant';
import { globalExceptionFilter } from './filters/global-expection.filter';

const app: Application = express();

SetUpMiddlewares(app)
SetUpRoutes(app)
setupSwagger(app)

sequelizeConnection.sync().then((sync_result: any) => {
    console.log("sequelize sync success")

}).then(res => {

}).catch((e: any) => { console.error(e + 'could not sequelize Connection '); })

app.use(globalExceptionFilter)

app.listen(envConfig.port, envConfig.server_address, () => {
    console.log(`Server is running on ${envConfig.protocol}://${envConfig.server_address}:${envConfig.port}/docs`)
});


