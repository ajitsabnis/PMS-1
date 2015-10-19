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
    .state('/descriptive test', {
        url: '/descriptive test',
        templateUrl: 'views/descriptive test.html',
        controller: 'MainCtrl'
      })
    .state('/addgroup', {
        url: '/addgroup',
        templateUrl: 'views/addgroup.html',
        controller: 'MainCtrl'
      })
    .state('/addemployeecategory', {
        url: '/addemployeecategory',
        templateUrl: 'views/addemployeecategory.html',
        controller: 'MainCtrl'
      })
    .state('/addfaculty', {
        url: '/addfaculty',
        templateUrl: 'views/addfaculty.html',
        controller: 'MainCtrl'
      })
    .state('/testmaster', {
        url: '/testmaster',
        templateUrl: 'views/testmaster.html',
        controller: 'MainCtrl'
      })
  }]);
  