angular.module('redditApp', [])
  .controller('redditController', redditController)
  .factory('redditFactory', redditFactory)

function redditController($scope, redditService) {
  $scope.posts = redditService.getPosts();
  $scope.addPost = function(newPost) {
    redditService.addPost(newPost);
    $scope.newPost = '';
  }
}

function redditService() {
  var posts = [
    {
      image: 'http://lorempixel.com/160/120',
      title: 'Outside Aspen',
      author: 'ben111',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      posted: 'date',
      comments: 0,
      votes: 0
    },
    {
      image: 'http://lorempixel.com/160/120',
      title: 'Nothing Good',
      author: 'ben121',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      posted: 'date',
      comments: 0,
      votes: 0
    },
    {
      image: 'http://lorempixel.com/160/120',
      title: 'Rainbows',
      author: 'ben131',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      posted: 'date',
      comments: 0,
      votes: 0
    }
  ];
  return {
    getPosts: function() {
      return posts;
    },
    addPost: function() {
      posts.push(newPost)
    }
  }
}

// app.service('submitNow', function() {
//   $scope.vm.newpost = true;
// });
/*
app.service('callUpvote', function() {
  this.upvote = function(post) {
    return post.votes += 1;
  };
});

app.service('callDownvote', function() {
  this.downvote = function(post) {
    return post.votes -= 1;
  };
});
*/

//post service - get posts, make posts

app.factory('makePost', function() {

});
