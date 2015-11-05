'use strict';

/**
 * @ngdoc service
 * @name pmsApp.snippet
 * @description
 * # snippet
 * Service in the pmsApp.
 */
angular.module('pmsApp').factory(['$resource', function ($resource) {
	return $resource('http://localhost/pms-1/services/index.php/flag' , {},{
		post:  {method:'POST',  params: {} , isArray:true}
	});
}]);