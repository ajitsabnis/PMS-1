'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:GenricCtrl
 * @description
 * # GenricCtrl
 * Controller of the pmsApp
 */
 
angular.module('pmsApp').controller('GenricCtrl', ['$scope', 'generic', function ($scope, generic) {

    $scope.items = [
      {id: '1', cname: 'group'},
      {id: '2', cname: 'instument'},
      {id: '3', cname: 'flag'}
    ];
    
    $scope.arr1=[];
    $scope.add=function(val1) {
        var userVal = val1;
        $scope.arr1.push(userVal);
        userVal = {};
        $scope.val = {};
    };

   /*generic.query({}, function (data) {
      $scope.pmsdata = data;
	 });*/
    
  
  }]);
