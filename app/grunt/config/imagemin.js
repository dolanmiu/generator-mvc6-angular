/*globals module */
module.exports = function (generator) {
    'use strict';

    var imagemin = {};

    imagemin.dist = {
        files: [{
            expand: true,
            cwd: '<%= yeoman.app %>/Assets/**/*',
            src: '{,*/}*.{png,jpg,jpeg,gif}',
            dest: '<%= yeoman.dist %>/images'
        }]
    };

    generator.gruntfile.insertConfig('imagemin', JSON.stringify(imagemin));
};