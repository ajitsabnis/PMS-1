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
    function init() {
      generic.query({}, function (record){
        $scope.pmsdata = record.data;
      });  
    }

    $scope.add = function(){
  
      $scope.genric_id = $scope.selectedItem.id;
      $scope.category_name = $scope.gname;

      var postData = {
        generic_name: $scope.category_name,
        category_id: $scope.genric_id
      };

      genericService.save(postData, function(responce) {
        console.log(responce);
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

  $scope.singleFilter = function( renderableRows ){
    console.log("in single filter");
    var matcher = new RegExp($scope.filterValue);
    renderableRows.forEach( function( row ) {
      var match = false;
      [ 'category_id', 'generic_name', 'generic_id', 'Action' ].forEach(function( field ){
        if ( row.entity[field].match(matcher) ){
          match = true;
        }
      });
      if ( !match ){
        row.visible = false;
      }
    });
    return renderableRows;
  };

  $scope.gridOptions = {
    enableFiltering: false,
    onRegisterApi: function(gridApi){
      console.log("in registerApi");
      $scope.gridApi = gridApi;
      $scope.gridApi.grid.registerRowsProcessor( $scope.singleFilter, 200 );
    },
    paginationPageSizes: [25, 50, 75],
    paginationPageSize: 25,
    columnDefs: [
      { name: 'category_id', enableCellEdit: false },
      { name: 'generic_name', displayName: 'Name' },
      { name: 'generic_id', enableCellEdit: false },
      { name: 'Action', enableCellEdit: false}
    ]
  };
  
  $scope.filter = function() {
    console.log($scope.filterValue);
    console.log("in filter function");
    $scope.gridApi.grid.refresh();
  };

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

  init();
}]); 
