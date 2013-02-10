angular.module('api',[ngResource])
	.service('firstTry', function(){
	
		var lunchResource = $resource('/lunch/:lunchId',
	 		{lunchId: '@id'} ,{ 'update': { method: 'PUT'} });

		var userResource = $resource('/user/:id',
	 		{id: '@id'} ,{ 'update': { method: 'PUT'} });

		var restaurantResource = $resource('/restaurant/:id',
	 		{id: '@id'} ,{ 'update': { method: 'PUT'} });

		return {
			lunch: lunchResource,
			user: userResource,
			restaurant: restaurantResource
		};
});

