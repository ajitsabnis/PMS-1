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
      getGenericData: {method:'GET', params: {} , isArray:false},
      post:  {method:'POST',  params: {} , isArray:true},
      updateGenericData: {method:'POST', params:{}, isArray:true},
      recordDelete: {method: 'POST', params: {}, isArray: true}
    });

    /*return $resource('http://localhost/PMS-1/services/index.php/instruments/recordDelete/', {}, {
      recordDelete: {method: 'POST', params: {}, isArray: true}
    });*/
}]);
