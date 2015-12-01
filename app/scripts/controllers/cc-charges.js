'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:CcChargesCtrl
 * @description
 * # CcChargesCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp').controller('CcChargesCtrl', ['$scope', 'localStorageService', '$location', '$rootScope', 
  function ($scope, localStorageService, $location, $rootScope) {
  
  $scope.items = [
    {id:'1',area:'hadapsar'},
    {id:'1',area:'kothrud'},
    {id:'1',area:'karve nagar'},
    {id:'1',area:'uttam nagar'}
  ];
  $scope.users = [];
  function init() {
    $rootScope.isLogin = localStorageService.get('isLogin');
    if($rootScope.isLogin) {
        console.log('About Controller');
      }else {
        $location.path('login');
        return false;
      }
  }
  init();
}]);