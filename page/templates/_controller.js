/*globals angular */
angular.module('<%= title %>').controller('<%= name %>Controller', function ($scope, Things) {
    'use strict';

    $scope.awesomeThings = Things.query();
});