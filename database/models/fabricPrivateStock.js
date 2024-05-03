
const { Sequelize } = require("sequelize");
const sequelize = require("../../config/db.config.js");

    const fabricPrivateStock = sequelize.define("fabricPrivateStock", {
        fabricPrivateorderId :{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fabricStockId :{
            type: Sequelize.INTEGER,            
            allowNull: true
        },
        fabricAvailableQuantity :{
            type: Sequelize.INTEGER,            
            allowNull: false
        }
    });
    module.exports=fabricPrivateStock