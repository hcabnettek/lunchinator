angular.module('lunchinator.directives', []).
	directive('lunchWiz', function(){
		return {
			link: function(scope, elem, attr){
				console.log('lunchWiz directive');
			}
		}
	})