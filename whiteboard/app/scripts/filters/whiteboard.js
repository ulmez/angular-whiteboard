'use strict';

angular.module('whiteboardApp')
	.filter('convertToHTML', function () {
		return function (input) {
			var tempInput = input;
			tempInput = tempInput.replace(/(?:\r\n|\r|\n)/g, '<br/>') + '<br/><br/>';

			return tempInput;
		};
	});