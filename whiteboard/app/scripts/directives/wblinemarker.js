'use strict';

angular.module('whiteboardApp')
	.directive('wbLineMarker', function () {
		return {
			restrict: 'E',
			/*scope: {
				data: '='
			},*/
			templateUrl: '../../partials/lineMarker.html'
		};
	});