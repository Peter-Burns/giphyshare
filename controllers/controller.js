var express = require("express");
var request = require("request");
var router = express.Router();
var db = require("../models");

const firebase = require('firebase');
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAESTO4NO8pJoJzewY5n91ncapUyJirgos",
    authDomain: "giphyshare-749cb.firebaseapp.com",
    databaseURL: "https://giphyshare-749cb.firebaseio.com",
    projectId: "giphyshare-749cb",
    storageBucket: "giphyshare-749cb.appspot.com",
    messagingSenderId: "242074518723"
});

// const firebaseui = require('firebaseui');
router.get("/", function (req, res) {
    res.render("index");
});

router.get("/posts", function (req, res) {
    db.post.findAll({
        include: [db.user],
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(function (postsArr) {
        var posts = {
            posts: postsArr
        };
        res.render("posts", posts);
    });
});

router.get("/feed", function (req, res) {
    db.post.findAll({
        include: [{
            model: db.user,
            required: true,
            include: [{
                model: db.follower,
                as: 'Followers',
                where: { userId: 1 },
                required: true
            }]
        }],
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(function (postsArr) {
        var posts = {
            posts: postsArr
        };
        res.render("feed", posts);
    });
});
router.post("/signup", function (req, res) {
 
    firebaseApp.auth().createUserWithEmailAndPassword(req.body.email, req.body.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
    res.redirect("/");
});
router.get("/login", function (req, res) {




    res.render("login");
});



router.get("/post/:id", function (req, res) {
    db.post.findAll({
<<<<<<< HEAD
        include: [db.subpost],
        where: {
            id: req.params.id
        }
=======
        include: [db.subpost, db.user],
        where: { id: req.params.id }
>>>>>>> origin
    }).then(function (dbPost) {
        db.subpost.findAll({
            where: {
                postId: req.params.id
            },
            order: [
                ['createdAt', 'ASC']
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
<<<<<<< HEAD
                    id: dbPost[0].dataValues.id
=======
                    id: dbPost[0].dataValues.id,
                    author:dbPost[0].dataValues.user
>>>>>>> origin
                }
            });
        });
    });
});

router.get("/user/:id", function (req, res) {
    db.post.findAll({
        where: {
            userId: req.params.id
        },
        include: [db.user],
        order: [
            ['createdAt', 'ASC']
        ]
    }).then(function (dbPost) {
        res.render("user", {
            posts: dbPost,
            userName: dbPost[0].dataValues.user.firstName + ' ' + dbPost[0].dataValues.user.lastName,
            userId: dbPost[0].dataValues.userId
        });
    });
});

router.post("/search", function (req, res) {
    var offset=parseInt(req.body.offset);
    request("https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=16&q=" + req.body.search + "&offset=" + ((offset-1)*16), function (err, response, body) {
        var posts = {
<<<<<<< HEAD
            posts: JSON.parse(body).data
=======
            lastPage:offset-1,
            nextPage:offset+1,
            posts: JSON.parse(body).data,
            search:req.body.search
>>>>>>> origin
        };
        res.render("search", posts);
    });
});

module.exports = router;