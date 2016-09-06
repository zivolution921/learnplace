function ChapterService($http, $stateParams) {
  var services = {};
  var endpoint = '/api/v1/schools/' + $stateParams.school_id + '/courses/' + $stateParams.course_id;
  // var endpoint = '/api/v1/schools';

  services.get = function(course_id, school_id, chapter_id) {
     return $http.get(endpoint + '/chapters');
  }

  // services.update = function(chapter){
  //   $http.put(endpoint + '/' + school_id + '/courses/' + course_id + chapters + chapter.id, {
  //     name: chapter.name
  //   });
  // }

  return services;
}

angular
  .module('learnplace')
  .factory('ChapterService', ChapterService);