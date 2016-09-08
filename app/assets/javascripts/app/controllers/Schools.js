(function () {
  'use strict';
  angular
    .module("learnplace")
    .controller("NewController", ['$scope', '$filter', '$state', 'SchoolService', function($scope, $filter, $state, SchoolService){
      $scope.school = {
        name: ''
      };
      $scope.errors = [];
      
      $scope.create = function() {
        SchoolService.create($scope.school).then(function(result){
          $state.go('home.schools_index');
        }, function(response){
          $scope.errors = response.data.errors;
        });
      }
    }])
    .controller("IndexController", function(schools, SchoolService, Auth, $scope, $filter) {
      var DATA = schools.data;
      $scope.schools = DATA;

      $scope.handle = '';

      $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
      };
      
      $scope.query = '';

      $scope.update = function(school){
        school.edit = false;
        SchoolService.update(school);
      };

      $scope.doSearch = function(){
        $scope.schools = DATA.filter(function(item){
          return item.name.indexOf($scope.query) != -1;
        });
      };

      
    });
})();
