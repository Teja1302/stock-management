const { Sequelize} = require("sequelize");
const sequelize = require("../../config/db.config.js");


    const TrimPrivateStock = sequelize.define("TrimPrivateStock", {
        trimPrivateorderId :{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
      trimStockId :{
            type: Sequelize.INTEGER,            
            allowNull: true
        },
       trimAvailableQuantity :{
            type: Sequelize.INTEGER,            
            allowNull: false
        }
    });
    module.exports=TrimPrivateStock
 
    