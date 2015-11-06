'use strict';

/**
 * @ngdoc service
 * @name pmsApp.addtestDropdown
 * @description
 * # addtestDropdown
 * Service in the pmsApp.
 */
angular.module('pmsApp').service('addtestDropdown',['$resource', 'API_BASE_URI', function ($resource, API_BASE_URI){
   return{
    instrument:$resource(API_BASE_URI + 'testdropdown', {}, {
   	get: {method:'GET', params: {} , isArray:false}
      

    }),

    sample:$resource(API_BASE_URI + 'testdropdown/sample', {}, {
   	query: {method:'GET', params: {} , isArray:false}
      }),

  	 methode:$resource(API_BASE_URI + 'testdropdown/method', {}, {
   	query: {method:'GET', params: {} , isArray:false}
      }),


      group:$resource(API_BASE_URI + 'testdropdown/group', {}, {
   	query: {method:'GET', params: {} , isArray:false}
      }),

       flag:$resource(API_BASE_URI + 'testdropdown/flag', {}, {
   	query: {method:'GET', params: {} , isArray:false}
      })        

  };
}]);
