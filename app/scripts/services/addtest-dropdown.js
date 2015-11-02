'use strict';

/**
 * @ngdoc service
 * @name pmsApp.addtestDropdown
 * @description
 * # addtestDropdown
 * Service in the pmsApp.
 */
angular.module('pmsApp').service('addtestDropdown',['$resource', function ($resource){
   return{
    instrument:$resource('http://localhost:81/PMS-1/services/index.php/testdropdown', {}, {
   	get: {method:'GET', params: {} , isArray:false}
      

    }),

    sample:$resource('http://localhost:81/PMS-1/services/index.php/testdropdown/sample', {}, {
   	query: {method:'GET', params: {} , isArray:false}
      }),

  	 methode:$resource('http://localhost:81/PMS-1/services/index.php/testdropdown/method', {}, {
   	query: {method:'GET', params: {} , isArray:false}
      }),


      group:$resource('http://localhost:81/PMS-1/services/index.php/testdropdown/group', {}, {
   	query: {method:'GET', params: {} , isArray:false}
      }),

       flag:$resource('http://localhost:81/PMS-1/services/index.php/testdropdown/flag', {}, {
   	query: {method:'GET', params: {} , isArray:false}
      })        

};
  }]);
