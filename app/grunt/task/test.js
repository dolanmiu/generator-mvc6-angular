/*globals module */
module.exports = function (generator) {
    'use strict';

    var test = [
        'clean:server',
        'wiredep',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma'
    ];

    generator.gruntfile.registerTask('test', test);
};