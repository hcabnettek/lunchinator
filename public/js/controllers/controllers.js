'use strict';
angular.module('lunchinator.controllers', [])
  .controller('MainCtrl', function($scope) {
   
}).controller('LunchCtrl', function($scope) {
  
}).controller('UserCtrl', function($scope, $routeParams, userSvc){
	
	var model = userSvc.get({userId: $routeParams.id}, function(){
		$scope.data = {user: model.user};
		//console.log($scope.data);
	});

}).controller('UserEditCtrl', function($scope, $location, userSvc){

	$scope.data = { userToEdit : store.get('user-to-edit')};
	$scope.save = function(){
		console.log('save');
	};

}).controller('UsersCtrl', function($scope, $location, userSvc){

	var model = userSvc.list(function(){
		$scope.data = {users: model.users};
	});

	$scope.detail = function(idx){
		var user = $scope.data.users[idx];
		//lets put in local storage
		store.set('user-to-edit', user);
		$('#userModal').modal('show');
		//$location.path('/user/' + user._id);
	};

}).controller('RestaurantCtrl', function($scope){
	
}).controller('RestaurantsCtrl', function($scope){
	
});