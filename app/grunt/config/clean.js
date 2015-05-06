/*globals module */
// Empties folders to start fresh
module.exports = function (gruntfile) {
    'use strict';

    var clean = {};

    clean.dist = {
        files: [{
            dot: true,
            src: ['<%= yeoman.temp %>', '<%= yeoman.dist %>/{,*/}*', '!<%= yeoman.dist %>/.git{,*/}*']
        }]
    };

    clean.server = '<%= yeoman.temp %>';

    gruntfile.insertConfig('clean', JSON.stringify(clean));
};