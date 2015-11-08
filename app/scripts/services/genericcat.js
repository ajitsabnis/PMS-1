'use strict';

/**
 * @ngdoc service
 * @name pmsApp.generic
 * @description
 * # genericcat
 * Service in the pmsApp.
 */

angular.module('pmsApp').factory('genericService',['$resource', function ($resource) {
    return $resource('http://localhost/PMS-1/services/index.php/instruments/instrument/', {}, {
      getGenericData: {method:'GET', params: {id: ''} , isArray:false},
      post:  {method:'POST',  params: {} , isArray:true}

    /*return $resource( apiUrl.saveGenericCategory, {} );*/
    return $resource( apiUrl.getSelectedCategoryData, {} )

    /*return $resource(API_BASE_URI + 'instruments/instrument/', {}, {
      saveGenericCategory:  {method:'POST',  params: {} , isArray:true},
      updateGenericData: {method:'POST', params:{}, isArray:true},
      recordDelete: {method: 'DELETE', params: {'category_id':'', 'generic_id':''}, isArray: true}
    });*/
}]);

angular.module('pmsApp').factory('generic', ['$resource', 'apiUrl', function ($resource, apiUrl) {
	return $resource( apiUrl.getGenericData, {} );
}]);