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

    $scope.add = function(data){
    

  
    $scope.G_id = $scope.selectedItem.id;
    $scope.gval = $scope.gname;
  };


    genericcat.post($scope.G_id, $scope.gval, function (val){
          $scope.arr = val.data;
    });
 
  
  }]);
