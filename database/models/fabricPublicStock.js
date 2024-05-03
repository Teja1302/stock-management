const { Sequelize} = require("sequelize");
const sequelize = require("../../config/db.config.js");

    const fabricPublicStock = sequelize.define("fabricPublicStock", {
        fabricPublicStockId :{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fabricName :{
            type: Sequelize.STRING,            
            allowNull: false
        },
        availableQuantity :{
            type: Sequelize.INTEGER,            
            allowNull: false
        }
    });
    return fabricPublicStock
module.exports = fabricPublicStock