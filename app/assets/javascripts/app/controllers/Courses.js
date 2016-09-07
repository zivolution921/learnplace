(function () {
  'use strict';
  angular 
    .module("learnplace")
    .controller("CoursesController", CoursesController);

    function CoursesController($scope, $http, $stateParams, SchoolService) {
      var DATA = [];
      var endpoint = '/api/v1/schools/' + $stateParams.school_id + '/courses';
     
      $scope.course = {
        name: '',
        description: ''
      };
      $scope.query = '';
      $scope.school_name = '';

      $scope.doSearch = function(){
        $scope.courses = DATA.filter(function(item){
          return item.name.indexOf($scope.query) != -1;
        });
      };

      $scope.update = function(course){
        course.edit = false;
        CourseService.update(course);
      };

      $scope.create = function(){

        var success = function(response){
          DATA.push(response.data);
          $scope.course = {
            name: '',
            description: ''
          };
        };

        var unsuccess = function(response){
          $scope.errors = response.data.errors;
        };

        $http.post(endpoint, $scope.course).then(success, unsuccess);
      };

      SchoolService.get($stateParams.school_id).then(function(response){
       $scope.school_name = response.data.name;
      });

      $http.get(endpoint).then(function(response) {
          DATA = response.data;
          $scope.courses = DATA;
        }, function(response) {
          console.log(response);
      });
    }
})();