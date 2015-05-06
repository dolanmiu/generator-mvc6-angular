/*globals module, require */
module.exports = function (gruntfile) {
    'use strict';

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

    gruntfile.insertConfig('jshint', JSON.stringify(jshint));
    
    gruntfile.insertConfig('jshint', "{options: {jshintrc: '.jshintrc',reporter: require('jshint-stylish')}}");
};