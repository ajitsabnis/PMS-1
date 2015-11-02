'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:FlagMasterCtrl
 * @description
 * # FlagMasterCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp')
  .controller('FlagMasterCtrl', ['$scope', '$http','flag',  function ($scope, $http, flag) {
  		$scope.myData = {
  			columnDefs: [
    		  { name: 'flag_name'},
     		  { name: 'percent'},
     		  { name: 'amount'}
    		]
 		 };	
  		$http.get('http://localhost/PMS-1/services/index.php/flag')
  			.success(function (data) {
   				 $scope.myData = data;
  			});
  }]);