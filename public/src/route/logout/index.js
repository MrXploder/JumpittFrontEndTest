(function(angular){
	'use strict';

	angular
	.module('angularApp')
	.controller('logoutController', logoutController);

	logoutController.$inject = ["$state"];

	function logoutController($state){
		let $ctrl = this;

		activate();
		/////////////////////////////////

		function activate(){
			$state.go("home");
		}
	}
})(angular);