(function(){
	'use strict';

	angular
	.module('angularApp')
	.filter('timeAgo', timeAgoFilter);

	// timeAgoFilter.$inject = [""];

	function timeAgoFilter(){
		return function(value){
			return moment().utc(value).fromNow();
		}
	}
})();