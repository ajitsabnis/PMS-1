'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:GenricCtrl
 * @description
 * # GenricCtrl
 * Controller of the pmsApp
 */
 
angular.module('pmsApp').controller('GenricCtrl', ['$scope', 'generic','genericService', 
                                      function ($scope, generic, genericService) {
    
    console.log('Hi This is loger');
    generic.query({}, function (record){
      $scope.pmsdata = record.data;
    });

    $scope.add = function(){
  
      $scope.genric_id = $scope.selectedItem.id;
      $scope.category_name = $scope.gname;

      var postData = {
        generic_name: $scope.category_name,
        category_id: $scope.genric_id
      };

      genericService.save(postData, function(responce) {
        console.log( 'Testing' );
        $scope.getSelectedCategoryData();
      });
  };

  $scope.getSelectedCategoryData = function() {
    $scope.id = $scope.selectedItem.id;
    genericService.getGenericData({id:$scope.id}, function (valu){
      var selectedCategoryData = {
        data: valu.data
      };
      $scope.pms = valu.data;

      $scope.gridOptions = selectedCategoryData;
    });
  };

  $scope.gridOptions = {};
 
  $scope.gridOptions.columnDefs = [
    { name: 'category_id', enableCellEdit: false },
    { name: 'generic_name', displayName: 'Name' },
    { name: 'generic_id', enableCellEdit: false }
    
  ];
 
  $scope.saveRow = function( rowEntity ) {
    // create a fake promise - normally you'd use the promise returned by $http or $resource
    console.log(rowEntity);
   
    /*updateGenericData.$promise.then(angular.toJson(rowEntity), function(responce) {
      $scope.gridOptions = responce.data[0];
    });*/
    
  };
 
  $scope.gridOptions.onRegisterApi = function(gridApi){
    //set gridApi on scope
    $scope.gridApi = gridApi;
    gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
  };
}]); 
