(function(){
'use strict';

angular.module('gameOfBees', [
	'ngRoute'
	])
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.otherwise({redirectTo: '/main'});
	}]);
})();