'use strict';

describe('Controller: BintestCtrl', function () {

  // load the controller's module
  beforeEach(module('1App'));

  var BintestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BintestCtrl = $controller('BintestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
