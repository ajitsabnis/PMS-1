'use strict';

/**
 * @ngdoc service
 * @name pmsApp.apiUrl
 * @description
 * # apiUrl
 * Service in the pmsApp.
 */
angular.module('pmsApp').constant('apiUrl', function () {
		var BASE_URL = 'services/index.php/',
       		 apiRoot = $('#apiRoot').attr('href') ? $('#apiRoot').attr('href') : '';

    BASE_URL = apiRoot + BASE_URL;
    return {
      'getGenericData': BASE_URL + 'instruments',
      'getSelectedCategoryData': BASE_URL + 'instruments/instrument',

      'instrument.get': BASE_URL + 'testdropdown',
      'sample.query' :  BASE_URL + 'testdropdown/sample',
      'methode.query' :  BASE_URL + 'testdropdown/methode',
      'group.query' :  BASE_URL + 'testdropdown/group',
      'flag.query' :  BASE_URL + 'testdropdown/flag',
      'Addtest': BASE_URL + 'addtest'
    };
  }());
