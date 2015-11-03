'use strict';

/**
 * @ngdoc service
 * @name pmsApp.flagService
 * @description
 * # flagService
 * Service in the pmsApp.
 */

angular.module('pmsApp').factory('flag',['$resource', function ($resource) {
	return $resource('http://localhost/PMS-1/services/index.php/flag' , {},{
		post:  {method:'POST',  params: {} , isArray:true}
	});
}]);