'use strict';

describe('Service: whiteboard', function () {

  // load the service's module
  beforeEach(module('whiteboardApp'));

  // instantiate service
  var whiteboard;
  beforeEach(inject(function (_whiteboard_) {
    whiteboard = _whiteboard_;
  }));

  it('should do something', function () {
    expect(!!whiteboard).toBe(true);
  });

});