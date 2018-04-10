var templateApp = angular.module('templateApp', [
  'ui.bootstrap',
  'ngAnimate',
  'ngSanitize',
  'ui.router'
]);

templateApp.controller('TemplateCtrl', ['$scope', function($scope) {
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;

}]);
