import { Dialect, Sequelize } from 'sequelize'
import envConfig from './env.config';
// const mysql = require('mysql2/promise');
// const connection = await mysql.createConnection({ host: envConfig.sequelize.host, port: 3306, user: envConfig.sequelize.user, password: envConfig.sequelize.password })
// await connection.query(`CREATE DATABASE IF NOT EXISTS \`${envConfig.sequelize.database}\`;`);

const sequelizeConnection = new Sequelize(envConfig.sequelize.database, envConfig.sequelize.user,
    envConfig.sequelize.password, {
    host: envConfig.sequelize.host,
    dialect: envConfig.sequelize.driver
})

export default sequelizeConnection;


