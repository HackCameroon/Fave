angular
  .module('fave.questionnaire')
  .controller('QuestionnaireCtrl', function ($scope, $window) {
    'use strict';
    $scope.questions = ['Are you safe? ', 'Are you {analyzed data on - category based on country/region/age type of abuse} abused ?', 'People in age group from your state appear to have been abused like so. Is this true for you? ', 'Then, has this happened many times before?'];

    $scope.questionnaire = {};

    $scope.save = function(question, answer) {
      $scope.questionnaire[question] = answer;
    }

    $scope.isFull = function() {
      return Object.keys($scope.questionnaire).length == 4;
    }
  });
