'use strict';
angular.module('lunchinator.controllers', [])
  .controller('MainCtrl', function($scope) {
   
}).controller('LunchAddCtrl', function($scope) {
		
}).controller('LunchCtrl', function($scope) {
  
}).controller('UserCtrl', function($scope, userSvc){
	
	//console.log($routeParams);
	//console.log(userSvc);

	//var user = userSvc.get({userId: $routeParams.userId}, function(){
		//$scope.data = {user: user};
	//});

}).controller('UsersCtrl', function($scope, userSvc){

	var model = userSvc.list(function(){
		$scope.data = {users: model.users};		
	});

	$scope.detail = function(idx){
		var user = $scope.data.users[idx];
		var hash = '#/user/' + user._id;
		//$location.hash(hash);
	};

}).controller('RestaurantCtrl', function($scope){
	
}).controller('RestaurantsCtrl', function($scope){
	
});