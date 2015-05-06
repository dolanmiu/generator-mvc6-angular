/*globals module, appConfig */
// The actual grunt server settings
module.exports = function (gruntfile) {
    'use strict';

    var connect = {};

    connect.options = {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
    };

    connect.livereload = {
        options: {
            open: true,
            middleware: function (connect) {
                return [
                    connect.static('.tmp'),
                    connect().use(
                        '/bower_components',
                        connect.static('./bower_components')
                    ),
                    connect().use(
                        '/app/styles',
                        connect.static('./app/styles')
                    ),
                    connect.static(appConfig.app)
                ];
            }
        }
    };

    connect.test = {
        options: {
            port: 9001,
            middleware: function (connect) {
                return [
                    connect.static('.tmp'),
                    connect.static('test'),
                    connect().use(
                        '/bower_components',
                        connect.static('./bower_components')
                    ),
                    connect.static(appConfig.app)
                ];
            }
        }
    };

    connect.dist = {
        options: {
            open: true,
            base: '<%= yeoman.dist %>'
        }
    };

    gruntfile.insertConfig('connect', JSON.stringify(connect));
};