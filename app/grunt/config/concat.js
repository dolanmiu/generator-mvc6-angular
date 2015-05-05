/*globals module */
module.exports = function (generator) {
    'use strict';

    var concat = {};

    concat.templates = {
        src: ['<%= yeoman.temp %>/concat/scripts/scripts.js', '<%= yeoman.temp %>/templates.js'],
        dest: '<%= yeoman.temp %>/concat/scripts/scripts.js',
    };

    generator.gruntfile.insertConfig('concat', JSON.stringify(concat));
};