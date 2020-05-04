'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: Sequelize.STRING(),
      lastname: Sequelize.STRING(),
      companyId: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        references: {
          model: 'Companies',
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
    return queryInterface.dropTable('Users');
  },
};
