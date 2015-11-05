'use strict';

/**
 * @ngdoc service
 * @name pmsApp.generic
 * @description
 * # genericcat
 * Service in the pmsApp.
 */

angular.module('pmsApp').factory('genericService',['$resource', function ($resource) {

    return{
    qry: $resource('http://localhost:81/PMS-1/services/index.php/instruments/instrument/', {}, {
      getGenericData: {method:'GET', params: {id: ''} , isArray:false},
      post:  {method:'POST',  params: {} , isArray:true}
    }),

    dlt:$resource('http://localhost:81/PMS-1/services/index.php/instruments/recordDelete/', {}, {
      /*updateGenericData: {method:'POST', params:{}, isArray:true},*/
      recordDelete: {method: 'POST', params: {}, isArray: true}
    })

  };
}]);
