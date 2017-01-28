angular.module('myApp')
    .controller('BlogController', function ($scope, $http) {

        $scope.header = "Blog";
        $scope.isEditing = {};

/*        bm.createPost = createPost;
        bm.deletePost = deletePost;
        bm.editPost = editPost;
        bm.updatePost = updatePost;*/



        var getAllPosts = function () {
            $http
                .get('/api/blogs')
                .then(function (allPosts) {
                    $scope.allposts = allPosts.data;
                })
        };

        function init() {
            getAllPosts()
        };
        init();


        $scope.createPost = function(post) {
            if (post && post.title && post.content) {
                $http
                    .post("/api/blogs", post)
                    .then(function (response) {
                        $scope.post = {};
                        getAllPosts()
                    })
            } else {
                $scope.missingItemError="You have not supplied enough details"
            }
        };
        $scope.deletePost = function(postId){
            if (postId) {
                $http.delete("/api/blogs/" + postId)
                    .then(function(response) {
                        getAllPosts();
                    }, function (error) {
                        console.log('An error occured', error.data)
                        });
            }
        };

        $scope.editPost = function(postID) {
            if (postID) {
                $scope.isEditing[postID] = true;
                $http.get("/api/blogs/"+postID)
                    .then(function (post) {
                        $scope.post = post.data;
                    }, function(error) {
                        console.log("Post edit failed");
                        $scope.isEditing[postID] = false;
                    })
            }
        };

         $scope.updatePost =function() {
            if ($scope.post) {
                $http
                    .put("/api/blogs/"+$scope.post._id, $scope.post)
                    .then(function(response) {
                        $scope.post = {};
                        getAllPosts();
                    })
                    .finally(function(){
                        $scope.isEditing[$scope.post.__id] = false;
                    })
            }
        }

        $scope.backAction = function(postID) {
            $scope.isEditing[postID] = false;
            $scope.post = {};
        };

        $scope.isAnyEditing = function() {
            return Object.values($scope.isEditing).includes(true);
        };


    });