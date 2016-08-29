angular
  .module("learnplace", ['ui.router', 'templates'])
  .config(function ($stateProvider, $urlRouterProvider) {
    console.log("hello world app.js")
    $stateProvider
        .state('schools_index', {
          url: '/',
          templateUrl: 'app/templates/schools/index.html',
          controller: 'IndexController'
        })
        .state('school_new', {
          url: '/schools_new',
          templateUrl: 'app/templates/schools/new.html',
          controller: 'NewController'
        });
        $urlRouterProvider.otherwise('/');
      });