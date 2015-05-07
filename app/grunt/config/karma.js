/*globals module */
// Test settings
var formatter = require('../formatter');
module.exports = function (gruntfile) {
    'use strict';

    var karma = {};

    karma.unit = {
        configFile: 'test/karma.conf.js',
        singleRun: true
    };

    gruntfile.insertConfig('karma', formatter(karma));
};