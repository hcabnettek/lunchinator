'use strict';
lunchinator.directive('myDirective', function(){

	return function(scope, element, attrs){

		scope.$watch('prop', function(){
			var options = {};
			var wizard = $('#lunch-wizard').wizard(options);
		});
	}; 
});

lunchinator.controller('LunchCtrl', function($scope, $http) {
   /*$http.get('/lunch').
		success(function(data, status, headers, config){
			$scope.lunches = data.lunches;
		});*/
});

lunchinator.controller('LunchAddCtrl', function($scope, $http) {
   
/*
   	$scope.foo = function(){
		console.log(foo);
	};
	*/
});