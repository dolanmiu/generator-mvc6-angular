/*globals module, require */
module.exports = function (generator) {
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

    generator.gruntfile.insertConfig('jshint', JSON.stringify(jshint));
    
    generator.gruntfile.insertConfig('jshint', "{options: {jshintrc: '.jshintrc',reporter: require('jshint-stylish')}}");
};