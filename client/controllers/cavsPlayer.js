angular.module('myApp')
    .controller('cavsPlayerController', function ($http, $routeParams) {
        var cp = this;
        cp.editPlayer = editPlayer
        cp.updatePage = updatePage
        cp.updatePlayer = updatePlayer
        cp.removePlayer = removePlayer




        $http({
                params : {id : $routeParams.id},
                url:("/api/players/"+$routeParams.id),
                method : "get"
        }).then(function(response) {
            cp.playerdetails=response.data;
            //console.log(cp.playerdetails)
         });

        function editPlayer(postID) {
    if (postID) {
        $http.get("/api/players/"+postID)
            .then(function (post) {
                cp.player = post.data;
            })
    }
};


        function updatePage() {
            $http
                .get('/api/players/'+$routeParams.id)
                .then(function (player) {
                    cp.playerdetails=player.data
                })
        };




        function updatePlayer(player) {
            if (player) {
                $http.put("/api/players/"+player._id, player)
                     .then(updatePage());
            }
        };


        function removePlayer(playerID) {
            if (playerID) {
            $http
                .delete('/api/players/' + playerID)
                .then(updatePage());
                }
        };


    })


