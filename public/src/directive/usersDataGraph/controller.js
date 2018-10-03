(function() {
	'use strict';

	angular
		.module('angularApp')
		.controller('usersDataGraphController', usersDataGraphController);

	usersDataGraphController.$inject = ["$scope"];

	function usersDataGraphController($scope) {
		let $vd = this;

		$vd.chart = {
			data: [$vd.vSource.current_month_data, $vd.vSource.past_month_data],
			options: {
				maintainAspectRatio: false,
				hover: {
					animationDuration: 0
				},
				legend: {
					display: false
				},
				animation: false,
				tooltips: {
					enabled: false,
				},
				scales: {
					yAxes: [{
						display: true,
						ticks: {
							min: 0,
							max: 450,
							steps: 20,
						}
					}]
				},
			}
		}

		activate();
		/////////////////////////////////

		function activate() {
			$vd.chart.labels = Array.apply(null, {length: 31}).map(Number.call, String);
			console.log($vd);
		}
	}
})();