/*globals module */
// Watches files for changes and runs tasks based on the changed files
var formatter = require('../formatter');
module.exports = function (gruntfile) {
    'use strict';

    var watch = {};

    watch.bower = {
        files: ['bower.json'],
        tasks: ['wiredep']
    };

    watch.js = {
        files: ['<%= yeoman.app %>/Scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
            livereload: '<%= connect.options.livereload %>'
        }
    };

    watch.jsTest = {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
    };

    watch.compass = {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
    };

    watch.gruntfile = {
        files: ['Gruntfile.js']
    };

    watch.livereload = {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '<%= yeoman.app %>/{,*/}*.html',
            '.tmp/styles/{,*/}*.css',
            '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
    };

    gruntfile.insertConfig('watch', formatter(watch));
};