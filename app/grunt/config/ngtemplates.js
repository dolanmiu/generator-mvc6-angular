/*globals module */
module.exports = function (gruntfile) {
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

    gruntfile.insertConfig('ngtemplates', JSON.stringify(ngtemplates));
};