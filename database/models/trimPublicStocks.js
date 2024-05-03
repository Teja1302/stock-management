const { Sequelize} = require("sequelize");
const sequelize = require("../../config/db.config.js");

    const trimPublicStock = sequelize.define("trimPublicStock", {
        trimPublicStockId :{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        trimName :{
            type: Sequelize.STRING,            
            allowNull: false
        },
        availableQuantity :{
            type: Sequelize.INTEGER,            
            allowNull: false
        }
    });
  module.exports = trimPublicStock

