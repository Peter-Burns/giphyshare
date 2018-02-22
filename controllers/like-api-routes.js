var db = require("../models");

module.exports = function(app) {

  // insert like
  app.post("/api/likes", function(req, res) {
    db.like.create(req.body).then(function(dbLike) {
      res.json(dbLike);
    });
  });
};
