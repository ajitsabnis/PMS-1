'use strict';

describe('Service: Addtest', function () {

  // load the service's module
  beforeEach(module('pmsApp'));

  // instantiate service
  var Addtest;
  beforeEach(inject(function (_Addtest_) {
    Addtest = _Addtest_;
  }));

  it('should do something', function () {
    expect(!!Addtest).toBe(true);
  });

});
