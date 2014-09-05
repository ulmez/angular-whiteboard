'use strict';

angular.module('whiteboardApp')
	.directive('wbShowTitleText', function () {
		return {
			restrict: 'E',
			/*scope: {
				data: '='
			},*/
			templateUrl: '../../partials/showTitleText.html'
		};
	});