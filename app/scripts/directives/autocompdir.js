'use strict';

/**
 * @ngdoc directive
 * @name pmsApp.directive:autoComplete
 * @description
 * # autoComplete
 */
angular.module('pmsApp').directive('autoComplete', function($timeout) {
    return function(scope, element, iAttrs) {
            element.autocomplete({
                source: scope[iAttrs.uiItems],
                select: function() {
                    $timeout(function() {
                      iElement.trigger('input');
                    }, 0);
                }
            });
    };
});