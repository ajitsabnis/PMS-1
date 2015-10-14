'use strict';

/**
 * @ngdoc overview
 * @name pmsappApp
 * @description
 * # pmsappApp
 *
 * Main module of the application.
 */
angular
  .module('pmsappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
	'ui.router'
  ])
  .config(['$stateProvider','$urlRouterProvider',
     function ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/");
    $stateProvider
	  .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
	  .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
  }]);
  