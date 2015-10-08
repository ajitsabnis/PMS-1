'use strict';

describe('Controller: DirectivectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var DirectivectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DirectivectrlCtrl = $controller('DirectivectrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DirectivectrlCtrl.awesomeThings.length).toBe(3);
  });
});
