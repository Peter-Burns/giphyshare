var db = require("../models");

module.exports = function(app) {

  // insert subpost
  app.post("/api/subposts", function(req, res) {
    db.subpost.create(req.body).then(function(dbSubpost) {
      res.json(dbSubpost);
    });
  });
};
