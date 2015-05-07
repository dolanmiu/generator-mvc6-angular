/*globals module */
var formatter = require('../formatter');
module.exports = function (gruntfile) {
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

    gruntfile.insertConfig('imagemin', formatter(imagemin));
};