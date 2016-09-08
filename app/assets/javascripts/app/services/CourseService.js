function CourseService($http) {
  var services = {};
  var endpoint = '/api/v1/schools';

  services.get = function(course_id, school_id) {
     return $http.get(endpoint + '/' + school_id + '/courses/' + course_id);
  }

  services.update = function(course){
    $http.put(endpoint + '/' + course.school_id + '/courses/' + course.id, {
      name: course.name
    });
  }
  services.list = function(school_id) {
    return $http.get(endpoint + '/' + school_id + '/courses');
  }

  return services;
}

angular
  .module('learnplace')
  .factory('CourseService', CourseService);