angular
  .module("learnplace")
  .controller("NewController", function($scope, $http, $state){
    $scope.school = {
      name: ''
    };
    $scope.errors = [];

    $scope.create = function() {
      $http.post('/api/v1/schools', {
        school: $scope.school
      }).then(function(result){
        $state.go('schools_index');
      }, function(response){
        $scope.errors = response.data.errors;
      });
    }
  })
  .controller("IndexController", function($scope, $http) {
    var DATA = [];
    
    $scope.query = '';

    $scope.doSearch = function(){
      $scope.schools = DATA.filter(function(item){
        return item.name.indexOf($scope.query) != -1;
      });
    };

    $http.get('/api/v1/schools').then(function successCallback(response) {
        DATA = response.data;
        $scope.schools = DATA;
      }, function errorCallback(response) {
        console.log(response);
      });
  });
