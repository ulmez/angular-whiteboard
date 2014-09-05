'use strict';

describe('Directive: wbShowColorUpdate', function () {

  // load the directive's module
  beforeEach(module('whiteboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wb-show-color-update></wb-show-color-update>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});