'use strict';

/**
 * @ngdoc service
 * @name pmsApp.apiUrl
 * @description
 * # apiUrl
 * Service in the pmsApp.
 */
angular.module('pmsApp')
	.constant('apiUrl', function () {
		var BASE_URL = 'services/index.php/',
       		 apiRoot = $('#apiRoot').attr('href') ? $('#apiRoot').attr('href') : '';

    BASE_URL = apiRoot + BASE_URL;
    return {
      'getGenericData': BASE_URL + 'instruments',
      'STREAMS': BASE_URL + 'streams/:action/:district',
      'COURSES': BASE_URL + 'courses/streams/:stream/:district',
      'USERS': BASE_URL + 'users/:action',
      'COLLEGE_SEARCH': BASE_URL + 'colleges/search/:id',
      'CUTOFF_DETAILS': BASE_URL + 'cutoff',
      'COLLEGE_CUTOFF': BASE_URL + 'colleges/cutoff/:id',

      'instrument': BASE_URL + 'testdropdown',
      'sample' :  BASE_URL + 'testdropdown/sample',
      'methode' :  BASE_URL + 'testdropdown/methode',
      'group' :  BASE_URL + 'testdropdown/group',
      'flag' :  BASE_URL + 'testdropdown/flag',
      'Addtest': BASE_URL + 'addtest'
    };
  }());
