function SchoolService($http) {
  var services = {};
  var endpoint = '/api/v1/schools';

  services.list = function() {
    return $http.get(endpoint);
  }

  services.update = function(school){
    $http.put(endpoint + '/' + school.id, {
      name: school.name
    });
  }

  services.create = function(school) {
    var promise = $http.post(endpoint, {
        school: school
    });
    return promise;
  }

  return services;
}

angular
  .module('learnplace')
  .factory('SchoolService', SchoolService);