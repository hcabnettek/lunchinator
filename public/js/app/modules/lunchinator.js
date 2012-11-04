angular.module('lunchinator.service', []);
angular.module('lunchinator.directive', [])
	.directive('restaurant', function(){
		return {
			replace: true,
			restrict: 'C',
			template: '<li>Restaurant</li>'
		};
	});
angular.module('lunchinator.filter', []);

angular.module('lunchinator', ['lunchinator.service', 'lunchinator.directive', 'lunchinator.filter']);

var LunchinatorController = function($scope){
	
};
