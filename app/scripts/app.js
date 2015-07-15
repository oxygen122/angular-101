'use strict';

/**
 * @ngdoc overview
 * @name 1App
 * @description
 * # 1App
 *
 * Main module of the application.
 */
angular
  .module('1App', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/controllers.html',
        controller: 'ControllersCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
