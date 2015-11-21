'use strict';

/**
 * @ngdoc service
 * @name pmsApp.generic
 * @description
 * # genericcat
 * Service in the pmsApp.
 */

angular.module('pmsApp').factory('genericService',['$resource', 'API_BASE_URI', 'apiUrl', function ($resource, API_BASE_URI, apiUrl) {

    return{
     		category:$resource( apiUrl.getSelectedCategoryData, {} ),
    		update:$resource( apiUrl.updateGenericData, {} ),
        deletecategory:$resource( apiUrl.deleteSelectedCategoryData, {} )
    };

}]);

angular.module('pmsApp').factory('generic', ['$resource', 'apiUrl', function ($resource, apiUrl) {
	return $resource( apiUrl.getGenericData, {} );
}]);