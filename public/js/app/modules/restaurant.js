angular.module('restaurant.services', []);
angular.module('restaurant.directives', [])
	.directive('restaurant', function(){
		return {
			restrict: 'E',
			template: '<li>Hello World</li>'
		}
	});
angular.module('restaurant.filter', []);

angular.module('restaurant', [
	'restaurant.services',
	'restaurant.directives',
	'restaurant.filter',
	'lunchinator'
]);