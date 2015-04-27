/*globals angular */
angular.module('<%= title %>').controller('MainController', function ($scope, Things) {
    'use strict';

    $scope.awesomeThings = Things.query();
});