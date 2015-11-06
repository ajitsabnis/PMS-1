'use strict';

/**
 * @ngdoc service
 * @name pmsApp.generic
 * @description
 * # generic
 * Service in the pmsApp.
 */

angular.module('pmsApp').factory('generic', ['$resource', 'API_BASE_URI', function ($resource, API_BASE_URI) {

<<<<<<< HEAD
    return $resource('http://localhost:81/PMS-1/services/index.php/instruments', {}, {
   /* return $resource('http://localhost/PMS-1/services/index.php/instruments', {}, {*/
=======
    return $resource(API_BASE_URI + 'instruments', {}, {
>>>>>>> f260e660b3b97610eecc7dbe9138a071ab758337
      query: {method:'GET', params: {} , isArray:false}


    });

}]);
