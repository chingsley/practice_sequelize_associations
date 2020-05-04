'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('WorkingDays', [
      {
        weekDay: 'sunday',
        workingDate: '2020-05-03',
        isWorking: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekDay: 'monday',
        workingDate: '2020-05-04',
        isWorking: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekDay: 'tuesday',
        workingDate: '2020-05-05',
        isWorking: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekDay: 'wednesday',
        workingDate: '2020-05-06',
        isWorking: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekDay: 'thursday',
        workingDate: '2020-05-07',
        isWorking: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekDay: 'friday',
        workingDate: '2020-05-08',
        isWorking: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekDay: 'saturday',
        workingDate: '2020-05-09',
        isWorking: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('WorkingDays', null, {});
  },
};
