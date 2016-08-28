angular
  .module('fave.questionnaire')
  .controller('QuestionnaireCtrl', function ($scope, $window, QuestionFactory) {
    'use strict';
    $scope.questions = ['Are you safe? ', 'Are you {analyzed data on - category based on country/region/age type of abuse} abused ?', 'People in age group from your state appear to have been abused like so. Is this true for you? ', 'Then, has this happened many times before?'];


  });
