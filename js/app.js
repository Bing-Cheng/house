angular.module('houseApp', ['ngRoute','uiGmapgoogle-maps'])
  .controller('MainController', function($rootScope, $scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $location.path('/home');
    $scope.$routeParams = $routeParams;
    $scope.map = { center: { latitude: 33.391779, longitude: -111.913588 }, zoom: 12 };
    $scope.marker1 = { coords: { latitude: 33.391779, longitude: -111.913588 } };
    $scope.marker2 = { coords: { latitude: 33.395070, longitude: -111.913580 } };
    $scope.marker3 = { coords: { latitude: 33.391770, longitude: -111.915508 } };

  })
  .factory('authorizedcontrols', function($resource, tecBaseUrl) {
    var result = $resource(tecBaseUrl + 'user/authorizedcontrols');
    return result;
  })
  .constant("tecBaseUrl", "../rest/");