'use strict';

angular.module('whiteboardApp')
	.directive('wbShowColorUpdate', function () {
		return {
			restrict: 'E',
			/*scope: {
				data: '='
			},*/
			templateUrl: '../../partials/showColorUpdate.html'
		};
	});