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
    
    $scope.add = function() {
          var data = {
                
          };
          flagService.save( data, function(responce) {
            console.log( 'Data Saved Successfully');
            $scope.myData = responce;
          });
  		};
  }]);