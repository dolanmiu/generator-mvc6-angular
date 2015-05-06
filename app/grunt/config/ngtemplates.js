/*globals module */
module.exports = function (generator) {
    'use strict';

    var ngtemplates = {};

    ngtemplates.app = {
        options: {
            module: '<%= yeoman.title %>'
        },
        cwd: '<%= yeoman.app %>',
        src: ['**/*.html', '!index.html'],
        dest: '<%= yeoman.temp %>/templates.js'
    };

    generator.gruntfile.insertConfig('ngtemplates', JSON.stringify(ngtemplates));
};