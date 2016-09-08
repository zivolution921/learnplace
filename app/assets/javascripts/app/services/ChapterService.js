function ChapterService($http) {
  var services = {};
  var endpoint = '/api/v1/schools';

  services.get = function(course_id, school_id, chapter_id) {
    return $http.get(endpoint + '/' + school_id + '/courses/' + course_id + '/chapters/' + chapter_id); 
  }
  // list
  services.list = function(course_id, school_id) {
    return $http.get(endpoint + '/' + school_id + '/courses/' + course_id + '/chapters');
  }

  // post
  services.create = function(school_id, course_id, chapter) {
    var promise = $http.post(endpoint + '/' + school_id + '/courses/' + course_id + '/chapters', {
      chapter: chapter
    });
    return promise;
  }


  return services;
}

angular
  .module('learnplace')
  .factory('ChapterService', ChapterService);