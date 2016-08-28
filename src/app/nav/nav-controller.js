angular
  .module('fave.nav')
  .controller('HeaderController', function ($scope, $location) {
    'use strict';
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };
});
