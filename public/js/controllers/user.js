'use strict';

function UserCtrl($scope, $http){
	$http.get('/user').
		success(function(data, status, headers, config){
			console.log(data);
			$scope.users = data.users;
		});
}