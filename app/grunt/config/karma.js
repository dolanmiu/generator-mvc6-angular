/*globals module */
// Test settings
module.exports = function (gruntfile) {
    'use strict';

    var karma = {};

    karma.unit = {
        configFile: 'test/karma.conf.js',
        singleRun: true
    };

    gruntfile.insertConfig('karma', JSON.stringify(karma));
};