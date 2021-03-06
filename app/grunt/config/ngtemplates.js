/*jslint node: true */
var formatter = require('../formatter');
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

    gruntfile.insertConfig('ngtemplates', formatter(ngtemplates));
};