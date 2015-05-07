/*globals module */
// Renames files for browser caching purposes
var formatter = require('../formatter');
module.exports = function (gruntfile) {
    'use strict';

    var filerev = {};

    filerev.dist = {
        src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/styles/fonts/*'
        ]
    };

    gruntfile.insertConfig('filerev', formatter(filerev));
};