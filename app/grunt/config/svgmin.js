/*globals module */
module.exports = function (generator) {
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

    generator.gruntfile.insertConfig('svgmin', JSON.stringify(svgmin));
};