angular 
  .module("learnplace")
  .controller("ChaptersController", ChaptersController)
  

  function ChaptersController($scope, $http, $stateParams, SchoolService, CourseService, ChapterService) {
    
    var DATA = [];
    var endpoint = '/api/v1/schools/' + $stateParams.school_id + '/courses/' + $stateParams.course_id;

    $scope.chapter = {
      name: '',
      description: ''
    };

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


    $scope.create = function(){

      var success = function(response){
        DATA.push(response.data);
        $scope.chapter = {
          name: '',
          description: ''
        };
        $scope.newChapter = response.data;
      };

      var unsuccess = function(response){
        $scope.errors = response.data.errors;
      };

      

      $http.post(endpoint + '/chapters',
        {name: $scope.chapter.name, description: $scope.chapter.description}).then(success, unsuccess);
    };

    // Using Services

    SchoolService.get($stateParams.school_id).then(function(response){
     $scope.school_name = response.data.name;
    });

    CourseService.get($stateParams.course_id, $stateParams.school_id).then(function(response){
     $scope.course_name = response.data.name;
    });

    ChapterService.get($stateParams.chapter_id, $stateParams.course_id, $stateParams.school_id).then(function(response) {
      $scope.chapter_name = response.data.name;
    });

    // $http.get(endpoint + '/chapters').then(function(response) {
    //     DATA = response.data;
    //     $scope.chapters = DATA;
    //   }, function(response) {
    //     console.log(response);
    // });
  }

