'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstname: 'John',
        lastname: 'DOE',
        companyId: 1,
      },
      {
        firstname: 'Logan',
        lastname: 'WOLVERINE',
        companyId: 2,
      },
      {
        firstname: 'John',
        lastname: 'CONNOR',
        companyId: 3,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
