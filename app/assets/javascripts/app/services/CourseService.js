function CourseService($http) {
  var services = {};
  var endpoint = '/api/v1/schools';

  services.get = function(course_id, school_id) {
     return $http.get(endpoint + '/' + school_id + '/courses/' + course_id);
  }

  return services;
}

angular
  .module('learnplace')
  .factory('CourseService', CourseService);