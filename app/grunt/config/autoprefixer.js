/*globals module */
// Add vendor prefixed styles
module.exports = function (generator) {
    'use strict';

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

    generator.gruntfile.insertConfig('autoprefixer', JSON.stringify(autoprefixer));
};