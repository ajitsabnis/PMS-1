'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:TestMasterDetailsCtrl
 * @description
 * # TestMasterDetailsCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp').controller('TestMasterDetailsCtrl',['$scope', '$http','Addtest', 'addtestDropdown', '$uibModal', '$log', 
							function ($scope, $http, Addtest, addtestDropdown, $uibModal, $log) {

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
    		{name: 'charges'},
        /*{name: 'Action', enableCellEdit: false, cellTemplate:'<span style="cursor:pointer" class="glyphicon glyphicon-pencil" ng-click="grid.appScope.open(row.entity)""></span>'}*/
        { name: 'Action', enableCellEdit: false, cellTemplate:'<button class="btn primary" ng-click="grid.appScope.open(row.entity)"><span class="glyphicon glyphicon-pencil"></span></button>'}
    	]
    };
    function init() {
        addtestDropdown.addtst.get({}, function (record){
        $scope.myData.data = record.data;
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

     $scope.deleteRecord = function(deleteData){
    var removeData = {
      

    }
    
    Addtest.remove(angular.toJson(removeData), function(responce) {
      console.log(responce);
    });
  };

  
   $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };



}]);

angular.module('pmsApp').controller('ModalInstanceCtrl',['$uibModalInstance', function ($scope, $uibModalInstance, items) {

   $scope.items = ['item1', 'item2', 'item3'];
  
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);