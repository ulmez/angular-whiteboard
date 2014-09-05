'use strict';

angular.module('whiteboardApp')
	.directive('wbShowTitleUpdate', function () {
		return {
			restrict: 'E',
			/*scope: {
				data: '='
			},*/
			templateUrl: '../../partials/showTitleUpdate.html'
		};
	});