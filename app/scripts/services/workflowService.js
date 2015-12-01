'use strict';

/**
 * @ngdoc service
 * @name pmsApp.generic
 * @description
 * # genericcat
 * Service in the pmsApp.
 */

angular.module('pmsApp').factory('workflowService', ['$resource', 'apiUrl', function($resource, apiUrl) {
  
  /*return{
   		category:$resource( apiUrl.getSelectedCategoryData, {} ),
  		update:$resource( apiUrl.updateGenericData, {} ),
      	deletecategory:$resource( apiUrl.deleteSelectedCategoryData, {} )
  };*/
  return $resource( apiUrl.getPatientNameContact, {} );
}]);

/*angular.module('pmsApp').factory('generic', ['$resource', 'apiUrl', function ($resource, apiUrl) {
	return $resource( apiUrl.getGenericData, {} );
}]);*/