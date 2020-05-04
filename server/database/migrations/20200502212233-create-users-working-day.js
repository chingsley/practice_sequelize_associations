'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'UsersWorkingDays',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        workingDayId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'WorkingDays',
            key: 'id',
          },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
      },
      {
        uniqueKeys: {
          UsersWorkingDays_unique: {
            fields: ['userId', 'workingDayId'],
          },
        },
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UsersWorkingDays');
  },
};
