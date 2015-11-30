'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:UserAccountCtrl
 * @description
 * # UserAccountCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp').controller('UserAccountCtrl', ['$scope', 'localStorageService', '$location', '$rootScope', 
	function ($scope, localStorageService, $location, $rootScope) {
    
	$scope.users = [];
	function init() {
		$rootScope.isLogin = localStorageService.get('isLogin');
		if($rootScope.isLogin) {
	    	console.log('About Controller');
	    }else {
	    	$location.path('login');
	    	return false;
	  	}
	}
	init();
}]);