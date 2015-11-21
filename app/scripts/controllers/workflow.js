'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:workflowCtrl
 * @description
 * # workflowCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp')
  .controller('workflowCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $scope.items= [
    {area:'cash'},
     {id:'2',area:'cheque'},
      {id:'3',area:'card'},
      



    ];
    $scope.showHideDiv = function () {
if ($scope.chkStatus) {
$scope.showhideprop = true;
}
else {
$scope.showhideprop = false;
}
}
  });
