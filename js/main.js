var movieSearch = angular.module('movieSearch', []);
      movieSearch.controller('movieCtrl', function ($scope, $http){
        

        $scope.searchOMDB = function() {
          $http.get("http://www.omdbapi.com/?s=" + $scope.movieTitle + "&y=&plot=short&r=json").success(function(data) {
          $scope.results = data.Search;
        });
          $scope.movieTitle = '';
        };

      });