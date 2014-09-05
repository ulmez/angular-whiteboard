'use strict';

describe('Directive: wbStart', function () {

  // load the directive's module
  beforeEach(module('whiteboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wb-start></wb-start>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the wbStart directive');
  }));
});
