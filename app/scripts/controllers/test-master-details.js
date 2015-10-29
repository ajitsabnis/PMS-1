'use strict';

/**
 * @ngdoc function
 * @name pmsappApp.controller:TestMasterDetailsCtrl
 * @description
 * # TestMasterDetailsCtrl
 * Controller of the pmsappApp
 */
angular.module('pmsappApp').controller('TestMasterDetailsCtrl', function ($scope) {
     $scope.arr1=[];
    $scope.add=function(val1) {
        var userVal = val1;
        $scope.arr1.push(userVal);
        userVal = {};
        $scope.val = {};
  };
  });
