function ChapterService($http, $stateParams) {
  var services = {};
  var endpoint = '/api/v1/schools/' + $stateParams.school_id + '/courses/' + $stateParams.course_id;
  // var endpoint = '/api/v1/schools';

  services.get = function(course_id, school_id, chapter_id) {
     return $http.get(endpoint + '/chapters');
  }
  // list
  services.list = function() {
    return $http.get(endpoint + '/chapters');
  }

  // post
  services.create = function(chapter) {
    var promise = $http.post(endpoint + '/chapters', {
        chapter: chapter
    });
    return promise;
  }


  return services;
}

angular
  .module('learnplace')
  .factory('ChapterService', ChapterService);