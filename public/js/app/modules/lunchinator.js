angular.module('lunchinator.service', []);
angular.module('lunchinator.directive', [])
	.directive('restaurant', function(){
		return {
			replace: true,
			restrict: 'E',
			scope: {name: '@restaurantName', address:'@restaurantAddress', url:'@restaurantUrl'},
			template: '<li class="restaurant">' +
						'<div class="name">{{ name }}</div>' +
						'<div class="address">{{ address }}</div>' +
						'<div class="url"><a href="{{ url }}" target="_blank">View</a></div>' +
						'</li>',


		};
	});
angular.module('lunchinator.filter', []);

angular.module('lunchinator', ['lunchinator.service', 'lunchinator.directive', 'lunchinator.filter']);

var LunchinatorController = function($scope){
	
};
