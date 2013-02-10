'use strict';

function RestaurantCtrl ($scope, $http) {
   $http.get('/restaurant').
		success(function(data, status, headers, config){
			$scope.restuarants = data.restaurants;
		});
}

function RestaurantsCtrl ($scope, $http) {
   $http.get('/restaurant').
		success(function(data, status, headers, config){
			$scope.restuarants = data.restaurants;
		});
}