'use strict';

angular.module('whiteboardApp')
	.directive('wbRightMenu', function () {
		return {
			restrict: 'E',
			/*scope: {
				data: '='
			},*/
			templateUrl: '../../partials/rightMenu.html'
		};
	});