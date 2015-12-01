'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp')
  .controller('MainCtrl', ['localStorageService', '$rootScope', '$location', 
  	function (localStorageService, $rootScope, $location) {
    
    function init() {
    	$rootScope.isLogin = localStorageService.get('isLogin');
		if($rootScope.isLogin) {
    		$rootScope.isLogin = localStorageService.get('isLogin');
		}else {
			$location.path('login');
	    	return false;
		}
    }
    init();
  }]);
