/*globals module */
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

    gruntfile.insertConfig('svgmin', JSON.stringify(svgmin));
};