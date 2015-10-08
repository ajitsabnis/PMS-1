'use strict';

/**
 * @ngdoc directive
 * @name mytodoApp.directive:sampledir
 * @description
 * # sampledir
 */
 
  var myApp = angular.module('mytodoApp');
  myApp.directive('rightAlign', function() {
  return {
    restrict: 'C',
    replace: true,
    link: function(scope, ele) {
      var element = angular.element(ele);
      element.on('blur', function() {
        var input = Number(element.val());
		input = Math.round(input);
        input = input.toFixed(2); // if input is 12.40 then op is 12 and if input is 12.60 then op is 13
        element.val(input);
      });

    }
  };
});