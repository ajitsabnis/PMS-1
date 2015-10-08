'use strict';

/**
 * @ngdoc directive
 * @name mytodoApp.directive:addButton
 * @description
 * # addButton
 */
angular.module('mytodoApp')
  .directive('addbutton', function () {
    return {
		restrict: "E",
		template: "<button class='btn btn-success'>Add</button>"
    }
  });
