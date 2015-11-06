'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:TestMasterDetailsCtrl
 * @description
 * # TestMasterDetailsCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp').controller('TestMasterDetailsCtrl',['$scope', '$http','Addtest', 'addtestDropdown', 'API_BASE_URI',
							function ($scope, $http, Addtest, addtestDropdown, API_BASE_URI) {

   
	
    $scope.myData = {
    	columnDefs: [
    		{name: 'name'},
    		{name: 'heading'},
    		{name: 'shortname'},
    		{name: 'remark'},
    		{name: 'flg'},
    		{name: 'mthd'},
    		{name: 'smpl'},
    		{name: 'instrument'},
    		{name: 'charges'}
    	]
    };
    function init() {
        $http.get(API_BASE_URI + 'test').success(function(data) {
            $scope.myData = data;
        });    
    }
    
    init();  
    $scope.add = function() {

      var data = {
        name:  $scope.tstname,
        heading: $scope.hding,
        shortname: $scope.tc,
        remark: $scope.remark,
        flg: $scope.selectedflag.id,
        mthd: $scope.selectedmthd.id,
        smpl:  $scope.selectedsmpl.id,
        instrument: $scope.selectedinstmt.id,
        charges: $scope.tch,
        grp: $scope.selectedgrp.id
      };

      Addtest.save(angular.toJson(data), function(responce) {
        console.log(responce);
      });
    };

    addtestDropdown.instrument.get({}, function (record){
      $scope.instrument = record.data;
    });

    addtestDropdown.sample.query({}, function (record){
      $scope.sample = record.data;
    });

    addtestDropdown.methode.query({}, function (record){
      $scope.methode = record.data;
    });

    addtestDropdown.group.query({}, function (record){
      $scope.group = record.data;
    });

    addtestDropdown.flag.query({}, function (record){
      $scope.flag = record.data;
    });


}]);
