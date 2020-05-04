'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      title: Sequelize.STRING(),
      content: Sequelize.STRING(),
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER(),
        references: {
          model: 'Users',
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
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  },
};
