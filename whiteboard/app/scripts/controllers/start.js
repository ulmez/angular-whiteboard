'use strict';

angular.module('whiteboardApp')
	.controller('StartCtrl', function ($scope, $location, whiteboard) {
		var i;
		$scope.posts = whiteboard.getAll();
		$scope.errorWhiteboardNameMessage = '';
		$scope.whiteboardName = '';

		$scope.whiteboardNameClicked = function (whiteboardName) {
			$location.path('/whiteboards/' + whiteboardName);
		};

		$scope.insertNewWhiteboard = function (whiteboardName) {
			$scope.errorWhiteboardNameMessage = '';

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
	});