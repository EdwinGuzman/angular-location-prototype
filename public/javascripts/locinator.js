var app = angular.module('locinator', ['ngRoute', 'geolocation']);

// app.config(function($httpProvider) {
//   delete $httpProvider.defaults.headers.common['X-Requested-With'];
// });
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../test.html',
      controller: 'loc'
    })
    .when('/test', {
      templateUrl: '../test2.html',
      controller: 'location2'
    });
});


app.controller('loc', function ($scope, $http, geolocation, UserLocation) {
  $scope.userLocation = UserLocation;

  geolocation.getLocation()
    .then(function (data) {
      $scope.userLocation.coords = { 
        lat: data.coords.latitude,
        long: data.coords.longitude
      };

      console.log($scope.userLocation);
    }, function (err) {
      console.log(err);
    });


  $scope.setLocations = function (locations) {
    $scope.allLocations = locations;
    //console.log($scope.allLocations);
  };

});

app.controller('location2', function($scope, UserLocation) {
  console.log($scope.userLocation);
  console.log(UserLocation);
});

app.factory('UserLocation', function () {
  return {};
});