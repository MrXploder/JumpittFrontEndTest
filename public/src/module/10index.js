(function(angular, undefined) {
'use strict';

angular.module('angularApp', ['ui.router', 'ui.bootstrap', 'ngResource', 'ngSanitize', 'ngMessages', 'chart.js'])

.constant('ENV', {shortSHA:'bf089e0',SHA:'bf089e08597670201160f0f445b3bca74cde3a7f',name:'master',currentUser:'MrXploder',lastCommitMessage:'"Initial commit\r\n"',lastCommitTime:'"2018-09-28 00:16:10 -0300"',lastCommitNumber:'1',lastCommitAuthor:'"MrXploder"'})

;
})(angular);