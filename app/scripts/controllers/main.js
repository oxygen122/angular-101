'use strict';

/**
 * @ngdoc function
 * @name 1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 1App
 */
angular.module('1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
