var db = require("../models");

module.exports = function(app) {

  // add follower
  app.post("/api/followers", function(req, res) {
    db.follower.create(req.body).then(function(dbFollower) {
      res.json(dbFollower);
    });
  });

  // delete route for unfollowing users
  app.delete("/api/followers/:id", function(req, res) {
    db.follower.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbFollower) {
      res.json(dbFollower);
    });
  });
};
