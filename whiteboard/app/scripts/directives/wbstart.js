'use strict';

angular.module('whiteboardApp')
	.directive('wbStart', function () {
		return {
			restrict: 'E',
			/*scope: {
				data: '='
			},*/
			templateUrl: '../../partials/start.html'
		};
	});