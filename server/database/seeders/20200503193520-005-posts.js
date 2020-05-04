'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        title: 'coldplay',
        content: '"champions of the world" is so awesome',
        userId: 1,
      },
      {
        title: 'one republic',
        content: 'Just when were kids',
        userId: 2,
      },
      {
        title: 'awolnation',
        content:
          'I"m waking up, I feel it in my bone, enough to make my system blow',
        userId: 3,
      },
      {
        title: 'Yanni',
        content:
          'Tada da ta, tada da ta, tada daaaaa, tada da ta, tada da ta, tada da ti da ti da',
        userId: 1,
      },
      {
        title: 'cue bricks',
        content: 'I"m not the one.',
        userId: 2,
      },
      {
        title: 'cold play',
        content:
          'Violet hill. In a dark and round the december, from the roof top side remember...',
        userId: 3,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  },
};
