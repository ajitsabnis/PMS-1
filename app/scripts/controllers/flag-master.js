'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:FlagMasterCtrl
 * @description
 * # FlagMasterCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp')
  .controller('flagMasterCtrl', ['$scope', '$http', 'flag', function ($scope, $http, flag) {
  		$scope.myData = {
  			columnDefs: [
    		  { name: 'name'},
     		  { name: 'amount'},
          { name: 'percent'}
    		]
 		 };	
  		$http.get('http://localhost/PMS-1/services/index.php/flag')
  			.success(function (data) {
   				 $scope.myData = data;
  			});
  		$scope.addFlag = function() {
          var data = {
                name: $scope.flag.name,
                amount: $scope.flag.amount,
                percent: $scope.flag.percent
          };
          flag.save( data, function() {
              console.log( 'Data Saved Successfully');
            });
  		};
  }]);