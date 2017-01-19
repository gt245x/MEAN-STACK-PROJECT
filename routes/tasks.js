var express = require('express');
var model = require('../models/dbmodel.js')
var router = express.Router();


//POST
router.post("/api/players", addPlayer);
router.get("/api/players", getAllPlayers);
router.get("/api/players/:id", getPlayerbyID);
router.put("/api/players/:id", updatePlayer);
router.delete("/api/players/:id", removePlayer);
router.post("/api/blogs", createPost);
router.get("/api/blogs", getAllPosts);
router.delete("/api/blogs/:id", deletePost);
router.get("/api/blogs/:id", getPostById);
router.put("/api/blogs/:id", updatePost);


function addPlayer(request, response, next) {
    var player = request.body;
    model.cavsModel
        .create(player)
        .then(
            function (playerObj) {
                response.json(200);
            },
            function (error) {
                response.sendStatus(400);
        }
    );
};

function getAllPlayers(request, response, next) {
    model.cavsModel
        .find()
        .then(
            function (players) {
                response.json(players);
            },
            function (error) {
                response.sendStatus(400);
            }
        );
};

function getPlayerbyID(request, response, next) {
    var playerID = request.params.id;
    model.cavsModel
        .findById(playerID)
        .then(
            function (player) {
                response.json(player);
            },
            function (error) {
                response.sendStatus(400);
            }
        );
};

function updatePlayer(request, response, next) {
    var playerId = request.params.id;
    var player = request.body;
    model.cavsModel
        .update({_id: playerId}, {
                fname : player.fname,
                lname : player.lname,
                age : player.age,
                height : player.height,
                position : player.position,
                college : player.college,
                ppg : player.ppg,
                salary : player.salary
        })
        .then(
            function (status){
                response.sendStatus(200);
            },
            function () {
                response.sendStatus(400);
            }
        );
};

function removePlayer(request, response, next) {
    var id = request.params.id;
    model.cavsModel
        .remove({_id: id}, function(err, res) {
            if (err) {
                response.status(500).send(err);
            }
            else {
                response.status(200).send({message:"That player was deleted from the database"})
            }
        })

};


function createPost(request, response, next) {
    var post = request.body;
    model.blogModel
        .create(post)
        .then(
            function (playerObj) {
                response.json(200);
            },
            function (error) {
                response.sendStatus(400);
            }
        );
};

function getAllPosts(request, response, next) {
    model.blogModel
        .find()
        .then(
            function (posts) {
                response.json(posts);
            },
            function (error) {
                response.sendStatus(400);
            }
        );
};

function deletePost(request, response, next) {
    var postId = request.params.id;
    model.blogModel
        .remove({_id:postId})
        .then(
            function (status) {
                response.sendStatus(200);
            },
            function (error) {
                response.sendStatus(400);
            }
        )
};

function getPostById(request, response, next) {
    var postId = request.params.id;
    model.blogModel
        .findById(postId)
        .then(
            function (post) {
                response.json(post);
            },
            function (error) {
               response.sendStatus(400);
            }
        );
};

function updatePost(request, response, next) {
    var postId = request.params.id;
    var post = request.body;
    console.log(postId);
    console.log(post);
    model.blogModel
        .update({_id : postId}, {
            title : post.title,
            content : post.content
        }).then(
            function (status){
                response.sendStatus(200);
            },
            function () {
                response.sendStatus(400);
            }
        );
};

module.exports = router;