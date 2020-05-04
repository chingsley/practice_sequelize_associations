'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Companies', [
      {
        name: 'kingsley & co',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ching the bing & co',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'The 3rd Nig Limited',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Companies', null, {});
  },
};
