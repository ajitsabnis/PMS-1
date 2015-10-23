'use strict';

/**
 * @ngdoc function
 * @name pmsappApp.controller:GenricCtrl
 * @description
 * # GenricCtrl
 * Controller of the pmsappApp
 */
 
angular.module('pmsappApp').controller('GenricCtrl', ['$scope', 'generic','genericcat', function ($scope, generic, genericcat) {
    
     
    console.log('Hi This is loger');
    generic.query({}, function (record){
      $scope.pmsdata = record.data;
	 });
    
    genericcat.query({}, function (valu){
      $scope.pms = valu.data;
   });

    $scope.arr1=[];
    $scope.add=function(val1) {
        var userVal = val1;
        $scope.arr1.push(userVal);
        userVal = {};
        $scope.val = {};
  };
    
    genericcat.post($scope.genric_Id, function (arr1){
          $scope.data = arr1;
    });
 
  
  }]);
