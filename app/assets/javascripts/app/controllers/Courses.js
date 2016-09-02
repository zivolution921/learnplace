angular 
  .module("learnplace")
  .controller("CoursesController", CoursesController);
  function CoursesController(Course, Auth, $scope, $http, $state) {
    var ctrl = this;

    $scope.course = {
      name: ''
    };
    $scope.errors = [];

    Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });
  }
   $scope.create = function() {
      $http.post('/api/v1/courses', {
        course: $scope.course
      }).then(function(result){
        $state.go('courses_index');
      }, function(response){
        $scope.errors = response.data.errors;
      });
    }
  })
  .controller("IndexController", function($scope, $http) {
    var DATA = [];
    
    $scope.query = '';

    $scope.doSearch = function(){
      $scope.courses = DATA.filter(function(item){
        return item.name.indexOf($scope.query) != -1;
      });
    };

    $http.get('/api/v1/courses').then(function successCallback(response) {
        DATA = response.data;
        $scope.courses = DATA;
      }, function errorCallback(response) {
        console.log(response);
      });
  });