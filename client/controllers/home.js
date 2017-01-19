angular.module('myApp')
    .controller('HomeController', function ($scope, $http, $route) {
        $scope.message = "MEAN application in AngularJS"
        $scope.$on("$locationChangeStart", function(event, next, current) {
            if (!confirm("Are you sure you want to naviagate away from my beautiful home page!!! to " + next)) {
                event.preventDefault();
            }
        })
    });
