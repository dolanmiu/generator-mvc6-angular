/*globals module */
module.exports = function (generator) {
    'use strict';

    var tasks = [
        //'newer:jshint',
        //'test',
        'build'
    ];

    generator.gruntfile.registerTask('default', tasks);
};