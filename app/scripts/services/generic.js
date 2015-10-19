'use strict';

/**
 * @ngdoc service
 * @name pmsappApp.generic
 * @description
 * # generic
 * Service in the pmsappApp.
 */

angular.module('pmsappApp').service('generic',['$resource', function ($resource) {
    return $resource('http://http://localhost:9000/#/genric.json', {}, {
      query: {method:'POST', isArray:false}
    });

  }]);
