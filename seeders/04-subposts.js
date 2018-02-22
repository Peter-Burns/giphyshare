'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('subposts', [{
      userId: '2',
      postId: 1,
      url: 'https://media3.giphy.com/media/xUA7aQaXbhnkX4znm8/200w.gif',
      urlStill: 'https://media3.giphy.com/media/xUA7aQaXbhnkX4znm8/200w_s.gif',
      urlOriginal: 'https://media3.giphy.com/media/xUA7aQaXbhnkX4znm8/giphy.gif',
      urlOriginalStill: 'https://media3.giphy.com/media/xUA7aQaXbhnkX4znm8/giphy_s.gif',
      comment: 'Subpost 1', 
      title: 'Subpost 1',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      userId: '1',
      postId: 3,
      url: 'https://media3.giphy.com/media/d3erWmTEGXoiYVgY/200w.gif',
      urlStill: 'https://media3.giphy.com/media/d3erWmTEGXoiYVgY/200w_s.gif',
      urlOriginal: 'https://media3.giphy.com/media/d3erWmTEGXoiYVgY/giphy.gif',
      urlOriginalStill: 'https://media3.giphy.com/media/d3erWmTEGXoiYVgY/giphy_s.gif',
      comment: 'Subpost 2', 
      title: 'Subpost 2',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {}

};