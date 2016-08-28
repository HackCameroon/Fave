
angular.module('fave', [
  'ngRoute',
  'fave.todo'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/fave/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
