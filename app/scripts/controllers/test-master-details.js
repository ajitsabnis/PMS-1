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
$scope.add = function(){
  
      $scope.testname = $scope.tstname;
      
      $scope.heading = $scope.hding;
      $scope.tescode = $scope.tc;
      $scope.testcharges = $scope.tch;
      $scope.flag = $scope.selectedflag.id;
      $scope.methode = $scope.selectedmthd.id;
      $scope.sample = $scope.selectedsmpl.id;
      $scope.flag = $scope.selectedflag.id;
      $scope.instrument = $scope.selectedinstmt.id;
      $scope.remarks = $scope.remark;


      var postData = {
        name:  $scope.testname,
        heading: $scope.heading,
        shortname: $scope.tescode,
        remark: $scope.remarks,
        flg: $scope.flag,
        mthd: $scope.methode,
        smpl:  $scope.sample,
        instrument: $scope.instrument,
        charges:$scope.testcharges
      };

      Addtest.save(postData, function() {
        console.log( 'Testing' );
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
