angular.module('myApp')
    .controller('cavsPlayerController', function ($http, $routeParams) {
        var cp = this;

        cp.getPlayerbyID = getPlayerbyID;

        function getPlayerbyID(playerID) {
            $http({
                url:"/api/players",
                method: "get",
                params : {id : $routeParams.id}
            }).then(function (response) {
                cp.player = response.data;
            })

        }
    })

/*
    .get("/cavs/" + playerID)
    .then(function (player) {
        cp.player = player.data;
        console.log(player.data);
    })*/
