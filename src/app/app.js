
angular.module('fave', [
  'ngRoute',
  'fave.todo',
  'fave.home',
  'fave.canvas',
  'fave.questionnaire'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/canvas', {
      controller: 'CanvasCtrl',
      templateUrl: '/fave/canvas/canvas.html'
    })
    .when('/home', {
      controller: 'HomeCtrl',
      templateUrl: '/fave/home/home.html'
    })
    .when('/questionnaire', {
      controller: 'QuestionnaireCtrl',
      templateUrl: '/fave/questionnaire/questionnaire.html'
    })
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/fave/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
