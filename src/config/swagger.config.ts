import { Application } from "express"
import swaggerUi from "swagger-ui-express";
const setupSwagger = function StartSwagger(app: Application): void {
    try {

        app.use("/docs", swaggerUi.serve, swaggerUi.setup(undefined, {
            swaggerOptions: {
                url: "/swagger.json",
                validatorUrl: null,
            },
            customSiteTitle: 'Restaurant Rest API project',

        }))
    }
    catch (error) {
        console.log("can not serve swagger documentation")
    }
}

export default setupSwagger;