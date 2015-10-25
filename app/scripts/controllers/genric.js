'use strict';

/**
 * @ngdoc function
 * @name pmsappApp.controller:GenricCtrl
 * @description
 * # GenricCtrl
 * Controller of the pmsappApp
 */
 
angular.module('pmsappApp').controller('GenricCtrl', ['$scope', 'generic','genericService', 
  function ($scope, generic, genericService) {
    
     
    console.log('Hi This is loger');
    generic.query({}, function (record){
      $scope.pmsdata = record.data;
	 });
    
    genericService.query({}, function (valu){
      $scope.pms = valu.data;
   });

    $scope.add = function(data){
    

  
    $scope.genric_id = $scope.selectedItem.id;
    $scope.category_name = $scope.gname;


    //     genericcat.post($scope.genric_id, $scope.category_name, function (val){
    //       $scope.arr = val.data;
    // });

//console.log( genericcat.save );

    var data = {
      generic_name: $scope.category_name,
      category_id: $scope.genric_id
    };

    genericService.save( data, function() {
      console.log( 'Testing' );
    });
  };



 
  
  }]);
