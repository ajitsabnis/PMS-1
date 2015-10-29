'use strict';

/**
 * @ngdoc function
 * @name pmsappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pmsappApp
 */
angular.module('pmsappApp')
  .controller('AboutCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.users = [];
  });
