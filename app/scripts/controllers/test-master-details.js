'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:TestMasterDetailsCtrl
 * @description
 * # TestMasterDetailsCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp').controller('TestMasterDetailsCtrl',['$scope', '$http','Addtest', 'addtestDropdown',
							function ($scope,$http,Addtest,addtestDropdown) {

   
	
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
        $http.get('http://localhost:81/PMS/services/index.php/test').success(function(data) {
            $scope.myData = data;
        });    
    }
    
    init();  
$scope.add = function(){
  
          var postData = {
        name:  $scope.tstname,
        heading: $scope.hding,
        shortname: $scope.tc,
        remark:$scope.remark,
        flg: $scope.selectedflag.id,
        mthd: $scope.selectedmthd.id,
        smpl:  $scope.selectedsmpl.id,
        instrument: $scope.selectedinstmt.id,
        charges:$scope.tch,
        grp:$scope.selectedgrp.id
      };

      Addtest.save(angular.toJson(postData), function(responce) {
        console.log(responce);
      });
  };

 console.log('Hi This is loger');
    addtestDropdown.instrument.get({}, function (record){
      $scope.instrument = record.data;
    });

     console.log('Hi This is loger');
    addtestDropdown.sample.query({}, function (record){
      $scope.sample = record.data;
    });

     console.log('Hi This is loger');
    addtestDropdown.methode.query({}, function (record){
      $scope.methode = record.data;
    });

     console.log('Hi This is loger');
    addtestDropdown.group.query({}, function (record){
      $scope.group = record.data;
    });


    console.log('Hi This is loger');
    addtestDropdown.flag.query({}, function (record){
      $scope.flag = record.data;
    });


}]);
