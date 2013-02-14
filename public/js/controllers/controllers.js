'use strict';
angular.module('lunchinator.controllers', [])
  .controller('MainCtrl', function($scope) {
   
}).controller('LunchAddCtrl', function($scope) {
		
}).controller('LunchCtrl', function($scope) {
  
}).controller('UserCtrl', function($scope, $routeParams, userSvc){
	
	var model = userSvc.get({userId: $routeParams.userId}, function(){
		$scope.data = {user: model.user};
		console.log($scope.data);
	});

}).controller('UsersCtrl', function($scope, $location, userSvc){

	var model = userSvc.list(function(){
		$scope.data = {users: model.users};
	});

	$scope.detail = function(idx){
		var user = $scope.data.users[idx];
		console.log(user);
		$location.path('/user/' + user._id);
	};

}).controller('RestaurantCtrl', function($scope){
	
}).controller('RestaurantsCtrl', function($scope){
	
});