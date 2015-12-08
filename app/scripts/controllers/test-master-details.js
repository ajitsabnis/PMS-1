'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:TestMasterDetailsCtrl
 * @description
 * # TestMasterDetailsCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp').controller('TestMasterDetailsCtrl',['$scope', '$rootScope', 'localStorageService', 'addtestDropdown', '$location', 
							function ($scope, $rootScope, localStorageService, addtestDropdown, $location) {

    
    /*$scope.myData = {
    	columnDefs: [
    		{name: 'test_name'},
    		{name: 'test_heading'},
    		{name: 'test_short_name'},
    		{name: 'test_remark'},
    		{name: 'flag_name'},
    		{name: 'generic_method_name'},
    		{name: 'generic_sample_name'},
    		{name: 'generic_instrument_name'},
    		{name: 'amount'},
        { name: 'Action', enableCellEdit: false, cellTemplate:'<button class="btn primary" ng-click="grid.appScope.open(row.entity)"><span class="glyphicon glyphicon-pencil"></span></button><button class="btn primary" ng-click="grid.appScope.deleteRecord(row.entity)"><span class="glyphicon glyphicon-trash"></span></button>'}
        
    	]
    };*/
    
    $scope.genders = [
      {name:'Male', value:'M'},
      {name:'Female', value:'F'},
      {name:'Universal', value:'U'}
    ];
    function makeEmpty() {
      $scope.detail = {
        "parameters": "",
        "refbelow": "",
        "refabove": "",
        "agebelow": "",
        "ageabove": "",
        "gender": "",
        "examination": "",
        "unit": "",
        "order": "",
        "normalrange": ""
      };
      $scope.test = {
        "testName": "",
        "heading": "",
        "code": "",
        "testCharges": "",
        "group": "",
        "flag": "",
        "method": "",
        "speciman": "",
        "instrument": "",
        "remark": "",
        "testIsOutsourced": "",
        "testIsOutsourcedLab": ""
      };
    }
    $scope.showDetails = [];
    function getDropDownData() {
      addtestDropdown.getAll.get({}, function (data) {
        if(data.status === 'success') {
          console.log(data);
          $scope.flags = [];
          $scope.groups = [];
          $scope.methods = [];
          $scope.specimans = [];
          $scope.instruments = [];
          angular.forEach(data.list, function (value,key) {
            switch (key) {
              case "group":
                angular.forEach(value, function (val, key) {
                  $scope.groups.push({'gname': val.generic_group_name, 'id': val.generic_group_id});
                });
                break;
              case "instrument":
                angular.forEach(value, function (val, key) {
                  $scope.instruments.push({'iname': val.generic_instrument_name, 'id': val.generic_instrument_id});
                });
                break;
              case "method":
                angular.forEach(value, function (val, key) {
                  $scope.methods.push({'mname': val.generic_method_name, 'id': val.generic_method_id});
                });
                break;
              case "sample":
                angular.forEach(value, function (val, key) {
                  $scope.specimans.push({'sname': val.generic_sample_name, 'id': val.generic_sample_id});
                });
                break;
              case "flag":
                angular.forEach(value, function (val, key) {
                  $scope.flags.push({'fname': val.flag_name, 'id': val.flag_id});
                });
                break;
              default:
                alert('No data');
            }
          })
        }
      });
    };

    function init() {
      makeEmpty();
      $rootScope.isLogin = localStorageService.get('isLogin');
      if($rootScope.isLogin) {
        addtestDropdown.getTest.get({'test_type_ID': '2'}, function (record) {
          if(record.status === 'success') {
            $scope.testData = record.list.testTypeDetails;
            getDropDownData();
          }
        });
      }else {
        $location.path('login');
        return false;
      }
    };
    
    $scope.filterTest = function(text) {
      if(text !== undefined) {
        addtestDropdown.getFilter.get({'searchString':text}, function (data) {
          if(data.status === 'success') {
            $scope.testData = [];
            $scope.testData = data.list;
          }
        });
      }
    };

    $scope.getTestData = function (id) {
      if(id !== undefined) {
        addtestDropdown.getTestDataAll.get({'test_id':id}, function (data) {

        });
      }
    };

    $scope.addDetails = function () {
      $scope.showDetails.push($scope.detail);
      $scope.detail = {};
    };

    $scope.saveTest = function () {
      console.log($scope.test);
      var testDataUI = $scope.test;
      var testDetail = $scope.showDetails;
      angular.forEach($scope.showDetails, function (val, key) {
        testDetail[key].gender = val.gender.name;
      });
      var testInputs = {};
      testInputs = {
        "test_name": testDataUI.testName,
        "test_heading": testDataUI.heading,
        "test_short_code": testDataUI.code,
        "test_group": testDataUI.group.id,
        "test_charge": testDataUI.testCharges,
        "test_remark": testDataUI.remark,
        "flag_id": testDataUI.flag.id,
        "method_id": testDataUI.method.id,
        "sample_id": testDataUI.speciman.id,
        "instrument_id": testDataUI.instrument.id,
        "testIsOutsourced": '1',
        "testIsOutsourcedLab": '1',
        "productDetails": testDetail
      }
      console.log(angular.toJson(testInputs));
      addtestDropdown.addTestPost.save(angular.toJson(testInputs), function (data) {
        makeEmpty();
        $scope.filterTest('');
      });
    }
    init();  

    /*$scope.add = function() {

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
    };*/

     /*$scope.update = function() {

      var data = {
        id:$scope.test.test_id,
        name:  $scope.test.test_name,
        heading: $scope.test.test_heading,
        shortname: $scope.test.test_short_name,
        remark: $scope.remark,
        flg: $scope.test.flag_name,
        mthd: $scope.test.generic_method_name,
        smpl:  $scope.test.generic_sample_name,
        instrument: $scope.test.generic_instrument_name,
        charges: $scope.test.amount,
        grp: $scope.test.group.id
      };

      Addtest.save(angular.toJson(data), function(responce) {
        console.log(responce);
      });
    };*/


    /*addtestDropdown.instrument.get({}, function (record){
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
    });*/

    /*$scope.deleteRecord = function(deleteData){
      var removeData = {
        removeData: deleteData
      };
    
      Addtest.remove(angular.toJson(removeData), function(responce) {
        console.log(responce);
      });
    };*/

  
   //$scope.animationsEnabled = true;
   /*$scope.items = ['item1', 'item2', 'item3'];*/


  /*$scope.open = function (size) {

    angular.forEach($scope.testData, function(key, value) {
      console.log(value);
      if(key.id === size.id){
        $scope.test = key;
      }
    });

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        /*items: function () {
          return $scope.items;
        },*/
        /*tests: function () {
          return $scope.test;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });

  };*/

  /*$scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

  $scope.deleteRecord = function(deleteData){
    $scope.alerts = [];
    var removeData = {
      testid: deleteData.test_id,
      rowId: deleteData.row_id
    };
     addtestDropdown.updatetest.save(angular.toJson(removeData), function(responce) {
      if(responce.data.message === 'Row deleted successfully') {
        angular.forEach($scope.categoryData, function(value, key) {
          if(value.row_id === deleteData.row_id) {
            $scope.categoryData.splice(key);    
          }
        });
        $scope.gridOptions.data = $scope.categoryData;
        $scope.alerts.push({msg: 'Record deleted successfully', type:'success'});
      }
    });
  };*/

}]);

/*angular.module('pmsApp').controller('ModalInstanceCtrl',['$scope', '$uibModalInstance', 'tests', 'addtestDropdown', function ($scope, $uibModalInstance, tests, addtestDropdown) {

  $scope.test = tests;
  $scope.selected = {
    test: $scope.test[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.test);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };


     $scope.update = function() {

      var data = {
        id:$scope.test.test_id,
        name:  $scope.test.test_name,
        heading: $scope.test.test_heading,
        shortname: $scope.test.test_short_name,
        remark: $scope.test.test_remark,
        flg: $scope.test.flag_name,
        mthd: $scope.test.generic_method_name,
        smpl:  $scope.test.generic_sample_name,
        instrument: $scope.test.generic_instrument_name,
        charges: $scope.test.amount
       
      };

      addtestDropdown.updatetest.save(angular.toJson(data), function(responce) {
        console.log(responce);
      });
    };
}]);*/