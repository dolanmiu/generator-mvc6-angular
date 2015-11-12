/*jslint node: true */
'use strict';

// Add vendor prefixed styles
var formatter = require('../formatter');

module.exports = function (gruntfile) {
    var autoprefixer = {};

    autoprefixer.options = {
        browsers: ['last 1 version']
    };

    autoprefixer.server = {
        options: {
            map: true
        },
        files: [{
            expand: true,
            cwd: '<%= yeoman.temp %>/styles/',
            src: '{,*/}*.css',
            dest: '<%= yeoman.temp %>/styles/'
        }]
    };

    autoprefixer.dist = {
        files: [{
            expand: true,
            cwd: '<%= yeoman.temp %>/styles/',
            src: '{,*/}*.css',
            dest: '<%= yeoman.temp %>/styles/'
        }]
    };

    gruntfile.insertConfig('autoprefixer', formatter(autoprefixer));
};