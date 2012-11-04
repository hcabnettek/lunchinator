angular.module('restaurant.services', []);
angular.module('restaurant.directives', []);
angular.module('restaurant.filter', []);

angular.module('restaurant', [
	'restaurant.services',
	'restaurant.directives',
	'restaurant.filter',
	'lunchinator'
]);