'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:StaffMasterCtrl
 * @description
 * # StaffMasterCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp').controller('StaffMasterCtrl', ['$scope', 'localStorageService', '$location', '$rootScope', 
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