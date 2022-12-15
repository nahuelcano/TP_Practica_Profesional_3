'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true
            },
            role: {
                type: DataTypes.STRING(20),
                allowNull: false,
                references: {
                    model: 'Rol',
                    key: 'id'
                },
                onDelete: 'CASCADE',
                onupdate: 'CASCADE'
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};