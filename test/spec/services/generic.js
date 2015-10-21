'use strict';

describe('Service: generic', function () {

  // load the service's module
  beforeEach(module('pmsappApp'));

  // instantiate service
  var generic;
  beforeEach(inject(function (_generic_) {
    generic = _generic_;
  }));

  it('should do something', function () {
    expect(!!generic).toBe(true);
  });

});
