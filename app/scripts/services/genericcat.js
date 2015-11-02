'use strict';

/**
 * @ngdoc service
 * @name pmsApp.generic
 * @description
 * # genericcat
 * Service in the pmsApp.
 */

angular.module('pmsApp').factory('genericService',['$resource', function ($resource) {

    /*return $resource('http://localhost/PMS-1/services/index.php/instruments/instrument/', {}, {*/
    return $resource('http://localhost/PMS-1/services/index.php/instruments/instrument/', {}, {
      getGenericData: {method:'GET', params: {id: ''} , isArray:false},
      post:  {method:'POST',  params: {} , isArray:true},
      updateGenericData: {method:'POST', params:{}, isArray:true}
    });
}]);

