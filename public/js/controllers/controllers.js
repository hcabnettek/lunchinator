'use strict';
angular.module('lunchinator.controllers', [])
  .controller('MainCtrl', function($scope) {
   
}).controller('LunchAddCtrl', function($scope) {
		
}).controller('LunchCtrl', function($scope) {
  
}).controller('UserCtrl', function($scope, $routeParams, userSvc){

/*
	var user = UserApi.get({userId: 'foooo'}, function(){
		console.log(user);
	}, function(err){
		console.log(err);
	}); */

}).controller('UsersCtrl', function($scope, userSvc){

	var model = userSvc.list(function(){
		$scope.data = {users: model.users};
		console.log($scope.data.users);
	});
	

	//$scope.data = {users: userSvc.list()};


}).controller('RestaurantCtrl', function($scope){
	
}).controller('RestaurantsCtrl', function($scope){
	
});