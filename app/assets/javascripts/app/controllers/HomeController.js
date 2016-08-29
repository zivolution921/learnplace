angular
  .module("learnplace")
  .controller("HomeController", function($scope, $http) {
    $scope.message = "Hello";
    console.log("hello");
    // Simple GET request example:
    $scope.data = [];
    $http({
      method: 'GET',
      url: '/schools'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.data = response.data
        console.log(response);
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.data = response.data
        console.log(response);
      });
  });
