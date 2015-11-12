/*jslint node: true */
// ng-annotate tries to make the code safe for minification automatically
// by using the Angular long form for dependency injection.
var formatter = require('../formatter');
module.exports = function (gruntfile) {
    'use strict';

    var ngAnnotate = {};

    ngAnnotate.dist = {
        files: [{
            expand: true,
            cwd: '<%= yeoman.temp %>/concat/scripts',
            src: '*.js',
            dest: '<%= yeoman.temp %>/concat/scripts'
        }]
    };

    gruntfile.insertConfig('ngAnnotate', formatter(ngAnnotate));
};