'use strict';

var lunchinator = angular.module('lunchinator', ['api', 'lunchinator.controllers', 'lunchinator.directives'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/user', { 
        templateUrl: 'partials/users',
        controller: 'UsersCtrl'
      })
      .when('/user/:id', { 
        templateUrl: 'partials/user',
        controller: 'UserCtrl'
      })
      .when('/restaurant', { 
        templateUrl: 'partials/restaurants',
        controller: 'RestaurantsCtrl'
      })
      .when('/restaurant/:id', { 
        templateUrl: 'partials/restaurant',
        controller: 'RestaurantCtrl'
      })
      .when('/lunch/new', { 
        templateUrl: 'partials/newLunch',
        controller: 'LunchAddCtrl'
      })
       .when('/lunch/:id', { 
        templateUrl: 'partials/lunch',
        controller: 'LunchCtrl'
      })
      .when('/lunch', { 
        templateUrl: 'partials/lunches',
        controller: 'LunchesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });      
  }]);