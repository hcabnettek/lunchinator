'use strict';

var lunchinator = angular.module('lunchinator', ['api', 'lunchinator.controllers', 'lunchinator.directives'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/main/main',
        controller: 'MainCtrl'
      })
      .when('/user/:id/edit', {
        templateUrl: '/partials/user/newUser',
        controller: 'UserEditCtrl'
      })
      .when('/user/:id/new', {
        templateUrl: '/partials/user/newUser',
        controller: 'UserNewCtrl'
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
        controller: 'LunchAddCtrl'
      })
       .when('/lunch/:id', {
        templateUrl: '/partials/lunch/lunch',
        controller: 'LunchCtrl'
      })
      .when('/lunch', {
        templateUrl: '/partials/lunch/lunches',
        controller: 'LunchesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  }]);