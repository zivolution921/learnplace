(function () {
  'use strict';
  angular 
    .module("learnplace")
    .controller("ChaptersController", ChaptersController)

  function ChaptersController($scope, $http, $state, $stateParams, SchoolService, CourseService, ChapterService) {
    
    var DATA = [];
    var endpoint = '/api/v1/schools/' + $stateParams.school_id + '/courses/' + $stateParams.course_id;

    function clear(){
      $scope.chapter = {
        name: '',
        description: ''
      };
    }

    clear();

    $scope.school_id = $stateParams.school_id;
    $scope.errors = [];
    $scope.query = '';
    $scope.school_name = '';
    $scope.course_name = '';

    $scope.doSearch = function(){
      $scope.chapters = DATA.filter(function(item){
        return item.name.indexOf($scope.query) != -1;
      });
    };

    $scope.update = function(chapter){
      school.edit = false;
      CourseService.update(chapter);
    };


    $scope.create = function() {
      ChapterService.create($stateParams.school_id, $stateParams.course_id, $scope.chapter).then(function(result){
        console.log("RESULTS", result.data.name);
        DATA.push(result.data);
        clear();
        $state.go('home.schools_courses_chapters');
      }, function(response){
        $scope.errors = response.data.errors;
      });
    }


    // Using Services

    SchoolService.get($stateParams.school_id).then(function(response){
     $scope.school_name = response.data.name;
    });

    CourseService.get($stateParams.course_id, $stateParams.school_id).then(function(response){
     $scope.course_name = response.data.name;
    });

    ChapterService.list($stateParams.course_id, $stateParams.school_id).then(function(response) {
      console.log("response", response);
      console.log(" controllers $stateParams", $stateParams);
        DATA = response.data;
        $scope.chapters = DATA;
      }, function(response) {
        console.log(response);
      });
  }
})();

