'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:patientMasterCtrl
 * @description
 * # patientMasterCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp')
  .controller('patientMasterCtrl', ['flagService', function ($scope, flagService) {
    $scope.arr1=[];
    $scope.add = function() {
      $scope.add=function(val1) {
        var userVal = val1;
        $scope.arr1.push(userVal);
        userVal = {};
        $scope.val = {};
  };
   
          var data = {
                
          };
          flagService.save( data, function(responce) {
            console.log( 'Data Saved Successfully');
            $scope.myData = responce;
          });
  		};
  }]);