angular
  .module("learnplace")
  .controller("LoginController", function($scope, $state, Auth){  
    $scope.login = function() {
      Auth.login($scope.user).then(function (response) {
        $state.go('home.schools_index')   
      }, function (response) {
        $scope.error = response.data.error;
      });
    }
  });
  
