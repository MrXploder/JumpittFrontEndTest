(function() {
	'use strict';

	angular
		.module('angularApp')
		.config(uiRouterProvider);

	uiRouterProvider.$inject = ["$stateProvider", "$urlRouterProvider"];


	function uiRouterProvider($stateProvider, $urlRouterProvider) {
		let requireBeforeChange = {
			requireLogin: true,
		};

		/*redirect to login if user loads a no-routed page e.x: host without '#'  */
		$urlRouterProvider.when('', '/login');

		/*if state does not exists, redirect to login*/
		$urlRouterProvider.otherwise('/login');

		$stateProvider
			.state("login", {
				url: "/login",
				templateUrl: "src/route/login/template.html",
				controller: "loginController",
				controllerAs: "$ctrl",
				data: {
					requireLogin: false
				},
			})
			.state("logout", {
				url: "/logout",
				controller: "logoutController",
				controllerAs: "$ctrl",
				data: {
					requireLogin: false
				},
			})
			.state('home', {
				url: '/home',
				templateUrl: "src/route/home/template.html",
				controller: "homeController",
				controllerAs: "$ctrl",
				data: {
					requireLogin: true
				},
			});
	}
})();