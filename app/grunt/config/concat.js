/*globals module */
module.exports = function (gruntfile) {
    'use strict';

    var concat = {};

    concat.templates = {
        src: ['<%= yeoman.temp %>/concat/scripts/scripts.js', '<%= yeoman.temp %>/templates.js'],
        dest: '<%= yeoman.temp %>/concat/scripts/scripts.js',
    };

    gruntfile.insertConfig('concat', JSON.stringify(concat));
};