/*globals module */
// Run some tasks in parallel to speed up the build process
module.exports = function (generator) {
    'use strict';

    var concurrent = {};

    concurrent.server = ['compass:server'];

    concurrent.test = ['compass'];

    concurrent.dist = [
        'compass:dist',
        'imagemin',
        'svgmin'
    ];

    generator.gruntfile.insertConfig('concurrent', JSON.stringify(concurrent));
};