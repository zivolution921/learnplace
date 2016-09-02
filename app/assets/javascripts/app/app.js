angular
  .module("learnplace", ['ui.router', 'templates', 'Devise'])
  .config(function ($stateProvider, $urlRouterProvider) {
    console.log("hello world app.js")
    $stateProvider
        .state('schools_index', {
          url: '/',
          templateUrl: 'app/templates/schools/index.html',
          controller: 'IndexController'
        })
        .state('courses', {
          url: 'courses',
          templateUrl: 'app/templates/courses/index.html',
          controller: 'IndexController'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'app/templates/logins/new.html',
          controller: 'LoginController'
        })
        .state('school_new', {
          url: '/schools_new',
          templateUrl: 'app/templates/schools/new.html',
          controller: 'NewController'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'app/templates/registrations/new.html',
          controller: 'RegistrationController'
        });
        $urlRouterProvider.otherwise('/');
 
      });