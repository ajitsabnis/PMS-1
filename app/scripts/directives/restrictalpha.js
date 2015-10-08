'use strict';

/**
 * @ngdoc directive
 * @name mytodoApp.directive:restrictAlpha
 * @description
 * # restrictAlpha
 */
angular.module('mytodoApp')
  .directive('restrictAlpha', function () {
    return {
    restrict: 'C',
    require: 'ngModel',
    link: function (scope, element, attr, ngModelCtrl) {
      function fromUser(text) {
        var transformedInput = text.replace(/[^0-9\.,' ']/g, '');
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
 