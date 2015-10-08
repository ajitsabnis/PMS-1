'use strict';

/**
 * @ngdoc directive
 * @name mytodoApp.directive:validationText
 * @description
 * # validationText
 */
angular.module('mytodoApp')
  .directive('validationText', function () {
    return {
      template: '<div></div>',
      restrict: 'C',
       require: 'ngModel',
		link: function (scope, element, attr, ngModelCtrl) {
			function fromUser(text) {
				var transformedInput = text.replace(/[^0-9\^a-z\(\)\-\/,' ']/g, '');
				if(transformedInput !== text) {
					ngModelCtrl.$setViewValue(transformedInput);
					ngModelCtrl.$render();
					}
				return transformedInput;  
			}
			ngModelCtrl.$parsers.push(fromUser);
		}
    };
  });
