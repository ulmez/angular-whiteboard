'use strict';

angular
  .module('whiteboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/whiteboards/:whiteboardName', {
        templateUrl: 'views/whiteboard.html',
        controller: 'WhiteboardCtrl'
      })
      .when('/', {
        templateUrl: 'views/start.html',
        controller: 'StartCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });