(function() {
	'use strict';

	angular
		.module('angularApp')
		.factory('Demo', DemoFactory);

	DemoFactory.$inject = ["$resource"];

	function DemoFactory($resource) {
		const Resource = $resource("http://www.mocky.io/v2/5ba409112f00005b00968a9d", {});

		Resource.find = function(_q) {
			return Resource.get(_q).$promise;
		}

		return Resource;
	}
})();