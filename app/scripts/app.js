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
    .state('/addcontactcategory', {
        url: '/addcontactcategory',
        templateUrl: 'views/addcontactcategory.html',
        controller: 'MainCtrl'
      })
    .state('/addexamtype', {
        url: '/addexamtype',
        templateUrl: 'views/addexamtype.html',
        controller: 'MainCtrl'
      })
    .state('/addsnippet', {
        url: '/addsnippet',
        templateUrl: 'views/addsnippet.html',
        controller: 'MainCtrl'
      })
    .state('/addflag', {
        url: '/addflag',
        templateUrl: 'views/addflag.html',
        controller: 'MainCtrl'
      })
    .state('/addsample', {
        url: '/addsample',
        templateUrl: 'views/addsample.html',
        controller: 'MainCtrl'      
      })
    .state('/addinstrument', {
        url: '/addinstrument',
        templateUrl: 'views/addinstrument.html',
        controller: 'MainCtrl'
      })
    .state('/addmethod', {
        url: '/addmethod',
        templateUrl: 'views/addmethod.html',
        controller: 'MainCtrl'
      })
  }]);
  