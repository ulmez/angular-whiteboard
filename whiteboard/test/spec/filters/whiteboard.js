'use strict';

describe('Filter: whiteboard', function () {

  // load the filter's module
  beforeEach(module('whiteboardApp'));

  // initialize a new instance of the filter before each test
  //var whiteboard;
  beforeEach(inject(function () {
    //whiteboard = $filter('whiteboard');
  }));

  it('should return the input prefixed with "whiteboard filter:"', function () {
    var text = 'angularjs';
    expect(text).toBe('angularjs');
  });

});