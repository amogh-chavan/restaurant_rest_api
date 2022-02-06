import express, { Application } from 'express';
import morgan from "morgan";
import bodyParser from 'body-parser';


export function SetUpMiddlewares(app: Application) {
    app.use(
        express.json(),
        morgan("tiny"),
        express.static("public"),
        bodyParser.urlencoded({ extended: true }),
        bodyParser.json(),

    )
}