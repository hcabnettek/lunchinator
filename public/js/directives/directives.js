'use strict';

angular.module('lunchinator.directives', []).
	directive('lunchWiz', function(lunchSvc){
		return function($scope, element, attrs, controller){
			var wizard = $('#lunch-wiz').wizard({});
			$scope.showWizard = function(){
				wizard.show();
			};
		};
	});