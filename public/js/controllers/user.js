'use strict';

function UserCtrl($scope, $routeParams, UserApi) {
	var userId = $routeParams.userId;
	 
}

function UsersCtrl ($scope, $http) {
 
  $http.get('/user').
		success(function(data, status, headers, config){
			$scope.users = data.users;
		});

  $scope.edit = function(id){
  	window.hash = '/#/user/id';
  };
 
}