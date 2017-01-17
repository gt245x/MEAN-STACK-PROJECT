angular.module('myApp')
        .controller('CavsController', function ($http) {
                var vm = this;
                vm.title = "Cleveland Cavaliers"
/*                var cavs = [
                    {fname:"Channing", lname:"Frye", age: 33,
                        height: 83, position:"Forward", college:"Arizona", ppg: 9.4,
                        salary:7806971
                    },
                    {fname:"Kevin", lname:"Love", age: 28,
                        height: 82, position:"Forward", college:"UCLA", ppg: 21.2,
                        salary:21165675
                    },
                    {fname:"Tristan", lname:"Thompson", age: 25,
                        height: 81, position:"Center", college:"Texas", ppg: 7.3,
                        salary:15330435
                    },
                ];
                vm.cavs =cavs;
                console.log(vm.cavs)*/

                vm.addPlayer = addPlayer;

                function init() {
                    getAllPlayers()
                };
                init();

                function getAllPlayers() {
                    $http
                        .get('/api/players')
                        .then(function (allPlayers) {
                            vm.cavs = allPlayers.data;
                        })
                };

                function addPlayer(player) {
                    if (player && player.fname && player.lname && player.age && player.height && player.position
                        && player.ppg && player.salary) {
                        console.log(player);
                        $http
                            .post("/api/players",player)
                            .then(function(response) {
                                vm.player='';
                                vm.adduser = false;
                            });
                        }
                        else {
                        vm.missingItemError="You have not supplied enough details"
                    }
                };
        });
