'use strict';
!(function($){

	var globalReg = {},
		getInstance = function(id){
			var dispatcher = id && globalReg[id],
				queue = null;

			if(!dispatcher){
				queue = $.Callbacks();
				dispatcher = {
					pub: queue.fire,
					sub: queue.add,
					unsub: queue.remove
				};

				if(id){
					globalReg[id] = dispatcher;
				}
			}

			return dispatcher;
		};

	angular.module('messaging', []).
		service('MessageQueue', function(){
			return {
				getInstance: getInstance
			};
		}).factory('Pipeline', ['MessageQueue', function(MessageQueue){
			var build = function(actions){
				var api = {};
				angular.forEach(actions.split(' '),
					function(action){
						var customMQ = MessageQueue.getInstance(action),
							pub = 'pub' + action,
							sub = 'sub' + action,
							unsub = 'unsub' + action;

						api[pub] = customMQ.pub;
						api[sub] = customMQ.sub;
						api[unsub] = customMQ.unsub;

					});
				return api;
			};

			return {
				getInstance: build
			 };
		} ]).factory();

}).call(window, $);