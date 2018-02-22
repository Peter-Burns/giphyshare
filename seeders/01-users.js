'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: '1',
      username: 'brian.cocherell@gmail.com',
      firstName: 'Brian',
      lastName: 'Cocherell',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id: '2',
      username: 'peterburnshicks@gmail.com',
      firstName: 'Peter',
      lastName: 'Burns',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id: '3',
      username: 'mockbee1000@gmail.com',
      firstName: 'Jon',
      lastName: 'Mockbee',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id: '4',
      username: 'joemalov@gmail.com',
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
