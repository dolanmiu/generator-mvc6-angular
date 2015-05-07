/*globals module */
// Run some tasks in parallel to speed up the build process
var formatter = require('../formatter');
module.exports = function (gruntfile) {
    'use strict';

    var concurrent = {};

    concurrent.server = ['compass:server'];

    concurrent.test = ['compass'];

    concurrent.dist = [
        'compass:dist',
        'imagemin',
        'svgmin'
    ];

    gruntfile.insertConfig('concurrent', formatter(concurrent));
};