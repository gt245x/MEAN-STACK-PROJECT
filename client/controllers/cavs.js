angular.module('myApp')
        .controller('CavsController', function ($http, $location, $scope) {
                //var vm = this;
                $scope.title = "Cleveland Cavaliers"

                $scope.getAllPlayers = function() {
                    $http
                        .get('/api/players')
                        .then(function (allPlayers) {
                            $scope.cavs = allPlayers.data;
                        })
                };


                $scope.goTo = function(id) {
                    $location.path('/cavs/' + id);
                }

                $scope.addPlayer=function(player) {
                    if (player && player.fname && player.lname && player.age && player.height && player.position
                        && player.ppg && player.salary) {
                        $http
                            .post("/api/players",player)
                            .then(function(response) {
                                $scope.player='';
                                $scope.adduser = false;
                                $scope.getAllPlayers();
                            });
                        }
                        else {
                        $scope.missingItemError="You have not supplied enough details"
                    }
                };

                $scope.sortColumn = "fname";
                $scope.reverseSort = false;

                $scope.sortData = function(column) {
                        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
                        $scope.sortColumn = column;
                    }

                $scope.getSortClass = function(column) {
                        if ($scope.sortColumn == column) {
                            return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
                        }

                        return '';
                    }

                function init() {
                    $scope.getAllPlayers()
                };
                init();


        });
