'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:TestMasterDetailsCtrl
 * @description
 * # TestMasterDetailsCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp').controller('TestMasterDetailsCtrl',['$scope', '$http','Addtest',
							function ($scope,$http,Addtest) {
<<<<<<< HEAD
=======
    $scope.add=function(val1) {
        var userVal = val1;
        $scope.arr1.push(userVal);
        userVal = {};
        $scope.val = {};
  };
	/*console.log('Hi This is loger');
    Addtest.get({}, function (record){
      $scope.test = record.data;
    });*/
>>>>>>> 8b1c0ed36993a65ea483825956e435e2ba48687a
	
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
}]);
