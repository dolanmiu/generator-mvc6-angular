/*jslint node: true */
'use strict';

var formatter = require('../formatter');

module.exports = function (gruntfile) {

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