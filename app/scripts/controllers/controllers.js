angular.module('1App').controller('ControllersCtrl', ['$scope', function($scope){
  $scope.message = 'message';

  $scope.updateMessage = function(msg){
    $scope.message = msg;
  };
}]);
