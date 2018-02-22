'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('likes', [{
      userId: '1',
      postId: 2,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      userId: '1',
      postId: 5,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      userId: '2',
      postId: 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      userId: '2',
      postId: 7,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      userId: '3',
      postId: 3,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      userId: '3', 
      postId: 8,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      userId: '4',
      postId: 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      userId: '4', 
      postId: 3,
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {}

};

