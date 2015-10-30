'use strict';

/**
 * @ngdoc directive
 * @name pmsApp.directive:footerDir
 * @description
 * # footerDir
 */
angular.module('pmsappApp')
  .directive('pmsFooterDir', function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'E',
      replace: true,
      link: function postLink() {
        //element.text('this is the footerDir directive');
      }
    };
  });
