'use strict';

/**
 * @ngdoc service
 * @name pmsappApp.myService
 * @description
 * # myService
 * Service in the pmsappApp.
 */
angular.module('pmsappApp')
  .service('mysService', ['$resource', 'apiUrl', function ( $resource, apiUrl ) {
    return $resource( apiUrl.USERS, {
      action: '@action'
    }, {
      execute: {
        method: 'POST'
      }
    } );
  }]);
