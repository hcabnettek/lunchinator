'use strict';

var lunchinator = angular.module('lunchinator', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/users',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);