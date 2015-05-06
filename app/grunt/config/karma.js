/*globals module */
// Test settings
module.exports = function (generator) {
    'use strict';

    var karma = {};

    karma.unit = {
        configFile: 'test/karma.conf.js',
        singleRun: true
    };

    generator.gruntfile.insertConfig('karma', JSON.stringify(karma));
};