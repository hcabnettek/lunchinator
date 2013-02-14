'use strict';

var lunchinator = angular.module('lunchinator', ['api', 'lunchinator.controllers', 'lunchinator.directives'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main/main',
        controller: 'MainCtrl'
      })
      .when('/user', {
        templateUrl: 'partials/user/users',
        controller: 'UsersCtrl'
      })
      .when('/user/:id', {
        templateUrl: 'partials/user/user',
        controller: 'UserCtrl'
      })
      .when('/restaurant', {
        templateUrl: 'partials/restaurant/restaurants',
        controller: 'RestaurantsCtrl'
      })
      .when('/restaurant/:id', {
        templateUrl: 'partials/restaurant/restaurant',
        controller: 'RestaurantCtrl'
      })
      .when('/lunch/new', {
        templateUrl: 'partials/lunch/newLunch',
        controller: 'LunchAddCtrl'
      })
       .when('/lunch/:id', {
        templateUrl: 'partials/lunch/lunch',
        controller: 'LunchCtrl'
      })
      .when('/lunch', {
        templateUrl: 'partials/lunch/lunches',
        controller: 'LunchesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      //console.log($locationProvider);
  }]);