'use strict';

angular.module('whiteboardApp')
	.directive('wbShowInformationUpdate', function () {
		return {
			restrict: 'E',
			/*scope: {
				data: '='
			},*/
			templateUrl: '../../partials/showInformationUpdate.html'
		};
	});