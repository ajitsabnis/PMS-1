'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:TestMasterDetailsCtrl
 * @description
 * # TestMasterDetailsCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp').controller('TestMasterDetailsCtrl',['$scope','Addtest', 'addtestDropdown',
							function ($scope, Addtest, addtestDropdown) {

   
	
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
        addtestDropdown.addtest.get({}, function (record){
        $scope.myData = record.data;
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

      addtest.save(angular.toJson(postData), function(responce) {
        console.log(responce);
      });
    };


    addtestDropdown.instrument.get({}, function (record){
      $scope.instrument = record.data;
    });

    addtestDropdown.sample.get({}, function (record){
      $scope.sample = record.data;
    });

    addtestDropdown.methode.get({}, function (record){
      $scope.methode = record.data;
    });

    addtestDropdown.group.get({}, function (record){
      $scope.group = record.data;
    });

    addtestDropdown.flag.get({}, function (record){
      $scope.flag = record.data;
    });


}]);
