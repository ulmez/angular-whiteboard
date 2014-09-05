'use strict';

angular.module('whiteboardApp')
	.directive('wbUpdateColorAndDeleteNoteMarkers', function () {
		return {
			restrict: 'E',
			/*scope: {
				data: '='
			},*/
			templateUrl: '../../partials/updateColorAndDeleteNoteMarkers.html'
		};
	});