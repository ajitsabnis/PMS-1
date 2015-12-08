'use strict';

/**
 * @ngdoc service
 * @name pmsApp.Addtest
 * @description
 * # Addtest
 * Service in the pmsApp.
 */
 angular.module('pmsApp').factory('Addtest',['$resource', function ($resource) {
	return $resource('http://localhost/PMS-1/services/index.php/addtest', {}, {
    	post: {method:'POST', params: {} , isArray:true}
     });
  

 }]);
    
 
