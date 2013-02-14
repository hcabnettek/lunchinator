'use strict';

angular.module('api',['ngResource'])
  .factory('userSvc', function($resource){
    var userSvc = $resource('/user/:userId',
      {userId: 'OU812'} ,{
        'list': { method: 'GET', params: {userId:''} }
      });

   /* userResource.prototype.update = function(cb){
      return userResource.update({id: this._id.$oid},
         angular.extend({}, this, {_id:undefined}), cb);
    } */
    
    return userSvc;
  })
  .factory('lunchSvc', function($resource){
    var lunchSvc = $resource('/lunch/:lunchId',
      {lunchId: '@lunchId'} ,{ 'update': { method: 'PUT'} });

    lunchSvc.prototype.update = function(cb){
      return lunchSvc.update({id: this._id.$oid},
         angular.extend({}, this, {_id:undefined}), cb);
    };
    
    return lunchSvc;
  })
  .factory('restaurantSvc', function($resource){
    var restaurantSvc = $resource('/restaurant/:id',
      {id: '@id'} ,{ 'update': { method: 'PUT'} });

    restaurantSvc.prototype.update = function(cb){
      return restaurantSvc.update({id: this._id.$oid},
         angular.extend({}, this, {_id:undefined}), cb);
    };
    
    return restaurantSvc;
  });