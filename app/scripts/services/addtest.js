'use strict';

/**
 * @ngdoc service
 * @name pmsApp.Addtest
 * @description
 * # Addtest
 * Service in the pmsApp.
 */
 angular.module('pmsApp').factory('Addtest',['$resource', function ($resource) {
 	return $resource('http://localhost:81/PMS/services/index.php/test', {}, {
      get: {method:'GET', params: {} , isArray:false}
      

    });


  }]);
    
 
