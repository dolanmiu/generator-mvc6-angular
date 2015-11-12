/*jslint node: true */
module.exports = function (gruntfile) {
    'use strict';

    var test = [
        'clean:server',
        'wiredep',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma'
    ];

    gruntfile.registerTask('test', test);
};