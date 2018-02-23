var db = require("../models");

module.exports = function (app) {

  // insert post
  app.post("/api/posts", function (req, res) {
    db.post.create(req.body).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/post/:id", function (req, res) {
    db.post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // get post by id
  app.get("/api/post/:id", function (req, res) {
    db.post.findAll({
      where: { id: req.params.id }
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });
};
