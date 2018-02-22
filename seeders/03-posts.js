'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [{
      userId: '1',
      url: 'https://media3.giphy.com/media/mCRJDo24UvJMA/200w.gif',
      urlStill: 'https://media3.giphy.com/media/mCRJDo24UvJMA/200w_s.gif',
      urlOriginal: 'https://media3.giphy.com/media/mCRJDo24UvJMA/giphy.gif',
      urlOriginalStill: 'https://media3.giphy.com/media/mCRJDo24UvJMA/giphy_s.gif',
      comment: 'Post 1', 
      title: 'Post 1', 
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      userId: '1',
      url: 'https://media3.giphy.com/media/xThtadSLoInlcD1UmA/200w.gif',
      urlStill: 'https://media3.giphy.com/media/xThtadSLoInlcD1UmA/200w_s.gif',
      urlOriginal: 'https://media3.giphy.com/media/xThtadSLoInlcD1UmA/giphy.gif',
      urlOriginalStill: 'https://media3.giphy.com/media/xThtadSLoInlcD1UmA/giphy_s.gif',
      comment: 'Post 2', 
      title: 'Post 2', 
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      userId: '2',
      url: 'https://media3.giphy.com/media/dTJd5ygpxkzWo/200w.gif',
      urlStill: 'https://media3.giphy.com/media/dTJd5ygpxkzWo/200w_s.gif',
      urlOriginal: 'https://media3.giphy.com/media/dTJd5ygpxkzWo/giphy.gif',
      urlOriginalStill: 'https://media3.giphy.com/media/dTJd5ygpxkzWo/giphy_s.gif',
      comment: 'Post 1', 
      title: 'Post 1', 
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      userId: '2',
      url: 'https://media3.giphy.com/media/wjK3YnjoQf0go/200w.gif',
      urlStill: 'https://media3.giphy.com/media/wjK3YnjoQf0go/200w_s.gif',
      urlOriginal: 'https://media3.giphy.com/media/wjK3YnjoQf0go/giphy.gif',
      urlOriginalStill: 'https://media3.giphy.com/media/wjK3YnjoQf0go/giphy_s.gif',
      comment: 'Post 2', 
      title: 'Post 2', 
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      userId: '3',
      url: 'https://media3.giphy.com/media/nrN8fUJ4EZn5m/200w.gif',
      urlStill: 'https://media3.giphy.com/media/nrN8fUJ4EZn5m/200w_s.gif',
      urlOriginal: 'https://media3.giphy.com/media/nrN8fUJ4EZn5m/giphy.gif',
      urlOriginalStill: 'https://media3.giphy.com/media/nrN8fUJ4EZn5m/giphy_s.gif',
      comment: 'Post 1', 
      title: 'Post 1', 
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      userId: '3',
      url: 'https://media3.giphy.com/media/BdhtvnPILhdYs/200w.gif',
      urlStill: 'https://media3.giphy.com/media/BdhtvnPILhdYs/200w_s.gif',
      urlOriginal: 'https://media3.giphy.com/media/BdhtvnPILhdYs/giphy.gif',
      urlOriginalStill: 'https://media3.giphy.com/media/BdhtvnPILhdYs/giphy_s.gif',
      comment: 'Post 2', 
      title: 'Post 2', 
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      userId: '4',
      url: 'https://media3.giphy.com/media/naXyAp2VYMR4k/200w.gif',
      urlStill: 'https://media3.giphy.com/media/naXyAp2VYMR4k/200w_s.gif',
      urlOriginal: 'https://media3.giphy.com/media/naXyAp2VYMR4k/giphy.gif',
      urlOriginalStill: 'https://media3.giphy.com/media/naXyAp2VYMR4k/giphy_s.gif',
      comment: 'Post 1',
      title: 'Post 1', 
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      userId: '4',
      url: 'https://media3.giphy.com/media/oDLDbBgf0dkis/200w.gif',
      urlStill: 'https://media3.giphy.com/media/oDLDbBgf0dkis/200w_s.gif',
      urlOriginal: 'https://media3.giphy.com/media/oDLDbBgf0dkis/giphy.gif',
      urlOriginalStill: 'https://media3.giphy.com/media/oDLDbBgf0dkis/giphy_s.gif',
      comment: 'Post 2', 
      title: 'Post 2', 
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {}
  
};
