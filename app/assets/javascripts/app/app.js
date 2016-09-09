angular
  .module("learnplace", ['ui.router','templates', 'Devise'])
  .config(function ($stateProvider, $urlRouterProvider, AuthProvider) {
    console.log("hello world app.js")

    $stateProvider
        .state('home', {
           url: '/',
           templateUrl: 'home.html',
           controller: 'HomeController'
        })
        .state('home.schools_index', {
          url: 'schools',
          templateUrl: 'schools/index.html',
          controller: 'IndexController',
          resolve: {
            schools: function(SchoolService){ 
              return SchoolService.list();
            }
          }
        })
        .state('home.schools_courses', {
          url: 'schools/:school_id/courses',
          templateUrl: 'courses/index.html',
          controller: 'CoursesController',
          resolve: {
            schools: function($stateParams, SchoolService){
              console.log("$stateParams", $stateParams);
              return SchoolService.get($stateParams.school_id);
            },
            courses: function($stateParams, CourseService) {
              console.log("$stateParams", $stateParams);
              return CourseService.list($stateParams.school_id);
            }
            // chapters: function(ChapterService) {
            //   return ChapterService.list();
            // }
          }
        })
        .state('home.schools_courses_chapters', {
          url: 'schools/:school_id/courses/:course_id/chapters',
          templateUrl: 'chapters/index.html',
          controller: 'ChaptersController',
          resolve: {
            schools: function($stateParams, SchoolService){
              return SchoolService.get($stateParams.school_id);
            },
            courses: function($stateParams, CourseService) {
              return CourseService.get($stateParams.course_id, $stateParams.school_id);
            },
            chapters: function($stateParams, ChapterService) {
              return ChapterService.list($stateParams.course_id, $stateParams.school_id);
            }
          }
        })
        .state('home.login', {
          url: 'login',
          templateUrl: 'logins/new.html',
          controller: 'LoginController'
        })
        .state('home.school_new', {
          url: 'schools_new',
          templateUrl: 'schools/new.html',
          controller: 'NewController'
        })
        .state('home.signup', {
          url: 'signup',
          templateUrl: 'registrations/new.html',
          controller: 'RegistrationController'
        });
        $urlRouterProvider.otherwise('/');
 
      });