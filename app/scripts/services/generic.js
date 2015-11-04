'use strict';

/**
 * @ngdoc service
 * @name pmsApp.generic
 * @description
 * # generic
 * Service in the pmsApp.
 */

angular.module('pmsApp').factory('generic', ['$resource', 'API_BASE_URI', function ($resource, API_BASE_URI) {

    return $resource(API_BASE_URI + 'instruments', {}, {
      query: {method:'GET', params: {} , isArray:false}

    });

}]);
