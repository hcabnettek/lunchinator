'use strict';

angular.module('api',['ngResource'])
  .factory('UserApi', function($resource){
    var userResource = $resource('/user/:userId',
      {id: '@userId'} ,{ 'update': { method: 'PUT'} });

    userResource.prototype.update = function(cb){
      return userResource.update({id: this._id.$oid},
         angular.extend({}, this, {_id:undefined}), cb);
    }
    
    return userResource;
  })
  .factory('LunchApi', function($resource){
    var lunchResource = $resource('/lunch/:lunchId',
      {lunchId: '@lunchId'} ,{ 'update': { method: 'PUT'} });

    lunchResource.prototype.update = function(cb){
      return lunchResource.update({id: this._id.$oid},
         angular.extend({}, this, {_id:undefined}), cb);
    }
    
    return lunchResource;
  })
  .factory('RestaurantApi', function($resource){
    var restaurantResource = $resource('/restaurant/:id',
      {id: '@id'} ,{ 'update': { method: 'PUT'} });

    restaurantResource.prototype.update = function(cb){
      return restaurantResource.update({id: this._id.$oid},
         angular.extend({}, this, {_id:undefined}), cb);
    }
    
    return restaurantResource;
  });

var lunchinator = angular.module('lunchinator', ['api'])
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
      .when('/lunch', { 
        templateUrl: 'partials/lunches',
        controller: 'LunchesCtrl'
      })
      .when('/lunch/:id', { 
        templateUrl: 'partials/lunch',
        controller: 'LunchCtrl'
      })
      .when('/lunch/new', { 
        templateUrl: 'partials/newLunch',
        controller: 'LunchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });      
  }]);