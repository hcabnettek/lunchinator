'use strict';

angular.module('lunchinator.directives', [])
	.directive('lunchWiz', function(lunchSvc){
		return function($scope, element, attrs, controller){
			var wizard = $('#lunch-wiz').wizard({});
			$scope.showWizard = function(){
				wizard.show();
			};
		};
	}).directive('newUser', function(userSvc){
		return {
			restrict: 'E',
			controller: function($scope, $attrs, userSvc){
				$scope.save = function(){
					if($scope.data.newUser.Password === $scope.data.newUser.RepeatPassword){
						var user = $scope.data.newUser;
						var data = new userSvc();
						data.Name = {First: user.Name.First, Last: user.Name.Last};
						data.Email = user.Email;
						data.Password = user.Password;
						data.$save(function(a, b){
							console.log(a);
							console.log(b);
							//return a defered promise?
						});
					}
					
				};
			},
			replace: true,
			templateUrl: '/partials/user/newUser'
		};
	});