angular 
  .module("learnplace")
  .controller("NavbarController", NavbarController);

function NavbarController($scope, Auth){
  Auth.currentUser().then(function(response){
    $scope.email = response.email;
    $scope.logout = Auth.logout;
  }); 

  // $scope.signedIn = function(){
  //     return $scope.email;
  //   };
};