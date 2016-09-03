angular
  .module("learnplace")
  .controller("LoginController", function($scope, $http, $state, Auth){  
    $scope.login = function() {
      Auth.login($scope.user, { interceptAuth: false }).then(function (response) {
        $state.go('schools_index')   
      }, function (response) {
        $scope.error = response.data.error;
      });
    }
  });
  
