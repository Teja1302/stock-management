const { Sequelize } = require('sequelize');

const sequelize = require("../../config/db.config.js");

    const TrimDetails = sequelize.define("trimDetails", {
        trimDetailsId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        code: {
            type: Sequelize.STRING,
            allowNull: true
        },
        trimDetails: {
            type: Sequelize.STRING,
            allowNull: true
        },
        duty: {
            type: Sequelize.DECIMAL(20, 2),
            allowNull: true
        },
        currency: {
            type: Sequelize.STRING,
            allowNull: true
        },
        price: {
            type: Sequelize.DECIMAL(20, 2),
            allowNull: true
        },
        cons: {
            type: Sequelize.DECIMAL(20, 2),
            allowNull: true
        },
        inr: {
            type: Sequelize.DECIMAL(20, 2),
            allowNull: true
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    });
  module.exports= TrimDetails
