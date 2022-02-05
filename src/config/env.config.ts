
import Joi from "joi"
import { envErrors } from '../constants/message.constant'
import 'dotenv/config';


const envValidationSchema = Joi.object({
    PROTOCOL: Joi.string().required().messages({ 'string.required': envErrors.PROTOCOL }),
    SERVER_ADDRESS: Joi.string().required().messages({ 'string.required': envErrors.SERVER_ADDRESS_REQUIRED }),
    PORT: Joi.number().default(5100),
    MYSQL_ADDRESS: Joi.string().required().messages({ 'string.required': envErrors.MYSQL_PATH_REQUIRED }),
    SQL_DB_USER: Joi.string().required().messages({ 'string.required': envErrors.SQL_USER_REQUIRED }),
    SQL_DB_HOST: Joi.string().required().messages({ 'string.required': envErrors.SQL_HOST_REQUIRED }),
    SQL_DB_PASSWORD: Joi.string().required().messages({ 'string.required': envErrors.SQL_PASSWORD_REQUIRED }),
    SQL_DATABASE: Joi.string().required().messages({ 'string.required': envErrors.SQL_DATABASE_REQUIRED }),
    DB_DRIVER: Joi.string().required().messages({ 'string.required': envErrors.DB_DRIVER_REQUIRED }),
}).unknown();

const { value: envVars, error } = envValidationSchema
    .prefs({ errors: { label: 'key' } })
    .validate(process.env);

if (error) {
    throw new Error(`environment variable validation error: ${error.message}`);
}


const envConfig = {
    protocol: envVars.PROTOCOL,
    server_address: envVars.SERVER_ADDRESS,
    port: envVars.PORT,
    sequelize: {
        address: envVars.MYSQL_ADDRESS,
        host: envVars.SQL_DB_HOST,
        user: envVars.SQL_DB_USER,
        password: envVars.SQL_DB_PASSWORD,
        database: envVars.SQL_DATABASE,
        driver: envVars.DB_DRIVER
    }
}
console.log(envConfig)
export default envConfig;