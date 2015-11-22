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
    {id:'1',area:'cash'},
     {id:'2',area:'cheque'},
      {id:'3',area:'card'},
      



    ];
    $scope.showHideDiv = function () {
if ($scope.chkStatus1) {
$scope.showhideprop = true;
}
else {
$scope.showhideprop = false;
}
}
 $scope.showHideDiv1 = function () {
if ($scope.chkStatus2) {
$scope.showhideprop = true;
}
else {
$scope.showhideprop = false;
}
}
 $scope.showHideDiv2 = function () {
if ($scope.chkStatus3) {
$scope.showhideprop = true;
}
else {
$scope.showhideprop = false;
}
}
$scope.showHideDiv3 = function () {
if ($scope.chkStatus4) {
$scope.showhideprop = true;
}
else {
$scope.showhideprop = false;
}
}
 $scope.showHideDiv4 = function () {
if ($scope.chkStatus5) {
$scope.showhideprop = true;
}
else {
$scope.showhideprop = false;
}
}
 $scope.showHideDiv5 = function () {
if ($scope.chkStatus6) {
$scope.showhideprop = true;
}
else {
$scope.showhideprop = false;
}
}
$scope.showHideDiv6 = function () {
if ($scope.chkStatus7) {
$scope.showhideprop = true;
}
else {
$scope.showhideprop = false;
}
}
 $scope.showHideDiv7 = function () {
if ($scope.chkStatus8) {
$scope.showhideprop = true;
}
else {
$scope.showhideprop = false;
}
}
 $scope.showHideDiv8 = function () {
if ($scope.chkStatus9) {
$scope.showhideprop = true;
}
else {
$scope.showhideprop = false;
}
}
  });
