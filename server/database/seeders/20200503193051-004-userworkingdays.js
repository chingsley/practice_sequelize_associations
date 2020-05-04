'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UsersWorkingDays', [
      {
        userId: 1,
        workingDayId: 2,
      },
      {
        userId: 1,
        workingDayId: 3,
      },
      {
        userId: 2,
        workingDayId: 4,
      },
      {
        userId: 2,
        workingDayId: 5,
      },
      {
        userId: 3,
        workingDayId: 6,
      },
      {
        userId: 3,
        workingDayId: 4,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UsersWorkingDays', null, {});
  },
};
