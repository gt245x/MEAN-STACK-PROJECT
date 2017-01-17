//(function () {
    angular
        .module("myApp",['ngRoute'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/home", {
                    templateUrl : "views/home.html",
                    controller : "HomeController",
                    controllerAs: 'hm'
                })
                .when("/cavs", {
                    templateUrl : "views/cavs.html",
                    controller : "CavsController",
                    controllerAs : 'vm'
                })
                .when("/blog", {
                    templateUrl : "views/blog.html",
                    controller : "BlogController",
                    controllerAs : "bm"
                })
                .when("/cavs/:id", {
                    templateUrl : "views/cavsPlayer.html",
                    controller : "cavsPlayerController",
                    controllerAs : "cp"
                })
                .otherwise({
                    redirectTo: "/home"
                });
/*            if(window.history && window.history.pushState){
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
            }*/


                $locationProvider.html5Mode(false).hashPrefix('');
        });
//})();
