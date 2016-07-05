describe('컨트롤러 테스트', function() {
  var ctrl, scope;

  beforeEach(function() {
    module('todoApp');

    inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('TodoListController', {
        $scope : scope
      })
    })
  })

  it('controller 정의 확인', function() {
    expect(true).toEqual(true);
  });
});
