'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: '1',
      username: 'Brian Cocherell',
      firstName: 'Brian',
      lastName: 'Cocherell',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id: '2',
      username: 'Peter Burns',
      firstName: 'Peter',
      lastName: 'Burns',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id: '3',
      username: 'Jon Mockbee',
      firstName: 'Jon',
      lastName: 'Mockbee',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id: '4',
      username: 'Joe Malovasic',
      firstName: 'Joe',
      lastName: 'Malovasic',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('users', {
      id: [
        '1',
        '2',
        '3',
        '4'
      ]
    });
  }
};
