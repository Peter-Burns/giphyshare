var db = require("../models");

module.exports = function (app) {

  // create new user
  app.post("/api/users", function (req, res) {
    db.user.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // get user by id
  app.get("/api/users/:id", function (req, res) {
    db.user.findOne({
      where: { id: req.params.id }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  
  // update user by id
  app.put("/api/users/:id", function (req, res) {
    db.user.update(req.body, {
      where: { id: req.params.id }
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });
};
