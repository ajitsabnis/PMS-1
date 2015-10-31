'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:CcChargesCtrl
 * @description
 * # CcChargesCtrl
 * Controller of the pmsApp
 */
angular.module('pmsApp')
  .controller('CcChargesCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $(document).ready(function(){
    $('#myTable').dataTable();
});
   jQuery(document).ready(function(){
    jQuery('#hideshow').live('click', function(event) {        
         jQuery('#content').toggle('show');
    });
  });
