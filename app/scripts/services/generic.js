'use strict';

/**
 * @ngdoc service
 * @name pmsApp.generic
 * @description
 * # generic
 * Service in the pmsApp.
 */

angular.module('pmsApp').factory('generic', ['$resource', 'API_BASE_URI', function ($resource, API_BASE_URI) {
	return $resource('http://localhost:81/PMS-1/services/index.php/instruments', {}, {
   /* return $resource('http://localhost/PMS-1/services/index.php/instruments', {}, {
	 return $resource(API_BASE_URI + 'instruments', {}, {*/
		query: {method:'GET', params: {} , isArray:false}


    });

}]);
