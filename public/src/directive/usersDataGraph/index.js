(function() {
	'use strict';

	angular
		.module('angularApp')
		.directive('usersDataGraph', usersDataGraphDirective);

	// usersDataGraphDirective.$inject = [""];

	function usersDataGraphDirective() {
		return {
			scope: {},
			bindToController: {
				vSource: "=",
			},
			controller: "usersDataGraphController",
			controllerAs: "$vd",
			template: `
				<canvas
					id="line"
					class="chart chart-line"
					chart-data="$vd.chart.data"
					chart-labels="$vd.chart.labels"
					chart-series="['Current Month', 'Past Month']"
					chart-options="$vd.chart.options">
				</canvas>`,
		}
	}
})();