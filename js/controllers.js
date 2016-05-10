app.controller('redditCtrl', function($scope, redditService) {
  $scope.posts = redditService.getPosts();

  $scope.addPost = function(newPost) {
    var date = new Date();
    var formatDate = moment(date).startOf().fromNow();
    newPost.posted = formatDate.charAt(0).toUpperCase() + formatDate.slice(1);
    newPost.comments = [];
    newPost.votes = 0;
    newPost.postDate = Date.parse(date);
    redditService.addPost(newPost);
    $scope.newPost = '';
  }
  $scope.upvote = function(post) {
    redditService.upvote(post);
  }
  $scope.downvote = function(post) {
    redditService.downvote(post);
  }
  $scope.submitPost = function() {
    $scope.newPost = !$scope.newPost;
  }
  $scope.setSortBy = function(sortMethod) {
    $scope.sortMethod = sortMethod;
  }
});

app.controller('commentCtrl', function($scope, redditService) {
  $scope.posts = redditService.getPosts();

  $scope.showComments = function() {
    $scope.showComment = !$scope.showComment;
  }
  $scope.showCommentForm = function() {
    $scope.commentForm = !$scope.commentForm;
  }
  $scope.addComment = function(post, comment) {
    var date = new Date();
    var formatDate = moment(date).startOf().fromNow();
    comment.comDate = formatDate.charAt(0).toUpperCase() + formatDate.slice(1);
    redditService.addComment(post, comment);
    $scope.commentForm = false;
  }
});
