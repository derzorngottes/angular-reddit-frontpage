angular.module('redditApp', [])
  .controller('redditCtrl', redditCtrl)
  .controller('commentCtrl', commentCtrl)
  .factory('redditService', redditService)

function redditCtrl($scope, redditService) {
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
}

function commentCtrl($scope, redditService) {
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
}

function redditService() {
  var posts = [
    {
      image: 'http://lorempixel.com/160/120',
      title: 'Outside Aspen',
      author: 'ben111',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      posted: moment('2016-3-18').fromNow(),
      postDate: Date.parse('2016-3-18'),
      comments: [],
      votes: 0
    },
    {
      image: 'http://lorempixel.com/160/120',
      title: 'Nothing Good',
      author: 'ben121',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      posted: moment('2016-3-4').fromNow(),
      postDate: Date.parse('2016-3-4'),
      comments: [
        {
          comAuthor: 'fat tony',
          comText: 'reddit sucks',
          comDate: moment('2016-3-4').fromNow()
        }
      ],
      votes: 0
    },
    {
      image: 'http://lorempixel.com/160/120',
      title: 'Rainbows',
      author: 'ben131',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      posted: moment('2016-4-1').fromNow(),
      postDate: Date.parse('2016-4-1'),
      comments: [],
      votes: 0
    }
  ];
  return {
    getPosts: function() {
      return posts;
    },
    addPost: function(post) {
      posts.push(post)
    },
    upvote: function(post) {
      post.votes += 1;
    },
    downvote: function(post) {
      post.votes -= 1;
    },
    addComment: function(post, comment) {
      post.comments.push(comment);
    }
  }
}
