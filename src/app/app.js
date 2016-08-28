
angular.module('fave', [
  'ngRoute',
  'fave.todo',
  'fave.home',
  'fave.canvas',
  'fave.chat',
  'fave.questionnaire',
  'fave.nav'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/canvas', {
      controller: 'CanvasCtrl',
      templateUrl: '/fave/canvas/canvas.html'
    })
    .when('/', {
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
    .when('/chat', {
      controller: 'ChatCtrl',
      templateUrl: '/fave/chat/chat.html'
    })
    .otherwise({
      redirectTo: '/'
    });


});
