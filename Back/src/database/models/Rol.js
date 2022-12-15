'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Rol extends Model {
        static associate(models) {
            Rol.hasMany(models.User, { foreignKey: 'role' })
        }
    }
    Rol.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Rol',
    });
    return Rol;
};