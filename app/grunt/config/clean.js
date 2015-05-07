/*globals module, require */
// Empties folders to start fresh
var formatter = require('../formatter');
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

    gruntfile.insertConfig('clean', formatter(clean));
};