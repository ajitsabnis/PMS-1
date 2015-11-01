'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:GenricCtrl
 * @description
 * # GenricCtrl
 * Controller of the pmsApp
 */
 
/*angular.module('pmsApp').controller('GenricCtrl', ['$scope', 'generic','genericService', 
                                      function ($scope, generic, genericService) {
    
    console.log('Hi This is loger');
    generic.query({}, function (record){
      $scope.pmsdata = record.data;
    });

    $scope.add = function(data){
  
      $scope.genric_id = $scope.selectedItem.id;
      $scope.category_name = $scope.gname;

      var data = {
        generic_name: $scope.category_name,
        category_id: $scope.genric_id
      };

      genericService.save( data, function() {
        console.log( 'Testing' );
      });
  };

  $scope.getSelectedCategoryData = function() {
    alert($scope.selectedItem.id);
    $scope.id = $scope.selectedItem.id
    genericService.getGenericData({id:$scope.id}, function (valu){
      $scope.pms = valu.data;
    });
  }
  }]); */

angular.module('addressFormatter', []).filter('address', function () {
  return function (input) {
      return input.street + ', ' + input.city + ', ' + input.state + ', ' + input.zip;
  };
});

angular.module('pmsApp')
.controller('GenricCtrl', ['$scope', '$http', '$q', '$interval', 'genericService', function ($scope, $http, $q, $interval, genericService) {
  $scope.gridOptions = {};
 
  $scope.gridOptions.columnDefs = [
    { name: 'category_id', enableCellEdit: false },
    { name: 'generic_name', displayName: 'Name' },
    { name: 'generic_id', enableCellEdit: false }
    
  ];
 
  $scope.saveRow = function( rowEntity ) {
    // create a fake promise - normally you'd use the promise returned by $http or $resource
    console.log(rowEntity);
    genericService.post(angular.toJson(rowEntity), function(responce) {
        console.log( 'Testing' );
        
    });
    var promise = $q.defer();
        $scope.gridApi.rowEdit.setSavePromise( rowEntity, promise.promise );
    
        // fake a delay of 3 seconds whilst the save occurs, return error if gender is "male"
        $interval( function() {
        if (rowEntity.gender === 'male' ){
            promise.reject();
            } else {
              promise.resolve();
            }
        }, 500, 1);
    
  };
 
  $scope.gridOptions.onRegisterApi = function(gridApi){
    //set gridApi on scope
    $scope.gridApi = gridApi;
    gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
  };
 
  $http.get('http://localhost/pms-1/services/index.php/instruments/instrument/1')
  .success(function(data) {
    
    $scope.gridOptions = data;
  });
}]);
