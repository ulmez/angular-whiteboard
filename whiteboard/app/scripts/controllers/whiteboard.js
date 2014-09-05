'use strict';

angular.module('whiteboardApp')
	.controller('WhiteboardCtrl', function ($scope, $location, $http, $window, $routeParams, whiteboard) {
		$scope.posts = whiteboard.getItems($routeParams.whiteboardName);
		$scope.titleShowIt = 0;
		$scope.informationShowIt = 0;
		$scope.colorShowIt = 0;
		$scope.selectedColor = 'yellow';
		$scope.whiteboardName = $routeParams.whiteboardName;
		//window.alert($scope.whiteboardName);

		/*$scope.loadJson = function () {
			return $http({
				method: 'GET',
				url: 'http://localhost:14782/ulme'
			}).then(function (response) {
				if (response.status === 200) {
					$scope.data = response.data;
				}
				return response;
			});
		};*/

		//$scope.loadJson = function () {
		/*$http.get('http://localhost:14782/ulme')
			.then(function (result) {
				if (result.status === 200) {
					$scope.tests = result.data;
				}
			});*/
		//};

		$scope.backToWhiteboards = function () {
			$location.path('/');
		};

		$scope.titleClicked = function (note) {
			$scope.colorShowIt = 0;
			$scope.informationShowIt = 0;
			$scope.specificNote = note;
			$scope.titleTextUpdate = $scope.specificNote.title;
			$scope.titleShowIt = note.id;
		};

		$scope.informationClicked = function (note) {
			$scope.colorShowIt = 0;
			$scope.titleShowIt = 0;
			$scope.specificNote = note;
			$scope.informationTextUpdate = $scope.specificNote.information;
			$scope.informationShowIt = note.id;
		};

		$scope.colorClicked = function (note) {
			var getCheckedRadioButton = '';
			$scope.titleShowIt = 0;
			$scope.informationShowIt = 0;
			$scope.colorShowIt = note.id;
			$scope.specificNote = note;

			if (note.color[0].yellow) {
				getCheckedRadioButton = 'yellow' + note.id;
				$scope.selectedChangeColor = 'yellow';
			} else if (note.color[1].green) {
				getCheckedRadioButton = 'green' + note.id;
				$scope.selectedChangeColor = 'green';
			} else if (note.color[2].blue) {
				getCheckedRadioButton = 'blue' + note.id;
				$scope.selectedChangeColor = 'blue';
			} else if (note.color[3].red) {
				getCheckedRadioButton = 'red' + note.id;
				$scope.selectedChangeColor = 'red';
			}
			document.getElementById(getCheckedRadioButton).checked = true;
		};

		$scope.updateTitle = function (textUpdate) {
			$scope.titleShowIt = 0;
			$scope.specificNote.title = textUpdate;

			whiteboard.updateItem($scope.specificNote, $routeParams.whiteboardName, $scope.posts);
		};

		$scope.updateInformation = function (textUpdate) {
			$scope.informationShowIt = 0;
			$scope.specificNote.information = textUpdate;

			whiteboard.updateItem($scope.specificNote, $routeParams.whiteboardName, $scope.posts);
		};

		$scope.updateColor = function () {
			var i,
				arrColorTemp = [{
					'yellow': false
				}, {
					'green': false
				}, {
					'blue': false
				}, {
					'red': false
				}];

			for (i = 0; i < $scope.specificNote.color.length; i = i + 1) {
				if ($scope.selectedChangeColor === 'yellow') {
					arrColorTemp[0] = {
						'yellow': true
					};
				} else if ($scope.selectedChangeColor === 'green') {
					arrColorTemp[1] = {
						'green': true
					};
				} else if ($scope.selectedChangeColor === 'blue') {
					arrColorTemp[2] = {
						'blue': true
					};
				} else if ($scope.selectedChangeColor === 'red') {
					arrColorTemp[3] = {
						'red': true
					};
				}
			}

			$scope.specificNote.color = arrColorTemp;
			whiteboard.updateItem($scope.specificNote, $routeParams.whiteboardName, $scope.posts);
			$scope.titleShowIt = 0;
			$scope.informationShowIt = 0;
			$scope.colorShowIt = 0;
		};

		$scope.deleteNote = function (id) {
			var deleteNotePrivate = $window.confirm('Are you absolutely sure you want to delete this note?');

			if (deleteNotePrivate) {
				whiteboard.deleteItem(id, $routeParams.whiteboardName, $scope.posts);
			}
		};

		$scope.getColor = function (color) {
			$scope.selectedColor = color;
		};

		$scope.getColorUpdate = function (color) {
			$scope.selectedChangeColor = color;
		};

		$scope.insertNewNote = function () {
			var tempNote,
				arrTempColors = [{
					'yellow': false
				}, {
					'green': false
				}, {
					'blue': false
				}, {
					'red': false
				}];

			if ($scope.selectedColor === 'yellow') {
				arrTempColors[0] = {
					'yellow': true
				};
			} else if ($scope.selectedColor === 'green') {
				arrTempColors[1] = {
					'green': true
				};
			} else if ($scope.selectedColor === 'blue') {
				arrTempColors[2] = {
					'blue': true
				};
			} else if ($scope.selectedColor === 'red') {
				arrTempColors[3] = {
					'red': true
				};
			}

			tempNote = {
				'title': $scope.titleText,
				'information': $scope.informationText,
				'color': arrTempColors
			};

			whiteboard.addItem(tempNote, $routeParams.whiteboardName, $scope.posts);
			$scope.titleText = '';
			$scope.informationText = '';
			$scope.selectedColor = 'yellow';
			document.getElementById('yellow').checked = true;
			$scope.signupform.$setPristine();
		};
	});