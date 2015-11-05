'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:patientMasterCtrl
 * @description
 * # patientMasterCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp')
  .controller('patientMasterCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.add = function() {
          var data = {
                
          };
          flag.save( data, function(responce) {
            console.log( 'Data Saved Successfully');
            $scope.myData = responce;
          });
  		};
  });
