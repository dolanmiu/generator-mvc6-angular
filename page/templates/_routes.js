/*globals angular */
angular.module('<%= title %>').config(function ($stateProvider) {
    'use strict';

    $stateProvider.state('<%= lowercaseName %>', {
        url: '/<%= lowercaseName %>',
        templateUrl: 'App/<%= name %>/<%= lowercaseName %>.html',
        controller: '<%= name %>Controller'
    });

});