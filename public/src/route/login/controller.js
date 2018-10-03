(function(angular) {
	'use strict';

	angular
		.module('angularApp')
		.controller('loginController', loginController);

	loginController.$inject = ["$state"];

	function loginController($state) {
		let $ctrl = this;

		$ctrl.loginForm = {};
		$ctrl.loginCommit = loginCommit;

		activate();
		///////////////////////////////

		function activate() {

		}

		function loginCommit() {
			$state.go("home");
		}
	}
})(window.angular);