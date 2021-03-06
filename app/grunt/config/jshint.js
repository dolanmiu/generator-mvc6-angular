/*jslint node: true */
'use strict';

var formatter = require('../formatter');

module.exports = function (gruntfile) {

    var jshint = {};

    jshint.all = {
        src: [
            'Gruntfile.js',
            '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
    };

    jshint.test = {
        options: {
            jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
    };

    gruntfile.insertConfig('jshint', formatter(jshint));

    gruntfile.insertConfig('jshint', "{options: {jshintrc: '.jshintrc',reporter: require('jshint-stylish')}}");
};