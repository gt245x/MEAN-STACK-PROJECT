angular.module('myApp')
    .controller('BlogController', function ($http) {
        var bm = this;
        bm.header = "Blog";

        bm.createPost = createPost;
        bm.deletePost = deletePost;
        bm.editPost = editPost;
        bm.updatePost = updatePost;

        function init() {
            getAllPosts()
        };
        init();

        function getAllPosts() {
            $http
                .get('/api/blogs')
                .then(function (allPosts) {
                    bm.allposts = allPosts.data;
                })
        };




        function createPost(post) {
            if (post && post.title && post.content) {
                $http
                    .post("/api/blogs", post)
                    .then(function (response) {
                        bm.post = '';
                        getAllPosts()
                    })
            } else {
                bm.missingItemError="You have not supplied enough details"
            }
        };
        function deletePost(postId){
            if (postId) {
                $http.delete("/api/blogs/" + postId)
                    .then(function(response) {
                        getAllPosts();
                    }, function (error) {
                        console.log('An error occured', error.data)
                        });
            }
        };

        function editPost(postID) {
            if (postID) {
                $http.get("/api/blogs/"+postID)
                    .then(function (post) {
                        bm.post = post.data;
                    })
            }
        };

        function updatePost(post) {
            if (post) {
                $http
                    .put("/api/blogs/"+post._id, post)
                    .then(function(response) {
                        bm.post = '';
                        getAllPosts();
                    })
            }
        }



    });