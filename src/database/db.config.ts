import { Dialect, Sequelize } from 'sequelize'
import envConfig from '../config/env.config';

const sequelizeConnection = new Sequelize(envConfig.sequelize.address, envConfig.sequelize.user, envConfig.sequelize.password, {
    host: envConfig.sequelize.host,
    dialect: envConfig.sequelize.driver
})

export default sequelizeConnection