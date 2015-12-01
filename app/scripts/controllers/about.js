'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp').controller('AboutCtrl', ['$scope', 'localStorageService', '$location', '$rootScope', 
	function ($scope, localStorageService, $location, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
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