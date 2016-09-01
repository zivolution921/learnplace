angular
  .module("learnplace")
  .controller("LoginController", function($scope, $http, $state, Auth){  

    $scope.login = function() {
      //debugger
      Auth.login($scope.user, { interceptAuth: false }).then(function (response) {
            $state.go('schools_index')
            
        }, function (response) {
            $scope.error = response.data.error;
            // $scope.sign_up_status = "alert alert-danger";
            // $scope.sign_up_message = "Unable to complete registration";
            // fadeAlert("#sign_up_alert");
        });
    }

    // function fadeAlert(id) {
    //   $(id).fadeTo(3000, 0);
    // }
  });
  
