var express = require('express');
var cavsModel = require('../models/cavsmodel.js')
var router = express.Router();


//POST
router.post("/api/players", addPlayer);
router.get("/api/players", getAllPlayers);
router.get("/api/players/:id", getPlayerbyID);

function addPlayer(request, response, next) {
    var player = request.body;
    console.log(player);
    cavsModel
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
    cavsModel
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
    cavsModel
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




module.exports = router;