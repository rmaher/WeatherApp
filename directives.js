// Directive
weatherApp.directive('weatherPanel', function () {
  return {
    restrict: 'E',
    templateUrl: 'directives/weatherPanel.html',
    replace: true,
    scope: {
      weatherDay: '=',
      convertToStandard: '&',
      convertToDate: '&',
      dateFormat: '@'
    }
  }
})
