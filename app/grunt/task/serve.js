/*globals module */
module.exports = function (gruntfile) {
    'use strict';

    var serve = [
        'clean:server',
        'wiredep',
        'concurrent:server',
        'autoprefixer:server',
        'connect:livereload',
        'watch'
    ];

    gruntfile.registerTask('serve', serve);
};