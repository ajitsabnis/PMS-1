'use strict';

describe('Service: genericCategory', function () {

  // load the service's module
  beforeEach(module('pmsApp'));

  // instantiate service
  var genericCategory;
  beforeEach(inject(function (_genericCategory_) {
    genericCategory = _genericCategory_;
  }));

  it('should do something', function () {
    expect(!!genericCategory).toBe(true);
  });

});
