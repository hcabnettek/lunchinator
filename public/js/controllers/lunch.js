'use strict';

lunchinator.controller('LunchCtrl', function($scope, $http) {
   $http.get('/lunch').
		success(function(data, status, headers, config){
			$scope.lunches = data.lunches;
		});
});

lunchinator.controller('LunchAddCtrl', function($scope, $http) {
   $http.get('/lunch/new').
		success(function(data, status, headers, config){
			$scope.users = data.users;
			$scopr.restaurants = data.restaurants;
			$scope.newLunch = { invitees: {}, restaurant: {} };
		});

	$scope.foo = function(){
		console.log(foo);
	};
});