'use strict';

var lunchinator = angular.module('lunchinator', ['api', 'lunchinator.controllers', 'lunchinator.directives'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/main/main',
        controller: 'MainCtrl'
      })
      .when('/user/:id', {
        templateUrl: '/partials/user/user',
        controller: 'UserCtrl'
      })
       .when('/user', {
        templateUrl: '/partials/user/users',
        controller: 'UsersCtrl'
      })
      .when('/restaurant', {
        templateUrl: '/partials/restaurant/restaurants',
        controller: 'RestaurantsCtrl'
      })
      .when('/restaurant/:id', {
        templateUrl: '/partials/restaurant/restaurant',
        controller: 'RestaurantCtrl'
      })
      .when('/lunch/new', {
        templateUrl: '/partials/lunch/newLunch',
        controller: 'LunchCtrl'
      })
       .when('/lunch/:id', {
        templateUrl: '/partials/lunch/lunch',
        controller: 'LunchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  }]);