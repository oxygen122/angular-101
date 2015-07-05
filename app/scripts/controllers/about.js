'use strict';

/**
 * @ngdoc function
 * @name 1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the 1App
 */
angular.module('1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
