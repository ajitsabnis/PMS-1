'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:FlagMasterCtrl
 * @description
 * # FlagMasterCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp').controller('flagMasterCtrl', ['$scope', 'flagService', 'localStorageService', '$rootScope', '$location', 
  function ($scope, flagService, localStorageService, $rootScope, $location) {
    $scope.myData = {
      "columnDefs": [
        {"name": "name"},
        {"name": "amount"},
        {"name": "percent"}
      ]
    };
    function init() {
      $rootScope.isLogin = localStorageService.get('isLogin');
      if($rootScope.isLogin) {
        flagService.query(function(flagResponce) {
          var gridData = {
            data: flagResponce.data
          };
          $scope.myData = gridData;
        });
      }else {
        $location.path('login');
        return false;
      }
    }
    $scope.addFlag = function() {
        var data = {
              name: $scope.flag.name,
              amount: $scope.flag.amount,
              percent: $scope.flag.percent
        };
        flagService.save( data, function(responce) {
          console.log( 'Data Saved Successfully');
          $scope.myData = responce;
        });
    };
    init();
}]);