
import { DataTypes } from "sequelize";
import sequelizeConnection from "../config/db.config";

const restaurant = sequelizeConnection.define('restaurant', {
    restaurant_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    restaurant_name: {
        type: DataTypes.STRING,
        // unique: true,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    veg_only: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    cost: {
        type: DataTypes.ENUM("LOW", "MEDIUM", "HIGH"),
        allowNull: false
    },
    cusine_types: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isOpen: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

}, {
    timestamps: true,
    freezeTableName: true
})

export default restaurant;