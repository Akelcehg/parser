'use strict';

let tableName = 'cities';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface
            .createTable(tableName, {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                name: Sequelize.STRING,
                country_id: Sequelize.INTEGER,
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                updated_at: Sequelize.DATE
            });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable(tableName);
    }
};
