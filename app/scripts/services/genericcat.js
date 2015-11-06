'use strict';

/**
 * @ngdoc service
 * @name pmsApp.generic
 * @description
 * # genericcat
 * Service in the pmsApp.
 */

angular.module('pmsApp').factory('genericService',['$resource', 'API_BASE_URI', function ($resource, API_BASE_URI) {

    return $resource(API_BASE_URI + 'instruments/instrument/', {}, {
      getGenericData: {method:'GET', params: {id: ''} , isArray:false},
      post:  {method:'POST',  params: {} , isArray:true},
      updateGenericData: {method:'POST', params:{}, isArray:true},
      recordDelete: {method: 'DELETE', params: {'category_id':'', 'generic_id':''}, isArray: true}
    });
}]);
