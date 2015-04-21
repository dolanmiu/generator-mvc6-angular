/*globals angular */
angular.module('<%= title %>', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngResource',
    'ui.router',
    'ui.bootstrap'
]);

angular.module('<%= title %>').config(function ($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'App/Main/main.html',
        controller: 'MainController'
    });

    $urlRouterProvider.otherwise('/');
});