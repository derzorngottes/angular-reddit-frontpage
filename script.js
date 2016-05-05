var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function myCtrl($scope) {
  $scope.vm = {};
  $scope.vm.newpost = false;
  $scope.vm.posts = [
    {
      image: 'http://placehold.it/160x120',
      title: 'Outside Aspen',
      author: 'ben111',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      posted: 'date',
      comments: 0,
      votes: 0
    },
    {
      image: 'http://placehold.it/160x120',
      title: 'Nothing Good',
      author: 'ben121',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      posted: 'date',
      comments: 0,
      votes: 0
    },
    {
      image: 'http://placehold.it/160x120',
      title: 'Rainbows',
      author: 'ben131',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
      posted: 'date',
      comments: 0,
      votes: 0
    }
  ];
}]);


app.service('submitNow', function() {
  $scope.vm.newpost = true;
});
