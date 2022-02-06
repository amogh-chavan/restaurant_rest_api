import express, { Application } from 'express';
import morgan from "morgan";
import bodyParser from 'body-parser';
import { globalExceptionFilter } from '../filters/global-expection.filter';


export function SetUpMiddlewares(app: Application) {
    app.use(
        express.json(),
        morgan("combined"),
        express.static("public"),
        bodyParser.urlencoded({ extended: false }),
        bodyParser.json(),
    )
}