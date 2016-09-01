angular
  .module("learnplace")
  .controller("RegistrationController", function($scope, $http, $state, Auth){  
    
    $scope.register = function() {
      Auth.register($scope.user).then(function (response) {
            $state.go('schools_index')
            
        }, function (response) {
            
            $scope.errors = JSON.stringify(response.data.errors);
            // $scope.sign_up_status = "alert alert-danger";
            // $scope.sign_up_message = "Unable to complete registration";
            // fadeAlert("#sign_up_alert");
        });
    }

    // function fadeAlert(id) {
    //   $(id).fadeTo(3000, 0);
    // }
  });
  
