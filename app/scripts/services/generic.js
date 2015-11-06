'use strict';

/**
 * @ngdoc service
 * @name pmsApp.generic
 * @description
 * # generic
 * Service in the pmsApp.
 */

angular.module('pmsApp')
	.factory('generic', ['$resource', 'apiUrl', function ($resource, apiUrl) {
	    return $resource( apiUrl.getGenericData, {} );
}]);


	