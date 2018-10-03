/**
 * The AngularJS Controller definition follows the official AngularJS styleguide
 * https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
 *
 */
(function(angular) {
  'use strict';

  angular
    .module('angularApp')
    .controller('homeController', homeController);

  homeController.$inject = ["Demo"];

  function homeController(Demo) {
    let $ctrl = this;

    $ctrl.Demo = {};
    $ctrl.usersDataGraph = {};
    $ctrl.usersByDeviceGraph = {};

    activate();
    /////////////////////////////////////////////////////////

    function activate() {
      $ctrl.usersDataGraph.labels = Array.apply(null, {
        length: 30
      }).map(Number.call, String);

      $ctrl.usersDataGraph.options = {
        legend: {
          display: true
        }
      }

      $ctrl.usersByDeviceGraph.options = {
        legend: {
          display: true,
          position: "bottom",
        },
        maintainAspectRatio: false,
      }

      Demo
        .find({})
        .then(resource => {
          $ctrl.Demo = resource.data;
          $ctrl.usersDataGraph.data = [$ctrl.Demo.users_data_graph.current_month_data, $ctrl.Demo.users_data_graph.past_month_data];

          $ctrl.usersByDeviceGraph.data = Object.values($ctrl.Demo.users_by_device_graph);
          $ctrl.usersByDeviceGraph.labels = Object.keys($ctrl.Demo.users_by_device_graph);
        });
    }
  }
})(window.angular);