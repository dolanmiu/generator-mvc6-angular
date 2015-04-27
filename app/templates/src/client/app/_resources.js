/*globals angular */
angular.module('<%= title %>').factory('Things', function ($resource) {
    'use strict';
    return $resource('/api/things/:id', {}, {
        query: {
            method: 'GET',
            params: {
                id: ''
            },
            isArray: true
        },
        post: {
            method: 'POST'
        },
        update: {
            method: 'PUT',
            params: {
                id: '@id'
            }
        },
        remove: {
            method: 'DELETE'
        }
    });
});