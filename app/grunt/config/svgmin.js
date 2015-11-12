/*jslint node: true */
var formatter = require('../formatter');
module.exports = function (gruntfile) {
    'use strict';

    var svgmin = {};

    svgmin.dist = {
        files: [{
            expand: true,
            cwd: '<%= yeoman.app %>/images',
            src: '{,*/}*.svg',
            dest: '<%= yeoman.dist %>/images'
        }]
    };

    gruntfile.insertConfig('svgmin', formatter(svgmin));
};