'use strict';

angular.module('whiteboardApp')
	.directive('wbShowInformationText', function () {
		return {
			restrict: 'E',
			/*scope: {
				data: '='
			},*/
			templateUrl: '../../partials/showInformationText.html'
		};
	});