/*jslint node: true */
module.exports = function (gruntfile) {
    'use strict';

    var tasks = [
        //'newer:jshint',
        //'test',
        'build'
    ];

    gruntfile.registerTask('default', tasks);
};