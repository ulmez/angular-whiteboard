'use strict';

angular.module('whiteboardApp')
	.controller('StartCtrl', function ($scope, $location, whiteboard) {
		var i;
		$scope.posts = whiteboard.getAll();
		$scope.errorWhiteboardNameMessage = '';
		$scope.errorWhiteboardNameUpdateMessage = '';
		$scope.whiteboardName = '';
		$scope.checker = 0;
		$scope.showUpdateWhiteboard = 0;
		$scope.showErrorMessage = true;

		$scope.mouseOverOperation = function (val) {
			$scope.checker = val;
		};

		$scope.whiteboardNameClicked = function (whiteboardName) {
			$location.path('/whiteboards/' + whiteboardName);
		};

		$scope.updateClicked = function (val, whiteboardName) {
			$scope.showUpdateWhiteboard = val;
			$scope.wUpdate = whiteboardName;
			$scope.showErrorMessage = false;
		};

		$scope.insertNewWhiteboard = function (whiteboardName) {
			$scope.errorWhiteboardNameMessage = '';
			$scope.showUpdateWhiteboard = 0;

			for (i = 0; i < $scope.posts.length; i = i + 1) {
				if ($scope.posts[i].whiteboard.toLowerCase() === whiteboardName.toLowerCase()) {
					$scope.errorWhiteboardNameMessage = 'Blackboard already used';
				}
			}

			if (whiteboardName === '') {
				$scope.errorWhiteboardNameMessage = 'No name inserted yet';
			}

			if ($scope.errorWhiteboardNameMessage === '') {
				$scope.whiteboardName = '';
				whiteboard.addWhiteboard(whiteboardName, $scope.posts);
			}
		};

		$scope.whiteboardDelete = function (obj) {
			$scope.showUpdateWhiteboard = 0;
			var conf = window.confirm('Are you absolutely sure you would like to delete this blackboard?');

			if (conf) {
				whiteboard.deleteWhiteboard(obj, $scope.posts);
			}
		};

		$scope.whiteboardUpdate = function (name, obj) {
			$scope.showErrorMessage = true;
			$scope.errorWhiteboardNameUpdateMessage = '';
			$scope.idOfPressedButton = obj.id;

			for (i = 0; i < $scope.posts.length; i = i + 1) {
				if (name.toLowerCase() === $scope.posts[i].whiteboard.toLowerCase() &&
					obj.id !== $scope.posts[i].id) {
					$scope.errorWhiteboardNameUpdateMessage = 'Blackboard name taken';
				}
			}

			if ($scope.errorWhiteboardNameUpdateMessage === '') {
				$scope.showUpdateWhiteboard = 0;
				$scope.showErrorMessage = false;
				whiteboard.updateWhiteboard(name, obj, $scope.posts);
			}
		};
	});