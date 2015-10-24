'use strict';

/**
 * @ngdoc service
 * @name pmsappApp.generic
 * @description
 * # generic
 * Service in the pmsappApp.
 */

angular.module('pmsappApp').factory('generic',['$resource', function ($resource) {
    return $resource('http://localhost:81/PMS-1/services/index.php/generics', {}, {
      query: {method:'GET', params: {} , isArray:false}
      

    });


  }]);
