'use strict';

/**
 * @ngdoc function
 * @name pmsappApp.controller:GenricCtrl
 * @description
 * # GenricCtrl
 * Controller of the pmsappApp
 */
 
angular.module('pmsappApp').controller('GenricCtrl', ['$scope', 'generic', function ($scope, generic) {
    $scope.items = [
      {id: '1',cname:'group'},
      { id: '2',cname:'instrument'},
      { id: '3',cname:'flag'},
		  {id: '4',cname:'method'}
    ];
     $scope.arr1=[];
    $scope.add=function(val1) {
        var userVal = val1;
        $scope.arr1.push(userVal);
        userVal = {};
        $scope.val = {};
  };

   generic.query({}, function (data){
      $scope.pmsdata= data;
	 });
    
  
  }]);
