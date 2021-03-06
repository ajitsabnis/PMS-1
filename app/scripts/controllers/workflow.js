'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:workflowCtrl
 * @description
 * # workflowCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp').controller('workflowCtrl', ['$scope', 'testdetail', '$location', 'localStorageService', '$rootScope',  
 function ($scope, testdetail, $location, localStorageService, $rootScope) {

  function init() {
    $rootScope.isLogin = localStorageService.get('isLogin');
    if($rootScope.isLogin) {
      $scope.testList = [];
      testdetail.getTest.get(function(responce) {
        $scope.testList = responce.list;
        console.log($scope.testList);
      });
      
      $scope.items= [
        {id:'1',area:'cash'},
        {id:'2',area:'cheque'},
        {id:'3',area:'card'},
      ];
    }else {
      $location.path('login');
      return false;
    }
  }
  
  $scope.showHideDiv = function () {
    if ($scope.chkStatus1) {
      $scope.showhideprop = true;
    }else {
      $scope.showhideprop = false;
    }
  };
  
  $scope.showHideDiv1 = function () {
    if ($scope.chkStatus2) {
      $scope.showhideprop = true;
    }else {
      $scope.showhideprop = false;
    }
  };
  $scope.showHideDiv2 = function () {
    if ($scope.chkStatus3) {
      $scope.showhideprop = true;
    }else {
      $scope.showhideprop = false;
    }
  };
  $scope.showHideDiv3 = function () {
    if ($scope.chkStatus4) {
      $scope.showhideprop = true;
    }else {
      $scope.showhideprop = false;
    }
  };
  $scope.showHideDiv4 = function () {
    if ($scope.chkStatus5) {
      $scope.showhideprop = true;
    }else {
      $scope.showhideprop = false;
    }
  };
  $scope.showHideDiv5 = function () {
    if ($scope.chkStatus6) {
      $scope.showhideprop = true;
    }else {
      $scope.showhideprop = false;
    }
  };
  $scope.showHideDiv6 = function () {
    if ($scope.chkStatus7) {
      $scope.showhideprop = true;
    }else {
      $scope.showhideprop = false;
    }
  };
  $scope.showHideDiv7 = function () {
    if ($scope.chkStatus8) {
      $scope.showhideprop = true;
    }else {
      $scope.showhideprop = false;
    }
  };
  $scope.showHideDiv8 = function () {
    if ($scope.chkStatus9) {
      $scope.showhideprop = true;
    }else {
      $scope.showhideprop = false;
    }
  };

  $scope.cities = function() {
    /*workflowService.get({'searchString': cityName}, function (response) {
      var searchData = [];
      angular.forEach(response.list, function(value, key) {
        searchData.push(value.patient_name + ',' + value.patient_mobile);
      });
      $scope.cities = limitToFilter(searchData, 15);
      console.log($scope.cities);
      return $scope.cities;
    });*/
    /*return $http.jsonp("http://gd.geobytes.com/AutoCompleteCity?callback=JSON_CALLBACK &filter=US&q="+cityName).then(function(response){*/
    /*return $http.jsonp("http://localhost/PMS-1/services/index.php/common/searchPatient?searchString="+cityName).then(function(response){
      return limitToFilter(response.data, 15);
    });*/
  };

  /*$scope.checkPatient = function() {
    var check_patient = $scope.check_patient;
    console.log(check_patient.length);
    if (check_patient.length >= 3) {
      testdetail.searchPatient.get({searchString:$scope.check_patient}, function(responce) {
        console.log(responce);
      });
    }else {
      console.log("minimum 3 charactors required for search");
    }
  };*/

  $scope.selectTest = function() {
    console.log($scope.content);
    testdetail.selectTest.get({test_type_ID:$scope.content}, function(responce) {
      $scope.test = responce.list.testTypeDetails;
    });
  };
  init();
}]);
