angular.module('MyApp', [])
	.controller('AppCtl', ['$scope', function($scope){
		$scope.test = 1;
		this.test = 2;
	}]);