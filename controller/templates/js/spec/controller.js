'use strict';
var module = angular.mock.module;
describe('Controller: <%= scriptClassName %>Ctrl', function () {
// load the controller's module
  beforeEach(module('<%= scriptAppName %>'));
  var <%= scriptClassName %>Ctrl,
      scope;
// Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    <%= scriptClassName %>Ctrl = $controller('<%= scriptClassName %>Ctrl', {
      $scope: scope
    });
  }));
  it('should test things in the scope', function () {
    expect(typeof scope).toBe('object');
  });
});
