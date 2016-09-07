angular 
  .module("learnplace")
  .controller("NavbarController", NavbarController);

function NavbarController($scope, Auth, $log){
  
  $scope.isSignedIn = Auth. isAuthenticated;

  Auth.currentUser().then(function(response){
    $scope.email = response.email;
    // $scope.logout = Auth.logout;
  }, function(){
    
  }); 

  $scope.logout = function() {
      alert("you logout");

    Auth.logout().then(function(oldUser) {
            alert(oldUser.username + "you're signed out now.");
        }, function(error) {
            // An error occurred logging out.
    });
  }

  // $scope.signedIn = function(){
  //     return $scope.email;
  //   };
};