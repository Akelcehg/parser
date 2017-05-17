module.exports = (sequelize, DataTypes) => {

    const Car = sequelize.define('Car', {
        header: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        /*complete: {
         type: DataTypes.BOOLEAN,
         defaultValue: false,
         },*/
    }, {
        classMethods: {
            associate: (models) => {
                /*  TodoItem.belongsTo(models.Todo, {
                 foreignKey: 'todoId',
                 onDelete: 'CASCADE',
                 });*/
            },
        },
    });
    return Car;
};