'use strict';

describe('Controller: WhiteboardCtrl', function () {
  //******************************************************
  /*beforeEach(module('whiteboardApp'));

  describe('WhiteboardCtrl', function () {

    var scope, httpBackend;
    beforeEach(inject(function ($rootScope, $controller, $httpBackend, $http) {
      scope = $rootScope.$new();
      httpBackend = $httpBackend;
      httpBackend.when('GET', 'http://localhost:14782/ulme').respond([{
        "title": "fvdv",
        "information": "fdsdf",
        "color": [{
          "yellow": true
        }, {
          "green": false
        }, {
          "blue": false
        }, {
          "red": false
        }],
        "id": 1
      }, {
        "title": "cbf",
        "information": "ghgh",
        "color": [{
          "yellow": false
        }, {
          "green": true
        }, {
          "blue": false
        }, {
          "red": false
        }],
        "id": 2
      }]);
      $controller('WhiteboardCtrl', {
        $scope: scope,
        $http: $http
      });
    }));

    it('should have 1 note', function () {
      httpBackend.flush();
      expect(scope.tests[1].title).toBe('cbf');
    });
  });*/
  //******************************************************

  // load the controller's module
  /*beforeEach(module('whiteboardApp'));

  var WhiteboardCtrl,
    scope, httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend,  $http) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    httpBackend.when("GET", "http://localhost:14782/ulme").respond([{
      "title": "title4",
      "information": "dfdffd",
      "color": [{
        "yellow": true
      }, {
        "green": false
      }, {
        "blue": false
      }, {
        "red": false
      }],
      "id": 4
    }, {
      "title": "ffdgfg",
      "information": "gfdgfdg",
      "color": [{
        "yellow": false
      }, {
        "green": false
      }, {
        "blue": true
      }, {
        "red": false
      }],
      "id": 5
    }]);
    WhiteboardCtrl = $controller('WhiteboardCtrl', {
      $scope: scope,

      $http: $http
    });

  }));

  it('should be 18 fields', function () {
    httpBackend.expectGET("http://localhost:14782/ulme").respond(200, {
      response: 'hej'
    });
    scope.loadJson().then(function (response) {
      //expect(response.data).toBe();
      console.log(scope.selectedColor);
      console.log(response.data);
    });
    //stop();
    httpBackend.flush();
  });*/
});