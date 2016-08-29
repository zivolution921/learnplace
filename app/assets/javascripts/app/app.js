angular
  .module("learnplace", ['ui.router', 'templates'])
  .config(function ($stateProvider, $urlRouterProvider) {
    console.log("hello world app.js")
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/templates/home.html',
            controller: 'HomeController'

        });
        $urlRouterProvider.otherwise('/');
      });