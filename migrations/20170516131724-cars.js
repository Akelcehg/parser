'use strict';

//sequelize migration:create --name=cars
///sequelize db:migrate
let tableName = 'cars';

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
                header: Sequelize.STRING,
                name: Sequelize.STRING,
                link: Sequelize.STRING,
                city_id: Sequelize.INTEGER,
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
