'use strict';

/**
 * @ngdoc service
 * @name pmsApp.generic
 * @description
 * # genericcat
 * Service in the pmsApp.
 */

angular.module('pmsApp').factory('genericService',['$resource', 'API_BASE_URI', function ($resource, API_BASE_URI) {

<<<<<<< HEAD
    return{
    qry: $resource('http://localhost:81/PMS-1/services/index.php/instruments/instrument/', {}, {
=======
    return $resource(API_BASE_URI + 'instruments/instrument/', {}, {
>>>>>>> f260e660b3b97610eecc7dbe9138a071ab758337
      getGenericData: {method:'GET', params: {id: ''} , isArray:false},
      post:  {method:'POST',  params: {} , isArray:true}
    }),

    dlt:$resource('http://localhost:81/PMS-1/services/index.php/instruments/recordDelete/', {}, {
      /*updateGenericData: {method:'POST', params:{}, isArray:true},*/
      recordDelete: {method: 'POST', params: {}, isArray: true}
    })

  };
}]);
