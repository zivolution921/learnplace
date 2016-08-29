angular
  .module("learnplace")
  .controller("IndexController", function($scope, $http) {
    var DATA = [];
    $http.get('/api/v1/schools').then(function successCallback(response) {
        DATA = response.data;
        $scope.schools = DATA;
      }, function errorCallback(response) {
        console.log(response);
      });
  });
