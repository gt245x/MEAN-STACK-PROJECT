(function () {
    angular
        .module("myApp",['ngRoute'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider.caseInsensitiveMatch = true;
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


                $locationProvider.html5Mode(false).hashPrefix('');
        });
})();
