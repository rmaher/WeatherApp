// Controllers
weatherApp.controller('mainController', ['$scope', '$location' 'cityService', function ($scope, $location, cityService) {
  $scope.city = cityService.city

  $scope.$watch('city', function () {
    cityService.city = $scope.city
  })

  $scope.submit = function () {

  }
}])

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', '$routeParams', function ($scope, $resource, cityService, $routeParams) {
  $scope.city = cityService.city

  $scope.days = $routeParams.days || 2

  $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=1a607877e6298cdba72fdf1df80e06e8', {
    callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' }
  })

  $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days })

  $scope.convertToFahrenheit = function (degK) {
    return Math.round((1.8 * (degK - 273)) + 32)
  }

  $scope.convertToDate = function (dt) {
    return new Date(dt * 1000)
  }

  console.log($scope.weatherResult)
}])
