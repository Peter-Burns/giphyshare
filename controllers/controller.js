var express = require("express");
var request = require("request");
var router = express.Router();
var db = require("../models");

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/posts", function (req, res) {
    db.post.findAll({
        include: [db.user],
        order: [
            ["createdAt", "DESC"]
        ]
    }).then(function (postsArr) {
        var posts = {
            posts: postsArr
        };
        res.render("posts", posts);
    });
});

router.get("/feed/:id", function (req, res) {
    db.post.findAll({
        include: [{
            model: db.user,
            required: true,
            include: [{
                model: db.follower,
                as: "Followers",
                where: { userId: req.params.id },
                required: true
            }]
        }],
        order: [
            ["createdAt", "DESC"]
        ]
    }).then(function (postsArr) {
        var posts = {
            posts: postsArr
        };
        res.render("feed", posts);
    });
});

router.get("/login", function (req, res) {
    res.render("login");
});

router.get("/signup", function (req, res) {
    res.render("signup",{signUpPage:true});
});

router.get("/post/:id", function (req, res) {
    db.post.findAll({
        include: [db.subpost, db.user],
        where: { id: req.params.id }
    }).then(function (dbPost) {
        db.subpost.findAll({
            where: { postId: req.params.id },
            order: [
                ["createdAt", "ASC"]
            ]
        }).then(function (dbSubpost) {
            res.render("post", {
                comments: dbSubpost,
                dataValues: {
                    comment: dbPost[0].comment,
                    title: dbPost[0].title,
                    urlOriginal: dbPost[0].dataValues.urlOriginal,
                    url: dbPost[0].dataValues.url,
                    urlOriginalStill: dbPost[0].dataValues.urlOriginalStill,
                    urlStill: dbPost[0].dataValues.urlStill,
                    id: dbPost[0].dataValues.id,
                    author: dbPost[0].dataValues.user
                }
            });
        });
    });
});

router.get("/user/:id", function (req, res) {
    db.post.findAll({
        where: { userId: req.params.id },
        include: [db.user],
        order: [
            ["createdAt", "ASC"]
        ]
    }).then(function (dbPost) {
        var posts = { posts: dbPost };
        if (dbPost.length) posts = {
            posts: dbPost,
            userName: dbPost[0].dataValues.user.firstName + " " + dbPost[0].dataValues.user.lastName,
            userId: dbPost[0].dataValues.userId
        };
        res.render("user", posts);
    });
});

router.get("/profile/:id", function (req, res) {
    db.post.findAll({
        where: { userId: req.params.id },
        include: [db.user],
        order: [
            ["createdAt", "ASC"]
        ]
    }).then(function (dbPost) {
        var posts = { posts: dbPost };
        if (dbPost.length) posts = {
            posts: dbPost,
            userName: dbPost[0].dataValues.user.firstName + " " + dbPost[0].dataValues.user.lastName,
            userId: dbPost[0].dataValues.userId
        };
        res.render("profile", posts);
    });
});

router.post("/search", function (req, res) {
    var offset = parseInt(req.body.offset);
    request("https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=16&q=" + req.body.search + "&offset=" + ((offset - 1) * 16), function (err, response, body) {
        var posts = {
            lastPage: offset - 1,
            nextPage: offset + 1,
            posts: JSON.parse(body).data,
            search: req.body.search
        };
        res.render("search", posts);
    });
});

module.exports = router;