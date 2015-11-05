'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:patientMasterCtrl
 * @description
 * # patientMasterCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp')
  .controller('patientMasterCtrl', ['flag', function ($scope, flag) {
    
    $scope.add = function() {
          var data = {
                
          };
          flag.save( data, function(responce) {
            console.log( 'Data Saved Successfully');
            $scope.myData = responce;
          });
  		};
  }]);